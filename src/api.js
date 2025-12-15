export { hitGif, hitVisualCrossingCelsius, hitVisualCrossingFahrenheit };
import { resetWeatherInformation, resetGif, displayError, gif } from "./dom.js";

async function hitGif(condition) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=7MJdmJcY5DpPaX0rho4zdXGMfYlL2qdC&s=${condition}&weirdness=10`,
    );

    if (!response.ok) {
      throw new Error(`Fetch Error: ${response.status}`);
    } else {
      const data = await response.json();
      gif.style.backgroundImage = `url(${data.data.images.original.url})`;
    }
  } catch (error) {
    console.log(error.message);
    resetGif();
  }
}

async function hitVisualCrossingFahrenheit(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=YYD6UJSJRZY2ADQDCNSEUS8RZ&contentType=json`,
    );
    if (!response.ok) {
      throw new Error(`Fetch Error: ${response.status}`);
    } else {
      return await response.json();
    }
  } catch (error) {
    console.log(error.message);
    resetWeatherInformation();
    displayError();
    resetGif();
  }
}

async function hitVisualCrossingCelsius(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=YYD6UJSJRZY2ADQDCNSEUS8RZ&contentType=json`,
    );

    if (!response.ok) {
      throw new Error(`Fetch Error: ${response.status}`);
    } else {
      return await response.json();
    }
  } catch (error) {
    console.log(error.message);
    resetWeatherInformation();
    displayError();
    resetGif();
  }
}
