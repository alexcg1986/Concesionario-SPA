<template>
    <div
        class="listado p-col-7 p-md-9 p-lg-10 animate__animated animate__faster animate__fadeInRight"
    >
        <div class="p-grid p-flex-column p-jc-between p-ai-start">
            <h1 class="title">Listado</h1>
            <div class="p-grid p-jc-between p-ai-center">
                <label>Marca:</label>
                <Dropdown
                    v-model="selectedBrand"
                    :options="brands"
                    optionLabel="nombre"
                    optionValue="id"
                    placeholder="Seleccione una marca"
                />
            </div>
            <div>
                <DataTable
                    class="p-mt-2 p-mr-3"
                    :value="cars"
                    stripedRows
                    responsiveLayout="stack"
                >
                    <template #empty>
                        No hay coches que mostrar
                    </template>
                    <Column field="id" header="Id"></Column>
                    <Column field="marca.nombre" header="Marca"></Column>
                    <Column field="modelo.nombre" header="Modelo"></Column>
                    <Column field="matricula" header="Matrícula"></Column>
                </DataTable>
            </div>
        </div>
    </div>
    <Toast position="top-center" />
</template>

<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import axios from "axios";

export default defineComponent({
    setup() {
        const url = "http://localhost:8080/api/";
        const selectedBrand = ref();
        const brands = ref([]);
        const cars = ref([]);
        const parameters = {
            marcaId: Number
        };
        const getBrands = async () => {
            await axios
                .get(url + "marca")
                .then(async (res) => await (brands.value = res.data))
                .catch((error) => {
                    console.log(error);
                });
        };
        const listCars = async () => {
            parameters.marcaId = selectedBrand.value;
            await axios
                .post(url + "/filtrado", parameters)
                .then(async (res) => await (cars.value = res.data))
                .catch((error) => console.log(error));
        };
        onMounted(getBrands);
        watch(selectedBrand, listCars);
        return {
            selectedBrand,
            brands,
            getBrands,
            listCars,
            cars
        };
    }
});
</script>

<style>
.p-datatable .p-datatable-thead > tr > th {
    text-align: left;
    padding: 1rem 1rem;
    border: none;
    font-weight: 600;
    color: white;
    background: cornflowerblue;
    transition: box-shadow 0.15s;
}

.p-datatable .p-datatable-tbody > tr {
    background: white;
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(even) {
    background: lightsteelblue;
}
</style>

<style scoped>
label {
    width: 7rem;
    margin-left: 1rem;
}

button {
    margin-left: 4rem;
}

.p-dropdown {
    width: 14rem;
}

.title {
    color: blue;
    margin-left: 0.5rem;
}

.listado {
    padding-left: 2rem;
}
</style>
