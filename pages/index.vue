<script setup>

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
  @apply w-full h-full flex flex-col bg-blue-500 dark: bg-gray-900 transition-colors;
}

.content {
  @apply w-full h-full flex justify-center items-center;
}
</style>
