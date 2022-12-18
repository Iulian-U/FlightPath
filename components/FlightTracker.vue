<script setup>
import WorldMapWhite from "/images/world-map-white.png";
import WorldMapDark from "/images/world-map-dark.png";
const colorMode = useColorMode();
</script>

<template>
  <div id="wrapper">
    <img
      :src="colorMode.preference == 'light' ? WorldMapWhite : WorldMapDark"
      alt="world-map"
      class="bg-image"
    />
    <FeaturesSearchFlight />
    <FeaturesDisplayFlight />
  </div>
</template>

<style scoped>
#wrapper {
  @apply flex h-full w-full flex-col items-center justify-center;
}

#wrapper .bg-image {
  @apply sm:top-25 absolute top-20 w-auto object-center opacity-40 dark:opacity-25;
}
</style>
