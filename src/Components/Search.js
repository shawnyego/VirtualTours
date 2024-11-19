import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import './Search.css';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update local state with search term
    onSearch(event.target.value); // Propagate search term to parent component
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Optionally handle form submission if needed
  };

  return (
    <div className="Search">
    <Container>
      <Form onSubmit={handleFormSubmit} className="mt-2 mb-4">
        
          <Col xs={9}>
            <Form.Control
              type="text"
              placeholder="Search by School Name..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Col>
          <Col xs={3}>
            
          </Col>
        
      </Form>
    </Container>
    </div>
  );
};

export default Search;
