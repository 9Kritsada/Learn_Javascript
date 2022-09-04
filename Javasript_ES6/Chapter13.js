// Search in Array

// 1.) indexof(data) => if found show : (index) and if dont found show : (-1)
// 2.) find(element => element === value) => if found show : (data) and if dont found show : (undifined)
// 3.) findIndex(data) => if found show : (index) and if dont found show : (-1)

// Array
const colors = ["Red", "Blue", "Green", "Yellow"]

// indexof
console.log(colors.indexOf("Red"))
console.log(colors.indexOf("Green"))
console.log(colors.indexOf("Black"))
console.log("")

// find
const search = colors.find(element => element === "Red")
const search1 = colors.find(element => element === "Black")
console.log(search)
console.log(search1)
console.log("")

// findIndex
const search3 = colors.findIndex(element => element === "Red")
console.log(search3)
console.log("")
