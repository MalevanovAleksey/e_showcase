<template>
    <div class="cart">
        <table class="cart__table">
            <thead>
                <tr class="cart__row cart__row--header">
                    <th class="cart__header">№</th>
                    <th class="cart__header">Наименование товара</th>
                    <th class="cart__header">Количество</th>
                    <th class="cart__header">Цена за ед.</th>
                    <th class="cart__header">Итого</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in productsOnCart" :key="product.id" class="cart__row">
                    <td class="cart__cell">{{ index + 1 }}</td>
                    <td class="cart__cell cart__cell--name">
                        <img :src="product.image" alt="product image" class="cart__image" />
                        <span class="cart__title">{{ product.title }}</span>
                    </td>
                    <td class="cart__cell cart__cell--quantity">
                        <Button class="cart__button" @click="updateProduct(product, cartActionValue.REMOVE)">-</Button>
                        <span class="cart__quantity">{{ product.quantity }}</span>
                        <Button class="cart__button" @click="updateProduct(product, cartActionValue.ADD)">+</Button>
                    </td>
                    <td class="cart__cell">{{ product.price.toFixed(2) }} ₽</td>
                    <td class="cart__cell">{{ (product.price * product.quantity).toFixed(2) }} ₽</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { cartActionValue } from "@/enums/cart";

export default {
    props: {
        productsOnCart: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            cartActionValue,
        };
    },
    methods: {
        updateProduct(product, action) {
            if (action === "decrement" && product.quantity === 1) {
                this.$store.dispatch("updateCart", { product, action: "remove" });
            } else {
                this.$store.dispatch("updateCart", { product, action });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.cart {
    &__table {
        width: 100%;
        border-collapse: collapse;
    }

    &__row {
        &--header {
            background-color: #f5f5f5;
        }
    }

    &__header,
    &__cell {
        padding: 10px;
        border: 1px solid #ddd;
        text-align: center;
    }

    &__cell--name {
        display: flex;
        align-items: center;
    }

    &__image {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }

    &__title {
        font-weight: 500;
    }

    &__button {
        padding: 5px 10px;
        margin: 0 5px;
    }

    &__quantity {
        margin: 0 10px;
    }
}
</style>
