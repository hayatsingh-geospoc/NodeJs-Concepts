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




function countConsecutiveCharacters(str) {
    const charCount = {};
    let currentChar = null;
    let consecutiveCount = 0;
    
    for (const char of str) {
    if (char === currentChar) {
    consecutiveCount++;
    } else {
    if (currentChar !== null) {
    charCount[currentChar] = (charCount[currentChar] || 0) + consecutiveCount;
    }
    currentChar = char;
    consecutiveCount = 1;
    }
    }
    
    if (currentChar !== null) {
    charCount[currentChar] = (charCount[currentChar] || 0) + consecutiveCount;
    }
    
    return charCount;
    }
    
    const inputString = "aabbcccaa";
    const result = countConsecutiveCharacters(inputString);
    
    console.log(result);
    