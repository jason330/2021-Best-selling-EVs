// document.addEventListener("DOMContentLoaded", () => {
    // setTimeout(() => {
    //     document.querySelector("p").style.backgroundColor = "green"
    // }, 2500)
    
    const CARS = require('./cars')

    let emptyCarsUlist = document.getElementById("cars")

    var carNamesArray = []

    for (const car in CARS) {
        let newCarItem = document.createElement("li")
        emptyCarsUlist.append(newCarItem);
        newCarItem.innerText = car
        carNamesArray.push(car)
    }
// })



