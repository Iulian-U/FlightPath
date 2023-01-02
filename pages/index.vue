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
  @apply flex w-full flex-col bg-gray-900;
  background-image: url("/images/dots-bg.png");
}

.content {

  @apply mt-10 flex h-full w-full items-center justify-center;

  @apply mt-10 flex h-full w-full items-center justify-center lg:bg-contain bg-cover ;

}
</style>
