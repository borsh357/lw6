function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function showError(text, where, delay) {
  var error = document.createElement('p');
  error.setAttribute('class', 'registration-form__danger');
  error.innerHTML = text;
  insertAfter(error, where);
  where.classList.add('form-row__input--incorrect');
  where.style.marginBottom = '0px';
  setTimeout(function() {
    error.parentNode.removeChild(error);
    where.classList.remove('form-row__input--incorrect');
    where.style.marginBottom = '13px';
  }, delay * 1000)
}

function validate() {
  var fullNameInput = document.getElementsByClassName('input-full-name')[0];
  var emailInput = document.getElementsByClassName('input-email')[0];
  var cityInput = document.getElementsByClassName('input-city')[0];
  var passwordInput = document.getElementsByClassName('input-password')[0];

  if (fullNameInput.value.length === 0 || !fullNameInput.value.match(
      /^[a-zA-Zа-яА-Я]/)) {
    showError('Incorrect name', fullNameInput, 3);
  }

  if (emailInput.value.length === 0 || !emailInput.value.match(
      /^[0-9a-z_.-]+@[0-9a-z_^\.]+\.[a-z]{2,3}/)) {
    showError('Invalid email', emailInput, 3);
  }

  if (passwordInput.value < 6) {
    showError('Password must have at least 6 characters', passwordInput, 3);
  }

}
document.getElementsByClassName('registration-form__submit')[0].onclick =
  function(e) {
    e.preventDefault();
    validate();
  }