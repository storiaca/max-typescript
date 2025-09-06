import { Marker } from "./../node_modules/@types/google.maps/index.d";
import axios from "axios";
const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const apiKey = process.env.GOOGLE_API_KEY;

type MapCoordinates = { lat: number; lng: number };

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

let map: google.maps.Map;
async function initMap(coordinates: MapCoordinates): Promise<void> {
  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;
  const { Marker } = (await google.maps.importLibrary(
    "marker"
  )) as google.maps.MarkerLibrary;
  if (!map) {
    map = new Map(document.getElementById("map") as HTMLElement, {
      center: coordinates,
      zoom: 8,
    });
  }
  new Marker({
    position: coordinates,
    map,
  });
  map.setCenter(coordinates);
}

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google's API
  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${apiKey}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Cou7ld not fetc location!");
      }
      const coordinates = response.data.results[0].geometry.location;
      initMap(coordinates);
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

form?.addEventListener("submit", searchAddressHandler);
