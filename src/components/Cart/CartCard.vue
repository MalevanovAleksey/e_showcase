<template>
    <div class="cart-card">
        <div v-if="isEmptyProductsOnCard" class="cart-card__banner center">
            <div class="cart-card__banner-container center">
                <h2 class="cart-card__banner-title">{{ emptyText }}</h2>
                <Button class="cart-card__banner-btn" @click="goToBack">Вернуться к покупкам</Button>
            </div>
        </div>
        <div v-else>
            <CartTable :productsOnCart="productsOnCart" />
            <div class="cart-card__content">
                <div class="cart-card__content-label">{{ sumLabel }}</div>
                <Button @click="placeAnOrder">Оформить заказ</Button>
            </div>
        </div>
        <Modal
            v-if="isModalVisible"
            title="Заказ № 12345"
            text="Ваш заказ успешно оформлен"
            :isVisible="isModalVisible"
            @close="closeModal"
        />
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    props: {
        products: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            isModalVisible: false,
        };
    },
    computed: {
        ...mapGetters(["productsOnCart", "currentUserProfile"]),
        emptyText() {
            return "Корзина пуста";
        },
        isEmptyProductsOnCard() {
            return _.isEmpty(this.productsOnCart);
        },
        sumLabel() {
            const totalQuantity = this.productsOnCart.reduce((sum, product) => sum + product.quantity, 0);
            const totalPrice = this.productsOnCart
                .reduce((sum, product) => sum + product.price * product.quantity, 0)
                .toFixed(2);
            return `Всего товаров ${totalQuantity} на сумму ${totalPrice} ₽`;
        },
    },
    mounted() {
        this.init();
    },
    methods: {
        ...mapActions(["fetchCart", "initProductsOnCart"]),
        init() {
            this.fetchCart(this.currentUserProfile.id);
        },
        goToBack() {
            this.$router.push({ name: "ProductPageView" });
        },
        placeAnOrder() {
            this.initProductsOnCart();
            this.openModal();
        },
        openModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.cart-card {
    height: 100%;
    &__banner {
        height: 100%;
        height: calc(100vh - 200px);

        &-container {
            flex-direction: column;
        }

        &-title {
            margin-bottom: 15px;
        }
    }

    &__content {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
