import iziToast from 'izitoast';
import 'iziToast/dist/css/iziToast.min.css';

import {
  createBook,
  deleteBook,
  getBooks,
  resetBook,
  updateBook,
} from './api/booksApi';

//!=========================================

const refs = {
  container: document.querySelector('.js-article-list'),
  createForm: document.querySelector('.js-create-form'),
  resetForm: document.querySelector('.js-reset-form'),
  updateForm: document.querySelector('.js-update-form'),
};

//!=========================================
refs.createForm.addEventListener('submit', onCreateBook);
refs.resetForm.addEventListener('submit', onResetBook);
refs.updateForm.addEventListener('submit', onUpdateBook);

//!=========================================
function onCreateBook(e) {
  e.preventDefault();
  const borys = new FormData(e.target);

  const bookData = {
    title: borys.get('title'),
    author: borys.get('author'),
    desc: borys.get('desc'),
  };

  createBook(bookData)
    .then(newBook => {
      const markup = bookTemplate(newBook);
      refs.container.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(err => {});

  e.target.reset();
}
//!=========================================

function onResetBook(e) {
  e.preventDefault();

  const borys = new FormData(e.target);

  const id = borys.get('bookId');

  const bookData = {
    title: borys.get('title'),
    author: borys.get('author'),
    desc: borys.get('desc'),
  };

  resetBook(id, bookData)
    .then(newBook => {
      const oldBookElem = document.querySelector(`li[data-id="${id}"]`);
      console.log(oldBookElem);

      const newMarkup = bookTemplate(newBook);
      oldBookElem.outerHTML = newMarkup;
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong',
        position: 'topRight',
      });
    });

  e.target.reset();
}

//!=========================================
function onUpdateBook(e) {
  e.preventDefault();

  const borys = new FormData(e.target);

  const id = borys.get('bookId');

  const bookData = {
    title: borys.get('title'),
    author: borys.get('author'),
    desc: borys.get('desc'),
  };

  updateBook(id, bookData)
    .then(newBook => {
      const oldBookElem = document.querySelector(`li[data-id="${id}"]`);
      const newMarkup = bookTemplate(newBook);
      oldBookElem.outerHTML = newMarkup;
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        title: 'Error',
        message: 'Illegal operation',
        position: 'topRight',
      });
    });

  e.target.reset();
}

//!=========================================

refs.container.addEventListener('click', e => {
  if (!e.target.classList.contains('book-delete-button')) {
    return;
  }

  const id = e.target.dataset.id;
  deleteBook(id)
    .then(() => {
      e.target.closest('li').remove();
    })
    .catch(err => {});
});

//!=========================================
document.addEventListener('DOMContentLoaded', () => {
  getBooks().then(response => {
    const markup = booksTemplate(response.items);
    refs.container.innerHTML = markup;
  });
});

//!=========================================

function bookTemplate(book) {
  return `<li class="card book-item" data-id="${book._id}">
        <div class="book-cover-placeholder" aria-label="Book cover placeholder">
          <span>BK</span>
        </div>
        <div class="book-card-body">
          <div class="book-card-header">
            <span class="book-label">Book</span>
            <span class="book-id">${book._id}</span>
          </div>
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">by ${book.author}</p>
          <p class="book-desc">
            ${book.desc}
          </p>
          <button class="btn button book-delete-button" data-id="${book._id}" >Delete</button>
        </div>
      </li>`;
}

function booksTemplate(arr) {
  return arr.map(bookTemplate).join('');
}
