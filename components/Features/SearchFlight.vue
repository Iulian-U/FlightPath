<script setup>
import { Search } from "lucide-vue-next";
</script>

<template>
  <div class="input-container">
    <input type="text" placeholder="Search for a flight.." />
    <button class="submit-button">
      <Search class="icon" />
    </button>
  </div>
</template>

<style scoped>
.input-container {
  @apply relative z-10 flex w-full items-center justify-center px-2;
}

.input-container input {
  @apply sm:w-250 sm:h-15 h-10 w-full rounded-tl-md rounded-bl-md text-center text-base shadow-md outline-none dark:border dark:border-blue-800 dark:bg-gray-900 dark:text-white sm:text-xl;
}

.input-container input::placeholder {
  @apply opacity-45 text-gray-600 dark:opacity-100;
}

.input-container .submit-button {
  @apply w-15 sm:h-15 flex h-10 items-center justify-center rounded-tr-md rounded-br-md bg-red-400 text-white shadow-md dark:border dark:border-red-400 dark:bg-gray-900;
}

#wrapper .input-container .submit-button .icon {
  @apply h-8 w-8 dark:text-red-400;
}
</style>
