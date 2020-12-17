import React from 'react';

import '../assets/styles/Carousel.scss';

const Carousel = (props) => (
  <section className="carousel">
    <div className="carousel__container">
      {props.children}
    </div>
  </section>
);

export default Carousel;
