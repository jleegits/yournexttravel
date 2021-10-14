const defaultDropdown = document.getElementById("default-dropdown");
const dropdown = document.getElementById("dropdown-options");

var defaultDropdownName = document.getElementById("default-dropdown-name");

const dropdownAll = document.querySelector(".all-dropdown"),
dropdownHotels = document.querySelector(".hotels-dropdown"),
dropdownLocation = document.querySelector(".location-dropdown"),
dropdownFlights = document.querySelector(".flights-dropdown"),
dropdownActivities = document.querySelector(".activities-dropdown"),
dropdownRestaurants = document.querySelector(".restaurants-dropdown"),
dropdownVacation = document.querySelector(".vacation-dropdown");


defaultDropdown.addEventListener("click", () => {
    if (dropdown.className.includes("active")) {
        dropdown.classList.remove("active");
    } else {
        dropdown.classList.add("active");
    };
});
dropdownAll.addEventListener("click", () => {
    defaultDropdownName.innerHTML = "all";
    dropdown.classList.remove("active");
});
dropdownHotels.addEventListener("click", () => {
    defaultDropdownName.innerHTML = "hotels";
    dropdown.classList.remove("active");
});
dropdownLocation.addEventListener("click", () => {
    defaultDropdownName.innerHTML = "locations";
    dropdown.classList.remove("active");
});
dropdownFlights.addEventListener("click", () => {
    defaultDropdownName.innerHTML = "flights";
    dropdown.classList.remove("active");
});
dropdownActivities.addEventListener("click", () => {
    defaultDropdownName.innerHTML = "activities";
    dropdown.classList.remove("active");
});
dropdownRestaurants.addEventListener("click", () => {
    defaultDropdownName.innerHTML = "Restaurants";
    dropdown.classList.remove("active");
});
dropdownVacation.addEventListener("click", () => {
    defaultDropdownName.innerHTML = "vacation";
    dropdown.classList.remove("active");
});

