document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbar-container');
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    const navBar = document.createElement('div');
    navBar.classList.add('nav__bar');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    const logoLink = document.createElement('a');
    logoLink.href = '#';
    const logoImg = document.createElement('img');
    logoImg.src = 'assets/pngegg.png';
    logoImg.alt = 'Logo';
    logoLink.appendChild(logoImg);
    logo.appendChild(logoLink);
    const menuBtn = document.createElement('div');
    menuBtn.classList.add('nav__menu__btn');
    menuBtn.id = 'menu-btn';
    menuBtn.innerHTML = '<i class="ri-menu-line"></i>';
    const navLinks = document.createElement('ul');
    navLinks.classList.add('nav__links');
    navLinks.id = 'nav-links';
    const links = [
      { href: 'index.html', text: 'Home' },
      { href: 'booking.html', text: 'Booking' },
      { href: 'services.html', text: 'Services' },
      { href: 'explore.html', text: 'Dinning' },
      { href: 'contact.html', text: 'Contact' }
    ];

    links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.text;
      li.appendChild(a);
      navLinks.appendChild(li);
    });

    const navLinks2 = document.createElement('ul');
    navLinks2.classList.add('nav__links');
    navLinks2.id = 'nav-links';
    const links2 = [
      { href: 'signUp.html', text: 'Login' }
    ];

    links2.forEach(link => {
      const li2 = document.createElement('li');
      const a2 = document.createElement('a');
      a2.href = link.href;
      a2.textContent = link.text;
      li2.appendChild(a2);
      navLinks2.appendChild(li2);
    });

    navBar.appendChild(logo);
    navBar.appendChild(menuBtn);
    nav.appendChild(navBar);
    nav.appendChild(navLinks);
    nav.appendChild(navLinks2);
    navbarContainer.appendChild(nav);
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('section__container', 'header__container');
    headerContainer.id = 'home';

    const headerParagraph = document.createElement('p');
    headerParagraph.textContent = 'Simple - Unique - Friendly';

    const headerTitle = document.createElement('h1');
    headerTitle.innerHTML = 'Make Yourself At Home<br />In Our <span>Hotel</span>.';

    headerContainer.appendChild(headerParagraph);
    headerContainer.appendChild(headerTitle);

    navbarContainer.appendChild(headerContainer);

    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    //section form add
    const form = document.querySelector('.booking__form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const checkIn = document.querySelector('input[name="check-in"]').value;
      const checkOut = document.querySelector('input[name="check-out"]').value;
      const guest = document.querySelector('input[name="guest"]').value;
      clearErrors();
      let isValid = true;
      if (!checkIn) {
        showError('check-in', 'Check-In date is required.');
        isValid = false;
      }

      if (!checkOut) {
        showError('check-out', 'Check-Out date is required.');
        isValid = false;
      } else if (checkIn && new Date(checkOut) <= new Date(checkIn)) {
        showError('check-out', 'Check-Out date must be after Check-In date.');
        isValid = false;
      }
      if (!guest || guest <= 0) {
        showError('guest', 'Number of guests must be gretaer than 1.');
        isValid = false;
      }
      if (isValid) {
        form.submit();
      }
    });

    function showError(fieldName, message) {
      const field = document.querySelector(`input[name="${fieldName}"]`);
      const inputGroup = field.closest('.input__group');

      if (!inputGroup) return;

      let error = inputGroup.querySelector('.error-message');
      if (!error) {
        error = document.createElement('span');
        error.className = 'error-message';
        inputGroup.appendChild(error);
      }

      error.textContent = message;
      field.classList.add('input-error');
    }

    function clearErrors() {
      const errors = document.querySelectorAll('.error-message');
      errors.forEach(error => error.remove());

      const fields = document.querySelectorAll('.input__group input');
      fields.forEach(field => field.classList.remove('input-error'));
    }
  });
