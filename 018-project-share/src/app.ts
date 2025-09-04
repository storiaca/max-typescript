const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const apiKey = process.env.GOOGLE_API_KEY;

console.log(apiKey);

function searchAddressHandler(event: Event) {
  event.preventDefault();
  // const enteredAddress = addressInput.value;

  // send this to Google's API
}

form?.addEventListener("submit", searchAddressHandler);
