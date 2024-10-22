<template>
    <img :src="icon" class="icon" alt="icon" :style="styles" />
</template>

<script>
export default {
    props: {
        iconName: {
            type: String,
            required: true,
        },
        width: {
            type: Number,
            default: null,
        },
        height: {
            type: Number,
            default: null,
        },
        size: {
            type: Number,
            default: 22,
        },
    },
    data() {
        return {
            icon: "",
        };
    },
    computed: {
        styles() {
            const defSize = this.size;

            const width = this.width || defSize;
            const height = this.height || defSize;
            const style = {};

            if (width) {
                style.width = `${width}px`;
            }

            if (height) {
                style.height = `${height}px`;
            }
            return style;
        },
    },
    mounted() {
        const iconSrcPromise = import(`@/assets/${this.iconName}.svg`);

        iconSrcPromise
            .then((module) => {
                this.icon = module.default;
            })
            .catch((error) => {
                console.error(error);
            });
    },
};
</script>

<style lang="scss" scoped>
.icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
