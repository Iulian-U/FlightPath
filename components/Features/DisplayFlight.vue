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



<style scoped>
#container {
    @apply relative flex flex-col mt-10 lg: w-265 w-full h-100 lg:px-0 px-2;
}

#header {
    @apply w-full flex flex-col lg: flex-row justify-between items-center bg-white dark: text-white dark: bg-gray-900 dark:border-l dark:border-t dark:border-r dark:border-blue-800 lg:rounded-tl-md lg:rounded-tr-md rounded-none;
}

#header h2 {
    @apply text-2xl font-medium text-gray-600 dark: text-white;
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
    @apply lg: py-0 py-4 w-7 h-7 mx-6 h-full fill-gray-700 dark: fill-white;
}

#header .airline-info {
    @apply bg-gray-100 dark: bg-transparent h-full lg: px-6 px-0 lg:py-0 py-6 lg: w-auto w-full lg:items-start items-center lg:rounded-tl-md rounded-none;
}

#header .travel-info {
    @apply lg: py-0 py-6 lg: w-auto w-full flex flex-col lg: flex-row justify-around items-center lg:mt-0 lg:mb-0;
}

#header .flight-status {
    @apply bg-emerald-400 dark: bg-transparent px-6 py-4 w-full lg: w-auto flex-col justify-center lg:items-start items-center lg:rounded-tr-md rounded-none;
}

#header .flight-status h2 {
    @apply text-white dark: text-emerald-400;
}

#header .flight-status p {
    @apply text-white dark: text-emerald-400;
}

#body {
    @apply bg-white bg-opacity-30 dark: bg-opacity-5 dark:border-l dark:border-r dark:border-b dark:border-blue-800 blur-md h-40;
}
</style>
