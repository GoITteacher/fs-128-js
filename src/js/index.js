// function getPromise() {
//   return Promise.resolve('ok');
// }

import { getPokemon } from './api/pokemonApi';

// async function test() {
//   console.log('S');

//   const res = await getPromise();
//   console.log(res);

//   console.log('E');
// }

//!=========================================

// const x = '5';
// const number = +x;

//!=========================================

// const x = await getPromise();
// console.log(x);

//!=========================================

// async function foo() {}

// const user = {
//   async showInfo() {},
// };

// [].map(async () => {});

// class User {
//   async showInfo() {}
// }

//!=========================================

// async function foo() {
//   console.log(1);

//   const res2 = await getPromise();
//   console.log(2, res2);

//   const res3 = await getPromise();
//   console.log(3, res3);

//   console.log(4);
// }

// async function getArr() {
//   return [1, 2, 3];
// }

// async function getName() {
//   return 'Volodka';
// }

//!=========================================

async function foo() {
  const array = [];
  for (let i = 1; i < 100; i++) {
    const promise = getPokemon(i);
    array.push(promise);
  }

  const res = await Promise.all(array);
  console.log(res);
}

foo();
