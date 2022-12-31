<script setup>
import { Plane } from "lucide-vue-next";

const flight = useFlightStore();
</script>

<template>
  <DesignFlightScheleton v-if="flight.pending" />
  <div id="container" v-else>
    <div id="header">
      <div class="airline-info">
        <h2>
          {{ flight.flightResult.flight_iata != null ? flight.flightResult.flight_iata : "N/A" }}
        </h2>
        <p>
          {{ flight.flightResult.airline_name != null ? flight.flightResult.airline_name : "N/A" }}
        </p>
      </div>

      <div class="travel-info">
        <div class="airport">
          <h2>{{ flight.flightResult.dep_iata != null ? flight.flightResult.dep_iata : "N/A" }}</h2>
          <p>{{ flight.flightResult.dep_name != null ? flight.flightResult.dep_name : "N/A" }}</p>
        </div>
        <Plane class="icon fly-airplane" stroke-width="1" />
        <div class="airport">
          <h2>{{ flight.flightResult.arr_iata != null ? flight.flightResult.arr_iata : "N/A" }}</h2>
          <p>{{ flight.flightResult.arr_name != null ? flight.flightResult.arr_name : "N/A" }}</p>
        </div>
      </div>
      <div class="flight-status">
        <p>Status</p>
        <h2>{{ flight.flightResult.status != null ? flight.flightResult.status : "N/A" }}</h2>
      </div>
    </div>

    <div id="body">
      <div class="flight-info">
        <span class="badge">Departure</span>
        <div class="airport-name">
          <h2>{{ flight.flightResult.dep_name != null ? flight.flightResult.dep_name : "N/A" }}</h2>
          <p>
            IATA: {{ flight.flightResult.dep_iata != null ? flight.flightResult.dep_iata : "N/A" }}
          </p>
        </div>
        <div class="schedule-info">
          <div class="scheduled">
            <h2>Scheduled</h2>
            <p>{{ flight.flightResult.dep_time != null ? flight.flightResult.dep_time : "N/A" }}</p>
          </div>
          <div class="estimated">
            <h2>Estimated</h2>
            <p>
              {{
                flight.flightResult.dep_estimated != null
                  ? flight.flightResult.dep_estimated
                  : "N/A"
              }}
            </p>
          </div>
          <div class="actual">
            <h2>Actual</h2>
            <p>
              {{ flight.flightResult.dep_actual != null ? flight.flightResult.dep_actual : "N/A" }}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="flight-info">
        <span class="badge">Arrival</span>
        <div class="airport-name">
          <h2>{{ flight.flightResult.arr_name != null ? flight.flightResult.arr_name : "N/A" }}</h2>
          <p>
            IATA: {{ flight.flightResult.arr_iata != null ? flight.flightResult.arr_iata : "N/A" }}
          </p>
        </div>
        <div class="schedule-info">
          <div class="scheduled">
            <h2>Scheduled</h2>
            <p>{{ flight.flightResult.arr_time != null ? flight.flightResult.arr_time : "N/A" }}</p>
          </div>
          <div class="estimated">
            <h2>Estimated</h2>
            <p>
              {{
                flight.flightResult.arr_estimated != null
                  ? flight.flightResult.arr_estimated
                  : "N/A"
              }}
            </p>
          </div>
          <div class="actual">
            <h2>Actual</h2>
            <p>
              {{ flight.flightResult.arr_actual != null ? flight.flightResult.arr_actual : "N/A" }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="footer"></div>
  </div>
</template>

<style scoped>
#container {
  @apply lg:w-265 relative mt-6 flex w-full flex-col px-4 lg:px-0;
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
  @apply w-full flex-col items-center justify-center rounded-tr-none bg-gradient-to-tr from-indigo-400 via-indigo-500 to-indigo-600 px-6 py-4  lg:w-auto lg:items-start lg:rounded-tr-md;
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
  @apply mt-2 flex flex-col justify-between  border border-gray-500 border-opacity-50 bg-black bg-opacity-20 blur-sm lg:flex-row;
}

#body hr {
  @apply my-auto h-full border border-gray-500 border-opacity-40;
}

#body .flight-info {
  @apply flex w-full flex-col items-center justify-center  py-4;
}

#body .badge {
  @apply inline-flex items-center rounded bg-blue-100 px-5 py-2 text-xs font-medium text-blue-800;
}

#body .airport-name {
  @apply flex flex-col items-center justify-center py-4;
}

#body .airport-name h2 {
  @apply text-xl text-gray-300;
}

#body .airport-name p {
  @apply text-sm text-cyan-400;
}

#body .schedule-info {
  @apply flex flex-col items-center lg:flex-row;
}
#body .schedule-info h2 {
  @apply font-semibold text-gray-300;
}

#body .schedule-info p {
  @apply text-sm font-thin italic text-gray-100;
}

#body .schedule-info .scheduled,
.estimated,
.actual {
  @apply flex w-40 flex-col items-center justify-center border border-gray-500 border-opacity-50 px-4 py-2;
}
</style>
