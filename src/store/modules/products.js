import { Api } from "../../services/api";

export const mutation = {
    SET_PRODUCTS: "SET_PRODUCTS",
};

const productsModule = {
    state: {
        products: [],
    },
    getters: {
        allProducts: (state) => state.products,
    },
    actions: {
        fetchProducts({ commit, dispatch }, context) {
            dispatch("setLoading", true, { root: true });
            Api.products
                .getAllProducts()
                .then(({ data }) => {
                    commit("SET_PRODUCTS", data);
                })
                .catch((e) => {
                    console.log(e);
                })
                .finally(() => {
                    dispatch("setLoading", false, { root: true });
                });
        },
    },

    mutations: {
        [mutation.SET_PRODUCTS]: (state, value) => {
            state.products = value;
        },
    },
};

export default productsModule;
