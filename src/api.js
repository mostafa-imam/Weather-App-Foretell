export { hitVisualCrossing, hitGif };
import { resetWeatherInformation, resetGif } from "./helpers.js";

async function hitVisualCrossing(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=YYD6UJSJRZY2ADQDCNSEUS8RZ`);
        if (response.ok) {
            return await response.json();
        } else if (response.status > 299) {
            throw new Error("there is some error");
        }
    } catch (error) {
        console.log(error);
        resetWeatherInformation();
    }
}

async function hitGif(condition, img) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=//M1Vf9bS9gSWi3Cq2yezsEVOarlkrWnyd&s=${condition}&weirdness=0`);
        if (response.ok) {
            const gif = await response.json()
            img.src = gif.data.images.original.url;
        } else if (response.status > 299) {
            throw new Error("there is some error")
        }
    } catch (error) {
        console.log(error);
        resetGif();
    }
}