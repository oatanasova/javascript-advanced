function notify(message) {
  let notificationRef = document.getElementById('notification');

  notificationRef.textContent = message;
  notificationRef.style.display = 'block';

  notificationRef.addEventListener('click', () => {
    notificationRef.style.display = 'none';
  }, {once: true});
}