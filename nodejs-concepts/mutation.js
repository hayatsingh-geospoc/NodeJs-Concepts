const bird = {
  size: 'xyz',
  getFullName: function () {
    return 'sdfvf';
  },
};
//   };
console.log(bird.getFullName());
//   const mouse = {
//     name: 'Mickey',
//     xyz: "yes",
//   };

//   console.log(mouse["xyz"]);
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.getdata = function () {
//     return 'dfbdfnhfn';
//   };
// }

// const member = new Person('Lydia', 'Hallie');
// console.log(member.getdata());
//   Person.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   };

//

// print star pattern in js
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += "*";

//   }
//   string += "\n";
// }

// console.log(string);

// let d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  d.filter((item) => {
//   console.log(item);
//   d[4]= 100
// });

// let a = () => {
//   const data = [4, 2, 5, 7, 9];
//   data.forEach((arr)=>{
//     if(arr>)
//   }
// };
// a();
//console.log(highestNo);

// const numbers = [10, 5, 8, 20, 3];
// let highestNumber = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > highestNumber) {
//     highestNumber = numbers[i];
//   }
// }
// console.log(highestNumber);


//  const superheroMaker = a => {
//   return a instanceof Function ? a():a;
//  }

//  console.log(superheroMaker(()=>{return 'Batman'}));
//  console.log(superheroMaker('Superman'));


// const  promise1 = Promise.resolve("first")
// const  promise2 = Promise.resolve("Second")
// const  promise3 = Promise.reject("third")
// const  promise4 = Promise.resolve("fourth")


// const a = async ()=>{
//     const res1 = await Promise.all([promise1,promise2])
//      const res2 = await Promise.all([promise3,promise4])
//     return [res1,res2]
// }

// a().then((res)=>console.log(res)).catch((err)=> console.log(err))