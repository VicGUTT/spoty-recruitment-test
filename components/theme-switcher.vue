<template>
    <o-switch
        class="focusable inline-flex items-center flex-shrink-0 h-[22px] w-[40px] border-2 border-transparent rounded-full cursor-pointer transition [&[aria-checked=false]]:bg-primary-700 [&[aria-checked=true]]:bg-primary-900 [&[aria-checked=false]_>_span[aria-hidden]]:translate-x-0 [&[aria-checked=true]_>_span[aria-hidden]]:translate-x-[18px] [&[aria-checked=false]_svg:first-of-type]:opacity-1 [&[aria-checked=true]_svg:first-of-type]:opacity-0 [&[aria-checked=true]_svg:first-of-type]:absolute [&[aria-checked=false]_svg:last-of-type]:opacity-0 [&[aria-checked=false]_svg:last-of-type]:absolute [&[aria-checked=true]_svg:last-of-type]:opacity-1"
        v-model="checked"
    >
        <span class="sr-only">Changer le thème du site de clair à foncé et vice versa</span>
        <span
            class="relative pointer-events-none flex items-center justify-center h-[18px] w-[18px] rounded-full shadow-lg transform transition body-text body-bg"
            aria-hidden="true"
        >
            <o-icon class="h-3 w-3 transition-opacity" name="sun" />
            <o-icon class="h-3 w-3 transition-opacity" name="moon" />
        </span>
    </o-switch>
</template>

<script lang="ts" setup>
import { Switch as oSwitch } from '@headlessui/vue';
import oIcon from '@/components/icon.vue';

const checked = ref(false);

let HTMLElement: HTMLElement;
let colorSchemeMeta: HTMLMetaElement | { content: '' };

onMounted(() => {
    HTMLElement = document.documentElement;
    colorSchemeMeta = (document.head.querySelector('meta[name="color-scheme"]') as HTMLMetaElement) ?? { content: '' };

    if (localStorage.theme === 'dark') {
        checked.value = true;
    }
});

watch(checked, (value) => {
    if (value) {
        HTMLElement.classList.add('dark');

        localStorage.theme = 'dark';
        colorSchemeMeta.content = 'dark';

        return;
    }

    HTMLElement.classList.remove('dark');

    localStorage.theme = 'light';
    colorSchemeMeta.content = 'light';
});
</script>
