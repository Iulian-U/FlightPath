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
  @apply flex w-full flex-col items-center justify-between rounded-tr-md rounded-tl-md border border-gray-500 border-opacity-50  lg:flex-row;
}

#header h2 {
  @apply text-2xl font-medium text-white;
}

#header p {
  @apply text-white;
}

#header div {
  @apply flex flex-col justify-center;
}

#header .airport {
  @apply items-center;
}

#header .icon {
  @apply mx-6 h-7 h-full w-7 fill-gray-300 py-4  lg:py-0;
}

#header .airline-info {
  @apply h-full w-full items-center rounded-tl-md  bg-gradient-to-tr from-indigo-500 via-indigo-600 to-blue-600 px-0 py-6 lg:w-auto lg:items-start lg:rounded-tl-md lg:px-6 lg:py-0;
}

#header .travel-info {
  @apply w-full flex-col items-center justify-around py-6 lg:mt-0 lg:mb-0 lg:flex lg:w-auto lg:flex-row lg:py-0;
}

#header .travel-info .airport h2 {
  @apply text-gray-300;
}

#header .travel-info .airport p {
  @apply text-cyan-400;
}

#header .flight-status {
  @apply w-full flex-col items-center justify-center rounded-tr-none bg-gradient-to-tr from-green-400 via-green-500 to-green-600 px-6 py-4  lg:w-auto lg:items-start lg:rounded-tr-md;
}

#header .flight-status h2 {
  @apply text-white;
}

#header .flight-status p {
  @apply text-white;
}

#body {
  @apply bg-white bg-opacity-30 bg-opacity-5 blur-md;
}
</style>
