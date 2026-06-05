/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const result = document.querySelector('.result');

//!=========================================

function createPromise(delay) {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        res('🤑');
      } else {
        rej('👿');
      }
    }, delay);
  });
  return promise;
}

startBtn.addEventListener('click', () => {
  result.textContent = '';
  container.children[0].textContent = '';
  container.children[1].textContent = '';
  container.children[2].textContent = '';

  const promises = [];

  for (let i = 0; i < 3; i++) {
    const smilePromise = createPromise((i + 1) * 100); // 1 * 1000 = 1000

    smilePromise
      .then(smile => {
        container.children[i].textContent = smile;
      })
      .catch(smile => {
        container.children[i].textContent = smile;
      });

    promises.push(smilePromise);
  }

  Promise.allSettled(promises).then(res => {
    const isWinner = res.every(el => el.status === 'fulfilled');
    result.textContent = isWinner
      ? 'Ви перемогли'
      : 'Пощастить настпуним разом, спробуйте ще!';
  });
});

//!=========================================
