<script setup>
const colorMode = useColorMode();

const bgLightColor = "url('/images/world-map-light.png')";
const bgDarkColor = "url('/images/world-map-dark.png')";

const bgURL = computed(() => {
  return colorMode.preference == "light" ? bgLightColor : bgDarkColor;
});

watchEffect(colorMode, bgURL, {
  deep: true,
  immediate: true,
});
</script>

<template>
  <div id="wrapper">
    <!-- <img
      :src="colorMode.preference == 'light' ? WorldMapWhite : WorldMapDark"
      alt="world-map"
      class="bg-image"
    /> -->
    <FeaturesSearchFlight />
    <FeaturesDisplayFlight />
  </div>
</template>

<style scoped>
#wrapper {
  @apply flex h-full w-full flex-col items-center justify-center;
  background-image: v-bind(bgURL);
  background-position: center;
  background-size: fit;
  background-repeat: no-repeat;
}

#wrapper .bg-image {
  @apply sm:top-25 absolute top-20  h-auto object-center opacity-40 dark:opacity-25;
}
</style>
