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
