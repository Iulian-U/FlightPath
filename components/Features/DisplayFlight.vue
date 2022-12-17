<script setup>
import { Plane } from "lucide-vue-next";
</script>

<template>
    <div id="container">
        <div id="header">
            <div class="airline-info">
                <span class="flight-number">UA2402</span>
                <span class="airline-name">United Airlines (UA)</span>
            </div>

            <div class="travel-info">
                <div class="departure-airport">
                    <span class="airport-shortname">LAX</span>
                    <span class="airport-longname">Los Angeles Int.</span>
                </div>
                <Plane class="icon" />
                <div class="arrival-airport">
                    <span class="airport-shortname">BOS</span>
                    <span class="airport-longname">Logan Int.</span>
                </div>

            </div>
            <div class="flight-status">
                <span class="travel-status">Airborne</span>
                <span class="delay-status">On Time</span>
            </div>
        </div>
        <div class="body">
            <p>Test</p>
        </div>
    </div>
</template>



<style scoped>
#container {
    @apply relative flex flex-col mt-10 sm: w-265 w-full h-100;
}

#header {
    @apply w-full flex flex-row justify-between items-center bg-white dark: text-white dark: bg-gray-900 dark:border-l dark:border-t dark:border-r dark:border-blue-800 rounded-tl-md rounded-tr-md;
}

#header .airline-info,
.flight-status {
    @apply flex flex-col justify-center;
}

#header .travel-info .departure-airport,
.arrival-airport {
    @apply flex flex-col justify-center items-center;
}

#header .travel-info .icon {
    @apply mx-6;
}

#header .airline-info {
    @apply pl-6;
}

#header .airline-info .flight-number {
    @apply text-2xl font-medium;
}

#header .travel-info {
    @apply flex flex-row justify-around items-center;
}

#header .travel-info .airport-shortname {
    @apply text-2xl font-medium;
}

#header .flight-status {
    @apply bg-emerald-400 px-6 py-4 text-white;
}

#header .flight-status .travel-status {
    @apply text-2xl font-medium;
}

#container .body {
    @apply bg-white bg-opacity-30 dark: bg-opacity-5 dark:border-l dark:border-r dark:border-b dark:border-blue-800 blur-md h-40;
}
</style>
