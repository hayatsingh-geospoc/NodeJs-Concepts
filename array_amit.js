// let arr = [1,2,3,3,2,2,2,3,2,3,4,5,3]

// // let newArr = arr.filter((ele,index)=>{
// //     return arr.indexOf(ele)==index
// // })

// // console.log(newArr)
// let arr1 = []
// let obj = {}
// for(let i=0;i<=arr.length-1;i++){
//     if(obj[arr[i]]===undefined){
//         obj[arr[i]]=1
//     }
//     else if(obj[arr[i]]>=1)  {
//         arr1.push(arr[i])
//         obj[arr[i]]++;
//     }
   
// }

// // console.log(arr1)

// console.log(Object.values(obj))




let arr = [1, 2, 3, 3, 2, 2, 2, 3, 2, 3, 4, 5, 3];
let uniqueNumbers = [];
let seenNumbers = {};

for (let i = 0; i < arr.length; i++) {
    if (!seenNumbers[arr[i]]) {
        seenNumbers[arr[i]] = true;
        uniqueNumbers.push(arr[i]);
    }
}

console.log(uniqueNumbers);
