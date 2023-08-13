let arr=[1,222,3,4,5,6,7,8,3,4,2,4,3]
let arr_of_arr=[]
let newArr=[]
for (let i=0;i<arr.length;i++){
    // console.log(arr[i])
    
    if(newArr.length==3){
        console.log(newArr)
        arr_of_arr.push(newArr)
        console.log(arr_of_arr)
        // newArr.splice(0)

    }else{
        newArr.push(arr[i])
    }
}

// console.log(newArr)