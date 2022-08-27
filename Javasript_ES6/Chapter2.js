// Arrow Function

// Old
console.log("---| Old |---")

function oldFullname(fname, lname) {
    return fname + lname
}
console.log(oldFullname("Kritsada", "Wiriya"))

function oldSetAge(age) {
    return "Age : " + age
}
console.log(oldSetAge(18))


// New
console.log("---| New |---")

newFullname = (fname, lname) => fname + lname
console.log(newFullname("Kritsada", "Wiriya"))

newSetAge = (age) => "Age : " + age
console.log(newSetAge(18))


