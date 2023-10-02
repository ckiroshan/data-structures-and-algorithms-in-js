console.log("<===== Bubble Sort - Arrays =====>");
console.log("");

let randomArray = Array.from({ length: 6 }, () => Math.floor(Math.random() * 20));

function bubbleSort(array) {
  let swapped = true;
  let passes = 0;
  console.log(array);

  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
    passes++;
  }
  console.log(passes);
  return array;
}

// console.log(bubbleSort(randomArray));

/**
 * Steps ==>
 * 1. Define a function.
 * 2. Declare variables
 * 3. While loop [!swapped]
 * 4. For loop [swapped]
 * 5. Increment pass-through
 * 6. Return array
 */

