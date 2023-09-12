console.log("<== logAllPairsOfArrays ==>");
console.log("");

const foodBoxes = ["bread", "Jam", "Cheese", "Chips", "Sponge"];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(foodBoxes);