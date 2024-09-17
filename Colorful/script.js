// Скрипт для смены темы
setInterval(() => {
  const changeTheme = document.querySelector('.ym-light-theme');
  if (changeTheme) {
    changeTheme.classList.replace('ym-light-theme', 'ym-dark-theme');
  }
}, 0);