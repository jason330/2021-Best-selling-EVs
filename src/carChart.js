// const specs = require('./specifications')

// let cars = require ('./cars')
// let CARS = {
//     "Hyundai Ioniq Electric" : {
//         Price: 45295,
//         economy_combined: 114,
//         economy_detailed: "114/132/98",
//         Range: 303,
//         peak_power: 225,
//         acceleration: 7.4,
//         max_Seating: 5,
//         Cargo: 27.2
//     },
//     "Hyundai Kona Electric" : {
//         Price: 35295,
//         economy_combined: 120,
//         economy_detailed: "120/132/108",
//         Range: 258,
//         peak_power: 201,
//         acceleration: 7.9,
//         max_Seating: 5,
//         Cargo: 19.2
//     },
//     "Tesla Model X" : {
//         Price: 120990,
//         economy_combined: 105,
//         economy_detailed: "105/109/101",
//         Range: 347,
//         peak_power: 670,
//         acceleration: 3.8,
//         max_Seating: 7,
//         Cargo: 37.1
//     },
//     "Tesla Model S" : {
//         Price: 104990,
//         economy_combined: 117,
//         economy_detailed: "117/121/112",
//         Range: 405,
//         peak_power: 670,
//         acceleration: 3.1,
//         max_Seating: 5,
//         Cargo: 28
//     },
//     "Porsche Taycan 4S" : {
//         Price: 107950,
//         economy_combined: 79,
//         economy_detailed: "79/76/84",
//         Range: 227,
//         peak_power: 429,
//         acceleration: 3.8,
//         max_Seating: 5,
//         Cargo: 14.3
//     }
// }
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

let cars = [
    {
        name: "Hyundai Ioniq Electric",
        price: 45295,
        economy_combined: 114,
        economy_detailed: "114/132/98",
        range: 303,
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
        range: 258,
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
        range: 347,
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
        range: 405,
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
        range: 227,
        peak_power : 429,
        acceleration : 3.8,
        max_Seating : 5,
        Cargo : 14.3
    }
]

// LEFT PANEL, ALL CARS
let emptyCarsUlist = document.getElementById("cars")

let carNamesArray = cars.map(carObj => carObj.name)

carNamesArray.forEach(carName => {
    let newCarItem = document.createElement("li")
    emptyCarsUlist.append(newCarItem);
    newCarItem.innerText = carName
    // carNamesArray.push(car["name"])
})


// CAR CHART
let selectedCategory = "price"
let sortedCarObjArr
if (selectedCategory === "price" || selectedCategory === "acceleration") {
    sortedCarObjArr = cars.sort((a,b) => a[selectedCategory] - b[selectedCategory]);
} else {
    sortedCarObjArr = cars.sort((a,b) => b[selectedCategory] - a[selectedCategory]);
}
// debugger

let sortedDataArr = sortedCarObjArr.map(carObj => carObj[selectedCategory])
let sortedNamesArr = sortedCarObjArr.map(carObj => carObj.name)
// debugger
// Object.values(CARS).map(carSpecs => {
//     // debugger
//     return carSpecs[selectedCategory]
// })

// let ascendingCategories = [price, acceleration]
// let reversed = true
// carChart.options.scales.y.reverse = false
// }

const ctx = 'carChart'
let carChart = new Chart (ctx, {
    type: 'bar',
    data: {
        labels: sortedNamesArr,
        datasets: [{
            label: selectedCategory,    //`${Object.keys(cars[0])[1]}`
            data: sortedDataArr,
            backgroundColor: ["green"],
            borderColor: ["rgba(0, 0, 0, 0.1)"],
            borderWidth: 1,
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                title: {
                    display: true,
                    text: `title = ${Object.keys(cars[0])[1]}`,
                },
                position: 'top'
            },
            y: {
                // reverse: reversed
            }
        }
        // grouped: true
        // plugins: {
        //     tooltip: {
        //         callbacks: {
        //             label: function (context) {
        //                 let label = context.dataset.label
        //                 if (label === `${Object.keys(CARS[0])[1]}`) {
        //                     label = `${Object.keys(CARS[0])[1]}` + ": " + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y)
        //                 }
        //                 return label;
        //             }
        //         }
        //     }
        // }
    }
})

let emptySpecsUlist = document.getElementById("specifications")

const specArr = [
  "Price (USD)",
  "Economy (MPGe, combined city/highway)",
  "Range (miles)",
  "Peak Power (hp)",
  "Acceleration (0-60 mph)",
  "Max Seating",
  "Cargo Space (cu.-ft., with rear seats up)"
]

const specToKey = {
  "Price (USD)": "price",
  "Economy (MPGe, combined city/highway)": "economy_combined",
  "Range (miles)": "range",
  "Peak Power (hp)": "peak_power",
  "Acceleration (0-60 mph)": "acceleration",
  "Max Seating": "max_Seating",
  "Cargo Space (cu.-ft., with rear seats up)": "Cargo"
}

specArr.forEach(spec => {
  let newSpecification = document.createElement("li")
  emptySpecsUlist.append(newSpecification);
  newSpecification.innerText = spec
  newSpecification.setAttribute("class",specToKey[spec])
})

// let updateSelectedCategory = (clickEvent) => {
//   selectedCategory = clickEvent.target.className
//   carChart.update();
// }

emptySpecsUlist.addEventListener("click", (clickEvent) => {
    selectedCategory = clickEvent.target.className
    
    if (selectedCategory === "price" || selectedCategory === "acceleration") {
        sortedCarObjArr = cars.sort((a,b) => a[selectedCategory] - b[selectedCategory]);
    } else {
        sortedCarObjArr = cars.sort((a,b) => b[selectedCategory] - a[selectedCategory]);
    }
    // sortedCarObjArr = cars.sort((a,b) => a[selectedCategory] - b[selectedCategory]);
    sortedDataArr = sortedCarObjArr.map(carObj => carObj[selectedCategory])
    sortedNamesArr = sortedCarObjArr.map(carObj => carObj.name)

    let updatedLabel = Object.keys(specToKey).find(key => specToKey[key] === selectedCategory)

    carChart.data.labels = sortedNamesArr
    carChart.data.datasets = [{
        label: updatedLabel,    //`${Object.keys(cars[0])[1]}`
        data: sortedDataArr,
        backgroundColor: ["green"],
        borderColor: ["rgba(0, 0, 0, 0.1)"],
        borderWidth: 1,
    }]

    // debugger
    // if (selectedCategory === "price" || selectedCategory === "acceleration") {
    //     carChart.options.scales.y.reverse = false
    // }
    carChart.update();
  })
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient
// module.exports = {};