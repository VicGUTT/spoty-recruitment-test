<template>
    <header class="container flex flex-col gap-4 items-center justify-center">
        <div class="flex flex-col gap-2 items-center justify-center">
            <strong id="search-type-label" class="font-bold text-sm tracking-wider">Rechercher par</strong>

            <div
                class="subtle group w-fit p-0.5 flex gap-2 transition rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                <div class="relative">
                    <input
                        id="search-type-name"
                        type="radio"
                        name="type"
                        value="name"
                        aria-describedby="search-type-label"
                        class="peer actionable absolute inset-0 w-full h-full bg-transparent border-none rounded-md cursor-pointer focus:ring-primary-500 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-900 checked:bg-transparent checked:bg-none checked:hover:bg-transparent checked:focus:bg-transparent"
                        :checked="type === 'name'"
                        @change="$emit('update:type', extractInputValue($event))"
                    />
                    <label
                        for="search-type-name"
                        class="p-1.5 px-3.5 flex items-center text-sm font-semibold transition rounded-md peer-checked:bg-white peer-checked:shadow-sm dark:peer-checked:bg-gray-900"
                    >
                        <span class="opacity-80 group-hover:opacity-100">Nom</span>
                    </label>
                </div>

                <div class="relative">
                    <input
                        id="search-type-genre"
                        type="radio"
                        name="type"
                        value="genre"
                        aria-describedby="search-type-label"
                        class="peer actionable absolute inset-0 w-full h-full bg-transparent border-none rounded-md cursor-pointer focus:ring-primary-500 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-900 checked:bg-transparent checked:bg-none checked:hover:bg-transparent checked:focus:bg-transparent"
                        :checked="type === 'genre'"
                        @change="$emit('update:type', extractInputValue($event))"
                    />
                    <label
                        for="search-type-genre"
                        class="p-1.5 px-3.5 flex items-center text-sm font-semibold transition rounded-md peer-checked:bg-white peer-checked:shadow-sm dark:peer-checked:bg-gray-900"
                    >
                        <span class="">Genre</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="relative w-full max-w-md flex items-center gap-4">
            <label class="sr-only" for="search-term">
                {{ label }}
            </label>

            <input
                class="peer pl-12 subtle rounded-xl py-3 w-full border-none font-semibold text-base block transition focusable placeholder:text-gray-400 dark:placeholder:text-slate-400"
                id="search-term"
                type="text"
                name="term"
                autocomplete="off"
                autofocus
                :class="{ 'pr-4': !loading, 'pr-12': loading }"
                :placeholder="placeholder"
                :value="term"
                @input="$emit('update:term', extractInputValue($event))"
            />

            <o-icon
                class="w-9 h-9 absolute left-0 pl-4 transition pointer-events-none text-gray-500 dark:text-slate-500 peer-focus:text-primary-700 dark:peer-focus:text-primary-300"
                name="search"
            />

            <o-loader
                class="w-6 h-6 absolute right-0 mr-4 transition pointer-events-none border-gray-500 flex-shrink-0 !border-b-transparent dark:border-slate-500 peer-focus:border-primary-700 dark:peer-focus:border-primary-300"
                :active="loading"
            />
        </div>
    </header>
</template>

<script lang="ts" setup>
import type { SearchType } from '@/app/types';
import oIcon from '@/components/icon.vue';
import oLoader from '@/components/loader.vue';

defineEmits(['update:type', 'update:term']);

const props = defineProps({
    loading: {
        type: Boolean,
    },
    type: {
        type: String,
        required: true,
    },
    term: {
        type: String,
        required: true,
    },
});

const label = 'Entrez le terme de votre recherche';
const placeholder = computed(() => {
    switch (props.type as SearchType) {
        case 'name':
            return "Entrez le nom d'une playlist";
        case 'genre':
            return "Entrez le genre d'une playlist";
        default:
            return label;
    }
});

function extractInputValue(e: Event | InputEvent) {
    return (e.target as HTMLInputElement).value;
}
</script>
