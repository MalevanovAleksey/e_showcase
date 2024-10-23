import { createStore } from "vuex";
import products from "./modules/products";
import cart from "./modules/cart";
import appModule from "./modules/app";

const store = createStore({
    state: {
        isLoading: false,
    },
    mutations: {
        SET_LOADING(state, value) {
            state.isLoading = value;
        },
    },
    actions: {
        setLoading({ commit }, value) {
            commit("SET_LOADING", value);
        },
    },
    getters: {
        isLoading: (state) => state.isLoading,
    },
    modules: {
        products,
        cart,
        appModule,
    },
});

export default store;
