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

// <===== Commented Code =====>

// Create an array with random values.
// let randomArray = Array.from({ length: 6 }, () => Math.floor(Math.random() * 20));

function sort1(array) {
  let swapped = true; // Check If array was swapped
  let passes = 0; // Track pass throughs done
  console.log("Unsorted Array: ", array);

  while (swapped) {
    // While swapped: true
    swapped = false; // Reset swapped to false at start

    for (let i = 0; i < array.length - 1; i++) {
      // Loop through the array
      if (array[i] > array[i + 1]) {
        // If the current element is > than the next element
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        // Swap the elements
        swapped = true;
        // Set swapped to true to indicate a swap occurred in this pass
      }
    }
    passes++; // Increment the passes variable by 1.
  }

  console.log("Pass-throughs: ", passes);
  return array;
}

// console.log("Sorted Array: ", sort1(randomArray));
