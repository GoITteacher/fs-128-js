/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Animal {
  constructor(breed, age) {
    this.breed = breed;
    this.age = age;
  }
  eat() {}
  sleep() {}
}

class Dog extends Animal {
  constructor(name, breed, age) {
    // super(breed, age);
    // this.name = name;
    // this.paws = 4;
  }
  sayWoof() {}
}

class Cat extends Animal {
  constructor() {
    this.paws = 4;
  }
  sayMeow() {}
}

class Bird extends Animal {
  constructor() {
    this.paws = 4;
  }
  fly() {}
}

const dog1 = new Dog('Lord', 'spaniel', 3);

console.log(dog1);
