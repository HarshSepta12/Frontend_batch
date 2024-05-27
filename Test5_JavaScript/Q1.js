function findIndexes(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          console.log(`Indexes: ${i}, ${j}`);
          return; // If you want to stop after finding the first pair
        }
      }
    }
    console.log("No such indexes found");
  }
  
  let array = [2, 7, 15, 11];
  let target = 9;
  findIndexes(array, target);
  