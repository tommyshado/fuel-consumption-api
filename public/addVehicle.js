
// Functionality to add a vehicle in vehicles.html

// Get references to the addVehicles.html elements
const description = document.getElementById("description");
const registration_number = document.getElementById("registrationNumber");

// Buttons references
const addBtn = document.querySelector(".addVehicle");

// messages references
const message = document.querySelector(".message");

// Set timeout function
const setTimeoutFunc = () => {
    return setTimeout(() => {
        message.innerHTML = "";
    }, 3000);
};

// Events
addBtn.addEventListener("click", () => {

    // Grab url endpoint
    const url  = "https://fuel-consumption-7s2l.onrender.com/api/vehicle";

    // Send description, regNumber into the API
    const response = axios.post(url, {
        description: description.value,
        regNumber: registration_number.value
    });

    // Returns a promise
    response.then(results => {
        // Get the results
        if (results.data.status === "success") {

            // Set the input areas to empty
            description.value = "";
            registration_number.value = "";

            // Add a success message
            message.innerHTML = "Vehicle added successfully";
            message.classList.add("success-text");
    
            setTimeoutFunc();
            return;
        };

        message.innerHTML = "Vehicle not added successfully.";
        message.classList.add("danger-text");
    
        setTimeoutFunc();
    })

});