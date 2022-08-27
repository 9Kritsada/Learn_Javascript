// length ; count index
// sort() ; A -> Z
// reverse() ; Z -> A, 9 -> 0
// push ; add
let colors = ["Red", "While", "Blue", "Yellow", "Black"];

let count = colors.length;
console.log(count);

console.log("Before", colors);

let result1 = colors.sort();
console.log("After1", result1);

let result2 = colors.reverse();
console.log("After2", result2);

colors = ["Red", "While", "Blue", "Yellow", "Black"];

console.log(colors[0]);
console.log(colors[colors.length - 1]);

colors.push("Green");
console.log(colors);

let number = [3, 5, 6, 1, 4, 2, 7, 9, 8];
console.log(number);
console.log(number.sort());
console.log(number.reverse());

let colors = ["Red", "While", "Blue", "Yellow", "Black"];

for(i = 0 ; i < colors.length ; i++){
    console.log(colors[i]);
}

let colors = ["Red", "While", "Blue", "Yellow", "Black"];
colors.forEach(getColor);

function getColor(color) {
    console.log("Color", color);
}

// ______String
// .toString() ; -> string
// .join("*") ; -> string | * ,
// color.pop() ; เอาตัวสุดท้ายออก
// let x = color.pop() ; เอาตัวสุดท้ายออกแล้วเก็บในตัวแปร x

let colors = ["Red", "While", "Blue", "Yellow", "Black"];

console.log(colors);
console.log(typeof(colors));

let x = colors.toString();
console.log(x);
console.log(typeof(x));

let y = colors.join(" | ");
console.log(y);
console.log(typeof(y));

console.log(colors);
let x = colors.pop();
console.log(colors);
console.log(x);

// ______รวม Array
// .concat(); รวม

let fruit = ["Orange", "Banana"];
let animal = ["Ant", "Elephant", "Buffalo"];
let hardware = ["Keyboard"];

let d = fruit.concat(animal, hardware);
console.log(d);

let points = [20, 100, -100, 5, -25, 10, -20, 15];
points.sort(function(a , b){
    return b - a;
});

console.log(points);

let user = {
    name: "Kritsada",
    age: 18,
    email: "krit@mail.com"
};
console.log(user);
console.log(user.name);

let user = {
    name: "Kritsada",
    age: 18,
    email: "krit@mail.com",
    getUser:function() {
        return this.name + " " + this.email;
    }
};
console.log(user.getUser());

function deleteData() {
    let result = confirm("คุณต้องการลบข้อมูลหรือไม่ ?");
    console.log(result);
    if(result){
        console.log("Yes");
    } else {
        console.log("No");
    }
}

let a = document.getElementById('demo');
let x = 10;

function displayText() {
    a.innerHTML = `Show x = ${x}`;
}

// let a = document.querySelector('#demo'); // ID
// let b = document.querySelector('.test'); // Class
// let c = document.querySelectorAll('p'); // tag เอาตัวแรก

console.log(a);
console.log(b);
console.log(c);

const title = document.getElementById("title");
const content = document.querySelector(".content");

function displayClick() {
    title.style.color="red";
    title.style.background="yellow";
    title.style.fontSize="60px"

    content.setAttribute('class', 'krit')
}

// ______Dom Node
// document.createElement(element); สร้าง Element
// document.removeChild(element); ลบ node ลูก
// document.appendChild(element); นำ Element ไปต่อใน node แม่
// document.reolaceChild(new, old); แทนที่ Element

const box = document.querySelector(".box");

function nightMode() {
    box.setAttribute('class', 'box dark')
}
function dayMode() {
    box.setAttribute('class', 'box light')
}

const textAll = document.querySelectorAll('p');
let message = textAll[1].innerHTML;

console.log(message);

const menu = document.querySelector("#menu");
let count = 1;
const newItem = document.createElement('li');

function addItem() {
    const item = document.createElement('li'); // สร้าง li
    item.innerText = "item" + (count++);
    menu.appendChild(item);
}

function deleteItem() {
    const item = document.querySelector('li'); // สร้าง li
    menu.removeChild(item);
}

const item1 = document.querySelector('#item1');;
newItem.innerText = "X" ;

function replaceItem() {
    menu.replaceChild(newItem, item1);
}

// ______Dom CSS
// element.classList.add("class"); เพิ่ม class style
// element.classList.remove("class"); ลบ class style
// element.classList.toggle("class"); สลับ style
// element.classList.contains("class"); เปรียบเทียบ class style

const box_css = document.getElementById("box");

function addStyle() {
    box_css.classList.add("boxDark");
}

function removeStyle() {
    box_css.classList.remove("boxDark");
}

function toggleStyle() {
    box_css.classList.toggle("boxDark");
    const check = box_css.classList.contains("boxDark");
    console.log(check);
}

// ______Dom Event
function welcome() {

}

function hightlight(obj) {
    obj.classList.add("dark");
}

function unhightlight(obj) {
    obj.classList.remove("dark");
}

function getSkill() {
    const skill = document.querySelector("#skill");
    const display = document.querySelector("#display");
    console.log(skill.value.toUpperCase());
    display.innerText = skill.value;
}

function hightlightTagA(obj) {
    obj.classList.add("dark");
}

function unhightlightTagA(obj) {
    obj.classList.remove("dark");
}

// ______Event Listener

// อ้างอิง
const menu_p = document.querySelector("#programing");
const display2 = document.querySelector("#display2");
// Event
menu_p.addEventListener('change', getMenu);
function getMenu() {
    console.log(menu_p.value);
    display2.innerText = menu_p.value;
}








