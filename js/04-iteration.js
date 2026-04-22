/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */
//!=========================================
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let total = 0;

// for (const i in feedback) {
//   total += feedback[i];
// }

// console.log(total);

//!=========================================

// const objA = {
//   x1: 10,
//   x2: 20,
//   x3: 30,
//   title: 'vasya',
// };

// const objB = {
//   title: 'Vasya',
//   price: 10,
//   __TEST__: objA,
//   $HELLO: 'tsed',
//   __proto__: objA,
// };

// for (const key in objB) {
//   console.log(key);
// }
//!=========================================

// let totalFeedback = 0;

// console.log("totalFeedback: ", totalFeedback);
//!=========================================
const objA = {
  x1: 10,
  x2: 20,
  x3: 30,
};

// const arr = Object.keys(objA); // ['x1','x2','x3','title'];
// for (const key of arr) {
//   console.log(key);
// }

// const arr = Object.values(objA); // [10,20,30]

// let total = 0;

// for (const item of arr) {
//   total += item;
// }

// console.log(total);

//!=========================================
// const keys = feedback;
// console.log(keys);

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const values = Object.values(feedback);

// let totalFeedback = 0;
// for (const item of values) {
//   totalFeedback += item;
// }

// console.log('totalFeedback: ', totalFeedback);

// console.log(feedback.good);

//!=========================================
// Object.entries();
