import React, { useState } from 'react';
import Star from './Star';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleSelect = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className='unitech-star'>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          selected={index < rating}
          onSelect={() => handleSelect(index + 1)}
        />
      ))}
    </div>
  );
};

export default Rating;
