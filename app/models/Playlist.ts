import type { Playlist as Item } from '@/app/types';

export default class Playlist {
    constructor(private item: Item) {}

    get id() {
        return this.item.id;
    }

    get name() {
        return this.item.name;
    }

    get image() {
        const image = this.item.images[0] ?? {};

        return {
            height: image.height ?? 180,
            url: image.url ?? null,
            width: image.width ?? 300,
        };
    }
}
