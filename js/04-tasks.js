/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

//!=========================================

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// function formatTime(minutesValue) {
//   const hours = Math.floor(minutesValue / 60);
//   const minutes = minutesValue % 60;

//   const hoursStr = hours.toString().padStart(2, '0');
//   const minutesStr = minutes.toString().padStart(2, '0');

//   const res = `${hoursStr}:${minutesStr}`;
//   return res;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

//!=========================================
//Написати функцію яка приймає рядок (слово) і робить першу літеру великою а усі інші маленькими.

function convertWord(word) {
  const firstLetter = word[0].toUpperCase();
  const secondPart = word.slice(1).toLowerCase();
  const res = firstLetter + secondPart;
  return res;
}

console.log(convertWord('hello'));

//!=========================================

//написати функцію яка приймає рядок зі словами.
//Потрібно кожне слово зробити з великої літери

// 'Hello my world, This is test string'
// function convertWords(words) {
//   const arr = words.split(' ');

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = convertWord(arr[i]);
//   }

//   const res = arr.join(' ');
//   console.log(res);
// }

// convertWords('Hello my world, This is test string');
//!=========================================

// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// const res = factorial(8);
// console.log(res);

//!=========================================

// const x = function () {};
