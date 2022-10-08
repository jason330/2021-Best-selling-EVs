const CARS = {
    "Hyundai Ioniq Electric" : {
        base_price: 45295,
        economy_combined: 114,
        economy_detailed: "114/132/98",
        Range: 303,
        peak_power : 225,
        acceleration : 7.4,
        max_Seating : 27.2
    },
    "Hyundai Kona Electric" : {
        price: 35295,
        economy_combined: 120,
        economy_detailed: "120/132/108",
        Range: 258,
        peak_power : 201,
        acceleration : 7.9,
        max_Seating : 5,
        Cargo : 19.2
    },
    "Tesla Model X" : {
        price: 120990,
        economy_combined: 105,
        economy_detailed: "105/109/101",
        Range: 347,
        peak_power : 670,
        acceleration : 3.8,
        max_Seating : 7,
        Cargo : 37.1
    },
    "Tesla Model S" : {
        price: 104990,
        economy_combined: 117,
        economy_detailed: "117/121/112",
        Range: 405,
        peak_power : 670,
        acceleration : 3.1,
        max_Seating : 5,
        Cargo : 28
    },
    "Porsche Taycan 4S" : {
        price: 107950,
        economy_combined: 79,
        economy_detailed: "79/76/84",
        Range: 227,
        peak_power : 429,
        acceleration : 3.8,
        max_Seating : 5,
        Cargo : 14.3
    }
}

module.exports = CARS;

// price: ,
//         economy_combined: ,
//         economy_detailed: "",
//         Range: ,
//         peak_power : ,
//         acceleration : ,
//         max_Seating : ,
//         Cargo :

// EPA Fuel Economy combined/city/highway, units MPGe
// EPA Range, units miles
// Peak_Power, units hp
// Acceleration 0-60 mph, units sec
// cargo units cu ft, with rear seats up
