/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Обратний відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

//!=========================================

// for (let i = 0; i < 100; i += 1) {
//   console.log('Hello');
// }

//!=========================================

// const str = 'Hello world';
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

//!=========================================

// let x = 25;
// console.log(x);

//!=========================================
// let i = 25;
// const res = 50 + i;
// console.log(res);

// for (let i = 50; i > 0; --i) {
//   console.log(i);
// }

//!=========================================

// let a = 10;

// console.log(a);
// console.log(b);

//!=========================================

//!=========================================

// console.log('Before while loop');

// let counter = 0;

// while (counter < 100) {
//   counter = Number(prompt('Введіть інше число'));
// }

// console.log('Відправимо завтра', counter);

// console.log('After while loop');

//!=========================================

// const random = Math.round(Math.random() * 100);
// let counter;

// while (counter !== random) {
//   if (counter > random) {
//     console.log('<');
//   }

//   if (counter < random) {
//     console.log('>');
//   }

//   counter = Number(prompt('Enter Value'));
// }

// console.log('Random value', random);
// console.log('The End');

//!=========================================

// const theBestSalary = 5000;
// let salary = 1000;

// for (let i = 0; i < 3; i++) {
//   console.log('Треба більше зп');
//   salary += Math.round(Math.random() * 2000);
//   console.log(`Тепер твоя зп - ${salary}`);
// }

// console.log(`Привітайте. Маю зп - ${salary}`);

//!=========================================

// const theBestSalary = 2000;
// let salary = 3000;

// while (salary < theBestSalary) {
//   console.log('\n\n\nТреба більше зп');
//   salary += Math.round(Math.random() * 2000);
//   console.log(`Тепер твоя зп - ${salary}`);
// }

// console.log(`Привітайте. Маю зп - ${salary}`);

//!=========================================

// const theBestSalary = 2000;
// let salary = 3000;

// do {
//   console.log('\n\n\nТреба більше зп');
//   salary += Math.round(Math.random() * 2000);
//   console.log(`Тепер твоя зп - ${salary}`);
// } while (salary < theBestSalary);

// console.log(`Привітайте. Маю зп - ${salary}`);

//!=========================================

// for (let i = 1; i < 1000; i++) {
//   if (i % 7 === 0 && i % 13 === 0) {
//     continue;
//   }
//   console.log(i);
// }
