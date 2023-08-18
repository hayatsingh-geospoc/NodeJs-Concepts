// let a = (data) => {
//     let str = data.split('')
//     let obj = {}
//     for (let i = 0; i <= str.length - 1; i++) {
//         if (obj[str[i]] === undefined) {
//             obj[str[i]] = 1
//         }
//         else {
//             obj[str[i]]++
//         }
    
//     }
// //    return obj
//     newStr=""
//    for (let key in obj){
//     newStr+=`${key}${obj[key]}`
//     // console.log(str)
//    }
//    return newStr
// }


// console.log(a("aaabbbbcccaa"))




// function countConsecutiveCharacters(str) {
//     const charCount = {};
//     let currentChar = null;
//     let consecutiveCount = 0;
    
//     for (const char of str) {
//     if (char === currentChar) {
//     consecutiveCount++;
//     } else {
//     if (currentChar !== null) {
//     charCount[currentChar] = (charCount[currentChar] || 0) + consecutiveCount;
//     }
//     currentChar = char;
//     consecutiveCount = 1;
//     }
//     }
    
//     if (currentChar !== null) {
//     charCount[currentChar] = (charCount[currentChar] || 0) + consecutiveCount;
//     }
    
//     return charCount;
//     }
    
//     const inputString = "aabbcccaa";
//     const result = countConsecutiveCharacters(inputString);
    
//     console.log(result);
    
// function compressString(str) {
//     let compressed = '';
//     let count = 1;
  
//     for (let i = 1; i < str.length; i++) {
//       if (str[i] === str[i - 1]) {
//         count++;
//       } else {
//         compressed += str[i - 1] + count;
//         count = 1;
//       }
//     }
  
//     // Add the last character and its count
//     compressed += str[str.length - 1] + count;
  
//     return compressed;
//   }
  
//   const inputString = 'aabbcccaa';
//   const compressedResult = compressString(inputString);
//   console.log(compressedResult); // Output: "a2b2c3a2"
  

function compressString(str) {
  let compressed = '';
  let currentChar = str[0];
  let count = 1;
  
  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++;
    } else {
      compressed += currentChar + count;
      currentChar = str[i];
      count = 1;
    }
  }
  
  compressed += currentChar + count;
  
  return compressed;
}

const inputString = 'aabbbccccaaaaaa';
const compressedResult = compressString(inputString);
console.log(compressedResult); // Output: a2b3c4