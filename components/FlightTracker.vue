<script setup></script>

<template>
  <div id="wrapper">
    <FeaturesSearchFlight />
    <FeaturesDisplayFlight />
  </div>
</template>

<style scoped>
#wrapper {
  @apply flex h-full w-full flex-col items-center justify-center;
  background-image: url("../public/images/world-map-dark.png");
  background-position: center;
  background-size: cover;
}
</style>
