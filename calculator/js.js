let num = 0;
let userInput = document.getElementById("user-input");
let length = document.getElementsById("length");
let volume = document.getElementById("volume");
let mass = document.getElementsById("mass");

// rounded to 3 decimal places: 
// 1 foot = 0.3048 meters 
// 1 meter = 3.2808 feet
// 1 liter = 0.26417 gallons
// 1 gallon = 3.7854 litres
// 1 pound = 0.4535 kilograms
// 1 kilogram = 2.2046


let myButton = document.getElementById("calculate-btn");
myButton.addEventListener("click", runCalc);

function runCalc() {
    let meters = (num * 0.3048).toFixed(3);
    let feet = (num * 3.2808).toFixed(3);
    length.textContent = '${num} meters = ${feet} feet | ${num} feet= ${meters} meters';
    let liters = (num * 0.26417).toFixed(3);
    let gallons = (num * 3.7854).toFixed(3);
    volume.textContent = '${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters';
    let kilograms = (num * 2.2046).toFixed(3);
    let pounds = (num * 0.4535).toFixed(3);
    mass.textContent = '${num} kilograms = ${pounds} pounds | ${num} pounds = ${kilograms} kilograms';
}
runCalc();