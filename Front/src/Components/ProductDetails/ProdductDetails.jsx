import React, { useEffect, useState, useContext } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './ProductDetails.module.css';
import {jwtDecode} from 'jwt-decode';
import { CartContext } from '../../Contexts/CartContext';
import { toast } from 'react-toastify';
import Footer from '../Footer/Footer';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    console.log(`Product ID from URL: ${id}`); // Log the ID to verify it

    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://gazierproject.vercel.app/api/products/${id}`);
        console.log('Response from API:', response);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.id);
        console.log(decodedToken.id);
      } catch (error) {
        console.error('Invalid token specified:', error);
      }
    }

    fetchProductDetails();
  }, [id]);

  const handleBuyNow = async () => {
    try {
      const response = await axios.post('https://gazierproject.vercel.app/create-checkout-session', {
        cart: [{ id: product.id, name: product.name, price: product.price, quantity: 1 }],
        userId,
      });
      console.log(response)
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    toast('Product Added Successfully to your Cart!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      
   <div className={styles.container}>
      <Row>
        <Col md={5} className="text-center">
          <div className={styles.imageWrapper}>
            <img src={product.image} alt="Product" className={styles.productImage} />
          </div>
          <div className={`${styles.buttonGroup} my-3`}>
            <button className={`text-white ${styles.btnBuy} me-3`} onClick={handleBuyNow}>Buy Now</button>
            <button className={`text-white ${styles.btnAddToCart}`} onClick={() => handleAddToCart(product)}>Add To Cart</button>
          </div>
        </Col>
        <Col md={7}>
          <h2 className={styles.title}>{product.name}</h2>
          <div className={styles.rating}>
            <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            <span className={styles.ratingValue}>{product.rating}</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '48%' }}></div>
          </div>
          <div className={styles.stockInfo}>
            <span>Sold: <strong className={styles.highlight}>{product.numReviews}</strong></span>
            <span>Available: <strong className={styles.highlight}>{product.countInStock}</strong></span>
          </div>
          <div className={styles.price}>{product.price} $</div>
          <p className={styles.description}>{product.description}</p>
        </Col>
      </Row>
    </div>
    <Footer/>
    </>
  );
};

export default ProductDetails;
