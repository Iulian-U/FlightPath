import axios from "axios";

export const useFlightData = defineStore("flightData", () => {
  const flightURI = "https://airlabs.co/api/v9/flight";
  const api_key = "973900be-3312-4dd3-aee4-277b4b493460";
  let flight_iata = "XXXX";

  let flightResult = {
    flight_iata: "UXGDS",
    dep_iata: "LAX",
    arr_iata: "BOS",
    status: "Airborne",
    airline_name: "UA - Unites Airlines",
    dep_name: "Los Angeles Int.",
    arr_name: "Logan Int.",
  };

  let pending = false;

  let errorMessage = {
    state: false,
    message: "",
  };

  async function fetchFlightData() {
    this.pending = true;
    await axios.get(flightURI, { params: { api_key, flight_iata } }).then((response) => {
      switch (response.data.error && response.data.error.code) {
        case "not_found":
          errorMessage.state = true;
          errorMessage.message = "Sorry! We were not able to find this flight!";
          this.pending = false;
          console.log(errorMessage.message);
          console.log(response);
          break;
        case "wrong_params":
          errorMessage.state = true;
          errorMessage.message = "Please enter a valid flight Number";
          this.pending = false;
          console.log(errorMessage.message);
          break;
        default:
          console.log(response);
          this.flightResult = response.data.response;
          this.pending = false;
          break;
      }
    });
  }

  return {
    flightResult,
    fetchFlightData,
    pending,
    flight_iata,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFlightData, import.meta.hot));
}
