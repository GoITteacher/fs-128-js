/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

// const form = document.querySelector('.js-form');

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const borys = new FormData(form);

//   const data = {
//     email: borys.get('user-email'),
//     password: borys.get('password'),
//     comment: borys.get('comment'),
//   };

//   console.log(data);

//   form.reset();
// });

//!=========================================

const formElem = document.querySelector('.js-car-form');
const carList = document.querySelector('.js-list');

formElem.addEventListener('submit', e => {
  e.preventDefault();

  const borys = new FormData(formElem);

  const car = {
    title: borys.get('title'),
    price: borys.get('price'),
    img: borys.get('img'),
    onSale: borys.get('onSale'),
    type: borys.get('type'),
  };

  const markup = carTemplate(car);

  carList.insertAdjacentHTML('afterbegin', markup);

  formElem.reset();
});

function carTemplate(car) {
  return `<li class="car-item">
        <img src="https://picsum.photos/720?random=1" alt="" />
        <div class="car-info">
          <h3>${car.title}</h3>
          <p>Type: ${car.type}</p>
          <p>Price: ${car.price}$</p>
        </div>
      </li>`;
}
