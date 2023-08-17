let data = "arnabbiswass";
// let count = 0;
let newarr = [];
for(let i=0;i<data.length;i++){
    if(data[i]===data[i+1]){
        newarr.push(data[i]);
        break;
    }
};

console.log(newarr);
// console.log(count);