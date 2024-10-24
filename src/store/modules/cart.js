import { Api } from "../../services/api";
import { cartActionValue } from "@/enums/cart";

export const mutation = {
    SET_CART: "SET_CART",
    UPDATE_CART_ITEM: "UPDATE_CART_ITEM",
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
        updateCart({ commit, dispatch, getters }, { product, action }) {
            dispatch("setLoading", true, { root: true });
            const cart = { ...getters.cart };
            const productIndex = _.findIndex(cart.products, { id: product.id });

            if (action === cartActionValue.ADD) {
                productIndex !== -1
                    ? (cart.products[productIndex].quantity += 1)
                    : cart.products.push({ ...product, quantity: 1 });
            } else if (action === cartActionValue.REMOVE && productIndex !== -1) {
                cart.products[productIndex].quantity > 1
                    ? (cart.products[productIndex].quantity -= 1)
                    : cart.products.splice(productIndex, 1);
            }
            Api.cart
                .updateCart(cart)
                .then(({ data }) => {
                    commit("SET_CART", cart);
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
        cart: (state) => state.cart,
        productsOnCart: (state) => state.cart.products,
    },
};

export default cartModule;
