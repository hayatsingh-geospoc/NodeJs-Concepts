// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] == 3) {
//     arr.splice(i,3);
//   }
// }

// console.log(arr);

// const a = [1, 2, 2, 1, 3, 5];

// function elOccur(a) {
//   let el = {};
//   for (let i = 0; i < a.length; i++) {
//     if (el[a[i]]) {
//       el[a[i]] = el[a[i]] + 1;
//     } else {
//       el[a[i]] = 1;
//     }
//     // return el;
//   }
//   console.log(el)
//   return el
// }
// elOccur(a);

let obj = { name: 'Sahil', age: 24, city: 'Delhi' };
let obj2 = Object.assign({}, obj); //
obj2.name = 'Arnab Genzee';
console.log(obj2, obj);
