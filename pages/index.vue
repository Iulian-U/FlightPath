<script setup></script>

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
  @apply flex h-full w-full flex-col bg-blue-500 transition-colors dark:bg-gray-900;
}

.content {
  @apply flex h-full w-full items-center justify-center;
}
</style>
