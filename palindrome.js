let data = '121'
let newData = ''
let a = ()=> {
    for(let i = data.length-1; i>=0; i--){
        newData+=data[i]
        console.log(newData)
    }
    if(data==newData){
        console.log('its palindrome')
    }else{
        console.log("its not palindrome")
    }
}

a()