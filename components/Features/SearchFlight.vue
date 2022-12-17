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


<style  scoped>
.input-container {
    @apply flex justify-center items-center relative z-10 w-full px-2;
}

.input-container input {
    @apply sm: w-250 w-full sm: h-15 h-10 rounded-tl-md rounded-bl-md text-center outline-none sm: text-xl text-base shadow-md dark:bg-gray-900 dark:border dark:border-blue-800 dark:text-white;
}

.input-container input::placeholder {
    @apply text-gray-600 opacity-45 dark: opacity-100;
}

.input-container .submit-button {
    @apply w-15 sm: h-15 h-10 flex justify-center items-center bg-red-400 dark:bg-gray-900 dark:border dark:border-red-400 text-white rounded-tr-md rounded-br-md shadow-md;
}

#wrapper .input-container .submit-button .icon {
    @apply w-8 h-8 dark: text-red-400;
}
</style>
