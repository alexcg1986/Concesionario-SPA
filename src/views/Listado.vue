<template>
    <Header />
    <div class="p-grid content">
        <Sidebar />
        <Consulta />
    </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Consulta from "@/components/Consulta.vue";

export default defineComponent({
    components: {
        Header,
        Sidebar,
        Consulta
    }
});
</script>

<style scoped>
.content {
    background-color: lightgrey;
}
</style>
