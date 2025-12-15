export {
  resetGif,
  resetWeatherInformation,
  gif,
  updateWeatherInformation,
  search,
  clearSearch,
  celsius,
  fahrenheit,
  selectCelsius,
  displayError,
  removeError,
};
import { format } from "date-fns";

const city = document.querySelector(".city");
const temperature = document.querySelector(".temperature");
const condition = document.querySelector(".condition");
const dateTime = document.querySelector(".date-time");
const gif = document.querySelector(".gif");
const cardNumbers = document.querySelectorAll(".card-number");
const humidity = document.querySelector(".humidity-number");
const feelsLike = document.querySelector(".feels-like-number");
const visibility = document.querySelector(".visibility-number");
const windSpeed = document.querySelector(".wind-speed-number");
const sunrise = document.querySelector(".sunrise-number");
const sunset = document.querySelector(".sunset-number");
const search = document.querySelector(".search");
const celsius = document.querySelector(".celsius");
const fahrenheit = document.querySelector(".fahrenheit");

function resetWeatherInformation() {
  city.textContent = "-";
  temperature.textContent = "-";
  condition.textContent = "-";
  dateTime.textContent = "-";
  cardNumbers.forEach((item) => {
    item.textContent = "-";
  });
}

function resetGif() {
  gif.style.backgroundImage = `url("https://placehold.co/200x200?text=Search+For+A+City")`;
}

function updateWeatherInformation(data) {
  city.textContent = data.address;
  temperature.textContent = data.currentConditions.temp;
  condition.textContent = data.currentConditions.conditions;
  dateTime.textContent = format(new Date(), "EEEE, MMMM, d, yyyy");
  humidity.textContent = data.currentConditions.humidity;
  feelsLike.textContent = data.currentConditions.feelslike;
  visibility.textContent = data.currentConditions.visibility;
  windSpeed.textContent = data.currentConditions.windspeed;
  sunrise.textContent = data.currentConditions.sunrise;
  sunset.textContent = data.currentConditions.sunset;
}

function clearSearch() {
  search.value = "";
}

function selectCelsius() {
  celsius.classList.add("selected");
  fahrenheit.classList.remove("selected");
}

function displayError() {
  const error = document.createElement("div");
  error.classList.add("red-error-message");
  error.textContent = "No matching location found!";
  error.style.color = "red";
  error.style.textAlign = "center";
  error.style.marginTop = "10px";

  search.after(error);
}

function removeError() {
  if (document.querySelector(".red-error-message")) {
    document.querySelector(".red-error-message").remove();
  }
}
