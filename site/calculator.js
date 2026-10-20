// calculator.js - the EcoTrack calculation functions.
// These are "pure" functions: the same input always gives the same output,
// which makes them easy to test automatically (Lab 3).
// Emission factors in kg CO2e per unit. Illustrative values for teaching only.
const FACTORS = {
electricityKwh: 0.21, // per kWh of grid electricity
carKm: 0.17, // per km in an average petrol car
busKm: 0.10 // per km travelled by bus
};
function calculateFootprint(electricityKwh, carKm, busKm) {
const total =
electricityKwh * FACTORS.electricityKwh +
carKm * FACTORS.carKm +
busKm * FACTORS.busKm;
return Math.round(total * 100) / 100; // round to 2 decimal places
}
function kgToTonnes(kg) {
return kg / 1000;
}
function footprintRating(kg) {
if (kg < 100) return "Low";
if (kg < 300) return "Medium";
return "High";
}
function treesToOffset(kg) {
// One tree absorbs roughly 21 kg CO2 per year (illustrative).
return Math.ceil(kg / 21);
}
function isValidInput(value) {
return typeof value === "number" && Number.isFinite(value) && value >= 0;
}
function formatKg(kg) {
return kg.toFixed(1) + " kg CO2e";
}
// This lets the same file work in the browser AND in Node.js tests.
if (typeof module !== "undefined") {
module.exports = {
FACTORS, calculateFootprint, kgToTonnes, footprintRating,treesToOffset, isValidInput, formatKg
};
}
