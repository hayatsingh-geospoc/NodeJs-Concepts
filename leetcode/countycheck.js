

let countCheck = (str)=>{

    let currentChar = str[0];
    let count =1;
    let compressed = '';
    
    for(let i=1;i<=str.length-1;i++){
        if(str[i]===currentChar){
            count++
        }
        else {
            compressed+=currentChar+count;
            currentChar=str[i]
            count=1
        }
    }
    compressed+=currentChar+count
  return compressed
}

console.log(countCheck('aabbbccaccaaaa'))