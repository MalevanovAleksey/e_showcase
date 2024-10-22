    <router-view />
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters(["currentUserProfile"]),
    },
    mounted() {
        this.checkAccess();
    },
    methods: {
        checkAccess() {
            if (_.isEmpty(this.currentUserProfile)) {
                this.$router.replace({ name: "authorization" });
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
</style>
