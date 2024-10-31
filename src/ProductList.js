// src/components/ProductList.js

import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const products = [
  {
    id: 1,
    name: 'Echo Dot (4ª generazione)',
    description: 'Smart speaker con Alexa, disponibile in vari colori.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61IxWv3ecpL._AC_SL1000_.jpg',
    affiliateLink: 'https://www.amazon.com/dp/B07XJ8C8F5?tag=tua-affiliate-id'
  },
  {
    id: 2,
    name: 'Kindle Paperwhite',
    description: 'E-reader con schermo da 6,8 pollici e luce regolabile.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61Ryr9cGKJL._AC_SL1000_.jpg',
    affiliateLink: 'https://www.amazon.com/dp/B08KTZ8249?tag=tua-affiliate-id'
  },
  {
    id: 3,
    name: 'Fire TV Stick 4K',
    description: 'Dispositivo di streaming con controllo vocale Alexa.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_SL1000_.jpg',
    affiliateLink: 'https://www.amazon.com/dp/B08XVYZ1Y5?tag=tua-affiliate-id'
  },
];

const ProductList = () => {
  return (
    <Container>
      <h2 className="my-4 text-center">Promuovi i Migliori Prodotti Amazon</h2>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button
                  variant="primary"
                  href={product.affiliateLink}
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

export default ProductList;
