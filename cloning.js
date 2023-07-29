const deepClone = require('lodash/cloneDeep');

// let a = 10;
// b = a;
// b = 20;

// console.log(a, b);

let a = {
  name: 'hayat',
  rollNo: 24,
  obj: { name: 'KIngKOng' },
  getFunc: function () {
    return this.name;
  },
};

let b = deepClone(a); //deep copy

b.obj.name = 'sahil';

console.log(a, b);
