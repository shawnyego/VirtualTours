import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; // Import CSS file for styling

const Card = ({ image, title, description, link }) => {
  return (
    <Link to={link} className="card">
      <div className="card-content">
        <img src={image} alt={title} className="card-image" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Card;
