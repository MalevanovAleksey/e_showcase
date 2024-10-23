import { Api } from "../../services/api";

export const mutation = {
    SET_PRODUCTS: "SET_PRODUCTS",
    SET_CATEGORIES: "SET_CATEGORIES",
    SET_FILTER: "SET_FILTER",
};

const defaultFilter = {
    selectedOption: {
        label: "All categories",
    },
    minPrice: null,
    maxPrice: null,
};

const filterProductsByPrice = (products, filter) => {
    const { minPrice, maxPrice } = filter;

    return products.filter(
        ({ price }) => (minPrice === null || price >= minPrice) && (maxPrice === null || price <= maxPrice)
    );
};

const productsModule = {
    state: {
        products: [],
        categories: [],
        filterForProducts: Object.assign({}, defaultFilter),
    },
    getters: {
        products: (state) => state.products,
        categories: (state) => state.categories,
        filterForProducts: (state) => state.filterForProducts,
    },
    actions: {
        setProducts({ commit }, value) {
            commit(mutation.SET_PRODUCTS, value);
        },
        setCategories({ commit }, value) {
            commit(mutation.SET_CATEGORIES, value);
        },
        fetchProducts({ commit, dispatch, getters }) {
            dispatch("setLoading", true, { root: true });
            Api.products
                .getAllProducts()
                .then(({ data }) => {
                    dispatch("setProducts", filterProductsByPrice(data, getters.filterForProducts));
                })
                .catch((e) => {
                    console.log(e);
                })
                .finally(() => {
                    dispatch("setLoading", false, { root: true });
                });
        },
        fetchCategories({ commit, dispatch }) {
            dispatch("setLoading", true, { root: true });
            Api.products
                .getAllCategories()
                .then(({ data }) => {
                    dispatch("setCategories", data);
                })
                .catch((e) => {
                    console.log(e);
                })
                .finally(() => {
                    dispatch("setLoading", false, { root: true });
                });
        },
        fetchProductsInCategory({ commit, dispatch, getters }) {
            const categoryName = getters.filterForProducts.selectedOption.label;
            dispatch("setLoading", true, { root: true });
            Api.products
                .getProductsInCategory(categoryName)
                .then(({ data }) => {
                    dispatch("setProducts", filterProductsByPrice(data, getters.filterForProducts));
                })
                .catch((e) => {
                    console.log(e);
                })
                .finally(() => {
                    dispatch("setLoading", false, { root: true });
                });
        },
        setFilter({ commit, dispatch, getters }, value) {
            commit(mutation.SET_FILTER, value);
            if (value.selectedOption.label === "All categories") {
                dispatch("fetchProducts");
            } else {
                dispatch("fetchProductsInCategory");
            }
        },

        initFilter({ commit, dispatch, getters }) {
            commit(mutation.SET_FILTER, defaultFilter);
            dispatch("fetchProducts");
        },
    },

    mutations: {
        [mutation.SET_PRODUCTS]: (state, value) => {
            state.products = value;
        },
        [mutation.SET_CATEGORIES]: (state, value) => {
            state.categories = value;
        },
        [mutation.SET_FILTER]: (state, value) => {
            state.filterForProducts = value;
        },
    },
};

export default productsModule;
