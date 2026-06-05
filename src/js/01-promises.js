/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */
//!=========================================

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       console.log('Натискаю зелену');
//       resolve('Смачного');
//     } else {
//       console.log('Натискаю червону');
//       reject('Вибачайте');
//     }
//   }, 100);
// });

//!=========================================

// const handleFulfilled = () => {
//   console.log('Ням ням ням');
// };

// const handleRejected = () => {
//   console.log('Поверніть гроші!!!');
// };

// promise.then(handleFulfilled, handleRejected);

//!=========================================

// promise
//   .then(value => {
//     console.log(value);
//     console.log('Ням ням');
//   })
//   .catch(error => {
//     console.log(error);
//     console.log('Error');
//   });
//!=========================================

// promise
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//!=========================================

// "Проміс виконався успішно, із результатом (виконаний, fulfilled)";
// "Проміс виконався з помилкою (відхилений, rejected)"

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// const arr = [1, 2, 3, 4, 5];

//!=========================================

// const promise = new Promise((resolve, reject) => {
//   resolve();
// });

// promise
//   .then(x => {
//     const y = JSON.parse(prompt('Enter a number'));
//     console.log(y * x);
//   })
//   .catch(() => {
//     console.log('Ну і фігню ти ввів');
//   });

// promise.then().catch();

// promise.then(data1 => {
//   console.log(data1);
//   return data1 / 2;
//   const x = 25;
//   console.log(y);
// });
//   .then()
//   .catch(err => {})
//   .then()
//   .catch();

//!=========================================
