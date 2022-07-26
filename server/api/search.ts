import type { PlaylistCollection, SearchType } from '@/app/types';
import SpotifyWebApi from 'spotify-web-api-node';

const config = useRuntimeConfig();

const spotifyApi = new SpotifyWebApi({
    clientId: config.spotify.client.id,
    clientSecret: config.spotify.client.secret,
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
    function (data) {
        spotifyApi.setAccessToken(data.body.access_token);
    },
    function (err) {
        console.log('Something went wrong when retrieving an access token', err);
    }
);

/**
 * @see http://localhost:3000/api/search
 */
export default defineEventHandler(async ({ req: { url } }) => {
    const query = new URL(url ?? '', 'https://example.com').searchParams;
    const type = (query.get('type') as SearchType) ?? '';
    const term = query.get('term') ?? '';
    const params = {
        limit: +(query.get('limit') as string) || undefined,
        offset: +(query.get('offset') as string) || undefined,
    };

    async function go() {
        if (!term) {
            return await spotifyApi.getFeaturedPlaylists({ ...params, country: 'us' });
        }

        if (type === 'genre') {
            return await spotifyApi.getPlaylistsForCategory(term, params); // Genres ? 🤷‍♂️
        }

        return await spotifyApi.searchPlaylists(term, params);
    }

    try {
        // return (await go()).body.playlists as PlaylistCollection;
        return (await go()).body.playlists;
    } catch (error) {
        // Very quick & dirty "kinda" error handling
        return {
            href: '',
            items: [],
            limit: 20,
            next: null,
            offset: 0,
            previous: null,
            total: 0,
        } as PlaylistCollection;
    }
});
