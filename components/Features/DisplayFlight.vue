<script setup>
import { Plane } from "lucide-vue-next";
const flight = useFlightStore();
const config = useRuntimeConfig();

onMounted(() => {
  flight.api_key = config.api;
});

const flight_iata = computed(() => flight.flightResult.flight_iata || "N/A");
const airline_name = computed(() => flight.flightResult.airline_name || "N/A");
const airline_iata = computed(() => flight.flightResult.airline_iata || "N/A");
const airline_icao = computed(() => flight.flightResult.airline_icao || "N/A");
const dep_iata = computed(() => flight.flightResult.dep_iata || "N/A");
const dep_icao = computed(() => flight.flightResult.dep_icao || "N/A");
const dep_name = computed(() => flight.flightResult.dep_name || "N/A ");
const arr_iata = computed(() => flight.flightResult.arr_iata || "N/A ");
const arr_icao = computed(() => flight.flightResult.arr_icao || "N/A ");
const arr_name = computed(() => flight.flightResult.arr_name || "N/A ");
const status = computed(() => flight.flightResult.status || "N/A ");
const dep_time = computed(() => flight.flightResult.dep_time || "N/A ");
const dep_actual = computed(() => flight.flightResult.dep_actual || "N/A ");
const dep_estimated = computed(() => flight.flightResult.dep_estimated || "N/A ");
const arr_time = computed(() => flight.flightResult.arr_time || "N/A ");
const arr_actual = computed(() => flight.flightResult.arr_actual || "N/A ");
const arr_estimated = computed(() => flight.flightResult.arr_estimated || "N/A ");
const dep_terminal = computed(() => flight.flightResult.dep_terminal || "N/A ");
const arr_terminal = computed(() => flight.flightResult.arr_terminal || "N/A ");
const dep_gate = computed(() => flight.flightResult.dep_gate || "N/A ");
const arr_gate = computed(() => flight.flightResult.arr_gate || "N/A ");
const lat = computed(() => flight.flightResult.lat || "N/A ");
const lng = computed(() => flight.flightResult.lng || "N/A");
const alt = computed(() => flight.flightResult.alt || "N/A");
const manufacturer = computed(() => flight.flightResult.manufacturer || "N/A ");
const model = computed(() => flight.flightResult.model || "N/A");
const reg_number = computed(() => flight.flightResult.reg_number || "N/A ");
</script>

<template>
  <DesignFlightScheleton v-if="flight.pending" />
  <div id="container" v-else>
    <header>
      <div class="airline-info">
        <h2>{{ flight_iata }}</h2>
        <p>{{ airline_name }}</p>
      </div>

      <div class="travel-info">
        <div class="airport">
          <h2>{{ dep_iata }}</h2>
          <p>{{ dep_name }}</p>
        </div>
        <Plane class="icon fly-airplane" stroke-width="1" />
        <div class="airport">
          <h2>{{ arr_iata }}</h2>
          <p>{{ arr_name }}</p>
        </div>
      </div>
      <div class="flight-status">
        <p>Status</p>
        <h2>{{ status }}</h2>
      </div>
    </header>

    <main>
      <div class="flight-info">
        <span class="badge">Departure</span>
        <div class="airport-name">
          <h2>{{ dep_name }}</h2>
          <span>
            <p>IATA: {{ dep_iata }}</p>
            <p>ICAO: {{ dep_icao }}</p>
          </span>
        </div>
        <div class="schedule-info">
          <div class="scheduled">
            <h2>Scheduled</h2>
            <p>{{ dep_time }}</p>
          </div>
          <div class="estimated">
            <h2>Estimated</h2>
            <p>
              {{ dep_estimated }}
            </p>
          </div>
          <div class="actual">
            <h2>Actual</h2>
            <p>
              {{ dep_actual }}
            </p>
          </div>
        </div>
        <div class="location-info">
          <div class="terminal">
            <span class="title">Terminal</span> <span class="info">{{ dep_terminal }}</span>
          </div>
          <div class="gate">
            <span class="title">Gate</span> <span class="info">{{ dep_gate }}</span>
          </div>
        </div>
      </div>
      <hr />
      <div class="flight-info">
        <span class="badge">Arrival</span>
        <div class="airport-name">
          <h2>{{ arr_name }}</h2>
          <span>
            <p>IATA: {{ arr_iata }}</p>
            <p>ICAO: {{ arr_icao }}</p>
          </span>
        </div>
        <div class="schedule-info">
          <div class="scheduled">
            <h2>Scheduled</h2>
            <p>{{ arr_time }}</p>
          </div>
          <div class="estimated">
            <h2>Estimated</h2>
            <p>
              {{ arr_estimated }}
            </p>
          </div>
          <div class="actual">
            <h2>Actual</h2>
            <p>
              {{ arr_actual }}
            </p>
          </div>
        </div>
        <div class="location-info">
          <div class="terminal">
            <span class="title">Terminal</span> <span class="info">{{ arr_terminal }}</span>
          </div>
          <div class="gate">
            <span class="title">Gate</span> <span class="info">{{ arr_gate }}</span>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <div>
        <span class="badge">Aircraft Location</span>
        <span
          ><p class="title">Latitude:</p>
          <p class="info">{{ lat }}</p></span
        >
        <span
          ><p class="title">Longitude:</p>
          <p class="info">{{ lng }}</p></span
        >
        <span
          ><p class="title">Altitude:</p>
          <p class="info">{{ alt }}</p></span
        >
      </div>
      <div>
        <span class="badge">Aircraft Type</span>
        <span
          ><p class="title">Manufacturer:</p>
          <p class="info">{{ manufacturer }}</p></span
        >
        <span
          ><p class="title">Model:</p>
          <p class="info">{{ model }}</p></span
        >
        <span
          ><p class="title">Registration:</p>
          <p class="info">{{ reg_number }}</p></span
        >
      </div>
      <div>
        <span class="badge">Airline</span>
        <span
          ><p class="title">Name:</p>
          <p class="info">{{ airline_name }}</p></span
        >
        <span
          ><p class="title">IATA:</p>
          <p class="info">{{ airline_iata }}</p></span
        >
        <span
          ><p class="title">ICAO:</p>
          <p class="info">{{ airline_icao }}</p></span
        >
      </div>
    </footer>
  </div>
