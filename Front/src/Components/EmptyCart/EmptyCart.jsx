import React from 'react';
import styles from './EmptyCart.module.css';
import EmptyCartImage from '../../Assets/Empty-cuate 1.png';
import CartImage from '../../Assets/CartImage.png'; 
import EyeTracking from '../../Assets/fluent_eye-tracking-16-filled.png';
import LoveIcon from '../../Assets/ph_heart-bold.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function EmptyCart() {
  return (
    <>
     
   <div className={styles.wrapper}>
      <h1 className={styles.title}>
        <span className={styles.icon}>
          <img src={CartImage} alt="Cart Icon"  /> 
        </span>{" "} 
        Shopping Cart
        <Link to={'/CartThree'}>
        <button className={styles.wishlistButton}>
          <img src={LoveIcon} alt="Wishlist Icon" className={styles.trackingImage} />
          Wishlist
        </button>
        </Link>
        <Link to={'/Orders'}>
          <button className={styles.trackingButton}>
            <img src={EyeTracking} alt="Tracking Icon" className={styles.trackingImage} />
            Tracking My Orders
          </button>
        </Link> 
      </h1>
      <div className={styles.cart}>
        <img src={EmptyCartImage} alt="Empty Cart" />
        <p>Your Shopping Cart is Empty!</p>
      </div>
    </div>
    <Footer/>
    </>
  );
}
