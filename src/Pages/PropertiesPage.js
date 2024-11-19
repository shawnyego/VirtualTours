import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import './PropertiesPage.css'; 


const PropertiesPage = () => {
  const [properties, setProperties] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        //retreive properties from sql
        const response = await axios.get('http://localhost:3003/api/properties');
        setProperties(response.data); 
      } catch (err) {
        setError('Failed to load properties'); 
      } finally {
        setLoading(false); 
      }
    };

    fetchProperties(); 
  }, []); 
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <header>
        <div className="search-bar">
          <input type="text" placeholder="Search for properties..." />
          <button>Search</button>
        </div>
        <div className="filter-bar">
          <select>
            <option value="">Bedrooms</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
          </select>
          <select>
            <option value="">Price Range</option>
            <option value="0-100">KES 0 - KES 10,000</option>
            <option value="100-200">KES 10,000 - KES 20,000</option>
            <option value="200-300">KES 20,000 - KES 30,000</option>
          </select>
          <select>
            <option value="">Amenities</option>
            <option value="wifi">WiFi</option>
            <option value="pool">Pool</option>
            <option value="parking">Parking</option>
          </select>
          <select>
            <option value="">Square Feet</option>
            <option value="500-1000">500 - 1000 sq ft</option>
            <option value="1000-1500">1000 - 1500 sq ft</option>
          </select>
          <select>
            <option value="">Bathrooms</option>
            <option value="1">1 Bathroom</option>
            <option value="2">2 Bathrooms</option>
            <option value="3">3 Bathrooms</option>
          </select>
          <button>Filter</button>
        </div>
      </header>

      {/* property  display */}
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-item">
            <img src={property.image_path} alt={property.name} />
            <h2>{property.name}</h2>
            <p>Location: {property.location}</p>
            <p className="price">Price: KES {property.price.toLocaleString()}</p>
            <p>Description: {property.description}</p>
            <div className="rating">{'⭐'.repeat(property.rating || 0)}</div>

            <Link to={property.youtube_tour_link}>
               <button className="view-more">Tour Now</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage; 
