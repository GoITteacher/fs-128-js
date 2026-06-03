/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log(1);

// setTimeout(function callback() {
//   console.log('HELLO');
// }, 5000);

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(3);

//!=========================================

// setTimeout(() => {
//   console.log('test');
// }, 300);

// setTimeout(() => {
//   console.log('hello world');
// }, 1000);

//!=========================================
/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */

// const timeoutId = setTimeout(() => {
//   console.log('Hello');
// }, 5000);

// document.addEventListener('click', () => {
//   clearTimeout(timeoutId);
//   console.log('clear');
// });

/**
 * Можливість передати параметри для колбеку
 */

// const callback = (x, y) => {
//   console.log(x, y);
// };

// for (let i = 0; i < 5; i++) {
//   const value = 'Hello';
//   setTimeout(callback, i * 1000, i, value);
// }
