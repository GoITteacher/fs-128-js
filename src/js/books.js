import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  createBook,
  deleteBook,
  getBookList,
  resetBook,
  updateBook,
} from './api/booksAPI.js';

//!=========================================

const refs = {
  container: document.querySelector('.js-article-list'),
  createForm: document.querySelector('.js-create-form'),
  resetForm: document.querySelector('.js-reset-form'),
  updateForm: document.querySelector('.js-update-form'),
  loader: document.querySelector('.js-loader'),
};

//!=========================================

document.addEventListener('DOMContentLoaded', async () => {
  try {
    showLoader();
    const data = await getBookList();
    const markup = booksTemplate(data.items);
    refs.container.innerHTML = markup;
  } catch {}

  hideLoader();
});

//!=========================================
refs.createForm.addEventListener('submit', handleBookCreate);
refs.updateForm.addEventListener('submit', handleBookUpdate);
refs.resetForm.addEventListener('submit', handleBookReset);
refs.container.addEventListener('click', handleBookDelete);

async function handleBookCreate(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const newBookData = {
    title: formData.get('title'),
    author: formData.get('author'),
    desc: formData.get('desc'),
  };

  try {
    showLoader();
    const res = await createBook(newBookData);
    const markup = bookTemplate(res);
    refs.container.insertAdjacentHTML('afterbegin', markup);

    iziToast.success({
      title: 'Success',
      message: 'Book was created!',
      position: 'topRight',
    });
  } catch {
    iziToast.error({
      title: 'Error',
      message: 'smt went wrong',
      position: 'topRight',
    });
  }

  hideLoader();
  e.target.reset();
}

async function handleBookUpdate(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const id = formData.get('bookId');

  const bookData = {
    title: formData.get('title'),
    author: formData.get('author'),
    desc: formData.get('desc'),
  };

  try {
    showLoader();
    const newBook = await updateBook(id, bookData);
    const oldElem = document.querySelector(`[data-id="${id}"]`);
    const markup = bookTemplate(newBook);
    oldElem.outerHTML = markup;
  } catch {}

  hideLoader();
}

async function handleBookReset(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const id = formData.get('bookId');

  const bookData = {
    title: formData.get('title'),
    author: formData.get('author'),
    desc: formData.get('desc'),
  };

  try {
    showLoader();
    const newBook = await resetBook(id, bookData);
    const oldElem = document.querySelector(`[data-id="${id}"]`);
    const markup = bookTemplate(newBook);
    oldElem.outerHTML = markup;
  } catch (err) {
    console.log('err', err);
  }
  hideLoader();
}

function handleBookDelete(e) {
  if (!e.target.classList.contains('book-delete-button')) {
    return;
  }
  const id = e.target.dataset.id;

  deleteBook(id).then(() => {
    const liElem = e.target.closest('li');
    liElem.remove();
  });
}

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
          <p class="book-desc">${book.desc}</p>
          <button class="btn button book-delete-button" data-id="${book._id}">
            Delete
          </button>
        </div>
      </li>`;
}

function booksTemplate(books) {
  return books.map(bookTemplate).join('');
}
//!=========================================

function showLoader() {
  refs.loader.classList.remove('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}

function showMessage() {
  iziToast.show({
    title: 'Hey',
    message: 'What would you like to add?',
  });
}
