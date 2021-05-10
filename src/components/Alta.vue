<template>
    <div
        class="alta p-col-7 p-md-9 p-lg-10 animate__animated animate__faster animate__fadeInRight"
    >
        <h1 class="title">Alta</h1>
        <div class="p-d-flex p-flex-column p-jc-between p-ai-start">
            <div class="dropdown p-d-flex p-flex-row p-jc-between p-ai-center">
                <span class="p-col-4">Marca:</span>
                <Dropdown
                    v-model="selectedBrand"
                    :options="brands"
                    optionLabel="nombre"
                    optionValue="id"
                    placeholder="Seleccione una marca"
                />
            </div>
            <div class="dropdown p-d-flex p-flex-row p-jc-between p-ai-center">
                <span class="p-col-4">Modelo:</span>
                <Dropdown
                    v-model="selectedModel"
                    :options="models"
                    optionLabel="nombre"
                    optionValue="id"
                    placeholder="Seleccione un modelo"
                />
            </div>
            <div class="input p-d-flex p-flex-row p-jc-between p-ai-center">
                <span class="p-col-4">Matrícula:</span>
                <input-text
                    type="text"
                    v-model="plate"
                    placeholder="NNNN-LLL"
                    maxlength="8"
                />
            </div>
        </div>
        <Button label="Aceptar" class="p-button-raised button" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

export default defineComponent({
    setup() {
        const url = "http://localhost:8080/api/";
        const selectedBrand = ref();
        const selectedModel = ref();
        const brands = ref([]);
        const models = ref([]);
        const plate = ref();
        const getBrands = async () => {
            await axios
                .get(url + "marca")
                .then(async (res) => await (brands.value = res.data))
                .catch((error) => {
                    console.log(error);
                });
        };
        const getModels = async () => {
            await axios
                .get(url + "modelo")
                .then(async (res) => await (models.value = res.data))
                .catch((error) => {
                    console.log(error);
                });
        };
        onMounted(() => {
            getBrands;
            getModels;
        });
        return {
            selectedBrand,
            selectedModel,
            brands,
            models,
            plate,
            getBrands,
            getModels
        };
    }
});
</script>

<style scoped>
.title {
    color: blue;
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
