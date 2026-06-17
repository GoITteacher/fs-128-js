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
};

//!=========================================

document.addEventListener('DOMContentLoaded', () => {
  getBookList().then(data => {
    const markup = booksTemplate(data.items);
    refs.container.innerHTML = markup;
  });
});

//!=========================================
refs.createForm.addEventListener('submit', handleBookCreate);
refs.updateForm.addEventListener('submit', handleBookUpdate);
refs.resetForm.addEventListener('submit', handleBookReset);
refs.container.addEventListener('click', handleBookDelete);

function handleBookCreate(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const newBookData = {
    title: formData.get('title'),
    author: formData.get('author'),
    desc: formData.get('desc'),
  };

  createBook(newBookData).then(res => {
    const markup = bookTemplate(res);
    refs.container.insertAdjacentHTML('afterbegin', markup);
  });

  e.target.reset();
}

function handleBookUpdate(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const id = formData.get('bookId');

  const bookData = {
    title: formData.get('title'),
    author: formData.get('author'),
    desc: formData.get('desc'),
  };

  updateBook(id, bookData).then(newBook => {
    const oldElem = document.querySelector(`[data-id="${id}"]`);
    const markup = bookTemplate(newBook);
    oldElem.outerHTML = markup;
  });
}

function handleBookReset(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const id = formData.get('bookId');

  const bookData = {
    title: formData.get('title'),
    author: formData.get('author'),
    desc: formData.get('desc'),
  };

  resetBook(id, bookData)
    .then(newBook => {
      const oldElem = document.querySelector(`[data-id="${id}"]`);
      const markup = bookTemplate(newBook);
      oldElem.outerHTML = markup;
    })
    .catch(err => {
      console.log('err', err);
    });
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
