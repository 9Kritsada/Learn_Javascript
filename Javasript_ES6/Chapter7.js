// Destructuring

// Array
const colors = ["Red", "Blue", "Green"]

// Array Original
const redOri = colors[0]
const blueOri = colors[1]
const glueOri = colors[2]

console.log(redOri)
console.log(blueOri)
console.log(glueOri)

console.log("")

// Array Destructuring
const [redDes, blueDes, greenDes] = colors
console.log(redDes)
console.log(blueDes)
console.log(greenDes)

console.log("")

// +
const [,,greenDes2] = colors
console.log(greenDes2)

console.log("")

// Object
const product = {
    Name : "Computer",
    price : 30000,
    stock: 10
}

// Object Original
const nameProOri = product.Name
const priceProOri = product.price
const stockProOri = product.stock

console.log(nameProOri)
console.log(priceProOri)
console.log(stockProOri)

console.log("")

// Object Destructuring

const {
    Name, // ถ้าชื่อเหมือนกัน Name, อย่างเดียว
    price: priceProDes,  // ถ้าชื่อไม่เหมือนกัน
    stock: stock
} = product
console.log(Name)
console.log(priceProDes)
console.log(stock)