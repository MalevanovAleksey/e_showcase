<template>
    <div class="product-list">
        <div v-if="isEmptyProducts" class="product-list__banner">
            {{ emptyText }}
        </div>
        <ProductCard v-else v-for="product in products" :key="product.id" :product="product" />
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
        return {};
    },
    computed: {
        ...mapGetters([]),
        emptyText() {
            return "Товары не найдены. Попробуйте изменить фильтр";
        },
        isEmptyProducts() {
            return _.isEmpty(this.products);
        },
    },
    mounted() {},
    methods: {
        ...mapActions([]),
    },
};
</script>

<style lang="scss" scoped>
.product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px 24px;

    &__banner {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 45vh;
    }
}
</style>
