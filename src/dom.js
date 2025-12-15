export { resetGif, resetWeatherInformation, gif, updateWeatherInformation };
import { format } from "date-fns";

const city = document.querySelector(".city");
const temperature = document.querySelector(".temperature");
const condition = document.querySelector(".condition");
const dateTime = document.querySelector(".date-time");
const gif = document.querySelector(".gif");
const cardNumbers = document.querySelectorAll(".card-number");
const humidity = document.querySelector(".humidity-number");
const feelsLike = document.querySelector('.feels-like-number')
const visibility = document.querySelector(".visibility-number")
const windSpeed = document.querySelector('.wind-speed-number');
const sunrise = document.querySelector('.sunrise-number');
const sunset = document.querySelector('.sunset-number');

function resetWeatherInformation() {
    city.textContent = "-";
    temperature.textContent = "-";
    condition.textContent = "-";
    dateTime.textContent = "-";
    cardNumbers.forEach((item) => {
        item.textContent = "-";
    });
}

function resetGif(img) {
    img.style.backgroundImage = `url("https://placehold.co/200x200?text=Nothing+To+Show")`;
}

function updateWeatherInformation(data) {
    city.textContent = data.address;
    temperature.textContent = data.currentConditions.temp;
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