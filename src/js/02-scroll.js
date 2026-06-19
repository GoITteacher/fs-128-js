import { fetchArticles } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-function2';

const refs = {
  form: document.querySelector('.js-search-form'),
  container: document.querySelector('.js-article-list'),
  target: document.querySelector('.js-target'),
};

console.log('test');

//!=========================================

let currentPage;
let totalPages;
let query;
const PER_PAGE = 8;

//!=========================================
refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  const borys = new FormData(e.target);
  query = borys.get('query');
  currentPage = 1;

  try {
    const res = await fetchArticles(query, currentPage);
    const markup = articlesTemplate(res.articles);
    refs.container.innerHTML = markup;
    totalPages = Math.ceil(res.totalResults / PER_PAGE);
  } catch (err) {
    console.log(err);
  }

  updateObserverStatus();
  lastMessage();

  e.target.reset();
});

//!=========================================

async function loadMore() {
  currentPage += 1;
  updateObserverStatus();
  lastMessage();
  const res = await fetchArticles(query, currentPage);
  const markup = articlesTemplate(res.articles);
  refs.container.insertAdjacentHTML('beforeend', markup);
}
//!=========================================
const vasya = new IntersectionObserver(arr => {
  const elem = arr[0];
  if (elem.isIntersecting) {
    loadMore();
  }
});

function updateObserverStatus() {
  if (currentPage < totalPages) {
    console.log('Продовжуй спостерігати');
    vasya.observe(refs.target);
  } else {
    console.log('Досить спостерігати');
    vasya.unobserve(refs.target);
  }
}

function lastMessage() {
  if (currentPage === totalPages) {
    console.log('Кінець колекції');
  }
}
