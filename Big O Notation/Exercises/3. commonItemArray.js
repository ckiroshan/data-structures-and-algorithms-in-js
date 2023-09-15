console.log("<== Common Item Array ==>");
console.log("");

/**
 * Given 2 arrays.
 *  Create a function that let's a user know (true/false) whether 
 *  These two arrays contain any common items For 

 * Example1 :
 *  const array1 = ['a', 'b', 'c', 'x']; 
 *  const array2 = ['z', 'y', 'i']; 
 *  should return false.

 * Example2 : 
 *  const array1 = ['a', 'b', 'c', 'x']; 
 *  const array2 = ['z', 'y', 'x']; 
 *  should return true.

 * Expected : 
 * 2 parameters - arrays - no size limit 
 * return true or false

*/

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

// Approach #1
function containsCommonItem(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(containsCommonItem(array1, array2));
// Big O(a*b) - If the array had a size limit
// Big O(n^2) - If the array can have no limit
