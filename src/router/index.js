import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Authorization from "../views/Authorization.vue";

const routes = [
    {
        path: "/home",
        name: "home",
        component: HomeView,
    },
    {
        path: "/authorization",
        name: "authorization",
        component: Authorization,
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
