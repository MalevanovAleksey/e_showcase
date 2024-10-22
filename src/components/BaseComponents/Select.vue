<template>
    <div class="select-wrapper">
        <label v-if="label">{{ label }}</label>
        <select :value="modelValue" @change="updateValue" class="select" :multiple="multiple">
            <option v-for="(option, index) in options" :key="index" :value="option.value">
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: Array,
            required: true,
        },
        label: {
            type: String,
            required: false,
        },
        options: {
            type: Array,
            required: true,
            default: () => [],
        },
        multiple: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        updateValue(event) {
            const selectedOptions = Array.from(event.target.selectedOptions).map((option) => option.value);
            this.$emit("update:modelValue", selectedOptions);
        },
    },
};
</script>

<style scoped>
.select {
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    padding: 8px;
    font-size: 1em;
    &:focus {
        outline: none;
        border-color: #1587df;

        box-shadow: 0px -2px 6px 5px rgba(21, 135, 223, 0.2);
    }
}
</style>
