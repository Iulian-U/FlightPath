<script setup>
import logoColor from "/images/plane-logo-color.png";
import logoWhite from "/images/plane-logo-white.png";
const colorMode = useColorMode();
</script>

<template>
  <a>
    <img :src="colorMode.preference == 'light' ? logoColor : logoWhite" alt="logo" />
    <p>FlightPath</p>
  </a>
</template>

<style scoped>
a {
  @apply flex h-12 items-center rounded-md bg-white p-4 shadow-sm dark:border dark:border-blue-800 dark:bg-gray-900;
}

p {
  @apply ml-1 text-2xl font-bold tracking-normal text-sky-500 antialiased dark:text-white;
}

img {
  @apply h-10 rounded-md;
}
</style>
