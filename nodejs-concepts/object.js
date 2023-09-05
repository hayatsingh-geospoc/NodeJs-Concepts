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






const data = [
  { id: 3, name: 'hayat' },
  { id: 1, name: 'arnab' },
  { id: 2, name: 'amit' },
];




data.sort((a , b)=>{
    return  a.id-b.id
})

console.table(data)