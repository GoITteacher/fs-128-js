/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей с hasOwnProperty()
 * - Ланцюжки прототипів
 */
//!=========================================
// const objA = {
//   x: 10,
//   y: 20,
// };

// console.log(objA.toString());

//!=========================================

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

//!=========================================

const objA = {
  name: 'A',
  x1: 10,
  x2: 20,
};

const objB = {
  name: 'B',
  y1: 10,
  y2: 20,
  __proto__: objA,
};

const objC = {
  name: 'C',
  c1: 10,
  c2: 20,
  __proto__: objB,
};

// console.log(objC);
// console.log(objC.x1);
// console.log(objC.c1);

//!=========================================

// const anymalPrototype = {
//   showName() {
//     console.log(this.name);
//   },

//   showAge() {
//     console.log(this.age);
//   },

//   showBreed() {
//     console.log(this.breed);
//   },

//   showInfo() {},
// };

// const dog = Object.create(anymalPrototype);

// console.log(dog);

// const dog = {
//   name: 'Lord',
//   age: 10,
//   breed: 'Spaniel',
//   __proto__: anymalPrototype,
// };

// const cat = {
//   name: 'Vasya',
//   age: 3,
//   breed: 'Noname',
//   __proto__: anymalPrototype,
// };

//!=========================================

// const x = [10, 20, 30];

// console.log(x.toString());

//!=========================================
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty('name'));
// console.log(dog.hasOwnProperty('legs'));

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }

// /**
//  * ----------------------------------------
//  */
// const objC = { c: 'objC prop' };

// const objB = Object.create(objC);
// objB.b = 'objB prop';

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty('a'));
// console.log(objA.a);

// console.log(objA.hasOwnProperty('b'));
// console.log(objA.b);

// console.log(objA.hasOwnProperty('c'));
// console.log(objA.c);

// console.log(objA.hasOwnProperty('x'));
// console.log(objA.x);

//!=========================================
