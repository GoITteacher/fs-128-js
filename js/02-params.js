/**
 * Деструктуризація об'єкта в параметрах функції
 */

const user = {
  username: 'Jacob name',
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

// Без деструктуризації
// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`,
//   );
// }

// З деструктуризацією
function getUserName({ username: name, skills: { html, css, js } }) {
  console.log(
    `Hello my name is ${name},
    I know html - ${html},
    css - ${css}
    and js -${js}`,
  );
}

// getUserName(user);

//!=========================================

// function showName({ title, price }) {
//   console.log(`Book Title: ${title}, price: ${price}`);
// }

// showName({ id: 25, title: 'Harry Potter', price: 800 });
// showName();
