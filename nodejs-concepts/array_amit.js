let arr = [1,2,3,3,9,2,3,3,4,5,5,5,3,2,9]

// // let newArr = arr.filter((ele,index)=>{
// //     return arr.indexOf(ele)==index
// // })

// console.log(newArr)
// let arr = [1, 2, 3, 3, 2, 2, 2, 3, 2, 3, 4, 5, 3];
let arr1 = [];
let obj = {};
let unique = [];

for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
        obj[arr[i]] = 1;
        unique.push(arr[i]); // Corrected this line
    } else {
        if (obj[arr[i]] >= 1) {
            arr1.push(arr[i]);
        }
        obj[arr[i]]++;
    }
    
}
let data = unique.filter(function(ele){
    if(!arr1.includes(ele)){
        console.log(ele);
    }
})
console.log("duplicate", arr1);
console.log("unique", unique);
// console.log("data",data)

// console.log(data)

// console.log(arr1)
// let unique = [];
// // let dub = []
// // let arr = [1, 2, 3, 3, 2, 2, 2, 3, 2, 3, 4, 5, 3];
// let elementCount = {};
// let dub = [];

// arr.forEach((ele) => {
//     if (!elementCount[ele]) {
//         elementCount[ele] = 1;
//         unique.push(ele)
        
//     } else if (elementCount[ele] === 1) {
//         console.log("dubli ele",ele)
//         elementCount[ele] = 2;
//     }
//     console.log(ele)
//     console.log(unique)
//     // if(!unique.includes(ele)){
//     //     console.log("unique ele",ele)
//     // }
// });

// console.log("Duplicates:", dub);


// console.log("arr after filter",arr)
// console.log("dublicate elements",dub)
// console.log("unique elements",unique)
// console.log(Object.values(obj))

// let data = [2,3,1,4];

// arr.forEach((ele,index)=>{
//     console.log(arr[index+1])
// })





// let arr = [1, 2, 3, 3, 2, 2, 2, 3, 2, 3, 4, 5, 3];
// let uniqueNumbers = [];
// let seenNumbers = {};

// for (let i = 0; i < arr.length; i++) {
//     if (!seenNumbers[arr[i]]) {
//         seenNumbers[arr[i]] = true;
//         uniqueNumbers.push(arr[i]);
//     }
// }

// console.log(uniqueNumbers);
