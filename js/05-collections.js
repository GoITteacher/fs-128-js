/*
 * Створюємо та додаємо колекцію
 */
const colorsArr = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-list');

const arr = [];

for (const item of colorsArr) {
  const divContainer = document.createElement('div');
  divContainer.classList.add('color-item');

  const colorBlock = document.createElement('div');
  colorBlock.style.backgroundColor = item.color;
  colorBlock.style.width = '100px';
  colorBlock.style.height = '100px';

  const titleElem = document.createElement('p');
  titleElem.textContent = item.label;
  divContainer.append(colorBlock, titleElem);

  arr.push(divContainer);
}

colorPickerContainerEl.append(...arr);
