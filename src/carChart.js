const CARS = require("./cars")

const ctx = 'carChart'

let price = []
for(const car in CARS) {
    price.push(car[price])
}

const carChart = new Chart (ctx, {
    type: 'bar',
    data: {
        labels: carNamesArray,
        datasets: [{
            label: `${Object.keys(CARS["Hyundai Ioniq Electric"])[1]}`,
            data: price,
            backgroundColor: ["white"],
            borderColor: ["black"],
            borderWidth: 1
        }]
    }
})