import axios from "axios";

export const useFlightData = defineStore("flightData", () => {
  const uri = "https://airlabs.co/api/v9/flights";
  const api_key = "973900be-3312-4dd3-aee4-277b4b493460";
  let flightInfo = null;
  const flight_iata = "QR756";
  const iata_code = "ATL";

  //   const fetchFlightData = async () => {
  //     try {
  //       const { data } = await axios.get(uri, { params: { api_key, flight_iata } }).then()

  //       const { airportData } = await axios.get(uri, { params: { api_key, iata_code} });
  //       console.log(airportData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const requestOne = axios.get(uri);
  const requestTwo = axios.get(uri);

  const fetchFlightData = async () => {
    await axios.all([requestOne, requestTwo]).then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        console.log(responses);
      })
    );
  };

  return {
    flightInfo,
    uri,
    api_key,
    flight_iata,
    fetchFlightData,
  };
});

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useFlightData, import.meta.hot));
// }
