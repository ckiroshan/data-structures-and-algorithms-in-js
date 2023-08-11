// Finding Nemo in a Array

const nemo = ["Nemo"];
const nemoCast = ["Nemo", "Marlin", "Dory", "Bruce", "Coral", "Gill", "Bloat", "Peach", "Nigel", "Squirt"];
const largeArray = new Array(2000).fill("Nemo"); // Auto creates an array: 2000 elements

function findNemo(anArray) {
  for (let i = 0; i < anArray.length; i++) {
    if (anArray[i] == "Nemo") {
      console.log("Found Nemo!");
    } else {
      console.log("Nemo Not found :(");
    }
  }
}

findNemo(largeArray);

// Big O(1)

const boxes = [1, 2, 3, 4, 5, 6, 7];

function logFirstboxes(boxes) {
  console.log(boxes[0]);
  console.log(boxes[1]);
}

logFirstboxes(boxes); // Output: 1 , 2


// Exercise 1 

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1) - only happens once
  a = 50 + 3; // O(1) - only happens once

  for (let i = 0; i < input.length; i++) {
    // O(n) - happens 'n' number of times.
    anotherFunction(); // O(n) - happens 'n' number of times.
    let stranger = true; // O(n) - happens 'n' number of times.
    a++; // O(n) - happens 'n' number of times.
  }
  return a; // O(1) - only happens once
}

// Therefore Big O of function is: Big O(3 + 4n)
// Big O = [O(1) X 3] + [O(n) X 4]
//       = 3 + 4n.



// Exercise 2

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n) - can skip if needed.
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)  - can skip if needed.
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// Big O = [1 X 4] + [n X 7]
//       = 4 + 7n.
// If skip was used = 4 + 5n.