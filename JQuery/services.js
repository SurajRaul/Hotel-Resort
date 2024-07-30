//  Navbar with Jquery
$(document).ready(function () {
    const navbarContainer = $('#navbar-container');
    const $nav = $('<nav>').addClass('nav');
    const $navBar = $('<div>').addClass('nav__bar');

    const $menuBtn = $('<div>').addClass('nav__menu__btn').attr('id', 'menu-btn').html('<i class="ri-menu-line"></i>');

    const $navLinks = $('<ul>').addClass('nav__links').attr('id', 'nav-links');
    const links = [
      { href: 'index.html', text: 'Home' },
      { href: 'booking.html', text: 'Booking' },
      { href: 'services.html', text: 'Services' },
      { href: 'explore.html', text: 'Dinning' },
      { href: 'contact.html', text: 'Contact' }
    ];

    links.forEach(link => {
      const $li = $('<li>');
      const $a = $('<a>').attr('href', link.href).text(link.text);
      $li.append($a);
      $navLinks.append($li);
    });

  const $button = $('<button>').addClass('btn', 'nav__btn').attr('id','btn');
  const $buttonLink = $('<a>').attr('href', 'booking.html').text('Book Now');
  $button.append($buttonLink);

    $navBar.append($menuBtn);
    $nav.append($navBar);
    $nav.append($navLinks);
    $nav.append($button);

    navbarContainer.append($nav);

    $('#menu-btn').click(function () {
      $('#nav-links').toggleClass('open');
    });
  });