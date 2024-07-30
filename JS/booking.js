document.addEventListener('DOMContentLoaded', function() {
    const cardData = [
      {
        image: './assets/room-1.jpg',
        title: 'Deluxe Ocean View',
        description: 'Luxury with breathtaking ocean views from your private suite.',
        price: 'Rs.25000',
        link: '#'
      },
      {
        image: './assets/room-2.jpg',
        title: 'Executive Room',
        description: 'Experience the modern comfort in the heart of the city.',
        price: 'Rs.18000',
        link: '#'
      }
    ];

    const cardContainer = document.getElementById('card-container');

    // Function to create a card element
    function createCard(card) {
      // Create card elements
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');
      
      const img = document.createElement('img');
      img.src = card.image;
      img.classList.add('card-img-top');
      img.alt = 'room';
      
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      
      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = card.title;
      
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = card.description;
      
      const cardPrice = document.createElement('h5');
      const priceSpan = document.createElement('span');
      priceSpan.textContent = card.price;
      cardPrice.appendChild(priceSpan);
      
      const bookNowButton = document.createElement('a');
      bookNowButton.href = card.link;
      bookNowButton.classList.add('btn', 'btn-primary');
      bookNowButton.textContent = 'Book Now';
      
      // Append elements to card body
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardPrice);
      cardBody.appendChild(bookNowButton);
      
      cardDiv.appendChild(img);
      cardDiv.appendChild(cardBody);
      
      return cardDiv;
    }

    // Add cards to the container
    cardData.forEach(card => {
      const cardElement = createCard(card);
      cardContainer.appendChild(cardElement);
    });
});