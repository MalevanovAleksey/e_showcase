<template>
    <div class="sidebar">
        <div class="sidebar__title">Фильтр</div>
        <div class="sidebar-filter__wrapper">
            <div class="sidebar-filter__title">Категория</div>
            <div class="sidebar-filter__select">
                <v-select
                    :options="options"
                    v-model="model.selectedOption"
                    label="label"
                    placeholder="All categories"
                    :clearable="false"
                />
            </div>
        </div>
        <div class="sidebar-filter__wrapper">
            <div class="sidebar-filter__title">Цена</div>
            <div class="sidebar-filter__group-inputs">
                <Input v-model="model.minPrice" type="number" class="sidebar-filter__group-input" label="Мин. цена" />
                <Input v-model="model.maxPrice" type="number" class="sidebar-filter__group-input" label="Макс. цена" />
            </div>
        </div>
        <div class="sidebar-filter-btn__wrapper">
            <Button class="sidebar-filter-btn__item secondary" @click="resetFilter">Сбросить фильтр</Button>
            <Button class="sidebar-filter-btn__item" @click="applyFilter">Применить</Button>
        </div>
    </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { mapActions, mapGetters } from "vuex";

export default {
    components: { vSelect },
    data() {
        return {
            model: {},
        };
    },
    computed: {
        ...mapGetters(["categories", "filterForProducts"]),

        options() {
            const allCategoriesOption = { label: "All categories" };
            const categoryOptions = this.categories.map((category) => {
                return {
                    label: category,
                };
            });
            return [allCategoriesOption, ...categoryOptions];
        },
    },
    mounted() {
        this.model = _.cloneDeep(this.filterForProducts);
    },
    methods: {
        ...mapActions(["fetchProductsInCategory", "setFilter", "initFilter"]),
        updateValue(event) {
            this.$emit("update:modelValue", event.target.value);
        },
        applyFilter() {
            this.isValidFilter();
            this.setFilter(this.model);
        },
        resetFilter() {
            this.initFilter();
        },

        isValidFilter() {
            if (this.model.minPrice < 0) {
                this.model.minPrice = null;
            }
            if (this.model.maxPrice < 0) {
                this.model.maxPrice = null;
            }

            if (
                this.model.minPrice != null &&
                this.model.maxPrice != null &&
                this.model.maxPrice < this.model.minPrice
            ) {
                [this.model.minPrice, this.model.maxPrice] = [this.model.maxPrice, this.model.minPrice];
            }
        },
    },
    watch: {
        filterForProducts(val) {
            this.model = _.cloneDeep(val);
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
