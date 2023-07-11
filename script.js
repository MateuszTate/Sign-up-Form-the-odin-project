const passwordOne = document.getElementById('passwordOne');
const passwordTwo = document.getElementById('passwordTwo');
const passwordError = document.getElementById('passwordError');
const submitButton = document.getElementById('submitButton');

function validatePassword() {
    if(passwordOne.value !== passwordTwo.value) {
        passwordError.style.display = 'block';
        submitButton.style.opacity = '0.3';
        submitButton.disabled = true;
    } else {
        passwordError.style.display = 'none';
        submitButton.disabled = false;
        submitButton.style.opacity = '1';
      }
}

passwordOne.addEventListener('input', validatePassword);
passwordTwo.addEventListener('input', validatePassword);