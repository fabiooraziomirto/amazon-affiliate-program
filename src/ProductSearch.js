// src/components/ProductSearch.js

import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const ProductSearch = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    // Configura i parametri della tua richiesta (sostituisci con le tue chiavi)
    const accessKey = 'YOUR_ACCESS_KEY';
    const secretKey = 'YOUR_SECRET_KEY';
    const associateTag = 'YOUR_ASSOCIATE_TAG';
    const endpoint = 'https://webservices.amazon.com/onca/xml';

    // Parametri API
    const params = {
      Service: 'AWSECommerceService',
      Operation: 'ItemSearch',
      AWSAccessKeyId: accessKey,
      AssociateTag: associateTag,
      SearchIndex: 'All',
      Keywords: query,
      ResponseGroup: 'Images,ItemAttributes,Offers'
    };

    try {
      // Effettua la richiesta all’API Amazon (assicurati di avere l'autenticazione configurata)
      const response = await axios.get(endpoint, { params });
      const items = response.data?.ItemSearchResponse?.Items?.Item || [];
      setProducts(items);
    } catch (error) {
      console.error('Errore nella ricerca dei prodotti:', error);
    }
  };

  return (
    <Container>
      <h2 className="my-4 text-center">Cerca Prodotti su Amazon</h2>
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="searchQuery">
          <Form.Control
            type="text"
            placeholder="Cerca un prodotto..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Cerca
        </Button>
      </Form>

      <Row className="mt-4">
        {products.map((product, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product?.LargeImage?.URL} alt={product?.ItemAttributes?.Title} />
              <Card.Body>
                <Card.Title>{product?.ItemAttributes?.Title}</Card.Title>
                <Card.Text>Prezzo: {product?.OfferSummary?.LowestNewPrice?.FormattedPrice || 'N/A'}</Card.Text>
                <Button
                  variant="primary"
                  href={product?.DetailPageURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acquista su Amazon
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductSearch;
