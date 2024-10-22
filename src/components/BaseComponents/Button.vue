<template>
    <button :class="['base-button', { 'is-active': isActive }]" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            isActive: this.value,
        };
    },
    methods: {
        handleClick() {
            this.isActive = !this.isActive;
            this.$emit("input", this.isActive);
        },
    },
    watch: {
        value(newValue) {
            this.isActive = newValue;
        },
    },
};
</script>

<style scoped>
.base-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
}

.base-button.is-active {
    background-color: #0056b3;
}
</style>
