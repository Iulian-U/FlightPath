<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <FlightTracker />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#app {
  @apply w-full h-full flex flex-col;
}

.content {
  @apply w-full h-full flex justify-center items-center;
}
</style>
