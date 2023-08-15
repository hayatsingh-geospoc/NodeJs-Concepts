let arr = [1,10,4,5,9,2,6];
let data = [];
for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        let temp = arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
        i=-1
    }
    // console.log("arr[i]",arr[i]);
    // console.log("arr[i+1]",arr[i+1])}
}

for(let j=0;j<arr.length;j++){
    if((arr[j+1]-arr[j])%2==0){
        data.push(arr[j])
    }
}

console.log(data)
console.log(arr)