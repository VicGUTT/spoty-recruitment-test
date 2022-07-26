<template>
    <div>
        <o-search-header :loading="pending" v-model:type="params.type" v-model:term="params.term" />

        <main class="container">
            <section class="max-w-md mx-auto text-muted mt-8" v-show="collection.isEmpty">
                <p>
                    Aucune playlists n'a pu être trouvées suite à vos critères de recherche. Veuillez ré-essayer en
                    élargissant vos critères.
                </p>
            </section>

            <section
                class="mt-16 grid gap-y-8 gap-x-4 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]"
                v-show="!collection.isEmpty"
            >
                <o-playlist-card :item="item" v-for="item in collection.items" :key="item.id" />
            </section>

            <o-search-pagination
                :previous="collection.previous"
                :next="collection.next"
                :type="params.type"
                :term="params.term"
                v-show="collection.hasPagination"
            />
        </main>
    </div>
</template>

<script lang="ts" setup>
import type { SearchType, SearchParams, PlaylistCollection } from '@/app/types';
// import { pauseTracking, enableTracking } from '@vue/reactivity';
import oSearchHeader from '@/components/search-header.vue';
import oPlaylistCard from '@/components/playlist-card.vue';
import oSearchPagination from '@/components/search-pagination.vue';
import Collection from '@/app/collections/PlaylistCollection';
import debounce from '@/app/utils/debounce';

const route = useRoute();
const router = useRouter();

const params = reactive<Required<SearchParams>>({
    type: (route.query.type as unknown as SearchType) ?? 'name',
    term: (route.query.term as unknown as string) ?? '',
    offset: +(route.query.offset as string) || 0,
    limit: +(route.query.limit as string) || 20,
});

const { data, pending, refresh } = await useFetch('/api/search', {
    params,
    async onRequest(context) {
        context.options.params = params;
    },
});

const collection = computed(() => new Collection(data.value as PlaylistCollection));

watch(
    () => [params.term, params.type],
    () => router.replace({ query: params })
);
watch(
    () => route.query,
    debounce((query: typeof route.query) => {
        // /**
        //  * Pausing reactivity tacking to avoid
        //  * `watch(params, ...)` from being called.
        //  */
        // pauseTracking();

        Object.assign(params, {
            ...params,
            ...query,
            offset: +(query.offset as string),
            limit: +(query.limit as string),
        });

        // enableTracking();

        refresh();
    }, 300)
);
</script>
