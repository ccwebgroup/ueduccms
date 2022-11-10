import App from "./App.vue";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "../css/app.scss"

import router from "./router";

const myCustomLightTheme = {
    dark: false,
    colors: {
        background: "#FFFFFF",
        surface: "#FFFFFF",
        primary: "#663e7a",
        "primary-darken-1": "#663e7a",
        secondary: "#03DAC6",
        "secondary-darken-1": "#018786",
        error: "#B00020",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
    }
};

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "myCustomLightTheme",
        themes: {
            myCustomLightTheme,
        },
    },
    display: {
        mobileBreakpoint: 'sm',
        thresholds: {
            xs: 0,
            sm: 340,
            md: 540,
            lg: 800,
            xl: 1280,
        },
    }
});

const app = createApp(App);
app.use(vuetify);
app.use(router);

app.mount("#app");
