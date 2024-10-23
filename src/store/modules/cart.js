import { Api } from "../../services/api";
const cartModule = {
    state: {
        cart: [],
    },
    mutations: {
        setCart(state, cart) {
            state.cart = cart;
        },
    },
    actions: {
        fetchCart({ commit }, context) {
            Api.cart.getCart().then((data) => {
                console.log(data);
            });
            //   commit('setProducts', response.data);
        },
    },
    getters: {
        allCartItems: (state) => state.cart,
    },
};

export default cartModule;
