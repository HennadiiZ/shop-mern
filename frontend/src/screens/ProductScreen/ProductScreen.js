import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
import { Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap';
import Rating from '../../components/Rating/Rating';
import { getProductDetails } from '../../_actions/productActions';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';

const ProductScreen = ({ history, match }) => {
  // const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  // console.log('useParams', useParams);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get(`/api/products/${id}`);
  //     // const { data } = await axios.get(`/api/products/${match.params.id}`);
  //     setProduct(data);
  //   };
  //   fetchProduct();
  // }, [id]);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  // console.log('product+++', product);

  const addToCartHandler = () => {
    // history.push(`/cart/${match.params.id}?qty=${quantity}`);
    // history.push(`/cart/${id}?qty=${quantity}`);
    navigate(`/cart/${id}?qty=${quantity}`);
  };

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {!loading ? (
        <Loader />
      ) : error ? (
        <h2>{<Message variant='danger'>{error}</Message>}</h2>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={6}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={12} className='my-3'>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Sold Out'}
                  </Col>
                </Row>
              </ListGroup.Item>
              {/*  */}
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Quantity</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              {/*  */}
              <ListGroup.Item className='text-center'>
                <Button
                  onClick={addToCartHandler}
                  className='btn-block w-100'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
