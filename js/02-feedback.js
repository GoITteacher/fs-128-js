const STORAGE_KEY = 'user-data';

const form = document.querySelector('.js-form');
const textarea = form.querySelector('textarea');

//!=========================================

form.addEventListener('input', e => {
  const borys = new FormData(form);
  const data = {
    name: borys.get('name'),
    message: borys.get('message'),
  };
  saveToLS(STORAGE_KEY, data);
});

//!=========================================

document.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS(STORAGE_KEY);

  if (data) {
    form.elements.name.value = data.name;
    form.elements.message.value = data.message;
  }
});
//!=========================================

form.addEventListener('submit', e => {
  e.preventDefault();

  const borys = new FormData(form);

  const data = {
    name: borys.get('name'),
    message: borys.get('message'),
  };

  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

//!=========================================

function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    return JSON.parse(json);
  } catch {
    return json;
  }
}
