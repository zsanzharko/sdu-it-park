import React from 'react';

import './style.scss';

export const CarouselImage = ({ person, style }) => {
  return (
    <div className="carousel-person" style={style}>
      <img src={person.img} alt="" />
    </div>
  );
};