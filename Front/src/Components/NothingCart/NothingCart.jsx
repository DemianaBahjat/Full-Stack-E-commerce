import React from 'react';
import styles from './NothingCart.module.css';
import EmptyCartImage from '../../Assets/Empty-pana 1.png';
import CartImage from '../../Assets/CartImage.png'; 
import EyeTracking from '../../Assets/fluent_eye-tracking-16-filled.png';
import LoveIcon from '../../Assets/ph_heart-bold.png';
import CartIcon from '../../Assets/pajamas_go-back.png'; 
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function NothingCart() {
  return (
   <>
          <div className={styles.wrapper}>
      <h1 className={styles.title}>
        <span className={styles.icon}>
          <img src={CartImage} alt="Cart Icon" />
        </span>{" "}
        Shopping Cart
        <button className={styles.wishlistButton}>
          <img src={LoveIcon} alt="Wishlist Icon" className={styles.trackingImage} />
          Wishlist
        </button>
        <button className={styles.trackingButton}>
          <img src={EyeTracking} alt="Tracking Icon" className={styles.trackingImage} />
          Tracking My Orders
        </button>
      </h1>
      <div className={styles.cart}>
        <div className={styles.buttonContainer}>
          <button>All</button>
          <button>Pending</button>
          <button>Completed</button>
          <button>Canceled</button>
        </div>
        <img src={EmptyCartImage} alt="Empty Cart" />
        <p>Nothing Here!</p>
        <Link to='/Cart'>
          <button className={styles.goToCartButton}>
            <img src={CartIcon} alt="Cart Icon" className={styles.goToCartImage} />
            Go To Shopping Cart
          </button>
        </Link>
      </div>
    </div>
    <Footer/>
   </>
  );
}
