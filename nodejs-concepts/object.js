const arrayOfData = [
  { id: '2' },
  { id: '3' },
  { id: '1' },
];


// {
//   id:1,
//   id:3,
//   id:1
// }

const singleObject = {};

arrayOfData.forEach(item => {
     singleObject["id" + item] = item.id
});

console.log(singleObject);