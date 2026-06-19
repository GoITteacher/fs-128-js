import { fetchArticles } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-function2';

const refs = {
  form: document.querySelector('.js-search-form'),
  container: document.querySelector('.js-article-list'),
  loadMoreBtn: document.querySelector('.js-btn-load'),
  loader: document.querySelector('.js-loader'),
};

//!=========================================

let query;
let page;
let totalPages;
const PER_PAGE = 8;

//!=========================================

refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  const borys = new FormData(e.target);
  query = borys.get('query');
  page = 1;

  hideLoadMoreBtn();
  showLoader();

  try {
    const res = await fetchArticles(query, page);
    const markup = articlesTemplate(res.articles);
    refs.container.innerHTML = markup;
    totalPages = Math.ceil(res.totalResults / PER_PAGE);
  } catch {}

  updateBtnStatus();
  hideLoader();
  e.target.reset();
});

//!=========================================

refs.loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  hideLoadMoreBtn();
  showLoader();
  const res = await fetchArticles(query, page);
  const markup = articlesTemplate(res.articles);
  refs.container.insertAdjacentHTML('beforeend', markup);
  updateBtnStatus();
  hideLoader();
});

//!=========================================
function showLoader() {
  refs.loader.classList.remove('hidden');
}
function hideLoader() {
  refs.loader.classList.add('hidden');
}

function showLoadMoreBtn() {
  refs.loadMoreBtn.classList.remove('hidden');
}
function hideLoadMoreBtn() {
  refs.loadMoreBtn.classList.add('hidden');
}
function updateBtnStatus() {
  if (page < totalPages) {
    showLoadMoreBtn();
  } else {
    hideLoadMoreBtn();
  }
}
