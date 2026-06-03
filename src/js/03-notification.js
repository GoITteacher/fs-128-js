const NOTIFICATION_DELAY = 15000;
let timeoutId = null;
const notification = document.querySelector('.js-alert');

//!=========================================

setTimeout(() => {
  showNotification();
  setTimeout(() => {
    hideNotification();
  }, NOTIFICATION_DELAY);
}, NOTIFICATION_DELAY);

notification.addEventListener('click', () => {
  hideNotification();
});

//!=========================================
function showNotification() {
  notification.classList.add('is-visible');
}
function hideNotification() {
  notification.classList.remove('is-visible');
}
