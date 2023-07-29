// create a class

class Hayat {
  constructor(name) {
    this.name = name;
  }

  SayHello() {
    console.log(`My name is ${this.name}`);
  }
}
const instance = new Hayat('Hayat');
console.log(instance.SayHello());
