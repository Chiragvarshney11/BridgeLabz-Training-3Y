// Weather Activity Planner
// Recommend an activity based on rain, temperature, and wind speed.

const temperature = 22;
const isRaining = false;
const windSpeed = 12;

let recommendation;

if (isRaining) {
    recommendation = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    recommendation = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    recommendation = "Too cold and windy — stay home.";
} else {
    recommendation = "Perfect day for a walk.";
}

// Combined logical conditions can identify comfortable outdoor weather.
if (!isRaining && temperature >= 15 && temperature <= 35 && windSpeed <= 20) {
    console.log("Conditions are suitable for an outdoor activity.");
}

console.log(recommendation);
