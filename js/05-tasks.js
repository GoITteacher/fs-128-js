/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: false,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

//!=========================================

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// const arr = Object.values(salaries);

// for (const salary of arr) {
//   sum += salary;
// }

// console.log(sum);

//!=========================================
// const testUser = {
//   firstName: 'vAsya',
//   age: 25,
//   city: 'dnipro',
//   isAdmin: true,
// };

// console.log(testUser.age);
// console.log(testUser['age']);

//!=========================================
// Напиши функцію, яка приймає об'єкт з властивістю title. Поверни рядок "Title: {значення властивості title}".

// function task1(obj) {
//   return `Title: ${obj.title}`;
// }

// console.log(task1({ title: 'Hello' }));
// console.log(task1({ title: 'iphone' }));

//!=========================================
// Напиши функцію, яка приймає об'єкт з властивістю age. Поверни рядок "Age is {вік}".

// function task2(user) {
//   return `Age is ${user.age}`;
// }

// console.log(task2(testUser));

//!=========================================
// Напиши функцію, яка приймає об'єкт з властивістю city. Поверни тільки значення цієї властивості.

function getCity(user) {
  return user.city;
}

console.log(getCity(testUser));

//!=========================================
// Напиши функцію, яка приймає об'єкт з властивістю isAdmin. Поверни рядок "Admin" якщо true, і "User" якщо false.

// function getUserType(user) {
//   if (user.isAdmin) {
//     return 'Admin';
//   } else {
//     return 'User';
//   }
// }

// console.log(getUserType(testUser));

//!=========================================
// Напиши функцію, яка приймає об'єкт з властивостями firstName та lastName. Поверни рядок "Full name: {імʼя} {прізвище}".

function task5(user) {
  return `Full name: ${user.firstName} ${user.lastName}`;
}

//!=========================================
// Напиши функцію, яка приймає об'єкт та нове значення для властивості city. Функція повинна змінити city та повернути об'єкт.
//!=========================================
// Напиши функцію, яка приймає об'єкт з властивістю price. Збільш значення price на 10 та поверни об'єкт.

function task8(product) {
  product.price += 10;
  return product;
}

//!=========================================
// Напиши функцію, яка приймає об'єкт з властивістю name. Перезапиши name на "Unknown" та поверни об'єкт.
// Напиши функцію, яка приймає об'єкт з властивістю count. Зменш значення count на 1 та поверни об'єкт.
// Напиши функцію, яка приймає об'єкт з властивостями brand та model. Поверни рядок "{brand} {model}".
