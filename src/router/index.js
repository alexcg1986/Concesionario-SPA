import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Registro",
        component: () => import("@/views/Registro.vue")
    },
    {
        path: "/listado",
        name: "Listado",
        component: () => import("@/views/Listado.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
