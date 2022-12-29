<script setup>
import { Plane } from "lucide-vue-next";

const uri = "https://airlabs.co/api/v9/flights";
const api_key = "973900be-3312-4dd3-aee4-277b4b493460";
const flight_iata = "QR756";
let flightData = reactive([]);
let pending = ref(false);

const fetchFlight = async () => {
  pending.value = true;
  try {
    await useFetch(uri, {
      query: { api_key, flight_iata },
    }).then((value) => {
      console.log(value);
    });
  } catch (error) {
    console.log(error);
  } finally {
    pending.value = false;
  }
};

const flightInfo = useFlightData();

// async function fetchData() {
//   pending.value = true;
//   try {
//     flightData.value = await useFetch(uri, {
//       query: { api_key, flight_iata },
//     });
//   } catch (err) {
//     console.log(err);
//   } finally {
//     pending.value = false;
//   }
// }

// const searchFlight = async () => {
//   const { data, pending, error, refresh } = await useFetch(uri, {
//     query: { api_key, flight_iata },
//   });
//   flightData.push(data.value.response[0]);
// };
</script>

<template>
  <button class="bg-red-300 p-4" @click="flightInfo.fetchFlightData()">test</button>
  <DesignFlightPlaceholder v-if="flightData.length === 0 && !pending" />
  <div class="bg-white" v-else>
    {{ flightData }}
  </div>
  <DesignFlightScheleton v-show="pending" />
</template>

<style></style>
