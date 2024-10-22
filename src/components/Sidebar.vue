<template>
    <div class="sidebar">
        <div class="sidebar__title">Фильтр</div>
        <div class="sidebar-filter__wrapper">
            <div class="sidebar-filter__title">Категория</div>
            <div class="sidebar-filter__select">
                <!-- <Select :options="options" /> -->
                <v-select
                    :options="options"
                    v-model="selectedOption"
                    label="label"
                    placeholder="Все категории"
                    :clearable="false"
                />
            </div>
        </div>
        <div class="sidebar-filter__wrapper">
            <div class="sidebar-filter__title">Цена</div>
            <div class="sidebar-filter__group-inputs">
                <Input class="sidebar-filter__group-input" label="Мин. цена" />
                <Input class="sidebar-filter__group-input" label="Макс. цена" />
            </div>
        </div>
        <div class="sidebar-filter-btn__wrapper">
            <Button class="sidebar-filter-btn__item secondary">Сбросить фильтр</Button>
            <Button class="sidebar-filter-btn__item">Применить</Button>
        </div>
    </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
    components: { vSelect },
    data() {
        return {
            selectedOption: null,
        };
    },
    computed: {
        options() {
            return [
                {
                    value: "1 категория",
                    label: "1 категория",
                },
                {
                    value: "2 категория",
                    label: "2 категория",
                },
                {
                    value: "3 категория",
                    label: "3 категория",
                },
            ];
        },
    },
    methods: {
        updateValue(event) {
            this.$emit("update:modelValue", event.target.value);
        },
        handleRemove() {
            console.log("крестик");
        },
    },
};
</script>

<style lang="scss" scoped>
.sidebar {
    padding-right: 10px;
    &__title {
        font-weight: bold;
        font-size: 16px;
        text-align: center;
    }

    &-filter {
        &__wrapper {
            padding: 10px 0;
        }

        &__title {
            margin-bottom: 15px;
        }

        &__group-inputs {
            display: flex;
        }

        &__group-input {
            width: 100%;
            &:not(:first-child) {
                margin-left: 15px;
            }
            ::v-deep .input {
                border-radius: 5px;
                width: calc(100% - 15px);
                padding: 5px;
            }
        }

        &-btn {
            &__wrapper {
                display: flex;
                flex-direction: column;
            }

            &__item {
                margin-top: 10px;
            }
        }
    }
}
</style>
