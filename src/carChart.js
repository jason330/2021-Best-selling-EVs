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
        "Price": 45295,
        economy_combined: 114,
        economy_detailed: "114/132/98",
        range: 303,
        peak_power: 225,
        acceleration : 7.4,
        max_Seating : 5,
        Cargo: 27.2
    },
    {
        name: "Hyundai Kona Electric",
        "Price": 35295,
        economy_combined: 120,
        economy_detailed: "120/132/108",
        range: 258,
        peak_power: 201,
        acceleration : 7.9,
        max_Seating : 5,
        Cargo : 19.2
    },
    {
        name: "Tesla Model X",
        "Price": 120990,
        economy_combined: 105,
        economy_detailed: "105/109/101",
        range: 347,
        peak_power: 670,
        acceleration : 3.8,
        max_Seating : 7,
        Cargo : 37.1
    },
    {
        name: "Tesla Model S",
        "Price": 104990,
        economy_combined: 117,
        economy_detailed: "117/121/112",
        range: 405,
        peak_power: 670,
        acceleration : 3.1,
        max_Seating : 5,
        Cargo : 28
    },
    {
        name: "Porsche Taycan 4S",
        "Price": 107950,
        economy_combined: 79,
        economy_detailed: "79/76/84",
        range: 227,
        peak_power: 429,
        acceleration : 3.8,
        max_Seating : 5,
        Cargo : 14.3
    },
    {
        name: "Audi e-tron",
        "Price": 71995,
        economy_combined: 79,
        economy_detailed: "79/78/79",
        range: 226,
        peak_power: 402,
        acceleration : 5.5,
        max_Seating : 5,
        Cargo : 28.5
    },
    {
        name: "Nissan Leaf SV PLUS",
        "Price": 37135,
        economy_combined: 109,
        economy_detailed: "109/121/98",
        range: 215,
        peak_power: 214,
        acceleration : 7.4,
        max_Seating : 5,
        Cargo : 23.6 
    },
    {
        name: "Volkswagen ID.4 Pro",
        "Price": 43790,
        economy_combined: 91,
        economy_detailed: "91/104/89",
        range: 275,
        peak_power: 201,
        acceleration : 7.6,
        max_Seating : 5,
        Cargo : 30.3
    },
    {
        name: "Chevrolet Bolt EV",
        "Price": 32495,
        economy_combined: 118,
        economy_detailed: "118/127/108",
        range: 259,
        peak_power: 200,
        acceleration : 6.5,
        max_Seating : 5,
        Cargo : 16.6
    },
    {
        name: "Ford Mustang Mach-E",    //California Route 1
        "Price": 64875,
        economy_combined: 100,
        economy_detailed: "100/105/93",
        range: 312,
        peak_power: 346,
        acceleration : 4.8,
        max_Seating : 5,
        Cargo : 29
    },
    {
        name: "Tesla Model Y Long Range",
        "Price": 65990,
        economy_combined: 122,
        economy_detailed: "122/127/117",
        range: 326,
        peak_power: 390,
        acceleration : 4.8,
        max_Seating : 7,
        Cargo : 30.2
    },
    {
        name: "Tesla Model 3 RWD",
        "Price": 46990,
        economy_combined: 132,
        economy_detailed: "132/138/126",
        range: 272,
        peak_power: 271,
        acceleration : 5.8,
        max_Seating : 5,
        Cargo : 22.9
    }
]

const specToKey = {
    "Price": "Price",
    "Economy": "economy_combined",
    "Range": "range",
    "Peak Power": "peak_power",
    "Acceleration (0-60 mph)": "acceleration",
    "Max Seating": "max_Seating",
    "Cargo Space": "Cargo"
  }

const specToUnits = {
    "Price": "US Dollars",
    economy_combined: "MPGe, combined city/highway",
    range: "miles",
    peak_power: "hp",
    acceleration: "seconds",
    max_Seating: "maximum seating capacity",
    Cargo: "cu.-ft., with rear seats up"
}
// LEFT PANEL, ALL CARS
let emptyCarsUlist = document.getElementById("carsList")

// let carNamesArray = cars.map(carObj => carObj.name)

// carNamesArray.forEach(carName => {
//     let newCarItem = document.createElement("li")
//     emptyCarsUlist.append(newCarItem);
//     newCarItem.innerText = carName
//     // carNamesArray.push(car["name"])
// })


// CAR CHART
let selectedCategory = "Price"
let sortedCarObjArr
if (selectedCategory === "Price" || selectedCategory === "acceleration") {
    sortedCarObjArr = cars.sort((a,b) => a[selectedCategory] - b[selectedCategory]);
} else {
    sortedCarObjArr = cars.sort((a,b) => b[selectedCategory] - a[selectedCategory]);
}


