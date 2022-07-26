<template>
    <article class="flex flex-col gap-1 drop-shadow" :title="item.name">
        <header class="peer relative">
            <a class="z-1 peer absolute inset-0 actionable rounded-xl" href="#">
                <span class="sr-only">Voir la playlist "{{ item.name }}"</span>
            </a>

            <img
                class="block w-full h-full rounded-xl object-cover [aspect-ratio:_3_/_4] transition peer-hover:opacity-60"
                alt=""
                :src="item.image.url"
                :width="item.image.width"
                :height="item.image.height"
                loading="lazy"
            />
        </header>

        <div class="flex flex-col gap-2 text-sm text-muted transition peer-hover:body-text">
            <span class="block truncate">{{ item.name }}</span>
        </div>
    </article>
</template>

<script lang="ts" setup>
import Playlist from '@/app/models/Playlist';

defineProps<{ item: Playlist }>();
</script>
