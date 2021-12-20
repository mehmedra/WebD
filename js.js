//نحوه اجرا و نمایش در قسمت کنسول می‌باشد
/*کامنت گذاری چند سطری*/
console.log("Welcome\tto\nJavaScript");

var numericVar = 10
var boolVar = true
var StringVar = "Hello World!"
var arrayVar = [1, 5, 8]
var objectVar = { 'Name': 'jack', 'family': 'Scalia', 'Age': 7 }

var x = 5;
var y = --x;
var z = y--;

console.log("x = ", x)
console.log("y = ", y)
console.log("z = ", z)

z *= x // z = z * x
console.log("zz = ", z)

console.log("numericVar = ", numericVar)
console.log("boolVar = ", boolVar)
console.log("StringVar = ", StringVar)
console.log("arrayVar = ", arrayVar)
console.log("objectVar = ", objectVar)

console.log(parseInt("a25Number"));
console.log(parseFloat("25.5umber"));
console.log(parseInt("25.5Number"));

var name = prompt("Enter your name : ");
var age = prompt("Enter your age : ");
var height = prompt("Enter your height: ");
console.log("Your name is : ", name);
console.log("Your age is : ", age);
console.log("Your height is : ", height);