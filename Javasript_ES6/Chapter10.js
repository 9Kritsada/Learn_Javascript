// push, pop, shift, unshift

const data = [10, 20, 30]
console.log(data)

// Push => Add member at last
data.push(500)
console.log(data)
data.push(...[1000, 2000])
console.log(data)

// Pop => Delete last member
data.pop()
console.log(data)

// Shift => Delete first member
data.shift()
console.log(data)

// Unshift => Add first member
data.unshift(200)
console.log(data)