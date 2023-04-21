import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import Rating from '../../components/Rating/Rating';
// import Product from '../../components/Product/Product';
import products from '../../products';
import { useParams } from 'react-router-dom';

const ProductScreen = (props) => {
  const { id } = useParams();
  // const product = products.find(item => item._id === props.match.params.id );
  const product = products.find(item => item._id === id );

  console.log(product);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
                <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </ListGroup.Item>
            <ListGroup.Item>
                Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
                Description: ${product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={12} className="my-3">
          <ListGroup>
            <ListGroup.Item>
                <Row>
                    <Col>
                      Price:
                    </Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col>
                      Status:
                    </Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Sold Out'}
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item className="text-center">
              <Button 
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
    </>
  )
}

export default ProductScreen;