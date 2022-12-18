<script setup>
import { Plane } from "lucide-vue-next";
</script>

<template>
  <div id="container">
    <div id="header">
      <div class="airline-info">
        <h2>UA2402</h2>
        <p>United Airlines (UA)</p>
      </div>

      <div class="travel-info">
        <div class="airport">
          <h2>LAX</h2>
          <p>Los Angeles Int.</p>
        </div>
        <Plane class="icon fly-airplane" stroke-width="1" />
        <div class="airport">
          <h2>BOS</h2>
          <p>Logan Int.</p>
        </div>
      </div>
      <div class="flight-status">
        <h2>Airborne</h2>
        <p>On Time</p>
      </div>
    </div>
    <div id="body">
      <p>Test</p>
    </div>
  </div>
</template>

<style>
#container {
  @apply lg:w-265 h-100 relative mt-10 flex w-full flex-col px-4 lg:px-0;
}

#header {
  @apply flex w-full flex-col items-center justify-between rounded-tr-md rounded-tl-md bg-white dark:border-l dark:border-t dark:border-r dark:border-blue-800 dark:bg-gray-900 dark:text-white lg:flex-row;
}

#header h2 {
  @apply text-2xl font-medium text-gray-600 dark:text-white;
}

#header p {
  @apply text-gray-500;
}

#header div {
  @apply flex flex-col justify-center;
}

#header .airport {
  @apply items-center;
}

#header .icon {
  @apply mx-6 h-7 h-full w-7 fill-gray-700 py-4 dark:fill-white lg:py-0;
}

#header .airline-info {
  @apply h-full w-full items-center rounded-tl-md rounded-tr-md bg-gray-100 px-0 py-6 dark:bg-transparent lg:w-auto lg:items-start lg:rounded-tl-md lg:px-6 lg:py-0;
}

#header .travel-info {
  @apply w-full flex-col items-center justify-around py-6 lg:mt-0 lg:mb-0 lg:flex lg:w-auto lg:flex-row lg:py-0;
}

#header .flight-status {
  @apply w-full flex-col items-center justify-center rounded-tr-none bg-emerald-400 px-6 py-4 dark:bg-transparent lg:w-auto lg:items-start lg:rounded-tr-md;
}

#header .flight-status h2 {
  @apply text-white dark:text-emerald-400;
}

#header .flight-status p {
  @apply text-white dark:text-emerald-400;
}

#body {
  @apply bg-white bg-opacity-30 bg-opacity-5 blur-md dark:h-40 dark:border-l dark:border-r dark:border-b dark:border-blue-800;
}
</style>
