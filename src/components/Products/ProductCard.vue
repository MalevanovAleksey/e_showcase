<template>
    <div class="product-card">
        <div class="product-card__price">{{ productPrice }}</div>
        <img :src="product.image" :alt="productTitle" class="product-card__image" />

        <h2 class="product-card__title">{{ productTitle }}</h2>

        <Button :disabled="isProductOnCart" @click="addToCart(product)" class="product-card__btn">
            {{ btnLabelText }}
        </Button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { cartActionValue } from "@/enums/cart";
export default {
    props: {
        product: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            cartActionValue,
        };
    },
    computed: {
        ...mapGetters(["productsOnCart"]),
        productPrice() {
            return `${this.product.price} $`;
        },
        productTitle() {
            return this.product.title;
        },
        isProductOnCart() {
            return !!this.productsOnCart?.find((productOnCart) => productOnCart.id === this.product.id);
        },
        isEmptyProducts() {
            return _.isEmpty(this.productsOnCart);
        },
        btnLabelText() {
            return this.isProductOnCart ? "Товар в корзине" : "Добавить в корзину";
        },
    },
    methods: {
        ...mapActions(["updateCart"]),
        addToCart(product) {
            this.updateCart({ product, action: this.cartActionValue.ADD });
        },
    },
};
</script>

<style lang="scss" scoped>
.product-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 calc(33.333% - 16px);
    max-width: calc(33.333% - 16px);
    box-sizing: border-box;
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: relative;

    &__price {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }

    &__image {
        width: 100%;
        height: 200px;
        object-fit: contain;
        object-position: center;
        max-width: 100%;
        margin-bottom: 16px;
    }

    &__title {
        font-size: 18px;
        margin-bottom: 8px;
    }

    &__btn {
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
}

@media (max-width: 1024px) {
    .product-card {
        flex: 1 1 calc(50% - 16px);
        max-width: calc(50% - 16px);
    }
}

@media (max-width: 768px) {
    .product-card {
        flex: 1 1 calc(100% - 16px);
        max-width: calc(100% - 16px);
    }
}
</style>
