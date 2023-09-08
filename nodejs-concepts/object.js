// const arrayOfData = [
//   { id: '2' },
//   { id: '3' },
//   { id: '1' },
// ];

// // {
// //   id:1,
// //   id:3,
// //   id:1
// // }

// const singleObject = {};

// arrayOfData.forEach(item => {
//      singleObject["id" + item] = item.id
// });

// console.log(singleObject);

// const data = [
//   { id: 3, name: 'hayat' },
//   { id: 1, name: 'arnab' },
//   { id: 2, name: 'amit' },
// ];

// data.sort((a , b)=>{
//     return  a.id-b.id
// })

// console.table(data)

//count the occurence of ele in an array

const data = [
  {
    suit: 'heart',
    value: 7,
  },
  {
    suit: 'club',
    value: 8,
  },
  {
    suit: 'club',
    value: 2,
  },
  {
    suit: 'diamond',
    value: 2,
  },
  {
    suit: 'diamond',
    value: 5,
  },
  {
    suit: 'club',
    value: 10,
  },
];
let obj = {};

data.forEach((ele) => {
  if (obj[ele.suit]) {
    obj[ele.suit]++;
  } else {
    obj[ele.suit] = 1;
  }
});
console.log(obj);
