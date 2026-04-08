/**
 * Оператор switch
 */
//!=========================================
const username = 'Mango';

switch (username) {
  case 'Vasya':
    console.log('Це вася');
    console.log('Піймали Васю');
    console.log('Засмутили Васю');
    break;

  case 'Max':
    console.log('Це макс');
    console.log('Піймали Макса');
    console.log('Засмутили Макса');
    break;

  case 'Mango':
    console.log('Це Mango');
    console.log('Піймали Mango');
    console.log('Засмутили Mango');
    break;

  default:
    console.log('Нікого не піймали');
}

//!=========================================

/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('Overmorrow');
// } else {
//   console.log('Date in the future');
// }

const daysUntilDeadline = 1;

switch (daysUntilDeadline) {
  case 0:
    console.log('Today');
    break;
  case 1:
    console.log('Tomorrow');
    break;
  case 2:
    console.log('Overmorrow');
    break;
  default:
    console.log('Date in the future');
}

//!=========================================

/*
 * Напиши скрипт вибору опції доставки товару.
 * Опція зберігається у змінній option: 1 - самовивіз, 2 - кур’єр, 3 - пошта
 *
 * У змінну message записати повідомлення залежно від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
 * - 'Кур’єр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилка буде відправлена сьогодні'
 * - 'Вам передзвонить менеджер'
 */

const option = 1;
let message = '';

switch (option) {
  case 1:
    message = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі';
    break;

  case 2:
    message = 'Кур’єр доставить замовлення завтра з 9:00 до 18:00';
    break;

  case 3:
    message = 'Посилка буде відправлена сьогодні';
    break;

  default:
    message = 'Вам передзвонить менеджер';
}

console.log(message);