</template>

<style scoped>
#container {
  @apply lg:w-265 relative mt-6 flex w-full flex-col px-4 lg:px-0;
}

header {
  @apply flex w-full flex-col items-center justify-between rounded-tr-md rounded-tl-md border border-gray-500 border-opacity-50  lg:flex-row;
}

header h2 {
  @apply text-2xl font-medium text-white;
}

header p {
  @apply text-white;
}

header div {
  @apply flex flex-col justify-center;
}

header .airport {
  @apply items-center;
}

header .icon {
  @apply mx-6 h-7 h-full w-7 fill-gray-300 py-4  lg:py-0;
}

header .airline-info {
  @apply lg:w-50 w-full flex-col items-center justify-center bg-gradient-to-tr from-indigo-400 via-indigo-500 to-indigo-600 px-6  py-4 lg:items-start lg:rounded-tl-md;
}

header .travel-info {
  @apply w-full flex-col items-center justify-around py-6 lg:mt-0 lg:mb-0 lg:flex lg:w-auto lg:flex-row lg:py-0;
}

header .travel-info .airport h2 {
  @apply text-gray-300;
}

header .travel-info .airport p {
  @apply text-cyan-400;
}

header .flight-status {
  @apply lg:w-50 w-full flex-col items-center justify-center rounded-tr-none bg-gradient-to-tr from-green-400 via-green-500 to-green-600 px-6  py-4 lg:items-start lg:rounded-tr-md;
}

header .flight-status h2 {
  @apply text-white;
}

header .flight-status p {
  @apply text-white;
}

main {
  @apply mt-2 flex flex-col justify-between  border border-gray-500 border-opacity-50 bg-black bg-opacity-20 blur-sm lg:flex-row;
}

main hr {
  @apply my-auto h-full border border-gray-500 border-opacity-40;
}

main .flight-info {
  @apply flex w-full flex-col items-center justify-center  py-4;
}

main .badge {
  @apply w-30 flex justify-center rounded border  border-blue-100 bg-blue-50 bg-opacity-10 p-1 text-sm font-medium text-blue-100;
}

main .airport-name {
  @apply flex flex-col items-center justify-center py-4;
}

main .airport-name h2 {
  @apply text-xl text-gray-300;
}

main .airport-name p {
  @apply text-sm text-cyan-400;
}

main .airport-name span {
  @apply w-50 flex justify-around;
}

main .schedule-info {
  @apply flex  flex-col items-center  lg:flex-row;
}
main .schedule-info h2 {
  @apply font-semibold text-gray-300;
}

main .schedule-info p {
  @apply text-sm font-thin italic text-gray-100;
}

main .schedule-info .scheduled,
.estimated,
.actual {
  @apply flex w-full flex-col items-center justify-center border border-gray-500 border-opacity-50  px-4 py-2 lg:w-40;
}

main .location-info {
  @apply lg:w-90 mt-4 flex w-full flex-col items-center justify-around  py-2 text-white lg:flex-row;
}

main .location-info div {
  @apply w-30 flex items-center justify-around text-sm;
}
main .location-info div .title {
  @apply w-20 rounded-tl-md rounded-bl-md border border-green-400 bg-green-300 bg-opacity-10 py-1 px-2 text-center text-white;
}

main .location-info div .info {
  @apply w-15 rounded-tr-md rounded-br-md border-t border-b border-r border-green-400 py-1 px-4 text-center text-white;
}

main .location-info .gate {
  @apply mt-4 lg:mt-0;
}

footer {
  @apply mb-2 mt-2 flex flex-col items-center justify-around  border border-gray-500 border-opacity-50 bg-black bg-opacity-20 blur-sm lg:flex-row;
}

footer div {
  @apply flex w-auto flex-col  py-4;
}

footer div .badge {
  @apply w-35 mb-4 flex justify-center  rounded border border-blue-100 bg-blue-50 bg-opacity-10 p-1 text-sm font-medium text-blue-100;
}

footer div span {
  @apply flex py-2  text-sm text-gray-100;
}

footer div span .title {
  @apply mr-2 text-sm font-semibold;
}
</style>
