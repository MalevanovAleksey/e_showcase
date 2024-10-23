import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
        "Content-Type": "application/json",
    },
});

const productsService = {
    getAllProducts() {
        return apiClient.get("/products");
    },
    getAllCategories() {
        return apiClient.get("/products/categories");
    },
    getProductsInCategory(categoryName) {
        return apiClient.get(`/products/categories/${categoryName}`);
    },
};

export default productsService;
