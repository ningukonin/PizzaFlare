import React from 'react';

const Reviews = () => {
  const reviews = [
    { author: 'Veeresh Konin', text: 'Great food and excellent service!' },
    { author: 'Ningaraj konin', text: 'A wonderful dining experience.' },
    // Add more reviews here
  ];

  return (
    <div className="reviews">
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <p>"{review.text}"</p>
          <span>- {review.author}</span>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
