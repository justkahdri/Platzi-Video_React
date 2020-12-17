import React from 'react';

import '../assets/styles/Categories.scss'

const Categories = (props) => (
  <div className='categories'>
    <h3 class="categories__title">Mi lista</h3>
    {props.children}
  </div>
)

export default Categories;
