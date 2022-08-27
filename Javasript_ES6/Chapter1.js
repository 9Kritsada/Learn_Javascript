// Block Scope (let / constant) 

var x = 10 ;
const h = 50; // const Block Scope ค่าคงที่
let g = 55; // let Block Scope

if (x === 10 ){
    var y = 500; // var Global
    let z = 1000; // let Block Scope
    console.log(y);
    console.log(z);
}
console.log(y);
console.log(z);

