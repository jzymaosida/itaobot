<template>
    <div class="uk-position-center" style="top: 30%">
        <div class="uk-padding uk-card uk-card-default" style="width: 450px">
            <form @submit.prevent="handleSubmit">
                <div class="uk-alert-warning uk-margin" uk-alert>
                    <a class="uk-alert-close" uk-close></a>
                    <p>{{ warnText }}</p>
                </div>
                <div class="uk-margin">
                    <label>
                        <input v-model="email" :placeholder="emailPlaceHolder" class="uk-input" required type="email">
                    </label>
                </div>
                <div class="uk-margin">
                    <label>
                        <input v-model="password" :placeholder="passwordPlaceHolder" class="uk-input" required
                               type="password">
                    </label>
                </div>
                <div class="uk-margin uk-text-center">
                    <button class="uk-button uk-button-primary" type="submit" :disabled="stop">{{ submitText }}</button>
                    <button class="uk-button uk-button-default uk-margin-left" type="reset" @click="$emit('avoid')">{{
                            cancelText
                        }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Bind",
    props: {
        warnText: {
            type: String,
            default: "Please bind your email!"
        },
        cancelText: {
            type: String,
            default: "Cancel"
        },
        submitText: {
            type: String,
            default: "Submit"
        },
        emailPlaceHolder: {
            type: String,
            default: "Email"
        },
        passwordPlaceHolder: {
            type: String,
            default: "Password"
        },
        stop: {
            props: Boolean,
            default: false
        }
    },
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('bind', {email: this.email, password: this.password})
        }
    }
}
</script>

<style>
body {
    background-color: antiquewhite;
    height: 100vh;
}
</style>
