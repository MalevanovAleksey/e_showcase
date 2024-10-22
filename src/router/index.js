import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthorizationView from "../views/AuthorizationView.vue";
import ProductPageView from "../views/ProductPageView.vue";
import CartView from "../views/CartView.vue";

const routes = [
    {
        path: "/authorizationView",
        name: "authorizationView",
        component: AuthorizationView,
    },
    {
        path: "/funiro",
        name: "home",
        component: HomeView,
        redirect: { name: "ProductPageView" },
        children: [
            {
                path: "ProductPageView",
                name: "ProductPageView",
                component: ProductPageView,
                props: true,
            },
            {
                path: "cartView",
                name: "cartView",
                component: CartView,
                props: true,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
