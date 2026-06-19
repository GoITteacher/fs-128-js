import { fetchArticles } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-function2';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  targetElem: document.querySelector('.js-target'),
  loadElem: document.querySelector('.js-loader'),
};

//!=========================================

const PER_PAGE = 10;
let query;
let page;
let totalPages;

//!=========================================

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();
  const borys = new FormData(e.target);
  query = borys.get('query');
  page = 1;

  try {
    const res = await fetchArticles(query, page);
    const markup = articlesTemplate(res.articles);
    refs.articleListElem.innerHTML = markup;
    totalPages = Math.ceil(res.totalResults / PER_PAGE);
  } catch {
    console.log('Error');
  }

  checkObserverStatus();
  e.target.reset();
});

//!=========================================

async function onLoadMore() {
  page += 1;
  checkObserverStatus();
  try {
    const res = await fetchArticles(query, page);
    const markup = articlesTemplate(res.articles);
    refs.articleListElem.insertAdjacentHTML('beforeend', markup);
  } catch {}
}

//!=========================================
const observer = new IntersectionObserver(entries => {
  const target = entries[0];
  if (target.isIntersecting) {
    onLoadMore();
  }
});

function checkObserverStatus() {
  if (page < totalPages) {
    console.log('СПОСТЕРІГАЙ');

    observer.observe(refs.targetElem);
  } else {
    console.log('ДОСИТЬ СПОСТЕРІГАТИ');
    observer.unobserve(refs.targetElem);
  }

  if (page === totalPages) {
    console.log('The end');
  }
}
