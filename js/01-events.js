/**
 * Подія сlick
 *
 * - addEventListener
 * - removeEventListener
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

//!=========================================

// const titleElem = document.querySelector('.js-title');

// titleElem.addEventListener('click', () => {
//   console.log('TEST');
// });

//!=========================================
// const clickMe = document.querySelector('.js-click');

// clickMe.addEventListener('click', onBtnClick);

// function onBtnClick() {
//   console.log('TEST CLICK');
//   clickMe.removeEventListener('click', onBtnClick);
// }

//!=========================================
// addEventListner - додає прослуховувач
// removeEventListener - видаляє прослуховувач

// on[Target][Event] - onMyBtnClick, onTitleClick
// handleTargetEvent - handleBtnClick, handleNameChange
// targetEventHandler - btnClickHanlder, nameChangeHandler

//!=========================================
const clickMe = document.querySelector('.js-click');
const boxElem = document.querySelector('.js-box');

let leftPos = 100;
let topPos = 100;

clickMe.addEventListener('click', () => {
  leftPos += 10;
  topPos += 10;

  boxElem.style.left = `${leftPos}px`;
  boxElem.style.top = `${topPos}px`;
});
