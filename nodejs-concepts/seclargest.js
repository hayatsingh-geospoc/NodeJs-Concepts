//first approach
const arr = [2,4,2,1,3,4,6,5,2,7]





const secHighestEle = (arr)=>{
  let newArr = []
  
  newArr = arr.sort((a,b)=>a-b)
  console.log(arr[newArr.length-1])
 
  
}

console.log(secHighestEle(arr))


// sec approach 

// highest element from the array 


const secHighestElee = (arr)=>{
//   let newArr = []
  for(let i=0; i<arr.length;i++){   
    if(arr[i]>arr[i+1]){
    let temp=arr[i]
   arr[i]=arr[i+1]
    arr[i+1]=temp   
    i=-1
    }
     
  }
  return arr[1]
}

console.log(secHighestEle(arr)) 

