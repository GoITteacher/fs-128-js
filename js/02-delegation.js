/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */
//!=========================================
// const container = document.querySelector('.container');

// const box1 = container.children[0];
// const box2 = container.children[1];
// const box3 = container.children[2];

// box1.addEventListener('click', e => {
//   console.log(e.target.dataset.color);
// });

// box2.addEventListener('click', e => {
//   console.log(e.target.dataset.color);
// });

// box3.addEventListener('click', e => {
//   console.log(e.target.dataset.color);
// });

//!=========================================
/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

// const container = document.querySelector('.container');

// container.addEventListener('click', e => {
//   if (e.target === container) {
//     return;
//   }

//   if (e.target.tagName !== 'BUTTON') {
//     return;
//   }

//   if (!e.target.dataset.color) {
//     return;
//   }

//   if (!e.target.classList.contains('js-btn')) {
//     return;
//   }

//   console.log(e.target.dataset.color);
// });
