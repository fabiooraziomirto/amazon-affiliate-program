// src/AmazonSearch.js
import React, { useState } from 'react';
import { Form, Button, ListGroup, Container } from 'react-bootstrap';
import axios from 'axios';

const AmazonSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResults([]);
        const url = "https://www.searchapi.io/api/v1/search";
        const params = {
          "engine": "amazon_search",
          "q": query,
          "api_key": ""
        };
        try {
          const response = await axios.get(url, { params })
          .then(response => {
            console.log(response.data);
          });

            setResults(response.data.products);
        } catch (error) {
            console.error("Error fetching data: ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <h1 className="mt-5">Cerca Prodotti Amazon</h1>
            <Form onSubmit={handleSearch} className="mt-3">
                <Form.Group controlId="searchQuery">
                    <Form.Label>Inserisci il tuo prodotto</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Esempio: Laptop"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? 'Caricamento...' : 'Cerca'}
                </Button>
            </Form>

            {results.length > 0 && (
                <ListGroup className="mt-4">
                    {results.map((product) => (
                        <ListGroup.Item key={product.id}>
                            <h5>{product.title}</h5>
                            <p>Prezzo: {product.price}</p>
                            <a href={product.link} target="_blank" rel="noopener noreferrer">Vedi Prodotto</a>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Container>
    );
};

export default AmazonSearch;
