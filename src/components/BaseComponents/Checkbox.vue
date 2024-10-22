<template>
    <div>
        <input type="checkbox" class="checkbox" v-model="isChecked" @change="handleChange" />
        <label>{{ label }}</label>
    </div>
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
            isChecked: this.value,
        };
    },
    methods: {
        handleChange() {
            this.$emit("input", this.isChecked);
        },
    },
    watch: {
        value(newValue) {
            this.isChecked = newValue;
        },
    },
};
</script>
