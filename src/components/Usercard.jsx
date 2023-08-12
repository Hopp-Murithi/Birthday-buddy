import React, { useState } from 'react';



const Usercard = ({ name, age, picture }) => {
  return (
    <article className='user-details'>
      <img src={picture} alt={name} className='img' />
      <div className='user-info'>
        <h2 className='card-text'>{name}</h2>
        <p className='card-text'>{age} Years old</p>
      </div>
    </article>
  );
}

export default Usercard