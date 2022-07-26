<template>
    <nuxt-layout>
        <nuxt-page />
    </nuxt-layout>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

useHead({
    titleTemplate: (title) => (title ? `${title} | ${config.public.appName}` : config.public.appName),
    meta: [{ name: 'color-scheme', content: 'light dark' }],
    script: [
        {
            /**
             * Hack... because : https://github.com/nuxt/framework/issues/5565#issue-1280074990
             */
            get children() {
                function init() {
                    try {
                        const HTMLClassList = document.documentElement.classList;

                        HTMLClassList.remove('no-js');

                        setTimeout(() => {
                            if (HTMLClassList.contains('app-js-mounted')) {
                                return;
                            }

                            document.body.style.opacity = '1';

                            HTMLClassList.add('app-js-timeout');
                        }, 1000);

                        if (
                            localStorage.theme === 'dark' ||
                            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
                        ) {
                            HTMLClassList.add('dark');

                            localStorage.theme = 'dark';
                            (document.head.querySelector('meta[name="color-scheme"]') as HTMLMetaElement).content =
                                'dark';
                        } else {
                            HTMLClassList.remove('dark');
                        }
                    } catch (error) {
                        console.error(error);
                    }
                }

                return `${init.toString()}; init();`;
            },
        },
    ],
    style: [{ children: 'body { opacity: 0; } .no-js body { opacity: 1; }' }],
    htmlAttrs: {
        get class() {
            if (typeof window !== 'undefined') {
                return null;
            }

            return 'min-h-screen min-w-[300px] scrollbar no-js motion-safe:scroll-smooth';
        },
    },
    bodyAttrs: {
        class: 'min-h-screen flex flex-col transition-opacity duration-1000 body-text body-bg antialiased font-sans mounted:opacity-100 mounted:transition-colors mounted:duration-150 selection:text-white selection:bg-primary-500',
    },
});

onMounted(() => {
    document.documentElement.classList.add('app-js-mounted');
});
</script>
