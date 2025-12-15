import {
    hitGif,
    hitVisualCrossingFahrenheit,
    hitVisualCrossingCelsius,
} from "./api.js";
import "./styles.css";
import {
    updateWeatherInformation,
    search,
    clearSearch,
    celsius,
    fahrenheit,
    selectCelsius,
    removeError,
} from "./dom.js";

let searchValue;

document.addEventListener("DOMContentLoaded", () => {
    selectCelsius();

    searchValue = "new york city";

    hitVisualCrossingCelsius(searchValue).then((data) => {
        updateInfo(data);
    });
});

search.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchValue = search.value;

        hitVisualCrossingCelsius(search.value).then((data) => {
            updateInfo(data);
            selectCelsius();
        });
    }

    removeError();
});

celsius.addEventListener("click", () => {
    if (!celsius.classList.contains("selected")) {
        celsius.classList.add("selected");
        fahrenheit.classList.remove("selected");
    }

    if (searchValue !== undefined) {
        hitVisualCrossingCelsius(searchValue).then((data) => {
            updateInfo(data);
            selectCelsius();
        });
    }

    removeError();
});

fahrenheit.addEventListener("click", () => {
    if (!fahrenheit.classList.contains("selected")) {
        fahrenheit.classList.add("selected");
        celsius.classList.remove("selected");
    }

    if (searchValue !== undefined) {
        hitVisualCrossingFahrenheit(searchValue).then((data) => {
            updateInfo(data);
        });
    }

    removeError();
});

function updateInfo(data) {
    hitGif(data.currentConditions.conditions + " weather forecast");
    updateWeatherInformation(data);
    clearSearch();
    removeError();
}