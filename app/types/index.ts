export type SearchType = 'name' | 'genre';

export type SearchParams = {
    type?: SearchType;
    term?: string;
    limit?: number;
    offset?: number;
};

export type Playlist = {
    collaborative: boolean;
    description: string;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: [
        {
            height: number | null;
            url: string;
            width: number | null;
        }
    ];
    name: string;
    owner: {
        display_name: string;
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
    };
    primary_color: unknown | null;
    public: unknown | null;
    snapshot_id: string;
    tracks: {
        href: string;
        total: number;
    };
    type: string;
    uri: string;
};

export type PlaylistCollection = {
    href: string;
    items: Playlist[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
};