let sortedDataArr = sortedCarObjArr.map(carObj => carObj[selectedCategory])
let sortedNamesArr = sortedCarObjArr.map(carObj => carObj.name)
let axisUnit = specToUnits[selectedCategory]
let updatedLabel = Object.keys(specToKey).find(key => specToKey[key] === selectedCategory)

// Object.values(CARS).map(carSpecs => {
    //     // debugger
    //     return carSpecs[selectedCategory]
    // })
    
    // let ascendingCategories = [price, acceleration]
    // let reversed = true
    // carChart.options.scales.y.reverse = false
    // }
    
const ctx = document.getElementById('carChart').getContext('2d');
const gradient = ctx.createLinearGradient(5, 730, 5, 100)
gradient.addColorStop(0, "#BFBFBF")
gradient.addColorStop(1, "#403F40")
// ctx.fillStyle = gradient 

let carChart = new Chart (ctx, {
    type: 'bar',
    data: {
        labels: sortedNamesArr,
        datasets: [{
            label: selectedCategory,    //`${Object.keys(cars[0])[1]}`
            data: sortedDataArr,
            backgroundColor: gradient,
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
                    text: axisUnit,
                    font: {
                        size: 16
                    }
                },
                position: 'top',
                ticks: {
                    font: {
                        size: 14
                    },
                    callback: function(value, index, ticks) {
                    return '$' + new Intl.NumberFormat().format(value);
                }},
            },
            y: {
                ticks: {
                    font: {
                        size: 14
                    }
                }                
                // reverse: reversed
            }
        },
        plugins: {
            title: {
                display: true,
                fullSize: false,
                text: updatedLabel,
                font: {
                    size: 24
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return '$' + new Intl.NumberFormat().format(context.parsed.x);
                    }
                }
            },
            legend: {
                display: false,
                // labels: {
                //     display: false
                //     // textAlign: 'left',
                //     // font: {
                //     //     size: 20
                //     // }
                // },
                // title: {
                //     display: false
                // }
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


// RIGHT SPECS PANEL

let emptySpecsUlist = document.getElementById("specifications")

  
// [
//   "$ USD",
//   "Economy (MPGe, combined city/highway)",
//   "Range (miles)",
//   "Peak Power (hp)",
//   "Acceleration (0-60 mph)",
//   "Max Seating",
//   "Cargo Space (cu.-ft., with rear seats up)"
// ]


// specArr.forEach(spec => {
//   let newSpecification = document.createElement("li")
//   emptySpecsUlist.append(newSpecification);
//   newSpecification.innerText = spec
//   newSpecification.setAttribute("class",specToKey[spec])
// })

// let updateSelectedCategory = (clickEvent) => {
//   selectedCategory = clickEvent.target.className
//   carChart.update();
// }

emptySpecsUlist.addEventListener("click", (clickEvent) => {
    document.querySelector(`.${selectedCategory}`).classList.remove("selected")
    selectedCategory = clickEvent.target.className
    document.querySelector(`.${selectedCategory}`).classList.add("selected")

    if (selectedCategory === "Price" || selectedCategory === "acceleration") {
        sortedCarObjArr = cars.sort((a,b) => a[selectedCategory] - b[selectedCategory]);
    } else {
        sortedCarObjArr = cars.sort((a,b) => b[selectedCategory] - a[selectedCategory]);
    }
    // sortedCarObjArr = cars.sort((a,b) => a[selectedCategory] - b[selectedCategory]);
    sortedDataArr = sortedCarObjArr.map(carObj => carObj[selectedCategory])
    sortedNamesArr = sortedCarObjArr.map(carObj => carObj.name)

    updatedLabel = Object.keys(specToKey).find(key => specToKey[key] === selectedCategory)

    axisUnit = specToUnits[selectedCategory]

    carChart.data.labels = sortedNamesArr
    carChart.data.datasets = [{
        label: updatedLabel,    //`${Object.keys(cars[0])[1]}`
        data: sortedDataArr,
        backgroundColor: gradient,
        borderColor: ["rgba(0, 0, 0, 0.1)"],
        borderWidth: 1,
    }]
    carChart.options.scales.x.title.text = axisUnit
    carChart.options.plugins.title.text = updatedLabel


    if (selectedCategory === "Price") {
        carChart.options.scales.x.ticks.callback = function(value, index, ticks) {
            return '$' + new Intl.NumberFormat().format(value);
        }
        carChart.options.plugins.tooltip.callbacks.label = function(context) {
            return '$' + new Intl.NumberFormat().format(context.parsed.x);
        }
    } else {
        carChart.options.scales.x.ticks = {
            font: {
                size: 14
            }
        }
        carChart.options.plugins.tooltip.callbacks = {}
    }
    // if (selectedCategory === "price" || selectedCategory === "acceleration") {
    //     carChart.options.scales.y.reverse = false
    // }
    carChart.update();
})

let carsList = document.getElementById("carsSection")

carsList.addEventListener("click", (carClick) => {
    selectedCar = clickEvent.target.className
})
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient
// module.exports = {};