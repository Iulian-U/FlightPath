import axios from "axios";

export const useFlightStore = defineStore("flightStore", {
  state: () => ({
    flightURI: "https://airlabs.co/api/v9/flight",
    api_key: "973900be-3312-4dd3-aee4-277b4b493460",
    flight_iata: "",
    flightResult: {
      flight_iata: "NH647",
      dep_iata: "HND",
      dep_icao: "RJTT",
      arr_iata: "KMJ",
      arr_icao: "RJFT",
      status: "planned",
      airline_name: "All Nippon Airways",
      airline_iata: "NH",
      airline_icao: "ANA",
      dep_name: "Tokyo International Airport",
      arr_name: "Kumamoto Airport",
      arr_time: "2033-01-05 19:35",
      arr_estimated: "N/A",
      arr_actual: "N/A",
      dep_time: "2033-01-05 17:40",
      dep_estimated: "N/A",
      dep_actual: "N/A",
      dep_terminal: "22",
      arr_terminal: "12",
      dep_gate: "B25",
      arr_gate: "A18",
      lat: "N/A",
      lng: "N/A",
      alt: "N/A",
      manufacturer: "Boeing",
      model: "Boeing 787-8 pax",
      reg_number: "JA811A",
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
              this.errorMessage.state = true;
              this.errorMessage.message = "Sorry! We were not able to find this flight!";
              this.pending = false;
              console.log(this.errorMessage.message);
              console.log(response);
              break;
            case "wrong_params":
              this.errorMessage.state = true;
              this.errorMessage.message = "Please enter a valid flight Number";
              this.pending = false;
              console.log(this.errorMessage.message);
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
