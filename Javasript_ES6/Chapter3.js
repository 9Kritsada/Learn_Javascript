// Object

// ---| customer
const customer = {
    customerName : "Kritsada",
    age : 18,
    address : "ChiangMai"
}
console.log(customer)

// ---| fullname
const fname = "Kritsada"
const lname = "Wiriya"

const fullname = {
    // สามารถยุบรวมกันได้
    // ถ้า Variable กับ Property มีชื่อที่เหมือนกัน
    fname, // fname : fname 
    lname // lname : lname
}
console.log(fullname)

// ---| dataAll
const dataAll =  {
    fname,
    lname,
    showData(){
        console.log(fname + lname)
    }
}
dataAll.showData()

