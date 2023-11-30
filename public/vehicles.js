// Template source
const templateSource = document.querySelector(".template").innerHTML;
let vehicles = document.querySelector(".vehicles");
const template = Handlebars.compile(templateSource);

// Functionality to display vehicles
const vehiclesURL = () => {
    const url = "http://localhost:3000/api/vehicles";
    return axios.get(url);
};

const displayVehicles = () => {
    vehiclesURL().then(results => {
        vehicles.innerHTML = template(results.data.data);
    })
};

displayVehicles();