console.log("<== allNumbersAllPairs ==>");
console.log("");

const numbers = [1, 2, 3, 4, 5];

function printAllNumbersThenAllPairs(numbers) {
  console.log("These are the numbers:");
  numbers.forEach(function (number) {
    // O(n)
    console.log(number);
  });

  console.log("These are the sums of them:");
  numbers.forEach(function (firstNumber) {
    // O(n^2)
    numbers.forEach(function (secondNumbers) {
      let sum = firstNumber + secondNumbers;
      console.log(`${firstNumber} + ${secondNumbers} = ${sum}`);
    });
  });
}

printAllNumbersThenAllPairs(numbers);
