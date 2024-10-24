<template>
    <div class="product-page__card">
        <div class="product-page-description__wrapper">
            <div
                class="product-page-description__item"
                v-for="(descriptionItem, i) in productListDescriptionItems"
                :key="i"
            >
                <Icon :iconName="descriptionItem.iconName" :size="35" />
                <div class="product-page-description__lables">
                    <div class="product-page-description__label">{{ descriptionItem.label }}</div>
                    <div class="product-page-description__subLabel">{{ descriptionItem.subLabel }}</div>
                </div>
            </div>
        </div>

        <div class="product-page__split-panel">
            <Sidebar class="product-page__sidebar" />
            <ProductList :products="products" class="product-page__product-list" />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["currentUserProfile", "products"]),
        productListDescriptionItems() {
            return [
                {
                    iconName: "cup",
                    label: "Hight Quality",
                    subLabel: "crafted from top materials",
                },
                {
                    iconName: "protection",
                    label: "Warrany Protection",
                    subLabel: "Over 2 years",
                },
                {
                    iconName: "shipping",
                    label: "Free Shipping",
                    subLabel: "Order over 150 $",
                },
                {
                    iconName: "support",
                    label: "24 / 7 Support",
                    subLabel: "Dedicated support",
                },
            ];
        },
    },
    mounted() {
        this.init();
    },
    methods: {
        ...mapActions(["fetchProducts", "fetchCart", "fetchCategories"]),
        init() {
            this.fetchProducts();
            this.fetchCart(this.currentUserProfile.id);
            this.fetchCategories();
        },
    },
};
</script>
<style lang="scss" scoped>
.product-page {
    &-description {
        &__wrapper {
            display: flex;
            justify-content: space-between;
            padding: 50px 0;
        }
        &__item {
            display: flex;
            align-items: center;
            padding: 0 20px;
        }
    }

    &__split-panel {
        display: flex;
    }

    &__sidebar {
        width: 200px;
    }

    &__product-list {
        width: 80%;
    }
}

@media (max-width: 768px) {
    .product-page {
        &__split-panel {
            flex-direction: column;
        }

        &__sidebar {
            width: 100%;
        }

        &__product-list {
            width: 100%;
        }

        &-description {
            &__wrapper {
                padding: 15px 0;
                flex-wrap: wrap;
            }
            &__lables {
                display: none;
            }
            &__item {
                padding: 0 10px;
            }
        }
    }
}
</style>
