import React from 'react';

import '../assets/styles/Categories.scss'

const Categories = (props) => (
  <div className='categories'>
    <h3 className="categories__title">{props.title}</h3>
    {props.children}
  </div>
)

export default Categories;
