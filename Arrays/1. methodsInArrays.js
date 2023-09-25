console.log("<===== Array - Data Structure =====>");
console.log("");

const fruits = ["Apple", "Mango", "Orange", "Pears"];
console.log(fruits);

// Some common Array based methods in JS.

fruits[3]; // O(1) - Access/Read

console.log("[Push] - Insert to end of array");
fruits.push("Pineapple"); // O(1)
console.log(fruits);
console.log("");

console.log("[Pop] - Delete from end of array");
fruits.pop(); // O(1)
console.log(fruits);
console.log("");

console.log("[Unshift] - Add element to begining of array");
fruits.unshift("Pineapple"); // O(n)
console.log(fruits);
console.log("");

console.log("[Splice] - From index 2, removes 2 elements to the right");
// splice(start number, deleteCount, Add new element)
fruits.splice(2, 2, "Melon"); // O(n/2) => O(n) [Constants removed]
console.log(fruits);

console.log("[Splice] - From index 2, removes 0, add new element");
fruits.splice(2, 0, "Grapes"); // O(n/2) => O(n) [Constants removed]
console.log(fruits);
console.log("");
