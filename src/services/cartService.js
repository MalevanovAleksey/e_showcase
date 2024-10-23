import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
        "Content-Type": "application/json",
    },
});

const cartService = {
    getCart(userId) {
        return apiClient.get(`/carts/user/${userId}`);
    },
    addCart(dto) {
        return apiClient.post("/carts", dto);
    },
    updateCart(dto) {
        return apiClient.post("/carts", dto);
    },
};

export default cartService;
