import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";

import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "animate.css";

createApp(App)
    .use(router)
    .use(PrimeVue, { ripple: true })
    .component("Button", Button)
    .component("Dropdown", Dropdown)
    .component("InputText", InputText)
    .mount("#app");
