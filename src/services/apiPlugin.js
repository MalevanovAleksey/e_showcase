import { Api } from "./api";

export default {
    install(app) {
        app.config.globalProperties.$Api = Api;
    },
};
