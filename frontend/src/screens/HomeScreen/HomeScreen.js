import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
// import products from '../../products';
import Product from '../../components/Product/Product';


const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch('/api/products')
  //   // fetch('http://localhost:5000')
  //     .then(response => response.json())
  //     .then(data => setProducts(data))
  //     .catch(error => console.error(error));
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      // const { data } = await axios.get('http://localhost:5000/api/products')
      setProducts(data)
    }
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        { products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product  
              product={product}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen;
