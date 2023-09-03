


// Input=>abbcccaaa
// Output=> a3b2c3a1


const data = "abbcccaaa"

const stringFunc = (data)=>{
  let comp = ''
  let count = 1
for(let i=0;i<=data.length-1;i++){
  if(data[i]==data[i+1]){
    count++
  }
  else {
    comp+= data[i]+count;
    count=1
  }
}
  return comp;
}


console.log(stringFunc(data))