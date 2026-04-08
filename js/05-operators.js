/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор && - І - and
 * - Оператор || - або - OR
 * - Оператор !
 */

// console.log(Boolean(true)); // true
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean('hello')); // true
// console.log(Boolean('false')); // true

// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean('')); // false

//!=========================================

// && - повертає перше false в іншому випадку останнє значення

// console.log(5 && 4 && 0 && false);
// console.log(5 && 'mango');

//!=========================================
// шукає перше true. або певертає останнє значення
// console.log(false || 5);
// console.log(false || null);

//!=========================================
// console.log(!5);
// console.log(!false);

//!=========================================

// console.log(true && 3); // 3

// console.log(false && 3); // f

// console.log(true && 4 && 'kiwi'); // k

// console.log(true && 0 && 'kiwi'); // 0

// console.log(true || 3);//t

// console.log(true || 3 || 4);//t

// console.log(true || false || 7);//t

// console.log(null || 2 || undefined);//2

// console.log((1 && null && 2) > 0); // f

// console.log(null || (2 && 3) || 4); // 3

//!=========================================
/* 

true - 1
false - 0
&& - *
|| - +

*/
