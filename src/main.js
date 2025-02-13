import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import _ from "lodash";
import apiPlugin from "./services/apiPlugin";
import loader from "vue3-ui-preloader";
import "vue3-ui-preloader/dist/loader.css";
window._ = _;

const app = createApp(App);

const registerComponents = (requireContext) => {
    requireContext.keys().forEach((fileName) => {
        const componentConfig = requireContext(fileName);

        const componentName = fileName
            .split("/")
            .pop()
            .replace(/\.\w+$/, "");

        app.component(componentName, componentConfig.default || componentConfig);
    });
};

const requireComponent = require.context("./components", true, /\.vue$/);

registerComponents(requireComponent);

app.use(store).use(router).use(apiPlugin).component("loader", loader).mount("#app");
