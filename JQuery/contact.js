$(document).ready(function() {
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



    // Create the footer element
    const $footer = $('<footer>').addClass('footer').attr('id', 'contact');

    // Create the first section of the footer
    const $footerContainer = $('<div>').addClass('section__container footer__container');
    const $contactHeading = $('<h4>').text('CONTACT US');
    const $footerLinks = $('<ul>').addClass('footer__links footer__socials');
    const $footerLinksItem = $('<li>');

    // Create and append social media links
    const socialLinks = [
        { src: 'assets/facebook.png', alt: 'facebook', text: 'Marriott@Hotel.com' },
        { src: 'assets/instagram.png', alt: 'instagram', text: '@Marriott.Hotels' },
        { src: 'assets/youtube.png', alt: 'youtube', text: 'Marriott.Hotels' },
        { src: 'assets/twitter.png', alt: 'twitter', text: 'Marriott@info.com' }
    ];

    socialLinks.forEach(link => {
        const $img = $('<img>').attr({ src: link.src, alt: link.alt });
        const $a = $('<a>').attr('href', '#').text(link.text);
        $footerLinksItem.append($img).append($a);
    });

    $footerLinks.append($footerLinksItem);
    
    // Create and append the YouTube iframe
    const $iframe = $('<iframe>').attr({
        width: '560',
        height: '315',
        src: 'https://www.youtube.com/embed/uB4LGz8MmwQ?si=yX4WtZTxsnP_LALn',
        title: 'YouTube video player',
        frameborder: '0',
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        referrerpolicy: 'strict-origin-when-cross-origin',
        allowfullscreen: true
    });

    // Append the heading, links, and iframe to the footer container
    $footerContainer.append($contactHeading).append($footerLinks).append($iframe);
    
    // Create the second section of the footer with copyright
    const $footerBar = $('<div>').addClass('footer__bar').text('Copyright © 2024 NeoSoft. All rights reserved.');

    // Append both sections to the footer
    $footer.append($footerContainer).append($footerBar);

    // Append the footer to the body or a specific container
    $('body').append($footer);
});
