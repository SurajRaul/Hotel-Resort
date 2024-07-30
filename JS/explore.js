document.addEventListener('DOMContentLoaded', function() {
    const menuData = [
        {
            image: './assets/Breakfast.jpg',
            title: 'Deluxe Breakfast',
            description: 'Scrambled eggs, bacon, toast, fresh fruits.',
            price: 'Rs.1200',
            link: '#'
        },
        {
            image: './assets/Seafood.jpg',
            title: 'Seafood Platter',
            description: 'Fresh catch of the day, served with salad.',
            price: 'Rs.1000',
            link: '#'
        },
        {
            image: './assets/vegaP.jpg',
            title: 'Vegetarian Pasta',
            description: 'Spinach, cherry tomatoes, cheese.',
            price: 'Rs.800',
            link: '#'
        }
    ];

    const cardContainer = document.querySelector('.card-container');

    function createCard(menu) {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const img = document.createElement('img');
        img.src = menu.image;
        img.classList.add('card-img-top');
        img.alt = menu.title;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = menu.title;

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = menu.description;

        const cardPrice = document.createElement('h5');
        const priceSpan = document.createElement('span');
        priceSpan.textContent = menu.price;
        cardPrice.appendChild(priceSpan);

        const orderNowButton = document.createElement('a');
        orderNowButton.href = menu.link;
        orderNowButton.classList.add('btn', 'btn-primary');
        orderNowButton.textContent = 'Order Now';

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(orderNowButton);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        return cardDiv;
    }

    menuData.forEach(menu => {
        const menuElement = createCard(menu);
        cardContainer.appendChild(menuElement);
    });
});