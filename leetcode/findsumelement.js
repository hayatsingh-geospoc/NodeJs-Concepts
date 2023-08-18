let arr = [1,2,3,4,5];
let target = 9
let res = [];
function findsum(arr,target){
for(let i=0;i<arr.length;i++){
    if(arr[i]+arr[i+1]==target){
        return [i,i+1]
    }
}

}

console.log(findsum(arr,target))
