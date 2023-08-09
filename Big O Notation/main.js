// Finding Nemo in a Array

const nemo = ["Nemo"];
const nemoCast = ["Nemo", "Marlin", "Dory", "Bruce", "Coral", "Gill", "Bloat", "Peach", "Nigel", "Squirt"];
const largeArray = new Array(2000).fill("Nemo"); // Auto creates an array: 2000 elements 

function findNemo(anArray) {
  let t0 = performance.now(); // Starting time from loop execution
  for (let i = 0; i < anArray.length; i++) {
    if (anArray[i] == "Nemo") {
      console.log("Found Nemo!");
    } else {
      console.log("Nemo Not found :(");
    }
  }
  let t1 = performance.now(); // Ending time from loop execution
  console.log(`Function execution took: ${(t1 - t0) / 60} seconds`);
}

findNemo(largeArray);
