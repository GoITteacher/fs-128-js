/**
 * Деструктуризація об'єкта в циклі
 */

const users = [
  {
    name: 'Kate',
    city: 'Dnirpo',
  },
  {
    name: 'Alex',
    city: 'Kyiv',
  },
  {
    name: 'Mark',
    city: 'Lviv',
  },
];

//!=========================================

// for (const { name, city } of users) {
//   console.log(name, city);
// }

//!=========================================

// users.forEach(({ name, city }) => {
//   console.log(name);
//   console.log(city);
// });

//!=========================================
// const user = {
//   firsname: 'Borys',
//   lastname: 'Vasylenko',
//   city: 'Dnipro',
//   country: 'Ukraine',
// };

// const keys = Object.keys(user);
// const values = Object.values(user);
// const entries = Object.entries(user);

// for (const [key, value] of entries) {
//   console.log(key, value);
// }

//!=========================================

/**
 * Без деструктуризації
//  */
// const names = [];

// for (const user of users) {
//   names.push(user.name);
// }

// console.log(names);

/**
 * З деструктуризацією
 */
