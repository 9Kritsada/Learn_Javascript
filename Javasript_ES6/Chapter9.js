// Join, Concat

// Join แปลง Array => String ขั้นข้อมูลแต่ละตัวด้วยสัญลักษณ์ , (Comma)
const data = [100, 200, 300]

console.log(data)
console.log(data.join())
console.log(data.join("*")) // เปลื่ยนสัญลักษณ์ขั้น

console.log("")

// Concat การต่อสมาชิก
const data1 = [100, 200, 300]
const data2 = [400, 500]

console.log(data1.concat(data2))