// app.js - connects the web page to the calculator functions.
document.addEventListener("DOMContentLoaded", function () {
const build = document.getElementById("build-id");
console.log("EcoTrack app loaded. Build:", build ? build.textContent : "unknown");
});

// Student 4: Carbon Footprint Calculator
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("calc-btn");
  if (!button) return;

  button.addEventListener("click", function () {
    const kwhInput = document.getElementById("kwh").value;
    const carInput = document.getElementById("car").value;
    const busInput = document.getElementById("bus").value;
    const result = document.getElementById("calc-result");

    const kwh = Number(kwhInput);
    const car = Number(carInput);
    const bus = Number(busInput);

    if (
      kwhInput.trim() === "" ||
      carInput.trim() === "" ||
      busInput.trim() === "" ||
      ![kwh, car, bus].every(isValidInput)
    ) {
      result.textContent = "Please enter numbers of 0 or more.";
      return;
    }

    const kg = calculateFootprint(kwh, car, bus);

    result.textContent =
      formatKg(kg) +
      " - rating: " +
      footprintRating(kg) +
      ". Trees needed to offset: " +
      treesToOffset(kg) +
      ".";
  });
});
