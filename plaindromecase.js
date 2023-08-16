var isPalindrome = function(s) {
    console.log(s)
    let arr = ''
    let data = s.split('');
      for(let i=0;i<data.length;i++){
       if(data[i]===' '){
        // console.log("check element ' ' ",data[i])
         data.splice(i,1);
         i--
       }
       if(data[i]===','){
        // console.log("check element , ",data[i])
         data.splice(i,1);
         i--
       }
       if(data[i]===':'){
        // console.log("check element : ",data[i])
         data.splice(i,1);
         i--
       }
      }
      let concatstring = data.join('');
      let lowercase = concatstring.toLowerCase();
    //   let concat 
       for(let j=lowercase.length-1; j>=0;j--){
           arr = arr+ lowercase[j]
        //    console.log(arr)
       }
        if(arr==lowercase){
            return "palindromne"
        }

      return "not palindrome"
  };

  console.log(isPalindrome("A man, a plan, a canal: Panama"))

//   for(let j=concatstring.length-1;j>=0;j--){
//     console.log(concatstring[j])
//   }

// let data = "arnab";

// let reversedata = data.reverse();
// console.log(reversedata)