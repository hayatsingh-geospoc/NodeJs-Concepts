
//REMOVE dUPLICATES FROM ARRAY USING SET
 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 4, 6, 2, 2, 3];


  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  console.log(map);



















// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 4, 6, 2, 2, 3];

// const a = (arr) => {
//   let map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (map.has(arr[i])) {
//       map.set(arr[i], map.get(arr[i]) + 1);
//     } else {
//       map.set(arr[i], 1);
//     }
//   }
//   console.log(map);
// };

// console.log(a(arr))