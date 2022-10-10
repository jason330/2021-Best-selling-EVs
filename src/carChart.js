// const CARS = require('./cars')

// class Car {
//     constructor(
//         name,
//         price,
//         economy_combined,
//         economy_detailed,
//         Range,
//         peak_power,
//         acceleration,
//         max_Seating,
//         Cargo) {
//             this.name = name,
//             this.price = price;
//             this.economy_combined = economy_combined;
//             this.economy_detailed = economy_detailed;
//             this.Range = Range;
//             this.peak_power = peak_power;
//             this.acceleration = acceleration;
//             this.max_Seating = max_Seating;
//             this.Cargo = Cargo;
//     }
// }

// const Hyundai_Ioniq_Electric = new Car (
//     "Hyundai Ioniq Electric",
//     45295,
//     114,
//     "114/132/98",
//     303,
//     225,
//     7.4,
//     5,
//     27.2
// )

// const Hyundai_Kona_Electric = [
//     35295,
//     120,
//     "120/132/108",
//     258,
//     201,
//     7.9,
//     5,
//     19.2
// ]

// const Tesla_Model_X = [
//     120990,
//     105,
//     "105/109/101",
//     347,
//     670,
//     3.8,
//     7,
//     37.1
// ]

// const Tesla_Model_S = [
//     104990,
//     117,
//     "117/121/112",
//     405,
//     670,
//     3.1,
//     5,
//     28
// ]

// const Porsche_Taycan_4S = [
//     107950,
//     79,
//     "79/76/84",
//     227,
//     429,
//     3.8,
//     5,
//     14.3
// ]

// let emptyCarsUlist = document.getElementById("cars")

// var carNamesArray = []

// for (const car in CARS) {
//     let newCarItem = document.createElement("li")
//     emptyCarsUlist.append(newCarItem);
//     newCarItem.innerText = car
//     carNamesArray.push(car)
// }

// const ctx = 'carChart'

// let priceArr = []
// for(const car of Object.keys(CARS)) {
//     debugger
//     priceArr.push(car["price"])
// }

// const carChart = new Chart (ctx, {
//     type: 'bar',
//     data: {
//         labels: carNamesArray,
//         datasets: [{
//             label: `${Object.keys(CARS["Hyundai Ioniq Electric"])[1]}`,
//             data: priceArr,
//             backgroundColor: ["green"],
//             borderColor: ["rgba(0, 0, 0, 0.1)"],
//             borderWidth: 10,
//         }]
//     }
// })


const CARS = [
    {
        name: "Hyundai Ioniq Electric",
        price: 45295,
        economy_combined: 114,
        economy_detailed: "114/132/98",
        Range: 303,
        peak_power : 225,
        acceleration : 7.4,
        max_Seating : 5,
        Cargo: 27.2
    },
    {
        name: "Hyundai Kona Electric",
        price: 35295,
        economy_combined: 120,
        economy_detailed: "120/132/108",
        Range: 258,
        peak_power : 201,
        acceleration : 7.9,
        max_Seating : 5,
        Cargo : 19.2
    },
    {
        name: "Tesla Model X",
        price: 120990,
        economy_combined: 105,
        economy_detailed: "105/109/101",
        Range: 347,
        peak_power : 670,
        acceleration : 3.8,
        max_Seating : 7,
        Cargo : 37.1
    },
    {
        name: "Tesla Model S",
        price: 104990,
        economy_combined: 117,
        economy_detailed: "117/121/112",
        Range: 405,
        peak_power : 670,
        acceleration : 3.1,
        max_Seating : 5,
        Cargo : 28
    },
    {
        name: "Porsche Taycan 4S",
        price: 107950,
        economy_combined: 79,
        economy_detailed: "79/76/84",
        Range: 227,
        peak_power : 429,
        acceleration : 3.8,
        max_Seating : 5,
        Cargo : 14.3
    }
]

let emptyCarsUlist = document.getElementById("cars")

var carNamesArray = []

CARS.forEach(car => {
    let newCarItem = document.createElement("li")
    emptyCarsUlist.append(newCarItem);
    newCarItem.innerText = car["name"]
    carNamesArray.push(car["name"])
})

const ctx = 'carChart'

let priceArr = []
CARS.forEach(car => {
    // debugger
    priceArr.push(car["price"])
})

const carChart = new Chart (ctx, {
    type: 'bar',
    data: {
        labels: carNamesArray,
        datasets: [{
            label: `${CARS[0][1]}`,
            data: priceArr,
            backgroundColor: ["green"],
            borderColor: ["rgba(0, 0, 0, 0.1)"],
            borderWidth: 10,
        }]
    }
})

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient