let data = 'madam'
let newData = ''
let a = ()=> {
    for(let i = data.length-1; i>=0; i--){
        newData+=data[i]
    }
    if(data==newData){
        console.log('its palindrome')
    }
}

a()