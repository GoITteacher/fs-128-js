import { fetchArticles } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-function2';

const refs = {
  form: document.querySelector('.js-search-form'),
  list: document.querySelector('.js-article-list'),
  loadMoreBtn: document.querySelector('.js-btn-load'),
  loader: document.querySelector('.js-loader'),
};
//!=========================================
const PER_PAGE = 10;
let query;
let page;
let totalPages;

//!=========================================

refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  const borys = new FormData(e.target);
  query = borys.get('query');
  page = 1;

  showLoader();

  try {
    const res = await fetchArticles(query, page);
    totalPages = Math.ceil(res.totalResults / PER_PAGE);
    const markup = articlesTemplate(res.articles);
    refs.list.innerHTML = markup;
  } catch {
    console.log('ERROR');
  }

  checkBtnStatus();
  hideLoader();
  e.target.reset();
});

//!=========================================

refs.loadMoreBtn.addEventListener('click', async () => {
  page += 1;

  checkBtnStatus();
  showLoader();
  try {
    const res = await fetchArticles(query, page);
    const markup = articlesTemplate(res.articles);
    refs.list.insertAdjacentHTML('beforeend', markup);
  } catch {
    console.log('error');
  }

  hideLoader();
});

//!=========================================

function checkBtnStatus() {
  if (page < totalPages) {
    showLoadBtn();
  } else {
    hideLoadBtn();
  }
}

function showLoadBtn() {
  refs.loadMoreBtn.disabled = false;
  // refs.loadMoreBtn.classList.remove('hidden');
}

function hideLoadBtn() {
  refs.loadMoreBtn.disabled = true;
  // refs.loadMoreBtn.classList.add('hidden');
}

//!=========================================

function showLoader() {
  refs.loader.classList.remove('hidden');
}
function hideLoader() {
  refs.loader.classList.add('hidden');
}
