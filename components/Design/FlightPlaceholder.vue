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
      <div class="flight-info">
        <span class="badge">Departure</span>
        <div class="airport-name">
          <h2>Los Angeles International</h2>
          <p>IATA: LAX</p>
        </div>
        <div class="schedule-info">
          <div class="scheduled">
            <h2>Scheduled</h2>
            <p>2022-12-25 23:00</p>
          </div>
          <div class="estimated">
            <h2>Estimated</h2>
            <p>2022-12-25 23:00</p>
          </div>
        </div>
      </div>
      <hr />
      <div class="flight-info">
        <span class="badge">Arrival</span>
        <div class="airport-name">
          <h2>Logan International</h2>
          <p>IATA: BOS</p>
        </div>
        <div class="schedule-info">
          <div class="scheduled">
            <h2>Scheduled</h2>
            <p>2022-12-25 23:00</p>
          </div>
          <div class="estimated">
            <h2>Estimated</h2>
            <p>2022-12-25 23:00</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="container">
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
          <h2>{{ flight.flightResult.dep_iata }}</h2>
          <p>{{ flight.flightResult.dep_name }}</p>
        </div>
        <Plane class="icon fly-airplane" stroke-width="1" />
        <div class="airport">
          <h2>{{ flight.flightResult.arr_iata }}</h2>
          <p>{{ flight.flightResult.arr_name }}</p>
        </div>
      </div>
      <div class="flight-status">
        <p>Status</p>
        <h2>{{ flight.flightResult.status }}</h2>
      </div>
    </div>
    <div id="body">
      <div class="flight-info">
        <span class="badge">Departure</span>
        <div class="airport-name">
          <h2>{{ flightInfo.flightResult.dep_name }}</h2>
          <p>IATA: {{ flightInfo.flightResult.dep_iata }}</p>
        </div>
        <div class="schedule-info">
          <div class="scheduled">
            <h2>Scheduled</h2>
            <p>2022-12-25 23:00</p>
          </div>
          <div class="estimated">
            <h2>Estimated</h2>
            <p>2022-12-25 23:00</p>
          </div>
        </div>
      </div>
      <hr />
      <div class="flight-info">
        <span class="badge">Arrival</span>
        <div class="airport-name">
          <h2>{{ flightInfo.flightResult.arr_name }}</h2>
          <p>IATA: {{ flightInfo.flightResult.arr_iata }}</p>
        </div>
        <div class="schedule-info">
          <div class="scheduled">
            <h2>Scheduled</h2>
            <p>2022-12-25 23:00</p>
          </div>
          <div class="estimated">
            <h2>Estimated</h2>
            <p>2022-12-25 23:00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#container {
  @apply lg:w-265 relative mt-6 flex w-full flex-col  px-4 lg:px-0;
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
  @apply mt-2 flex flex-row  justify-between border border-gray-500 border-opacity-50 bg-black bg-opacity-20 blur-sm;
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
  @apply flex flex-row items-center;
}
#body .schedule-info h2 {
  @apply font-semibold text-gray-300;
}

#body .schedule-info p {
  @apply text-sm font-thin  text-gray-300;
}

#body .schedule-info .scheduled,
.estimated {
  @apply flex flex-col items-center justify-center border border-gray-500 border-opacity-50 px-4 py-2;
}
</style>
