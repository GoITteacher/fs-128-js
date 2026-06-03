/*
 * Метод setInterval(callback, delay, args)
 */

const intervalId = setInterval(() => {
  console.log('Hello world');
}, 1000);

/*
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

setTimeout(() => {
  console.log('clear');
  clearInterval(intervalId);
}, 5000);
