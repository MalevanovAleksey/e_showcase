<template>
    <button
        :disabled="disabled"
        :class="['button', { 'is-active': isActive }, { disabled: disabled }]"
        @click="handleClick"
    >
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
        disabled: {
            type: Boolean,
            default: false,
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
.button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &.secondary {
        background-color: #a9b4b9;
    }

    &.disabled {
        background-color: #ccc;
    }
}

.base-button.is-active {
    background-color: #0056b3;
}
</style>
