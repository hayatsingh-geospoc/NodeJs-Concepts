// forEach()

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// arr.forEach((item, index) => {
//   if (item === 9) {
//     arr[index] = 12
//   }
// });

// console.log(arr)

// map()

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9];
// arr.forEach((item, index, array) => {

//   console.log(array[index])
// });

// let a = () => {
//   const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let sum = 0;
//   let d = data.map((item) => {
//     sum = sum + item;
//     return sum;
//   });
//   console.log(sum);
// };
// a();

// const data = [ 2, 46, 5, 53, 455, 4, 54, 3, 43];
//       data.splice(4);
// console.log(data);

// for (let i = 0; i < data.length - 1; i++) {
//   console.log(data[i]);
// }


function a() {
  return this.name;
}

let b = () => {
  return this.name;
};

let obj = {
  name: 'hayat',
  age: 'tell',
  a,
  b,
};

console.log(obj.a());
console.log(obj.b());
