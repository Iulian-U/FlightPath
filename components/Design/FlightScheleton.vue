<template>
  <div id="container">
    <div class="header animate-pulse">
      <div class="item animate-pulse"></div>
      <div class="item animate-pulse"></div>
      <div class="item animate-pulse"></div>
    </div>
    <div class="body animate-pulse">
      <div class="side animate-pulse">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div class="side animate-pulse">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </div>

  <div id="container">
    <div class="body animate-pulse">
      <div class="side animate-pulse">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#container {
  @apply lg:w-265 relative mt-6 flex w-full flex-col lg:px-0;
}

#container .header {
  @apply h-25 flex w-full flex-row items-center justify-around overflow-hidden rounded-md bg-gray-700;
}

#container .header .item {
  @apply h-10 w-60 rounded-md bg-gray-800;
}

#container .body {
  @apply h-55 mt-2 flex w-full flex-row justify-between overflow-hidden rounded-md bg-gray-700;
}

#container .body .side {
  @apply flex h-full w-full flex-col justify-around p-4;
}

#container .body .side .item {
  @apply h-10 w-full rounded-md bg-gray-800;
}
</style>
