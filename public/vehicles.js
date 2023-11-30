// Template source
const templateSource = document.querySelector(".template").innerHTML;
let vehicles = document.querySelector(".vehicles");
const template = Handlebars.compile(templateSource);

// Functionality to display vehicles
const vehiclesURL = () => {
    const url = "https://fuel-consumption-7s2l.onrender.com/api/vehicles";
    return axios.get(url);
};

const displayVehicles = () => {
    vehiclesURL().then(results => {
        vehicles.innerHTML = template(results.data.data);
    })
};

displayVehicles();