/*
 * Блокова область видимості змінних
 */

// const c = 15;

// if (true) {
//   const a = 5;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// if (true) {
//   const b = 10;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

//!=========================================

function foo() {
  const x = 20;
  if (true) {
    if (true) {
      const y = 50;
      console.log(x, y);
    }

    console.log(x);
  }
  console.log(x);
}
debugger;
foo();

// function foo2() {
//   const x = 50;
//   console.log(x);
// }

//!=========================================

// function foo1() {
//   const x = 10;
// }

// function foo2() {
//   const x = 30;
// }

// function test() {
//   console.log(x);
// }
