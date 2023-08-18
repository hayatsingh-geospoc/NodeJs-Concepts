// highest element from the array 

const arr = [2,4,2,1,3,4,6,7]

const highestEle = (arr)=>{
  let max=arr[0]
  let min=arr[0]
  for(let i=1;i<=arr.length-1;i++){
    if(arr[i]>arr[0]){
      max = arr[i]
    }else{
      min=arr[i]
    }
  }
   return {max,min}
  
}

console.log(highestEle(arr))   // time complexity O(n)