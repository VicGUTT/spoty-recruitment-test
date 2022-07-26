import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    telemetry: false,
    css: ['~/assets/css/app.css'],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    runtimeConfig: {
        public: {
            appName: 'Spoty',
        },
        spotify: {
            client: {
                id: '',
                secret: '',
            },
        },
    },
});
