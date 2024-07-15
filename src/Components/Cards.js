import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cards.css'; // Import CSS for styling

const Cards = () => {
  const [schools, setSchools] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('/api/schools');
        console.log('Fetched schools:', response.data); // Log fetched data
        setSchools(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cards-container">
      {isLoading && <p>Loading schools...</p>}
      {error && <p>Error fetching schools: {error.message}</p>}
      {schools.length === 0 && <p>No schools found.</p>}  {/* Check for empty array */}
      {schools.map(school => (
        <div key={school.school_id} className="card">
          <h2>{school.school_name}</h2>
          <p><strong>Location:</strong> {school.location}</p>
          <p><strong>Type:</strong> {school.type}</p>
          <p><strong>Fee:</strong> ${school.fee}</p>
          <p><strong>Rating:</strong> {school.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
