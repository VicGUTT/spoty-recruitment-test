<template>
    <nav class="mt-24 flex items-center justify-center gap-4 max-w-md mx-auto md:gap-10">
        <nuxt-link
            class="group flex items-center gap-2 actionable"
            :class="{ 'opacity-50 pointer-events-none': !previous }"
            :to="previousUrl()"
            :tabindex="!previous ? '-1' : null"
        >
            <o-icon
                class="w-5 h-5 text-muted transition group-hover:body-text group-hover:-translate-x-1 group-focus-visible:body-text group-focus-visible:-translate-x-1 rotate-180"
                name="arrow"
            />
            <span>Précédent</span>
        </nuxt-link>

        <nuxt-link
            class="group flex items-center gap-2 actionable"
            :class="{ 'opacity-50 pointer-events-none': !next }"
            :to="nextUrl()"
            :tabindex="!next ? '-1' : null"
        >
            <span>Suivant</span>
            <o-icon
                class="w-5 h-5 text-muted transition group-hover:body-text group-hover:translate-x-1 group-focus-visible:body-text group-focus-visible:translate-x-1"
                name="arrow"
            />
        </nuxt-link>
    </nav>
</template>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';
import oIcon from '@/components/icon.vue';

const props = defineProps<{
    previous: string | null;
    next: string | null;
    type: string;
    term: string;
}>();

function previousUrl(): RouteLocationRaw {
    return mergeUrl(props.previous);
}

function nextUrl(): RouteLocationRaw {
    return mergeUrl(props.next);
}

function mergeUrl(url: string | undefined | null): RouteLocationRaw {
    if (!url) {
        return '#';
    }

    const search = new URL(url).searchParams;

    search.delete('query');

    search.set('type', props.type as string);
    search.set('term', props.term as string);

    return {
        query: Object.fromEntries(search.entries()),
    };
}
</script>
