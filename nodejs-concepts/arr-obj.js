// Creating an array of objects with nested data
const arrayOfObjects = [
    {
      id: 1,
      name: 'John Doe',
      address: {
        street: '123 Main St',
        city: 'Cityville',
        zip: 3
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      address: {
        street: '456 Oak Ave',
        city: 'Townsville',
        zip: 6
      }
    },
    {
      id: 3,
      name: 'Bob Johnson',
      address: {
        street: '789 Pine Ln',
        city: 'Villageville',
        zip: 8
      }
    }
  ];
  



let data = arrayOfObjects.filter((datas,index)=> {

     return datas.address.zip > 5

})

console.log(data)