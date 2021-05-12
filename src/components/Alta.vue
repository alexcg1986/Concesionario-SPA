<template>
    <div
        class="alta p-col-7 p-md-9 p-lg-10 animate__animated animate__faster animate__fadeInRight"
    >
        <div class="p-grid p-flex-column p-jc-between p-ai-start">
            <h1 class="title">Alta</h1>
            <div class="dropdown p-grid p-jc-between p-ai-center">
                <label>Marca:</label>
                <Dropdown
                    v-model="selectedBrand"
                    :options="brands"
                    optionLabel="nombre"
                    optionValue="id"
                    placeholder="Seleccione una marca"
                />
            </div>
            <div class="dropdown p-grid p-jc-between p-ai-center">
                <label>Modelo:</label>
                <Dropdown
                    v-model="selectedModel"
                    :options="models"
                    optionLabel="nombre"
                    optionValue="id"
                    placeholder="Seleccione un modelo"
                    :disabled="isDisabled"
                />
            </div>
            <div class="input p-grid p-jc-between p-ai-center">
                <label>Matrícula:</label>
                <input-text
                    type="text"
                    v-model="plate"
                    placeholder="NNNN-LLL"
                    maxlength="8"
                />
            </div>
        </div>
        <Button
            label="Guardar"
            class="p-button-raised button"
            @click="saveCar"
        />
    </div>
    <Toast position="top-center" />
</template>

<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import axios from "axios";
import { useToast } from "primevue/usetoast";

export default defineComponent({
    setup() {
        const url = "http://localhost:8080/api/";
        const isDisabled = ref(true);
        const selectedBrand = ref();
        const selectedModel = ref();
        const plate = ref();
        const brands = ref([]);
        const models = ref([]);
        const parameters = {
            marcaId: Number
        };
        const car = {
            marca: {
                id: Number
            },
            modelo: {
                id: Number
            },
            matricula: String,
            usuario: {
                id: Number
            }
        };
        const toast = useToast();
        const getBrands = async () => {
            await axios
                .get(url + "marca")
                .then(async (res) => await (brands.value = res.data))
                .catch((error) => {
                    console.log(error);
                });
        };
        const getModels = async () => {
            parameters.marcaId = selectedBrand.value;
            await axios
                .post(url + "modelo/filtrado", parameters)
                .then(async (res) => {
                    await (models.value = res.data);
                    isDisabled.value = false;
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        const saveCar = async () => {
            if (!selectedBrand.value) {
                toast.add({
                    severity: "error",
                    summary: "Error",
                    detail: "No ha elegido la marca",
                    life: 3000
                });
                return;
            }
            if (!selectedModel.value) {
                toast.add({
                    severity: "error",
                    summary: "Error",
                    detail: "No ha elegido el modelo",
                    life: 3000
                });
                return;
            }
            if (!plate.value) {
                toast.add({
                    severity: "error",
                    summary: "Error",
                    detail: "No ha introducido la matrícula",
                    life: 3000
                });
                return;
            }
            if (!plate.value.match("\\d{4}-\\w{3}")) {
                toast.add({
                    severity: "error",
                    summary: "Error",
                    detail: "Matrícula incorrecta",
                    life: 3000
                });
                return;
            }
            car.marca.id = selectedBrand.value;
            car.modelo.id = selectedModel.value;
            car.matricula = plate.value;
            car.usuario.id = 1;
            await axios
                .post(url, car)
                .then(async (res) => {
                    if (res.status === 200)
                        toast.add({
                            severity: "success",
                            summary: "Éxito",
                            detail: "Registro guardado correctamente",
                            life: 3000
                        });
                    else
                        toast.add({
                            severity: "error",
                            summary: "Error",
                            detail: "No se pudo guardar el registro",
                            life: 3000
                        });
                })
                .catch((error) => console.log(error));
        };
        onMounted(getBrands);
        watch(selectedBrand, getModels);
        return {
            isDisabled,
            selectedBrand,
            selectedModel,
            brands,
            models,
            plate,
            getBrands,
            getModels,
            saveCar
        };
    }
});
</script>

<style scoped>
label {
    width: 7rem;
    margin-left: 1rem;
}

.p-dropdown {
    width: 14rem;
}

.title {
    color: blue;
    margin-left: 0.5rem;
}

.dropdown,
.input,
.button {
    margin-bottom: 2rem;
}

.alta {
    padding-left: 2rem;
}
</style>
