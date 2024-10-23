import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
        "Content-Type": "application/json",
    },
});

const cartService = {
    getCart() {
        return apiClient.get("/carts");
    },
    addCart(product) {
        return apiClient.post("/carts", product);
    },
    updateCart(products) {
        return apiClient.post("/carts", products);
    },
};

export default cartService;
