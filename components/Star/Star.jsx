import React from 'react';
import { AiTwotoneStar, AiOutlineStar } from 'react-icons/ai';

const Star = ({ selected, onSelect }) => {
  return (
    <span
      style={{ cursor: 'pointer' }}
      onClick={onSelect}
      className='star-flex'
    >
      {selected ? <AiTwotoneStar size={25} className='color-star'/> : <AiOutlineStar size={25} className='color-star'/>}
    </span>
  );
};

export default Star;
