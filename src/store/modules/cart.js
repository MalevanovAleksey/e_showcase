import { Api } from "../../services/api";
export const mutation = {
    SET_CART: "SET_CART",
};

const cartModule = {
    state: {
        cart: [],
    },
    mutations: {
        [mutation.SET_CART]: (state, value) => {
            state.cart = value;
        },
    },
    actions: {
        // Заглушка для получения данных о корзине
        fetchCart({ commit, dispatch }, userId) {
            dispatch("setLoading", true, { root: true });
            Api.cart
                .getCart(userId)
                .then(({ data }) => {})
                .catch((e) => {
                    console.log(e);
                })
                .finally(() => {
                    dispatch("setLoading", false, { root: true });
                });
        },
        addCart({ commit, dispatch }, dto) {
            dispatch("setLoading", true, { root: true });
            Api.cart
                .addCart(dto)
                .then(({ data }) => {
                    commit("SET_CART", data);
                })
                .catch((e) => {
                    console.log(e);
                })
                .finally(() => {
                    dispatch("setLoading", false, { root: true });
                });
        },
        updateCart({ commit, dispatch }, dto) {
            dispatch("setLoading", true, { root: true });
            Api.cart
                .updateCart(dto)
                .then(({ data }) => {
                    commit("SET_CART", data);
                })
                .catch((e) => {
                    console.log(e);
                })
                .finally(() => {
                    dispatch("setLoading", false, { root: true });
                });
        },
    },
    getters: {
        allCartItems: (state) => state.cart,
    },
};

export default cartModule;
