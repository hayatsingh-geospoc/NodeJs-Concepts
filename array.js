
let arr = [4,1,2,1,2]

let singleNumber = function(nums) {
  let num;
  let obj = {}
  for(let i=0;i<=nums.length-1;i++){
    if(obj[nums[i]]===undefined){
       obj[nums[i]]=1
    }
    else {
      obj[nums[i]]++
    }
  }
  for(let data in obj){
    if(obj[data]==1){
      num = data
    }
  } 
  
  return num
}
console.log(singleNumber(arr))