// ProductShowcase.js
import React from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

const productsData = {
  smartphoneUnder300: [
    { id: 1, name: "Redmi Note 13 Pro", price: "€191.99", 
      description: "Il Redmi Note 13 Pro è uno smartphone di fascia media con un design moderno e specifiche che soddisfano le esigenze degli utenti più esigenti. Monta uno schermo OLED da 6,67 pollici con risoluzione FHD+ e frequenza di aggiornamento a 120Hz, che garantisce un'esperienza visiva fluida e dettagliata. È equipaggiato con il processore Qualcomm Snapdragon 7 Gen 1, che assicura prestazioni solide sia per l'uso quotidiano sia per un gaming moderato. La batteria da 5100mAh con supporto per la ricarica rapida a 67W offre un’autonomia duratura.\n", 
      pro: "Esteticamente curato \nDisplayluminoso a 120Hz\nSuper autonomia\n Buona fotocamera principale\n", 
      cons: "Fotocamera macro inutile", 
      image: "", 
      affiliateLink: "https://amzn.to/3YI8ZdI" },
    { id: 2, name: "Realme 11 Pro Plus", price: "€299", pro: "6GB RAM, 128GB Storage", cons: "", image: "", affiliateLink: "" },
  ],
  smartphoneUnder500: [
    { id: 1, name: "Smartphone C", price: "€450", pro: "8GB RAM, 128GB Storage", cons: "", image: "", affiliateLink: "" },
    { id: 2, name: "Smartphone D", price: "€499", pro: "6GB RAM, 256GB Storage", cons: "", image: "", affiliateLink: "" },
  ],
  smartphoneUnder1500: [
    { id: 1, name: "Smartphone E", price: "€999", pro: "12GB RAM, 512GB Storage", cons: "", image: "", affiliateLink: "" },
    { id: 2, name: "Smartphone F", price: "€1400", pro: "16GB RAM, 1TB Storage", cons: "", image: "", affiliateLink: "" },
  ],
  otherCategories: [
    { id: 1, name: "Tablet X", price: "€300", pro: "10-inch display, 4GB RAM", cons: "", image: "", affiliateLink: "" },
    { id: 2, name: "Laptop Y", price: "€800", pro: "Intel i5, 8GB RAM, 256GB SSD", cons: "", image: "", affiliateLink: "" },
  ]
};

const ProductCard = ({ product }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>Prezzo: {product.price}</Card.Text>
      <Card.Text>Pro: {product.pro}</Card.Text>
      <Card.Text>Cons: {product.cons}</Card.Text>
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
);

const ProductSection = ({ title, products }) => (
  <section className="my-4">
    <h3>{title}</h3>
    <Row>
      {products.map((product, index) => (
        <Col key={index} md={4}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  </section>
);

const ProductShowcase = () => {
  return (
    <Container>
      <h1 className="my-4">Product Comparison Showcase</h1>

      <ProductSection title="Smartphones under €300" products={productsData.smartphoneUnder300} />
      <ProductSection title="Smartphones under €500" products={productsData.smartphoneUnder500} />
      <ProductSection title="Smartphones under €1500" products={productsData.smartphoneUnder1500} />
      <ProductSection title="Other Categories" products={productsData.otherCategories} />

      <Modal.Dialog>
        <Modal.Body>
          <p>Acquisti da link affiliati generano commissioni per questo sito. </p>
            <p>I prezzi possono variare post pubblicazione.</p>
        </Modal.Body>
      </Modal.Dialog>

    </Container>
  );
};

export default ProductShowcase;
