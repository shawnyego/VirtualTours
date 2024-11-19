// PropertyDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PropertyDetails.css'; 

const PropertyDetails = () => {
  const { propertyName } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/properties/${propertyName}`); //  API endpoint
        setProperty(response.data);
      } catch (err) {
        
        setError('Failed to load property details');
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [propertyName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!property) return <p>No details found.</p>;

  return (
    <div className="property-details">
      <h1>{property.name}</h1>
      <img src={property.image_path} alt={property.name} />
      <p>Location: {property.location}</p>
      <p>Price: KES {property.price.toLocaleString()}</p>
      <p>{property.description}</p>
      <div className="rating">{'⭐'.repeat(property.rating || 0)}</div>
    </div>
  );
};

export default PropertyDetails;
