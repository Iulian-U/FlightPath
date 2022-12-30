import axios from "axios";

export const useFlightStore = defineStore("flightStore", {
  state: () => ({
    flightURI: "https://airlabs.co/api/v9/flight",
    api_key: "973900be-3312-4dd3-aee4-277b4b493460",
    flight_iata: "",
    flightResult: {
      flight_iata: "UXGDS",
      dep_iata: "LAX",
      arr_iata: "BOS",
      status: "Airborne",
      airline_name: "UA - Unites Airlines",
      dep_name: "Los Angeles Int.",
      arr_name: "Logan Int.",
      arr_time: "00000",
      arr_estimated: "0000",
      arr_actual: "0000",
      dep_time: "0000",
      dep_estimated: "0000",
      dep_actual: "0000",
    },
    pending: false,
    errorMessage: {
      state: false,
      message: "",
    },
  }),

  actions: {
    async fetchFlightData() {
      this.pending = true;
      await axios
        .get(this.flightURI, { params: { api_key: this.api_key, flight_iata: this.flight_iata } })
        .then((response) => {
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
    },
  },
});
