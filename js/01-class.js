/**
 * Классы
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

//!=========================================

// const user1 = {
//   firstName: 'Vasya',
//   lastName: 'Vasylenko',
//   age: 10,

//   showName() {
//     console.log(this.name);
//   },
//   showLastname() {
//     console.log(this.lastName);
//   },
//   showAge() {
//     console.log(this.age);
//   },
//   showInfo() {
//     this.showName();
//     this.showLastname();
//     this.showInfo();
//   },
// };

// const user1 = {
//   firstName: 'Vasya',
//   lastName: 'Vasylenko',
//   age: 10,

//   showName() {
//     console.log(this.name);
//   },
//   showLastname() {
//     console.log(this.lastName);
//   },
//   showAge() {
//     console.log(this.age);
//   },
//   showInfo() {
//     this.showName();
//     this.showLastname();
//     this.showInfo();
//   },
// };

// const user1 = {
//   firstName: 'Vasya',
//   lastName: 'Vasylenko',
//   age: 10,

//   showName() {
//     console.log(this.name);
//   },
//   showLastname() {
//     console.log(this.lastName);
//   },
//   showAge() {
//     console.log(this.age);
//   },
//   showInfo() {
//     this.showName();
//     this.showLastname();
//     this.showInfo();
//   },
// };

// const user1 = {
//   firstName: 'Vasya',
//   lastName: 'Vasylenko',
//   age: 10,

//   showName() {
//     console.log(this.name);
//   },
//   showLastname() {
//     console.log(this.lastName);
//   },
//   showAge() {
//     console.log(this.age);
//   },
//   showInfo() {
//     this.showName();
//     this.showLastname();
//     this.showInfo();
//   },
// };

//!=========================================

// class User {
//   constructor(firstnameValue, lastnameValue, ageValue) {
//     this.firstname = firstnameValue;
//     this.lastname = lastnameValue;
//     this.age = ageValue;
//     this.balance = 0;
//   }

//   showInfo() {
//     console.log(this.firstname);
//     console.log(this.lastname);
//     console.log(this.balance);
//     console.log(this.age);
//   }

//   showFullName() {
//     console.log(this.firstname, this.lastname);
//   }
// }

// const user2 = new User('Roman', 'Romanenko', 21);
// const user3 = new User('Anton', 'Antonenko', 22);
// const user4 = new User('Dmytro', 'Noname', 24);

// user2.showInfo();

//!=========================================

// function createUser() {
//   // this = {};
//   this.firstname = 'Vasya';
//   return this;
// }
// // const result = createUser.call({});
// const result = new createUser();
// console.log(result);

//!=========================================

// class User {
//   #balance;
//   #age;

//   constructor(firstname, lastname, age) {
//     this.fistname = firstname;
//     this.lastname = lastname;
//     this.#balance = 0;
//     this.#age = age;
//   }

//   showInfo() {
//     this.#showName();
//     this.#showLastname();
//     this.#showBalance();
//   }

//   #showName() {
//     console.log(`Firstname ${this.fistname}`);
//   }
//   #showLastname() {
//     console.log(`Lastname ${this.lastname}`);
//   }
//   #showBalance() {
//     console.log(`Balance: ${this.#balance}`);
//   }
// }

// const user1 = new User('Roman', 'Vasylenko', 25);

// user1.setAge(30);
// user1.setAge(-20);

// console.log(user1);

//!=========================================

// class User {
//   #age;

//   constructor(firstname, lastname, age) {
//     this.fistname = firstname;
//     this.lastname = lastname;
//     this.#age = age;
//   }

//   get age() {
//     return `Age: ${this.#age}`;
//   }

//   set age(newAge) {
//     if (newAge > 0) {
//       this.#age = newAge;
//     }
//   }

//   setAge() {}
//   getAge() {}
// }

// user1;

// const user1 = new User('Vasya', 'Pupkin', 22);
// user1.age = 30;
// console.log(user1.age);

// user1.setAge(30);
// console.log(user1.getAge());
//!=========================================

// class Dog {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }
// }

//!=========================================

class Product {
  static discount = 0.5;
  static amount = 0;

  constructor(title, price) {
    this.title = title;
    this.price = price;
    Product.amount += 1;
  }

  showInfo() {
    console.log(this.title);
    console.log(this.price * Product.discount);
  }
}

const product1 = new Product('iphone', 1500);
const product2 = new Product('Apple Watch', 700);
const product3 = new Product('Apple Watch', 700);

console.log(Product.amount);
