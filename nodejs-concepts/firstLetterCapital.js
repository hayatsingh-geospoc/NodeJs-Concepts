let a = 'hello world';

a = a.split(' ');
//let
for (let i = 0; i <= a.length - 1; i++) {
  a[i] = a[i][1].toUpperCase() + a[i].slice(i, 0);
}
console.log(a);
