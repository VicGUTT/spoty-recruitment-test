import type { PlaylistCollection as Collection } from '@/app/types';
import Playlist from '@/app/models/Playlist';

export default class PlaylistCollection {
    constructor(private data: Collection) {}

    get isEmpty() {
        return !this.items.length;
    }

    get hasPagination() {
        return !!this.previous || !!this.next;
    }

    get items() {
        return this.data.items.map((item) => new Playlist(item));
    }

    get limit() {
        return this.data.limit;
    }

    get next() {
        return this.data.next;
    }

    get offset() {
        return this.data.offset;
    }

    get previous() {
        return this.data.previous;
    }
}
