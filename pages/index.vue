<script setup>
const colorMode = useColorMode();

const bgLightColor = "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)";
const bgDarkColor = "#111827";

const bgURL = computed(() => {
  return colorMode.preference == "light" ? bgLightColor : bgDarkColor;
});

watchEffect(colorMode, bgURL, {
  deep: true,
  immediate: true,
});
</script>

<template>
  <div id="app">
    <MainNavbar class="z-20" />
    <div class="content">
      <FlightTracker />
    </div>
  </div>
</template>

<style scoped>
#app {
  @apply flex h-full w-full flex-col transition-colors;
  background: v-bind(bgURL);
}

.content {
  @apply flex h-full w-full items-center justify-center;
}
</style>
