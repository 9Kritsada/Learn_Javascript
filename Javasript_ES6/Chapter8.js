// Defaul Parameter

// Original 
getDataCustomerOri = (Name, Address) => {

    if(!Address){
        Address = "Chaing Mai"
    }

    const address = `Name : ${Name}
    Address : ${Address}`
    return address
}
 
console.log(getDataCustomerOri("Kritsada", "Chaing Mai"))
console.log(getDataCustomerOri("dAKEk"))

// New
getDataCustomerNew = (Name, Address = "Chaing Mai") => {
    const address = `Name : ${Name}
    Address : ${Address}`
    return address
}
 
console.log(getDataCustomerNew("Sumchang", "Chaing Mai"))
console.log(getDataCustomerNew("Inmai"))