import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthorizationView from "../views/AuthorizationView.vue";
import ProductListCardViiew from "../views/ProductListCardViiew.vue";
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
        redirect: { name: "productListCardViiew" },
        children: [
            {
                path: "productListCardViiew",
                name: "productListCardViiew",
                component: ProductListCardViiew,
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
