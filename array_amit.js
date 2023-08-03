let arr=[1,2,3,4,5,6,5,4,3,2,34]

for (let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        temp=arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
        i=-1
    }
}

console.log(arr)