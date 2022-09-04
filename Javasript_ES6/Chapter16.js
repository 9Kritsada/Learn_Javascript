// Array Reduce


// Case 1
const data = [10, 20, 30, 40]

// array.reduce((ค่าที่ถูกประมวลผล, e) => {}, Default) // value = 0
const dataReduce = data.reduce((value, e) => {
    console.log(`Value : ${value}`)
    const total = e + value 
    return total
}, 0)

console.log(dataReduce)

// total = 10 + 0
// total = 20 + 10
// total = 30 + 30
// total = 40 + 60

console.log("")

// Case 2
const cart = [
    {nameP: "กระเป๋า", price: 500},
    {nameP: "หนังสือ", price: 900},
    {nameP: "กล้องถ่ายรูป", price: 5000}
]

const sumPrice = cart.reduce((value, e) => {
    const total = e.price + value
    return total
}, 0)

console.log(sumPrice)