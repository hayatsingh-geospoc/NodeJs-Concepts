 let arr=[1,2,3,2,1,2,3,54,5,2,2,1,1]
// // let temp
// let sort = (arr)=>{

//     for(let i=0;i<=arr.length-1;i++){
//         if(arr[i]>arr[i+1]){
//             // temp
//             temp=arr[i]; 
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             i=-1
//         }
        
//     }
//    return arr
// }

// console.log(sort(arr))

let max =(arr)=>{
let max=arr[0]
// let maxx=[]
let min=arr[0]
for(let i=0;i<=arr.length-1;i++){
    if(arr[i]>max ){
        max=arr[i]
        // maxx.push(max)
    }
    if(arr[i]<max){
        min=arr[i]
        // min.push(max)
    }
   
}
return {}
}
console.log(max(arr))


