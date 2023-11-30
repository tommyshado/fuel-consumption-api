

// DOM references
const liters = document.getElementById("liters");
const amount = document.getElementById("amount");
const distance = document.getElementById("distance");

// button reference
const refuelBtn = document.querySelector(".refuelBtn");

// Event
refuelBtn.addEventListener("click", () => {

    // Store fuel values
    const refuel = {
        liters: liters.value,
        amount: amount.value,
        distance: distance.value,
        filledUp: refuelBtn.value
    };

    const refuelVehicle = () => {
        const url = "http://localhost:3000/api/refuel";
        return axios.post(url, refuel);
    };

    refuelVehicle().then(results => {
        const response = results.data;
    });
});