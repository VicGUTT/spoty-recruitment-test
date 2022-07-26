/**
 * @see https://github.com/alpinejs/alpine/blob/4654eb023e760920fa957d7b3e43a599cb88023d/packages/alpinejs/src/utils/debounce.js
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function debounce(callback: Function, wait: number) {
    let timeout: NodeJS.Timeout | undefined;

    return function (...args: unknown[]) {
        const context = this; // eslint-disable-line @typescript-eslint/no-this-alias

        const later = function () {
            timeout = undefined;

            callback.apply(context, args);
        };

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);
    };
}
