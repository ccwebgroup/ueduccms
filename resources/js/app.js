import App from "./App.vue";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import router from "./router";

const vuetify = createVuetify({ components, directives });

const app = createApp(App);
app.use(vuetify);
app.use(router);

app.mount("#app");
