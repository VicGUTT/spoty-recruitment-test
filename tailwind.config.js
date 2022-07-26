const colors = require('tailwindcss/colors'); // eslint-disable-line @typescript-eslint/no-var-requires
// const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme'); // eslint-disable-line @typescript-eslint/no-var-requires

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // class | media (@see https://tailwindcss.com/docs/dark-mode)
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    theme: {
        // fontFace: [
        //     'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        // ],
        screens: {
            xs: '320px',
            sm: defaultTheme.screens.sm, // '640px'
            md: defaultTheme.screens.md, // '768px'
            lg: defaultTheme.screens.lg, // '1024px'
            xl: defaultTheme.screens.xl, // '1280px'
            '2xl': defaultTheme.screens['2xl'], // '1536px'
            // '3xl': '1920px'
        },
        extend: {
            colors: {
                // Brand colors
                primary: colors.sky,
                secondary: colors.amber,
                tertiary: colors.pink,

                // Contextual colors
                info: colors.blue,
                success: colors.green,
                warning: colors.orange,
                error: colors.red,
            },
            fontFamily: {
                sans: ['"Mulish"', ...defaultTheme.fontFamily.sans],
            },
            maxWidth: {
                container: '85rem', // 1360px
            },
            zIndex: {
                1: 1,
            },
            animation: {
                blob: 'blob 15s infinite',
            },
            keyframes: {
                blob: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                    '33%': {
                        transform: 'translate(30px, -50px) scale(1.1)',
                    },
                    '66%': {
                        transform: 'translate(-20px, 20px) scale(0.9)',
                    },
                    '100%': {
                        transform: 'tranlate(0px, 0px) scale(1)',
                    },
                },
            },
        },
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
        require('@vicgutt/tailwindcss-debug'),
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('@vicgutt/tailwindcss-feature-detection')([
            ...require('@vicgutt/tailwindcss-feature-detection/dist/defaults'),
            {
                name: 'mounted',
                strategy: 'class',
                parentClassName: 'app-js-mounted',
            },
        ]),
        // require('@vicgutt/tailwindcss-font-face')({
        //     fontDir: './public/fonts/Mulish',
        //     fontPath: '/fonts/Mulish',
        // }),
    ],
};
