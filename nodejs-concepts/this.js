// what is this keyword ?
// this keyword is a reference to the object that is executing the current function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person('amit', 20);
const jn = new Person('am', 2);
// console.log(jn);

let a = (name, age) => {
  this.name = name;
  this.age = age;
  console.log(this.name);
};

// const g = new a('amit', 20);
// console.log(g);

const obj = {
  sayHello: (name) => {
    this.name = 'john';
    setTimeout(() => {
      //   name: 'John';
      console.log(`Hello, my name is ${this.name}`);
    }, 1000);
  },
};

obj.sayHello();
