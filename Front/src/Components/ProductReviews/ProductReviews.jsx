import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './ProductReviews.module.css';
import productImage from '../../Assets/ProductDetails.jpg'; 
import avatarImage from '../../Assets/avatar.jpg'; 
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const reviews = [
  {
    name: 'Hesham Hassan',
    rating: 4.5,
    text: 'As someone who cares deeply about sound quality, I was hesitant to try wireless headphones. But the ComfyPods 1000 have blown me away! The audio is crisp, clear, and incredibly detailed. I can hear nuances in my music I never noticed before. Plus, the active noise cancellation is fantastic for blocking out distractions. These headphones are a must-have for any serious music lover.',
  },
  {
    name: 'Mariam Hassan',
    rating: 4.5,
    text: 'These headphones are incredibly comfortable to wear, even for long listening sessions. The memory foam earcups mold perfectly to your head, and the headband is lightweight and adjustable. The sound quality is good, but not amazing. However, for the price and comfort level, they can’t be beat. Perfect for everyday use!',
  },
  {
    name: 'Ahmed Adel',
    rating: 4.5,
    text: 'The ComfyPods 1000 are certainly comfortable, and the sound quality is decent. However, the battery life is just average, and I’ve experienced some connectivity issues. They also don’t fold up for easy storage, which is a bit of a bummer. Overall, they’re a good option, but there might be better choices out there depending on your needs.',
  },
];

const ProductReviews = () => {
  return (
   <>
        
    <div className={styles.container}>
      <Row>
        <Col md={4} className="text-center">
          <div className={styles.imageWrapper}>
            <img src={productImage} alt="Product" className={styles.productImage} />
          </div>
          <div className={styles.rating}>
            <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            <span className={styles.ratingValue}>4.5</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '48%' }}></div>
          </div>
          <div className={styles.stockInfo}>
            <span>Sold: <strong className={styles.highlight}>33</strong></span>
            <span>Available: <strong className={styles.highlight}>35</strong></span>
          </div>
          
          <div className={`${styles.buttonGroup} my-3`}>
            <Link to='/buyNow'>
                 <button className={`text-white ${styles.btnBuy} me-3`}>Buy Now</button>
            </Link>
            
            <button className={` text-white ${styles.btnAddToCart}`}>Add To Cart</button>
          </div>
        </Col>
        <Col md={8}>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <div className={styles.scrollContainer}>
            {reviews.map((review, index) => (
              <div key={index} className={styles.reviewCard}>
                <div className={styles.reviewText}>{review.text}</div>
                <div className="d-flex align-items-center mt-3">
                  <img src={avatarImage} alt="Avatar" className={`rounded-circle ${styles.avatar}`} />
                  <div className="ms-3">
                    <strong>{review.name}</strong>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span> {review.rating}
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
    <Footer/>
   </>
  );
};

export default ProductReviews;
