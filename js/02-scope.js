/**
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */
//!=========================================
// const x = 10;

// function foo1() {
//   const x = 20;
//   if (true) {
//     const x = 30;
//     if (true) {
//       const x = 40;
//       console.log(y);
//     }
//   }
// }

// debugger;
// foo1();

//!=========================================
// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   const a = 20;
//   console.log(a); // 20
//   console.log(globalValue); // 10

//   for (let i = 0; i < 5; i += 1) {
//     console.log(a); // 20
//     console.log(globalValue); // 10

//     if (i === 2) {
//       console.log(a); // 20
//       console.log(globalValue); // 10
//     }
//   }
// }

// // ❌ Помилка! Змінна a не доступна в цій області видимості
// console.log(a);

// for (let i = 0; i < 3; i += 1) {
//   // ❌ Помилка! Змінна a не доступна в цій області видимості
//   console.log(a);
// }

//!=========================================

// function foo() {
//   const firstName = 'Vasya';
// }

// console.log(firstName);

// function foo1() {
//   console.log(firstName);
// }

//!=========================================

// function home() {
//   const balance = 1000;

//   if (true) {
//     const balance = 50;
//   }

//   if (true) {
//     const balance = 150;
//   }
// }

//!=========================================
// function foo(){
//   const firstname = 'Vasya';
// }
