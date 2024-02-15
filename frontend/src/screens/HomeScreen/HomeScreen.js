// <HomeScreen> componen
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Product from '../../components/Product/Product';
// import products from '../../data/products';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';
import { listProducts } from '../../_actions/productActions';

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const { data } = await axios.get('/api/products');
    //   console.log('data', data);
    //   setProducts(data);
    // };
    // fetchProducts();
    // console.log(' listProducts():', listProducts());
    dispatch(listProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <>
      <h1>Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <h2>{<Message variant='danger'>{error}</Message>}</h2>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
