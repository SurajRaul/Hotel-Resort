document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('uname');
        const password = document.getElementById('psw');

        clearErrors();

        let isValid = true;

        if (username.value.trim() === '') {
            showError('uname-error', 'Username is required.');
            isValid = false;
        } else if (username.value.length < 4) {
            showError('uname-error', 'Username must be at least 4 characters long.');
            isValid = false;
        }

        if (password.value.trim() === '') {
            showError('psw-error', 'Password is required.');
            isValid = false;
        } else if (password.value.length < 6) {
            showError('psw-error', 'Password must be at least 6 characters long.');
            isValid = false;
        }

        if (isValid) {
            signInForm.submit();
        }
    });

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email');
        const password = document.getElementById('psw-signup');
        const repeatPassword = document.getElementById('psw-repeat');

        clearErrors();

        let isValid = true;

        if (email.value.trim() === '') {
            showError('email-error', 'Email is required.');
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            showError('email-error', 'Invalid email address.');
            isValid = false;
        }

        if (password.value.trim() === '') {
            showError('psw-signup-error', 'Password is required.');
            isValid = false;
        } else if (password.value.length < 6) {
            showError('psw-signup-error', 'Password must be at least 6 characters long.');
            isValid = false;
        }

        if (repeatPassword.value.trim() === '') {
            showError('psw-repeat-error', 'Please repeat your password.');
            isValid = false;
        } else if (password.value !== repeatPassword.value) {
            showError('psw-repeat-error', 'Passwords do not match.');
            isValid = false;
        }

        if (isValid) {
            signUpForm.submit();
        }
    });

    function showError(errorId, message) {
        const errorContainer = document.getElementById(errorId);
        errorContainer.textContent = message;
        errorContainer.classList.add('error-message');
    }

    function clearErrors() {
        const errorContainers = document.querySelectorAll('.error-container');
        errorContainers.forEach(container => {
            container.textContent = '';
            container.classList.remove('error-message');
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});