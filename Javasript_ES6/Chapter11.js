// splice & slice

// splice(ตำแหน่งที่จะลบ, จำนวนที่จะลบ, สมาชิกที่ต้องกานแทรกในตำแหน่งที่ลบ)
// slice(ตำแหน่งเริ่มต้น, ตำแหน่งสุดท้าย+1) ดึงสมาชิก Array ออกมาใช้งาน

// splice
const data1 = [10, 20, 30, 40, 50]
console.log(data1)

data1.splice(1, 3, 999)
console.log(data1)

// slice
const data2 = [10, 20, 30, 40, 50]
console.log(data2)

selectData = data2.slice(1 ,3)
console.log(selectData)
