const passwordInput = document.querySelector('input[type="password"]');
const errorMessage = document.querySelector('.error-message');
const visibility = document.querySelector('.visibility');
const errorMessageСonfirmation = document.querySelector('.error-messageСonfirmation');
const confirmationPassword = document.querySelector('.confirmationPassword')

passwordInput.addEventListener('input', function() {
  if (this.value.length < 8) {
    errorMessage.textContent = 'пароль должен содержать хотя бы 8 символов';
  } else {
    errorMessage.textContent = '';
  }
});
visibility.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      visibility.textContent = 'Скрыть пароль';
    } else {
      passwordInput.type = 'password';
      visibility.textContent = 'показать пароль';
    }
  });

  confirmationPassword.addEventListener('input', function() {
    if (passwordInput.value !== this.value) {
        errorMessageСonfirmation .textContent = 'Пароли не совпадают';
    } else {
        errorMessageСonfirmation .textContent = '';
    }
  });



  