console.log("<== Space Complexity ==>");
console.log("");

function boooo(n) {
  for (let i = 0; i <= n.length; i++) {
    console.log("Hey!");
  }
}

boooo([1, 2, 3, 4, 5]); // Big O(1)
console.log("");

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i <= n; i++) {
    hiArray[i] = "Hi";
  }
  return hiArray;
}

console.log(arrayOfHiNTimes(5)); // Big O(n)
