/**
 * LocalStorage
 */
//!=========================================

// const user = {
//   name: 'Vasya',
//   lastname: 'Bilenko',
//   age: 25,
//   city: 'Lviv',
// };

// const zip = JSON.stringify(user);
// localStorage.setItem('user', zip);

// const user = localStorage.getItem('user');

// console.log(user);

//!=========================================
// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

// localStorage.setItem('KEY', JSON.stringify('Hello world'));

//!=========================================
/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

// const json = localStorage.getItem('KEY');
// const res = JSON.parse(json);

//!=========================================

/**
 * Видалення
 */
// localStorage.removeItem('UserName');
// localStorage.removeItem('KEY');
// localStorage.removeItem('user');

//!=========================================

// localStorage.clear

//!=========================================
/**
 * LocalStorage не може зберігати функції
 */

// const user = {
//   firstName: 'Vasya',
//   lastName: 'Bilenko',
//   age: undefined,

//   showInfo() {
//     console.log(this.firstName);
//     console.log(this.lastName);
//   },
// };

// const json = JSON.stringify(user);
// console.log(json);
//!=========================================

// const message = {
//   update_id: 938035597,
//   message: {
//     message_id: 2733744,
//     from: {
//       id: 433982686,
//       is_bot: false,
//       first_name: 'Volodymyr',
//       last_name: 'Pashchenko',
//       username: 'pashchenko_v_r',
//       language_code: 'uk',
//       is_premium: true,
//     },
//     chat: {
//       id: 433982686,
//       first_name: 'Volodymyr',
//       last_name: 'Pashchenko',
//       username: 'pashchenko_v_r',
//       type: 'private',
//     },
//     date: 1779901989,
//     text: 'Hello world',
//   },
// };

//!=========================================

// function foo{}()
// for({});
// if{};

//!=========================================

// console.log('StART');
// try {
//   const userJson = prompt('Enter your json');
//   const res = JSON.parse(userJson);
//   console.log(res);
// } catch (error) {
//   console.log('ERROR');
// }

// console.log('END');

//!=========================================
// console.log('start');
// try {
//   const password = prompt('Enter password');
//   if (password.length < 6) {
//     throw new Error('Invalid password');
//   }

//   console.log('Good password');
// } catch (err) {
//   console.log(err);
// }

// console.log('end');

// try {
//   JSON.parse();
// } catch {
//   console.log('Error');
// }

//!=========================================
const user = {};

localStorage.setItem('user1', JSON.stringify(user));
localStorage.setItem('user2', JSON.stringify(user));
localStorage.setItem('user3', JSON.stringify(user));
localStorage.setItem('user4', JSON.stringify(user));

//!=========================================

//!=========================================

// const user1 = loadFromLS('user1');

//!=========================================

function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
  } catch {
    return json;
  }
}
