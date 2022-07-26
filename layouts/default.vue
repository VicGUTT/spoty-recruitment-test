<template>
    <div class="min-h-screen flex flex-col">
        <div class="py-8 flex-auto">
            <slot />

            <div
                class="-z-1 fixed inset-0 pt-[250px] flex items-center justify-center select-none pointer-events-none overflow-hidden mix-blend-multiply filter blur-xl dark:mix-blend-color"
                aria-hidden="true"
            >
                <div class="container relative w-full">
                    <!-- https://toolbox.signalsupply.co -->
                    <!-- prettier-ignore -->
                    <div class="w-[50vw] h-[70vh] ml-auto -mt-72 animate-blob" style="background: radial-gradient(105.68% 45.69% at 92.95% 50%, rgba(105, 244, 253, 0.5) 0%, rgba(160, 255, 244, 0.094) 53.91%, rgba(254, 216, 255, 0) 100%), radial-gradient(103.18% 103.18% at 90.11% 102.39%, rgb(201, 255, 242) 0%, rgba(230, 255, 250, 0) 100%), radial-gradient(90.45% 90.45% at 87.84% 9.55%, rgb(255, 210, 245) 0%, rgba(254, 219, 246, 0) 100%), linear-gradient(135.66deg, rgba(203, 185, 255, 0.8) 14.89%, rgba(216, 202, 254, 0) 74.33%); background-blend-mode: normal, normal, normal, normal, normal, normal; filter: blur(200px); border-radius: 15rem;"></div>
                </div>
            </div>
        </div>

        <footer class="container w-full py-8">
            <div class="flex flex-wrap items-center justify-between gap-4 lg:gap-12 text-sm">
                <div class="opacity-70 font-semibold flex items-center gap-3 grayscale">
                    &copy; {{ new Date().getFullYear() }}
                    <strong>{{ appName }} ✌</strong>
                </div>

                <div class="opacity-70 font-semibold hidden items-center justify-center grayscale mounted:flex">
                    <o-theme-switcher />
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import oThemeSwitcher from '@/components/theme-switcher.vue';

const {
    public: { appName },
} = useRuntimeConfig();
</script>
