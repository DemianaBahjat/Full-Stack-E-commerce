// import React from 'react';
// import styles from './TrackingMyOrders.module.css';
// import CartImage from '../../Assets/CartImage.png';
// import SampleImage from '../../Assets/offer.png';
// import EyeTracking from '../../Assets/fluent_eye-tracking-16-filled.png';
// import LoveIcon from '../../Assets/ph_heart-bold.png';
// import CartIcon from '../../Assets/pajamas_go-back.png';

// export default function TrackingMyOrders() {
//   return (
//     <div className={styles.wrapper}>
//       <h1 className={styles.title}>
//         <span className={styles.icon}>
//           <img src={CartImage} alt="Cart Icon" />
//         </span>
//         Shopping Cart
//         <button className={styles.wishlistButton}>
//           <img src={LoveIcon} alt="Wishlist Icon" className={styles.trackingImage} />
//           Wishlist
//         </button>
//         <button className={styles.trackingButton}>
//           <img src={EyeTracking} alt="Tracking Icon" className={styles.trackingImage} />
//           Tracking My Orders
//         </button>
//       </h1>
//       <div className={styles.cart}>
//         <div className={styles.buttonContainer}>
//           <button>All</button>
//           <button>Pending</button>
//           <button>Completed</button>
//           <button>Canceled</button>
//         </div>
//         <div className={styles.orderCard}>
//           <div className={styles.imageContainer}>
//             <img src={SampleImage} alt="order" />
//           </div>
//           <div className={styles.orderDetails}>
//             <div className={styles.header}>
//               <h2>Lorem ipsum dolor</h2>
//               <span className={styles.status}>Pending</span>
//               <span className={styles.price}>20$</span>
//             </div>
//             <p className={styles.description}>
//               Lorem ipsum dolor sit amet consectetur. Aliquam magna massa morbi scelerisque. Felis tellus justo rhoncus volutpat id quis. Sed placerat non lobortis tellus venenatis a eu. Consectetur in egestas orci.
//               <span className={styles.showMore}>show More</span>
//             </p>
//             <button className={styles.cancelButton}>Cancel</button>
//           </div>
//         </div>
//         <button className={styles.goToCartButton}>
//           <img src={CartIcon} alt="Cart Icon" className={styles.goToCartImage} />
//           Go To Shopping Cart
//         </button>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './TrackingMyOrders.module.css';
import LoveIcon from '../../Assets/ph_heart-bold.png';
import CartIcon from '../../Assets/pajamas_go-back.png';
import EyeTracking from '../../Assets/fluent_eye-tracking-16-filled.png';
import NothingCart from '../NothingCart/NothingCart'; 
import Footer from '../Footer/Footer';

const OrderCard = ({ order, onCancel }) => (
  <div className={styles.orderCard}>
    <div className={styles.orderDetails}>
      <div className={styles.header}>
        <h2>{order.name}</h2>
        <span className={styles.status}>{order.status}</span>
        <span className={styles.price}>{order.price}</span>
      </div>
      <p className={styles.description}>{order.description}</p>
      <button className={styles.cancelButton} onClick={() => onCancel(order.id)}>Cancel</button>
    </div>
  </div>
);

export default function TrackingMyOrders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:4029/api/orders', {
          headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN_HERE'
          }
        });
        setOrders(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchOrders();
  }, []);

  const cancelOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:4029/api/orders/${orderId}`, {
        headers: {
          'Authorization': 'Bearer YOUR_ACCESS_TOKEN_HERE'
        }
      });
      setOrders(orders.filter(order => order.id !== orderId));
    } catch (error) {
      setError(error.message);
    }
  };

  
  if (TrackingMyOrders && TrackingMyOrders.length === 0) return <NothingCart />;

  return (
   <>
      
      <div className={styles.wrapper}>
      <h1 className={styles.title}>
        
        Shopping Cart
        <Link to='/CartThree'>
      <button className={styles.wishlistButton}>
          <img src={LoveIcon} alt="Wishlist Icon" className={styles.trackingImage} />
          Wishlist
        </button></Link>
        <button className={styles.trackingButton}>
          <img src={EyeTracking} alt="Cart Icon" className={styles.trackingImage} />
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
        {error && <p>{error}</p>}
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} onCancel={cancelOrder} />
        ))}
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

