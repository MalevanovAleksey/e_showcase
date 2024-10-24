<template>
    <div class="home">
        <Header />
        <router-view />
    </div>
</template>

<script>
export default {
    name: "HomeView",
};
</script>

<style lang="scss" scoped>
.home {
    padding: 40px 100px;
    height: 100%;
}

@media (max-width: 1024px) {
    .home {
        padding: 20px 40px;
    }
}
</style>
