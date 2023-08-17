const arr = [4, 3, 7, 8, 6, 2, 1];
let swap = true;
let a = () => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (swap) {
      if (arr[i] > arr[i + 1]) {
        let temp;
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    } else if (arr[i] < arr[i + 1]) {
      let temp;
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
    swap = !swap;
  }
  return arr;
};
console.log(a());

// function zigzagSort(arr) {
//   const n = arr.length;
//   let shouldSwap = true;

//   for (let i = 0; i < n - 1; i++) {
//     if (shouldSwap) {
//       if (arr[i] > arr[i + 1]) {
//         // Swap elements if they are in the wrong order
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//       }
//     } else {
//       if (arr[i] < arr[i + 1]) {
//         // Swap elements if they are in the wrong order
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//       }
//     }

//     shouldSwap = !shouldSwap;
//   }
// }

// const arr = [4, 3, 7, 8, 6, 2, 1];
// zigzagSort(arr);
// console.log(arr); // Output: [3, 7, 4, 8, 2, 6, 1]
