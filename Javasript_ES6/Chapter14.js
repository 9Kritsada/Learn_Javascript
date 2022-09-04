// Array Map

// Case 1
const numbers = [10, 20, 30, 40]
console.log(numbers)

const result = numbers.map(e => e * 2)

console.log(result)

// [10, 20, 30, 40]
// [10x2, 20x2, 30x2, 40x2]
// [20, 40, 60, 80]

// Case 2
const data = ["rain", "hot", "cold", "good"]
console.log(data)
const result2 = data.map((e, i) => {
    return `Day ${i + 1}, ${e}`
})
console.log(result2)

// Case 3
const data2 = [
    {day: "01/02/2565", weather: "Hot", temp: "40"},
    {day: "02/02/2565", weather: "Rain", temp: "25"},
    {day: "03/02/2565", weather: "Cold", temp: "15"},
]

const weather = data2.map(e => {
    return e.weather
})

console.log(weather)