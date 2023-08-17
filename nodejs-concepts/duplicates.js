// so in js i can remove duplicates from brute force , hash-map, set(), filter,filter()

 let arr = [2, 3, 4, 2];
// this is for repeated
// let uniEle = new Set(arr);
// console.log([...uniEle]);

//Using  filter() and indexOf()

// let data = arr.filter((ele, index) => {
//   return arr.indexOf(ele) === index;
// });

// console.log(data);

// const counter = {};
// let dub = [];
// function dublicate() {
//   for (let i = 0; i <= arr.length; i++) {
//     if (counter[arr[i]] === undefined) {
//       counter[arr[i]] = 1;
//     } else {
//       if (counter[arr[i]] === 1) {
//         dub.push(arr[i]);
//       }
//       counter[arr[i]]++;
//     }
//   }
//   return dub;
// }

// console.log(dublicate());

// const ar = 'xxxxyyyyyyyyzzzzzzzz';
// const arr = ar.split('');
 const obj = {};

let a = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  return obj;
};

a(arr);
for (let j in obj) {
  console.log(j);
}
