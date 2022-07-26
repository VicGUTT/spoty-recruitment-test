<template>
    <!-- @see https://cssloaders.github.io -->
    <span class="loader" v-show="active" aria-label="Chargement, veuillez patienter..."></span>
</template>

<script lang="ts" setup>
const { active } = defineProps({
    active: {
        type: Boolean,
    },
});
</script>

<style>
:where(.loader) {
    width: 24px;
    height: 24px;
    border: 2px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
