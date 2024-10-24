<template>
    <div class="header">
        <router-link class="link" :to="{ name: 'ProductPageView' }">
            <div class="header__title">
                <Icon iconName="npm" :size="40" />
                <div>Funiro.</div>
            </div>
        </router-link>
        <router-link class="link" :to="{ name: 'cartView' }">
            <div class="header__cart-container">
                <Icon class="header__cart" iconName="cart-large" :size="23" />
                <span v-if="totalItems > 0" class="cart-count">{{ totalItems }}</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
    computed: {
        ...mapGetters(["productsOnCart"]),
        totalItems() {
            return this.productsOnCart?.reduce((total, product) => total + (product.quantity || 0), 0) || 0;
        },
    },
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__title {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 20px;
    }

    .link {
        text-decoration: none;
        color: inherit;
        position: relative;
    }

    .header__cart-container {
        display: flex;
        align-items: center;
    }

    .cart-count {
        position: absolute;
        top: -13px;
        right: -10px;
        background-color: #007bff;
        color: white;
        border-radius: 10px;
        padding: 2px 6px;
        font-size: 12px;
        font-weight: bold;
    }
}
</style>
