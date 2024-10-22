<template>
    <div class="header">
        <router-link class="link" :to="{ name: 'ProductPageView' }">
            <div class="header__title">
                <Icon iconName="npm" :size="40" />
                <div>Funiro.</div>
            </div>
        </router-link>
        <router-link class="link" :to="{ name: 'cartView' }">
            <Icon class="header__cart" iconName="cart-large" :size="23" />
        </router-link>
    </div>
</template>

<script></script>

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
    }
}
</style>
