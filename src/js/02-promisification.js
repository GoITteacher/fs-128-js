/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */
//!=========================================
// const createPromise = (value, delay, isActive) => {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       if (isActive) {
//         res(value);
//       } else {
//         rej(value);
//       }
//     }, delay);
//   });

//   return promise;
// };

// const pizzaPromise1 = createPromise('p1 (1000)', 1000, true);
// const pizzaPromise2 = createPromise('p2 (5000)', 5000, true);
// const pizzaPromise3 = createPromise('p3 (3000)', 3000, true);
// const pizzaPromise4 = createPromise('p4 (8000)', 8000, true);

// pizzaPromise1
//   .then(res => {
//     console.log('✅', res);
//   })
//   .catch(err => {
//     console.log('❌', err);
//   });

// pizzaPromise2
//   .then(res => {
//     console.log('✅', res);
//   })
//   .catch(err => {
//     console.log('❌', err);
//   });

// pizzaPromise3
//   .then(res => {
//     console.log('✅', res);
//   })
//   .catch(err => {
//     console.log('❌', err);
//   });

// pizzaPromise4
//   .then(res => {
//     console.log('✅', res);
//   })
//   .catch(err => {
//     console.log('❌', err);
//   });

//!=========================================

// const promise = fetch('https://jsonplaceholder.typicode.com/todos');

// promise
//   .then(res => {
//     return res.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch();

//!=========================================

// function getArr() {
//   const arr = [1, 2, 44];
//   return arr;
// }

// getArr().filter().map();
// fetch().then().catch();
//!=========================================
/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// const prepareDish = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;

//   if (passed) {
//     onSuccess(`✅ Ваше замовлення: ${dish}`);
//   }

//   onError('❌ Упс, у нас закінчилися продукти');
// };

// makeOrder(
//   'пиріжок',
//   result => {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
//   },
//   error => {
//     console.log('onMakeOrderError');
//     console.log(error);
//   },
// );

//!=========================================

// const promise = Promise.resolve('Hello');

// console.log(promise);

// promise.then(res => {
//   console.log(res);
// });

// const promise = Promise.reject('Error');
// console.log(promise);

//!=========================================

// const getArr = () => {
//   const arr = [1, 2, 4, 45, 5, 1, 24];
//   return Promise.resolve(arr);
// };

// getArr().then(res => {
//   console.log(res);
// });

//!=========================================

// const createPromise = (value, delay, isActive) => {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       if (isActive) {
//         res(value);
//       } else {
//         rej(value);
//       }
//     }, delay);
//   });

//   return promise;
// };

// const p1 = createPromise('p1', 1000, true);
// const p2 = createPromise('p2', 5000, true);
// const p3 = createPromise('p3', 3000, true);
// const p4 = createPromise('p4', 8000, true);

// const promises = [p1, p2, p3, p4];

// Promise.race(promises).then(res => {
//   console.log(res);
// });

// Promise.allSettled(promises).then(res => {
//   console.log(res);
// });

// Promise.all(promises).then(res => {
//   console.log(res);
// });
