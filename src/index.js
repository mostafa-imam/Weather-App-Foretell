import { hitVisualCrossing, hitGif } from "./api.js";
import "./styles.css";
import { gif } from "./dom.js";
import { updateWeatherInformation, search, clearSearch } from "./dom.js"

// const weather = hitVisualCrossing(search.value);

search.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        hitVisualCrossing(search.value).then((data) => {

            hitGif(data.currentConditions.conditions + " weather", gif);
            updateWeatherInformation(data);
            clearSearch();

        });
    }
})