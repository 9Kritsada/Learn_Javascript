// Array Filter

// Case 1
const data = [10, 20, 30, 40]
const result = data.filter(e => e > 20)

console.log(result)

// Case 2
const data1 = [
    {Name: "Krit", salary: 0, department: "CPE"},
    {Name: "Kua", salary: 1000, department: "CPE"},
    {Name: "Beam", salary: 2000, department: "CPE"},
    {Name: "Mark", salary: 3000, department: "ME"},
]

const result2 = data1.filter(e => e.department === "ME")

console.log(result2)