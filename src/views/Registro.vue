<template>
    <Header />
    <div class="p-grid content">
        <Sidebar />
        <Alta />
    </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Alta from "@/components/Alta.vue";

export default defineComponent({
    components: {
        Header,
        Sidebar,
        Alta
    }
});
</script>

<style scoped>
.content {
    background-color: lightgrey;
}
</style>
