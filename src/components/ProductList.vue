<template>
    <div class="product-list">
        {{ productList }}
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
        productList() {
            return this.products.map((x) => x.title).length;
        },
    },
    mounted() {},
    methods: {
        ...mapActions([]),
    },
};
</script>

<style lang="scss" scoped>
.home {
    padding: 40px 100px;
    height: 100%;
}
</style>
