const maxNum = (arr) => {
  if (arr.length == 0) {
    return "null"
  }
  let maxNo = arr[0];
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > maxNo) {
      maxNo = arr[i];
    }
  }
  return maxNo;
};

let arr = [2,4,5,6,23,45,65,12,543,32,22,3,0,2,45];
console.log(maxNum(arr));
