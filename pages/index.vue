<template>
  <div id="app">
    <MainNavbar />
    <div class="content">
      <FlightTracker />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#app {
  @apply w-full h-full flex flex-col bg-sky-400 dark: bg-sky-800 transition-colors;
}

.content {
  @apply w-full h-full flex justify-center items-center;
}
</style>
