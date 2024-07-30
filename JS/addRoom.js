document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('roomForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const roomType = document.getElementById('roomType').value.trim();
    const description = document.getElementById('description').value.trim();
    const price = document.getElementById('price').value.trim();
    const image = document.getElementById('image').value.trim();
    clearErrors();

    let isValid = true;

    if (roomType === '') {
        showError('roomType', 'Room Type is required.');
        isValid = false;
    }
    if (description === '') {
        showError('description', 'Description is required.');
        isValid = false;
    }
    if (price === '' || isNaN(price) || parseFloat(price) <= 0) {
        showError('price', 'Price per Night must be a positive number.');
        isValid = false;
    }
    if (image === '' || !isValidURL(image)) {
        showError('image', 'A valid Image URL is required.');
        isValid = false;
    }
    if (isValid) {
        form.submit();
    }
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const formGroup = field.closest('.form-group');
    
    if (!formGroup) return;

    let error = formGroup.querySelector('.error-message');
    if (!error) {
        error = document.createElement('span');
        error.className = 'error-message';
        formGroup.appendChild(error);
    }

    error.textContent = message;
    field.classList.add('input-error');
}

function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());

    const fields = document.querySelectorAll('.form-group input, .form-group textarea');
    fields.forEach(field => field.classList.remove('input-error'));
}

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}
});
