/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//   link += '/';
// }

// console.log(link);

/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

// let url = 'https://my-site.com/about';

// const hasSlash = url.endsWith('/');
// const isMySite = url.includes('my-site');

// if (!hasSlash && isMySite) {
//   url += '/';
// }

// console.log(url);

/*
 * Пошук у рядку методом includes()
 */

const string1 =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = '#fatlivesmatter advertising campaign';

function hasSpam(str) {
  const word1 = 'spam';
  const word2 = 'sale';
  const lowerStr = str.toLowerCase();

  const hasWord1 = lowerStr.includes(word1);
  const hasWord2 = lowerStr.includes(word2);
  const hasBanWords = hasWord1 || hasWord2;

  if (hasBanWords) {
    console.log('Містить заборонені слова');
  } else {
    console.log('все добре');
  }
}
