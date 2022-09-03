// Rest Parameter
// คล้ายกับ Spread Operator
// แต่จะเข้าไปทำงานใน Function 

summation = (...numberArr) => {
    let total = 0
    for ( let number of numberArr) total += number 
    return total
}

console.log(summation(10, 100))
console.log(summation(10, 100, 1000))
console.log(summation(10, 100, 10000))