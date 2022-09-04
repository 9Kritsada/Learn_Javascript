// Loop Array
// for loop, foreach, forof

const data = [10, 20, 30, 40, 50]

// For loop
for(let i = 0; i < data.length; i++){
    console.log(`No ${i} : ${data[i]}`)
}

console.log("")

// Foreach !> Cant use break and continue
data.forEach(e => {
    console.log(`Member in data = ${e}`)
})

console.log("")

// Forof
for( let i of data ) {
    console.log(`Member in data : ${i}`)
}