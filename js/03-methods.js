/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 * - стрілчата функція
 */

//!=========================================

// function foo() {
//   console.log(this);
// }
// foo();
//!=========================================

// const user1 = {
//   name: 'Vasya',
//   showThis() {
//     //this = user2
//     console.log(this);
//   },

//   showColor(red, green, blue) {
//     console.log(this, red, green, blue);
//   },
// };

// const user2 = {
//   name: 'Petro',
// };

// user1.showThis.call(10);
// user1.showThis.apply('Hello');
// user1.showColor(10, 20, 30);

// const rgb = [10, 20, 30];
// user1.showColor.apply(user2, rgb);

// const red = 10;
// const green = 20;
// const blue = 30;

// user1.showColor.apply(user2, [red, green, blue]);
// user1.showColor.call(user2, red, green, blue);

//!=========================================
// const showThis = function (a, b, arr) {
//   console.log(a, b, arr);
//   console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

// const objB = {
//   x: 788,
//   y: 25,
// };

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

//!=========================================
const changeColor = function (color) {
  this.color = color;
};

const hat = {
  color: 'black',
};

// changeColor.call(hat, 'green');
// changeColor.call(hat, 'green');
// changeColor.call(hat, 'green');

//!=========================================

// changeColor.call(hat, 'orange');
// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// changeColor.call(sweater, 'blue');
// console.log(sweater);

//!=========================================
// const changeHatColor = changeColor.bind(hat);

// changeHatColor('green');
// changeHatColor('red');
// changeHatColor('blue');

// console.log(hat);

//!=========================================

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);

//!=========================================
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter);

//!=========================================

//
// 11 - arrow function
// 9 - bind
// 7 - call, apply
// 5 - обєкт зліва від функції
// 3 - глобальний контекст - undefined/window

//!=========================================

// function test() {
//   const y = 10;
//   const t = 25;
//   const r = 30;
//   const x = 100;

// const arrowFn = () => {
//   const x = 55;
//   console.log(x + y);
// };

//   return arrowFn;
// }

// const arrowFn = test();
// debugger;
// arrowFn();

//!=========================================

const user1 = {
  name: 'user1',
  fullName: 'Vasya',

  foo() {
    //const this = user1

    const arrowFn = () => {
      console.log(this);
    };

    arrowFn();
  },
};

user1.foo();

//!=========================================

// 1 - визначити тип функції (звичайна чи стрілчата)
// - якщо звичайна то дивимось момент виклику
// - якщо стрілчата то дивимось момент створення на контекст бат. фнкції

function foo() {
  // this = undefined
  const arrFn1 = () => {
    // this = undefined
    const arrFn2 = () => {
      //  this = undefined
      const arrFn3 = () => {
        //  this = undefined
        const arrFn4 = () => {
          //  this = undefined
          console.log(this); // window | undeinfed
        };
        arrFn4();
      };
      arrFn3();
    };
    arrFn2();
  };
  arrFn1();
}

user1.foo();
