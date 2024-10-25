<template>
    <div v-if="isVisible" class="modal-overlay">
        <div class="modal-overlay__modal modal">
            <h3 class="modal__title">{{ title }}</h3>
            <p class="modal__text">{{ text }}</p>
            <Button @click="closeModal" class="modal__close-button">Закрыть</Button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        isVisible: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        closeModal() {
            this.$emit("close");
        },
    },
};
</script>

<style lang="scss" scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    &__modal {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        width: 300px;
    }
}

.modal {
    &-title {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: bold;
    }
    &-text {
        margin-bottom: 20px;
    }

    &-close-button {
        padding: 10px 20px;
    }
}
</style>
