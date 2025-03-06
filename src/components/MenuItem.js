import React, { useState } from 'react';

const MenuItem = ({ name,  price, imageUrl }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="menu-item">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <span>${price}</span>
      <div className="counter">
        {count === 0 ? (
          <button onClick={handleIncrement}>Add</button>
        ) : (
          <>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
          </>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
