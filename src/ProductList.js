import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Dati dei prodotti (puoi sostituire questa parte con i tuoi dati API)
const data = {
  organic_results: [
    {
      position: 1,
      asin: "B0DGHQQK9D",
      title: "iPhone 16 Pro Max Clear Case with MagSafe and Camera Control",
      link: "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo0NzY0MTEwMTU0OTAyOTMwOjE3MzAzODUyNjU6c3BfYXRmOjMwMDQwNzcxMzk2NjIwMjo6MDo6&url=%2FApple-iPhone-MagSafe-Camera-Control%2Fdp%2FB0DGHQQK9D%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.pTFx6uBlV691LlW_7q3dqZzXAzjOKrg62kUxEibmfkWo7LnwqRRokmXRxPe4yp-I1e-YhOsZp8sBS7YZXIQZUgGHQTJSatkSmcE1z7K6FeP4t9-4IedM2WJBpATGqf2BerKrsAtwU0GK3CinS6Shwm_DdtwxflcQnvsyxY_tdKu42z3oM5azjOACP_rJpAyfHUYvkh0bJCAbNUmnP4eFX2A68DdZazZVNdEodBK0DYk.cTBx0X9rCOIz5Hwy_ES01v5YyN0Su_vWo0w067jIKrU%26dib_tag%3Dse%26keywords%3Diphone%26qid%3D1730385264%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      price: "$38.99",
      thumbnail: "https://m.media-amazon.com/images/I/716hoQjVyvL._AC_UY218_.jpg"
    },
    {
      position: 2,
      asin: "B08PP5MSVB",
      title: "Apple iPhone 12, 64GB, Black - Fully Unlocked (Renewed)",
      link: "https://www.amazon.com/Apple-iPhone-12-64GB-Black/dp/B08PP5MSVB/ref=sr_1_2?dib=eyJ2IjoiMSJ9.pTFx6uBlV691LlW_7q3dqZzXAzjOKrg62kUxEibmfkWo7LnwqRRokmXRxPe4yp-I1e-YhOsZp8sBS7YZXIQZUgGHQTJSatkSmcE1z7K6FeP4t9-4IedM2WJBpATGqf2BerKrsAtwU0GK3CinS6Shwm_DdtwxflcQnvsyxY_tdKu42z3oM5azjOACP_rJpAyfHUYvkh0bJCAbNUmnP4eFX2A68DdZazZVNdEodBK0DYk.cTBx0X9rCOIz5Hwy_ES01v5YyN0Su_vWo0w067jIKrU&dib_tag=se&keywords=iphone&qid=1730385264&sr=8-2",
      price: "$274.98",
      thumbnail: "https://m.media-amazon.com/images/I/51fYXSnSu9L._AC_UY218_.jpg"
    },
    {
      position: 3,
      asin: "B088NQSLGN",
      title: "Apple iPhone SE (2nd Generation), US Version, 64GB, White - Unlocked (Renewed)",
      link: "https://www.amazon.com/Apple-iPhone-SE-64GB-White/dp/B088NQSLGN/ref=sr_1_3?dib=eyJ2IjoiMSJ9.pTFx6uBlV691LlW_7q3dqZzXAzjOKrg62kUxEibmfkWo7LnwqRRokmXRxPe4yp-I1e-YhOsZp8sBS7YZXIQZUgGHQTJSatkSmcE1z7K6FeP4t9-4IedM2WJBpATGqf2BerKrsAtwU0GK3CinS6Shwm_DdtwxflcQnvsyxY_tdKu42z3oM5azjOACP_rJpAyfHUYvkh0bJCAbNUmnP4eFX2A68DdZazZVNdEodBK0DYk.cTBx0X9rCOIz5Hwy_ES01v5YyN0Su_vWo0w067jIKrU&dib_tag=se&keywords=iphone&qid=1730385264&sr=8-3",
      price: "$126.99",
      thumbnail: "https://m.media-amazon.com/images/I/61hpoPMVgqL._AC_UY218_.jpg"
    },
    {
      position: 4,
      asin: "B08PPDJWC8",
      title: "Apple iPhone 12 Mini, 64GB, Black - Unlocked (Renewed)",
      link: "https://www.amazon.com/Apple-iPhone-12-Mini-Black/dp/B08PPDJWC8/ref=sr_1_4?dib=eyJ2IjoiMSJ9.pTFx6uBlV691LlW_7q3dqZzXAzjOKrg62kUxEibmfkWo7LnwqRRokmXRxPe4yp-I1e-YhOsZp8sBS7YZXIQZUgGHQTJSatkSmcE1z7K6FeP4t9-4IedM2WJBpATGqf2BerKrsAtwU0GK3CinS6Shwm_DdtwxflcQnvsyxY_tdKu42z3oM5azjOACP_rJpAyfHUYvkh0bJCAbNUmnP4eFX2A68DdZazZVNdEodBK0DYk.cTBx0X9rCOIz5Hwy_ES01v5YyN0Su_vWo0w067jIKrU&dib_tag=se&keywords=iphone&qid=1730385264&sr=8-4",
      price: "$229.95",
      thumbnail: "https://m.media-amazon.com/images/I/61bbqGftbUL._AC_UY218_.jpg"
    }
  ]
};

const ProductList = () => {
  return (
    <Container className="mt-5">
      <Row>
        {data.organic_results.map(product => (
          <Col md={4} key={product.asin} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> {product.price}
                </Card.Text>
                <Button variant="primary" href={product.link} target="_blank">
                  View on Amazon
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
