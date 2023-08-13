/*Scope: Global scoped or function scoped. The scope of the var keyword is the global or function scope.
It means variables defined outside the function can be accessed globally
And variables defined inside a particular function can be accessed within the function.*/

/*Example 1 - Global scope*/ 

// var a = 10;
// function f() {
//   console.log(a); // 10
// }
// f(); // 10
// console.log(a); // 10

// // Example 2 - Function scope
// var message = 'Hi';
// function ff() {
//   var message = 'Hello, world!';
//   return message;
// }
// ff();
// console.log(message); // error: message is not defined

/*Example 3: The user can re-declare the variable using var and the user can update the var variable.*/

// var aaaa = 5;
// aaaa = 10;
// console.log(aaaa); // 10

/*Example 4: If users use the var variable before the declaration,
it initializes with the undefined value */

// console.log(hh); // undefined
// var hh = 10;

/*Scope: block scoped: The scope of a let variable is only block scoped.
It can’t be accessible outside the particular block ({block}) */







/* cannot redeclare but can update   */

// let a = 10;
// let a = 20;
// console.log(a)

/* Example 4: Users can declare the variable with the same name in different blocks using the let keyword. */

// if (true) {
//   let a = 10; // 10
// }
// console.log(a); // 5



let str = "arnabbiswas";
let 
for(let i=0;i<str.length;i++){
    if(i%2==0){
        
    }
}