import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
  const items = [
    { 
      name: 'Margherita Pizza ', 
      price: 2, 
      imageUrl: 'https://img.clevup.in/360704/Marghritapizza-1717742630916.webp?width=600&format=webp' 
    },
    { 
      name: 'Cheese & Corn', 
      price: 2, 
      imageUrl: 'https://img.clevup.in/360704/cheesencornpizza-1717743652289.webp?width=600&format=webp' 
    },
    { 
      name: 'Cheese & Onion', 
      price: 1.7, 
      imageUrl: 'https://img.clevup.in/360704/CornCheesePizza-1717657653796.jpeg?width=600&format=webp' 
    },
    { 
      name: 'Cheese & Capsicum', 
      price: 1.8, 
      imageUrl: 'https://vegplatter.in/files/public/images/partner/menu/15/Cheese%20Capsicum%20Pizza_0.jpg' 
    },
    { 
      name: 'Crispy Chicken Pizza', 
      price: 25, 
      imageUrl: 'https://www.mexicangoldenchicken.com/wp-content/uploads/2023/11/crispy-chicken-pizza-1.webp' 
    },
    { 
      name: 'Baby Corn Pizza ', 
      price: 3, 
      imageUrl: 'https://www.blissofcooking.com/wp-content/uploads/2017/05/Baby-Corn-and-Pepper-Pizza-Feature-e1494860750456.jpg' 
    },
    { 
      name: 'Maxican Green Pizza ', 
      price: 3, 
      imageUrl: 'https://www.dominos.co.in//files/items/Mexican_Green_Wave.jpg' 
    },
    { 
      name: 'Pineapple Shrimp Pizza',  
      price: 27, 
      imageUrl: 'https://img.taste.com.au/PUf5DK9j/taste/2016/11/prawn-pizza-with-pineapple-and-pesto-90362-1.jpeg' 
    },
    { 
      name: 'Paneer Spicy Pizza ', 
      price: 3, 
      imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/8c/97/e7/spicy-paneer-pizza.jpg' 
    },
  ];

  return (
    <div className="menu">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
      
    </div>
  );
};

export default Menu;
