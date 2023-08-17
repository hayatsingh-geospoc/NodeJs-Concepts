 "use strict"
let str = "hello world".split(' ')
let g = undefined

for(let i =0;i<str.length;i++){
   
    if(str[i]){
    
        
       str[i] =  str[i][0].toUpperCase() + str[i].slice(1).toLowerCase()

    }
}

console.log(str)

