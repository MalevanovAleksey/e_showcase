<template>
    <router-view />
    <loader
        v-if="isLoading"
        name="spinning"
        loadingText="LOADING..."
        textColor="#ffffff"
        textSize="20"
        textWeight="500"
        object="#ff9633"
        color1="#ffffff"
        color2="#17fd3d"
        size="5"
        speed="2"
        bg="#343a40"
        objectbg="#999793"
        opacity="80"
        :disableScrolling="true"
    ></loader>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters(["currentUserProfile", "isLoading"]),
    },
    mounted() {
        this.checkAccess();
    },
    methods: {
        checkAccess() {
            if (_.isEmpty(this.currentUserProfile)) {
                this.$router.replace({ name: "authorizationView" });
            }
        },
    },
    watch: {
        $route() {
            this.checkAccess();
        },
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

body {
    margin: 0;
}
</style>
