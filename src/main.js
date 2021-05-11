import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "animate.css";

createApp(App)
    .use(router)
    .use(PrimeVue, { ripple: true })
    .use(ToastService)
    .component("Button", Button)
    .component("Dropdown", Dropdown)
    .component("InputText", InputText)
    .component("Toast", Toast)
    .component("DataTable", DataTable)
    .component("Column", Column)
    .mount("#app");
