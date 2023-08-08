// what is callback function?
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// function register(callback) {
//   setTimeout(() => {
//     callback();
//     console.log('register');
//   }, 2000);
// }

// function login() {
//   setTimeout(() => {
//     console.log('login');
//   }, 1000);
// }

// register(login);

// let a = (callback) => {
//   console.log('register');
//   callback();
// };

// let b = () => {
//   console.log('login');
// };

// a(b);

// function greet(name, callback) {
//   callback();
//   console.log('Hello, ' + name + '!');
// }

// function sayGoodbye() {
//   console.log('Goodbye!');
// }

// greet('John', sayGoodbye);


