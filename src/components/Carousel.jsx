import React from 'react';

import '../assets/styles/Carousel.scss';

const Carousel = (props) => (
  <section class="carousel">
    <div class="carousel__container">
      {props.children}
    </div>
  </section>
);

export default Carousel;
