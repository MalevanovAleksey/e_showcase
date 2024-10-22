<template>
    <div class="input-wrapper">
        <label v-if="label">{{ label }}</label>
        <input :type="type" :value="modelValue" @input="updateValue" :placeholder="placeholder" class="input" />
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: false,
        },
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            default: "",
        },
    },
    methods: {
        updateValue(event) {
            this.$emit("update:modelValue", event.target.value);
        },
    },
};
</script>

<style scoped>
.input {
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
}

.input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: black;
}

.input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: black;
}
</style>
