// Spread Operator
// ทำการกระจายสมาชิกใน Array ออกมาใช้งาน
// Spread Operator ต้องมี ... (3 Dot) Before Variable Array

const newArr = [100, 200, 300]

// ไม่ใช่ Spread Operator
const data1 = [10, 20, newArr] // เอา Array newArr ไปยัดใส่ใน data1
console.log(data1)
console.log(data1.length)

// มันคือ Spread Operator 
const data2 = [10, 20, ...newArr] // ...newArr (Spread Operator)
console.log(data2)
console.log(data2.length)

// หรือ push function(...name)
const data3 = [10, 20]
data3.push(...newArr)
console.log(data3)
console.log(data3.length)

// สรุปเอาสมาชิกใน Array newArr ไปใส่ใน Array data