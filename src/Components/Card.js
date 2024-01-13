// components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ title, description, imageUrl ,category,url}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt={title}  />
      </div>
      <div className="card-content">
      <a href={url}> <h2>{title} </h2></a>
        <p >{category}</p>
        <ul>{
            description.map(content =>{  return(
                <li >{content}</li>
            )})
        }</ul>
        
      </div>
    </div>
  );
};

export default Card;
