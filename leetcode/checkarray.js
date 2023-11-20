let arr = [1, 2, 3, 4, 7, 6, 1, 3, 1];

let data = arr.filter((ele, index) => {
  return arr.indexOf(ele) === index;
});



console.log(data);
