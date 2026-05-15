/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

//!=========================================

// document.addEventListener('keydown', e => {
//   console.log('keydown', e.code, e.key);
// });

// document.addEventListener('keypress', e => {
//   console.log('keypress', e.code, e.key);
// });

// document.addEventListener('keyup', e => {
//   console.log('keyup', e.code, e.key);
// });

//!=========================================
/**
 * Обробка комбінацій клавіш
 */

// document.addEventListener('keypress', e => {
//   console.log(e.code);

//   if (e.shiftKey && e.code === 'Space') {
//     console.log('Hello space');
//   }
// });
