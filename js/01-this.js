/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

/**
 * Глобальний контекст
 */

// function foo() {
//   console.log(this); // undefined
// }

// foo();

//!=========================================

/**
 * Контекст методу об'єкта
 */

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log(this);
//   },
// };

// user.showTag();

//!=========================================
/**
 * Контекст методу об'єкта, но объявлена как внешняя функция.
 */

// function showTag() {
//   console.log(this);
// }

// const mango = {
//   tag: 'Mango',
//   showTag: showTag,
// };

// showTag();

// mango.showTag();

//!=========================================
/**
 * Вызов без контекста, но объявлена как метод объекта.
 */

// const poly = {
//   tag: 'Poly',
//   showTag() {
//     console.log(this);
//   },
// };

// poly.showTag();

// const myCopyFn = poly.showTag;

// myCopyFn();

//!=========================================

/**
 * Контекст в callback-функциях
 */

// const jacob = {
//   tag: 'Jacob',
//   showTag() {
//     console.log(this);
//   },
// };

// function invokeAction(callback) {
//   callback();
// }

// invokeAction(jacob.showTag);
