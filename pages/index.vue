<script setup>

</script>

<template>
  <div id="app">
    <MainNavbar />
    <div class="content">
      <FlightTracker />
    </div>
  </div>
</template>



<style scoped>
#app {
  @apply w-full h-full flex flex-col bg-sky-400 dark: bg-dark-[#0C0E10] transition-colors;
}

.content {
  @apply w-full h-full flex justify-center items-center;
}
</style>
