//!=========================================

const galleryElem = document.querySelector('.js-gallery');
let gallery;

const arr = [
  {
    link: 'https://mlo1wbhvgmgt.i.optimole.com/w:1024/h:576/q:mauto/g:sm/f:best/https://pethero.co.za/wp-content/uploads/2026/02/Indoor-Cats-Blog-Banner.png',
    title: 'cat',
  },
  {
    link: 'https://cdn.britannica.com/39/226539-050-D21D7721/Portrait-of-a-cat-with-whiskers-visible.jpg',
    title: 'cat',
  },
  {
    link: 'https://images.ctfassets.net/100cwma5ubtt/1GiiFUhJfnfFaV9apeWqYo/24d806d058e8892474c72197daec2486/FS_1440x810_cat-entertainment_7-reasons-you-should-adopt-a-cat.jpg?fm=webp&w=1200&q=50',
    title: 'cat',
  },
  {
    link: 'https://www.aaha.org/wp-content/uploads/2024/09/kitten-lying-in-blanket.jpg',
    title: 'cat',
  },
  {
    link: 'https://headsupfortails.com/cdn/shop/articles/Welcoming_a_Cat_to_a_New_Home.jpg?v=1741258295',
    title: 'cat',
  },
  {
    link: 'https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg',
    title: 'cat',
  },
];

//!=========================================

function imageTemplate({ link, title }) {
  return `
  <a href="${link}" class="image-link">
        <img class="image-item" src="${link}" alt="${title}" title="${title}"/>
  </a>`;
}

function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}

//!=========================================

document.addEventListener('DOMContentLoaded', () => {
  const markup = imagesTemplate(arr);
  galleryElem.innerHTML = markup;

  gallery = new SimpleLightbox('.gallery a', {
    overlay: true,
    overlayOpacity: 0.9,
    navText: ['prev', 'next'],
    captions: false,
    close: false,
    animationSpeed: 300,
  });

  gallery.on('show.simplelightbox', function () {
    console.log('OPEN MODAL');
  });

  gallery.on('close.simplelightbox', function () {
    console.log('CLOSE MODAL');
  });
});

document.addEventListener('keydown', e => {
  console.log(e.code);
  if (e.code === 'KeyQ') {
    gallery.prev();
  }

  if (e.code === 'KeyE') {
    gallery.next();
  }

  if (e.code === 'Space') {
    gallery.open();
  }
});
