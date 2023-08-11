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


