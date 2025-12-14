export { resetGif, resetWeatherInformation, gif };

const city = document.querySelector(".city");
const temperature = document.querySelector(".temperature");
const condition = document.querySelector(".condition");
const dateTime = document.querySelector(".date-time");
const gif = document.querySelector(".gif");
const cardNumbers = document.querySelectorAll(".card-number");


function resetWeatherInformation() {
    city.textContent = "-";
    temperature.textContent = "-";
    condition.textContent = "-";
    dateTime.textContent = "-";
    cardNumbers.forEach((item) => {
        item.textContent = "-";
    });
};

function resetGif(img) {
    img.src = "https://placehold.co/600x400";
}
