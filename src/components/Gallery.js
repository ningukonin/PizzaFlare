import React from 'react';

const Gallery = () => {
  const images = [
    'https://static01.nyt.com/images/2023/02/03/multimedia/03pizza-tips1-bpqf/03pizza-tips1-bpqf-superJumbo.jpg',
    'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
    'https://img.freepik.com/premium-photo/grilled-perfection-served-plate-with-vibrant-vegetables-herbs-bustling-restaurant_192985-15886.jpg?ga=GA1.1.831219514.1741072525&semt=ais_hybrid',
    'https://img.freepik.com/premium-photo/cook-prepares-bacon-pieces-with-garlic-hot-pepper-pan-freeze-air-black-background-recipebook-menu-gastronomy-culinary-background_96270-452.jpg?ga=GA1.1.831219514.1741072525&semt=ais_hybrid',
    'https://images.stockcake.com/public/6/d/0/6d0ab809-9c93-4e94-880a-6db0e1db40cb_medium/making-homemade-pizza-stockcake.jpg',
    'https://www.unclealspizza.com/wp-content/uploads/2024/08/Another-Pizza-Recipe-But-with-kids-How-to-Make-Pizza-with-your-kids.jpg',
    'https://t3.ftcdn.net/jpg/11/25/37/82/360_F_1125378250_R4p5M2egHpc3IFxBD5tr9NNWpqbIYfvy.jpg'
  ];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Gallery ${index}`} />
      ))}
    </div>
  );
};

export default Gallery;
