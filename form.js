const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

emailInput.addEventListener('input', () => {
    if (emailInput.validity.valid) {
        emailError.style.display = 'none';
    } else {
        emailError.style.display = 'inline';
    }
});