/*
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mousemove (chatty event - балакуча подія)
 */

const boxRef = document.querySelector('.js-box');
const child = boxRef.firstElementChild;
boxRef.addEventListener('mousemove', e => {
  console.log(e.x, e.y);
  child.style.position = 'absolute';
  child.style.left = `${e.x - 100}px`;
  child.style.top = `${e.y - 150}px`;
});

// boxRef.addEventListener('mouseenter', () => {
//   boxRef.classList.add('box--active');
// });

// boxRef.addEventListener('mouseleave', () => {
//   boxRef.classList.remove('box--active');
// });
