<script setup>
import logoColor from '/images/plane-logo-color.png'
import logoWhite from '/images/plane-logo-white.png'
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
  @apply flex items-center bg-white dark: bg-blue-600 p-4 rounded-md shadow-sm h-12;
}

p {
  @apply ml-1 text-2xl antialiased font-bold tracking-normal text-sky-500 dark: text-white;
}

img {
  @apply h-10 rounded-md;
}
</style>
