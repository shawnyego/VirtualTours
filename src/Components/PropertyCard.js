

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PropertyCard = () => {
  //set states
  const { name } = useParams(); 
  const [property, setProperty] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  //retreive property details and set in state
  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3003/api/property/${encodeURIComponent(name)}`);
        setProperty(response.data); 
      } catch (err) {
        setError('Failed to load property details'); 
      } finally {
        setLoading(false); 
      }
    };

    fetchPropertyDetails(); 
  }, [name]); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="property-card">
      {property ? (
        <>
          <img src={property.image_path} alt={property.name} />
          <h2>{property.name}</h2>
          <p>Location: {property.location}</p>
          <p className="price">Price: KES {property.price.toLocaleString()}</p>
          <p>{property.description}</p>
          <p>Rating: {'⭐'.repeat(property.rating || 0)}</p>
        </>
      ) : (
        <p>Property details not found.</p>
      )}
    </div>
  );
};

export default PropertyCard; 
