<template>
    <div class="authorization">
        <div class="authorization__info">
            <div class="authorization__content">
                <h2 class="authorization__title">Authorization form</h2>
                <div class="authorization__description">The most popular peer lending at SEA</div>
                <Button>Read more</Button>
            </div>
        </div>

        <div class="authorization__body">
            <div class="authorization__content">
                <h2 class="authorization__greeting-title">Hello Again!</h2>
                <div class="authorization__greeting-subtitle">Welcome Back</div>
                <div class="authorization__form">
                    <div class="authorization__form-input" :class="{ error: errors.email }">
                        <Icon class="authorization__form-icon" iconName="email" />
                        <Input v-model="model.email" placeholder="Email Address" />
                    </div>
                    <div v-if="errors.email" class="authorization__error-message">{{ errors.email }}</div>
                    <div class="authorization__form-input" :class="{ error: errors.password }">
                        <Icon class="authorization__form-icon" iconName="password" />
                        <Input v-model="model.password" placeholder="Password" type="password" />
                    </div>
                    <div v-if="errors.password" class="authorization__error-message">{{ errors.password }}</div>

                    <Button class="authorization__form-btn" @click="login">Login</Button>

                    <div class="authorization__form-link">Forgot Password</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            model: {
                email: null,
                password: null,
                id: 5,
            },
            errors: {
                email: null,
                password: null,
            },
        };
    },
    computed: {
        ...mapGetters(["currentUserProfile"]),
        currentDate() {
            const date = new Date();
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
            const day = String(date.getDate()).padStart(2, "0");

            return `${year}-${month}-${day}`;
        },
    },
    mounted() {
        this.init();
    },
    methods: {
        ...mapActions(["setCurrentUserProfile", "addCart"]),
        init() {
            if (!_.isEmpty(this.currentUserProfile)) {
                this.$router.replace({ name: "home" });
            }
        },
        login() {
            if (this.validateForm()) {
                this.setCurrentUserProfile(this.model);
                this.$router.replace({ name: "home" });
                this.addUserCart();
            }
        },
        validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) return "Email is required";
            if (!emailRegex.test(email)) return "Invalid email format";
            return null;
        },
        validatePassword(password) {
            if (!password) return "Password is required";
            if (password.length < 6) return "Password must be at least 6 characters";
            return null;
        },
        validateForm() {
            this.errors.email = this.validateEmail(this.model.email);
            this.errors.password = this.validatePassword(this.model.password);
            return !this.errors.email && !this.errors.password;
        },
        addUserCart() {
            const dto = {
                userId: this.currentUserProfile.id,
                date: this.currentDate,
                products: [],
            };

            this.addCart(dto);
        },
    },
};
</script>

<style lang="scss" scoped>
.authorization {
    display: flex;
    width: 100%;
    height: 100vh;

    &__info {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        background: linear-gradient(180deg, #0d99ff, #021c7a);
        color: #fff;

        &::before {
            content: "";
            position: absolute;
            bottom: 5%;
            left: -10%;
            width: 200px;
            height: 400px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
            border-radius: 50%;
            transform: rotate(45deg);
        }
    }

    &__body {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;
    }

    &__title {
        margin: 0;
    }

    &__description {
        padding: 15px 0;
    }

    &__greeting-title {
        margin-bottom: 10px;
    }

    &__greeting-subtitle {
        margin-bottom: 20px;
    }

    &__form {
        &-input {
            display: flex;
            align-items: center;
            border: 1px solid #ccc;
            border-radius: 15px;
            padding: 5px;
            margin-bottom: 15px;
            ::v-deep .input {
                border: none;
                border-radius: 15px;
                &:focus {
                    border: none;
                    outline: none;
                }
            }
            &.error {
                border-color: red;
            }
        }

        &-icon {
            margin-left: 10px;
        }

        &-btn {
            width: 100%;
            ::v-deep.button {
                border-radius: 15px;
            }
        }

        &-link {
            margin-top: 15px;
            color: #ccc;
            text-align: center;
        }
    }

    &__error-message {
        color: red;
        font-size: 12px;
        margin-top: -10px;
        margin-bottom: 10px;
    }
}

@media (max-width: 768px) {
    .authorization {
        flex-direction: column;
        height: auto;

        &__info {
            width: 100%;
            height: 300px;
            text-align: center;

            &::before {
                display: none;
            }
        }

        &__body {
            width: 100%;
        }

        .authorization__content {
            padding: 20px;
        }

        .authorization__form {
            &-btn {
                margin-top: 10px;
            }

            &-input {
                padding: 10px;
                border-radius: 10px;
            }
        }
    }
}
</style>
