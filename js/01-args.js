/**
 * Псевдомасив arguments и Array.from
 */
//!=========================================

// function foo() {
//   const arguments = [10, 20, 30, 50, 70]
//   console.log(arguments);
//   const arr = [10, 20, 30];
//   console.log(arr);
// }

// foo(10, 20, 30, 50, 70);
//!=========================================
// function foo(){}

// const arr = [];
// arr.push(10, 20, 30, 40);
// console.log(arr);

//!=========================================

// const max = Math.max(10, 20, 12);
// const max = Math.min(10, 51, 24, 124, 62, 731);

//!=========================================

// function foo() {
//   const arr = Array.from(arguments);
//   const hasZero = arr.includes(0);
//   console.log(hasZero);
// }

// foo(10, 2, 501, 24, 1, 2);
// foo(1, 2, 3);
// foo(1, 2, 3, 0, 1, 5, 1);

//!=========================================
/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

// function add() {
//   const arr = Array.from(arguments);

//   let total = 0;

//   for (const item of arr) {
//     total += item;
//   }

//   return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/**
 * Напиши функцію calAverage() яка приймає масив
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */
function calAverage() {
  const arr = Array.from(arguments);
  let total = 0;

  for (const item of arr) {
    total += item;
  }

  return total / arr.length;
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
