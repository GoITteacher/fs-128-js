/**
 * Деструктуризація об'єкта
 */
//!=========================================
// const user = {
//   firstname: 'Borys',
//   lastname: 'Vasylenko',
//   phoneNumber: '+3801231241',

//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const { lastname, firstname } = user;
// console.log(firstname, lastname);
// const { skills, firstname, lastname, phoneNumber } = user;

//!=========================================
// const userPhoneNumber = user.phoneNumber;
// const userFirstName = user.firstname;
// const userLastName = user.lastname;

// const { phoneNumber, firstname, lastname } = user;

//!=========================================

// const firstname = 'Vasya';

// const user = {
//   firstname: 'Borys',
//   lastname: 'Vasylenko',
//   phoneNumber: '+3801231241',

//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const { firstname: username } = user;
// const username = user.firstname

// const { firstname: y, firstname: t, firstname: x } = user;
// const x = user.firstname
// const t = user.firstname
// const y = user.firstname
//!=========================================

// const user = {
//   firstname: 'Borys',
//   lastname: 'Vasylenko',
//   city: 'Kyiv',

//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const {
//   firstname,
//   lastname,
//   city = 'Dnipro',
//   phoneNumber: phone = '---',
// } = user;

// console.log(firstname, lastname, city, phone);

//!=========================================
/**
 * Глибока деструктуризація об'єкта
 */

// const user = {
//   firstname: 'Borys',
//   lastname: 'Vasylenko',
//   city: 'Kyiv',

//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },

//   address: {
//     city: 'Dnirpo',
//     country: 'Ukraine',
//     location: { x: 10, y: 20 },
//   },
// };

// const {
//   address: { city, country, location },
// } = user;

// const { x, y } = location;

//!=========================================

// console.log("html", html);
// console.log("css", css);
// console.log("js", js);

//!=========================================

/**
 * Деструктуризація масива
 */

// const arr = [1, 2, 3, 4, 5];
// const [x, y, q] = arr;

// const rgb = [124, 25, 58];
// const [red, green, blue, alpha = 1] = rgb;
// console.log(red, green, blue, alpha);

//!=========================================

// const arr = [1, 3, 4, 6, 1, 2, 4, 5, 6, 1, 2];

// const [x, , , y, , , t] = arr;

// console.log(x, y, t);

//!=========================================

// const user = {
//   firstname: 'Borys',
//   lastname: 'Vasylenko',
//   city: 'Kyiv',

//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },

//   address: {
//     city: 'Dnirpo',
//     country: 'Ukraine',
//     location: { x: 10, y: 20 },
//   },
// };

// const { address, skills, ...newUser } = user;

// console.log(newUser);

//!=========================================

// const arr = [999, 2, 4, 5, 2, 2, 3, 45, 5, 1];
// const [firstElem, x, y, ...rest] = arr;

// console.log(newArr);

//!=========================================
// let x = 10;
// let y = 25;

// // let tmp = x;
// // x = y;
// // y = tmp;

// x = x + y;
// y = x - y;
// x = x - y;

// console.log(x, y);

//!=========================================
// let v1 = 10;
// let v2 = 20;
// [v2, v1] = [v1, v2];
// console.log(v1, v2);

// const [x, y, q, t, w, r] = [10, 20, 30, 40, 50, 60];
