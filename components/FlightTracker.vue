<script setup>
import WorldMapWhite from '/images/world-map-white.png';
import WorldMapDark from '/images/world-map-dark.png';
const colorMode = useColorMode();
</script>

<template>
  <div id="wrapper">
    <img :src="colorMode.preference == 'light' ? WorldMapWhite : WorldMapDark" alt="world-map" class="bg-image">
    <FeaturesSearchFlight />
    <FeaturesDisplayFlight />
  </div>
</template>



<style scoped>
#wrapper {
  @apply w-full h-full flex flex-col justify-center items-center;
}

#wrapper .bg-image {
  @apply absolute w-full h-auto opacity-40 dark: opacity-25;
}
</style>
