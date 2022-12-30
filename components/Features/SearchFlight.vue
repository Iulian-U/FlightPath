<script setup>
import { Search } from "lucide-vue-next";
const flight = useFlightStore();
let newIataFlight = ref("");
const handleSubmit = () => {
  flight.flight_iata = newIataFlight;
  flight.fetchFlightData();
  newIataFlight.value = "";
};
</script>

<template>
  <form class="input-container" @submit.prevent="handleSubmit()">
    <input type="text" placeholder="Search for a flight.." v-model="newIataFlight" />
    <button class="submit-button">
      <Search class="icon" />
    </button>
  </form>
</template>

<style scoped>
.input-container {
  @apply z-10 flex w-full items-center justify-center px-4;
}

.input-container input {
  @apply sm:w-250 h-15 w-full rounded-tl-md rounded-bl-md border border-gray-500 border-opacity-50 bg-transparent text-center text-base  text-white outline-none sm:text-xl;
}

.input-container input::placeholder {
  @apply opacity-45 text-white;
}

.input-container .submit-button {
  @apply w-15 h-15 flex  items-center justify-center rounded-tr-md rounded-br-md bg-gradient-to-r from-blue-500 to-blue-600 text-white;
}

#wrapper .input-container .submit-button .icon {
  @apply h-8 w-8;
}
</style>
