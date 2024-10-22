<template>
    <div class="home">
        <Header />
        <router-view />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "HomeView",
    components: {
        HelloWorld,
    },
};
</script>

<style lang="scss" scoped>
.home {
    padding: 40px 100px;
    height: 100%;
}
</style>
