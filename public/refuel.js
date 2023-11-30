

// DOM references
const liters = document.getElementById("liters");
const amount = document.getElementById("amount");
const distance = document.getElementById("distance");

const msg = document.querySelector(".message");

// button reference
const refuelBtn = document.querySelector(".refuelBtn");

// Set timeout function
const setTimeoutFunc = () => {
    return setTimeout(() => {
        message.innerHTML = "";
    }, 3000);
};

// Event
refuelBtn.addEventListener("submit", () => {

    // Store fuel values
    const refuel = {
        liters: liters.value,
        amount: amount.value,
        distance: distance.value,
        filledUp: refuelBtn.value
    };

    const refuelVehicle = () => {
        const url = "https://fuel-consumption-7s2l.onrender.com/api/refuel";
        return axios.post(url, refuel);
    };

    refuelVehicle().then(results => {
        const response = results.data;

        if (response.data.status === "success") {
            msg.innerHTML = "Refueled a vehicle.";
            msg.classList.add("success-text");

            setTimeoutFunc();
        };

        msg.innerHTML = "Refueled not successfully.";
        msg.classList.add("danger-text");

        setTimeoutFunc();

    });
});