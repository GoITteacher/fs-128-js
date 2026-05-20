const products = [
  {
    id: 1,
    img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    name: 'Monitor',
    price: 3000,
    description: '23-inch monitor with Full HD resolution.',
  },
  {
    id: 2,
    img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    name: 'Laptop',
    price: 20000,
    description:
      'Lightweight and powerful laptop with a 15-inch display and SSD.',
  },
  {
    id: 3,
    img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
    name: 'Smartphone',
    price: 8000,
    description: 'Equipped with a triple camera and a multi-core processor.',
  },
  {
    id: 4,
    img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
    name: 'Tablet',
    price: 12000,
    description: '10-inch tablet with high performance and a Retina display.',
  },
];

const container = document.querySelector('.products');

let instance;
//!=========================================

function productTemplate(product) {
  return `<li class="item">
        <img src="${product.img}" alt="" />
        <h2>Name: ${product.name}</h2>
        <p>Price: ${product.price}</p>
        <button data-id="${product.id}">Show details</button>
      </li>`;
}

function productsTemplate(products) {
  return products.map(productTemplate).join('');
}

//!=========================================
document.addEventListener('DOMContentLoaded', () => {
  const markup = productsTemplate(products);
  container.innerHTML = markup;
});

//!=========================================

container.addEventListener('click', e => {
  if (e.target.tagName !== 'BUTTON') return;

  const id = e.target.dataset.id;
  const product = products.find(el => el.id === Number(id));

  showModal(product);
});

//!=========================================

function showModal(product) {
  instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${product.img}" alt="" />
        <h2>Name: ${product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Desc: ${product.description}</p>
    </div>
  `,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscPress);
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscPress);
      },
    },
  );

  instance.show();
}

//!=========================================

function onEscPress(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}
