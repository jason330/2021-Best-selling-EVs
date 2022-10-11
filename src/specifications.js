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

let updateSelectedCategory = (clickEvent) => {
  selectedCategory = clickEvent.target.className
  carChart.update();
}

emptySpecsUlist.addEventListener("click", updateSelectedCategory)
// debugger
// module.exports = {};