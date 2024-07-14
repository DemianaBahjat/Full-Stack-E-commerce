import React, { useState, useEffect } from "react"; 
import axios from "axios"; 
import { Link, useNavigate } from "react-router-dom"; 
import styles from "./Orders.module.css"; 
import LoveIcon from "../../Assets/ph_heart-bold.png"; 
import CartIcon from "../../Assets/pajamas_go-back.png"; 
import EyeTracking from "../../Assets/fluent_eye-tracking-16-filled.png"; 
import { jwtDecode } from "jwt-decode"; 
import Footer from "../Footer/Footer"; 
 
 
const OrderCard = ({ order, onCancel }) => ( 
  <div className={styles.orderCard}> 
    <div className={styles.orderDetails}> 
      <div className={styles.header}> 
        <span className={styles.status}>{order.status}</span> 
        <span className={styles.price}>{order.totalPrice}$</span> 
      </div> 
 
      {order.orderItems.map((item, index) => ( 
        <div key={index}> 
          <img src={item.productId?.image}/> 
          <h2>{item.productId?.name}</h2> 
          <p className={styles.description}>{item.productId?.description}</p> 
          <button 
            className={styles.cancelButton} 
            onClick={() => onCancel(order._id)} 
          > 
            Cancel 
          </button> 
        </div> 
      ))} 
    </div> 
  </div> 
); 
const MyOrders = () => { 
  const [orders, setOrders] = useState([]); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate(); 
 
  console.log(orders) 
 
  // useEffect(() => { 
  //   // Fetch orders from localStorage 
  //   const ordersFromLocalStorage = localStorage.getItem('orders'); 
  //   if (ordersFromLocalStorage) { 
  //     try { 
  //       const ordersObj = JSON.parse(ordersFromLocalStorage); 
  //       const { userId, orderItems } = ordersObj; 
 
  //       if (userId && Array.isArray(orderItems)) { 
  //         saveOrders(orderItems, userId); // Call saveOrders with orderItems array and userId 
  //       } else { 
  //         console.error('Orders in localStorage has invalid structure:', ordersObj); 
  //       } 
  //     } catch (error) { 
  //       console.error('Error parsing orders from localStorage:', error.message); 
  //     } 
  //   } else { 
  //     console.error('No orders found in localStorage'); 
  //   } 
  // }, []); 
const [hello,sethello] = useState([]) 
console.log(hello) 
  console.log(localStorage.getItem("user"))  
  
  useEffect(() => { 
    console.log('ahmed') 
    const fetchOrders = async () => {  
      const token = localStorage.getItem("token");  
      const userId = localStorage.getItem("user");  
      const userIddd =JSON.parse(userId) 
 
      console.log(userId) 
      try {  
        const response = await axios.get(`http://localhost:4021/api/orders/get/userorders/${userIddd._id}`, {  
          headers: {  
            Authorization: token,  
          },  
        });  
        setOrders(response.data);  
        sethello(response) 
        console.log(response) 
      } catch (error) { 
        console.log('error') 
        setError(error.message);  
      }  
    };  
    
    fetchOrders();  
  }, []); 
 
  // const fetchOrders = () => {  
  //   const token = localStorage.getItem("token");  
  //   const userId = localStorage.getItem("user");  
  //   console.log("hello") 
  // } 
  // useEffect(() =>{ 
  //   fetchOrders(); 
  // }, 
  // [] 
  // ) 
 
  const saveOrders = async (orderItems, userId) => { 
   
    try { 
      const token = localStorage.getItem("token"); 
      console.log(token)
     console.log(orderItems); 
 
      const response = await axios.post( 
'http://localhost:4021/api/orders/makeOrder', 
      { 
        "userId": userId,   
        "orderItems": orderItems, 
         
    } 
     , 
      { 
        headers: { 
          Authorization: token, 
        }, 
        }, 
 
      ) 
      console.log(response); 
    localStorage.removeItem('orders')
    } catch (error) { 
      console.error("Error saving order:", error); 
    } 
  }; 
 
   
   
  useEffect(()=>{ 
    const ordersFromLocalStorage = localStorage.getItem('orders'); 
    const ordersObj = JSON.parse(ordersFromLocalStorage); 
    const userIdd= localStorage.getItem('user') 
    const userIddd =JSON.parse(userIdd)

    

    if(ordersFromLocalStorage){
      const { orderItems } = ordersObj; 
      saveOrders( orderItems,userIddd._id) 

    }
        // fetchOrders(); 
 
  },[] )   
 
 
  const cancelOrder = async (orderId) => { 
    const token = localStorage.getItem("token"); 
 
    try { 
      await axios.delete( 
        `http://localhost:4021/api/orders/${orderId}`, 
        { 
          headers: { 
            Authorization: token, 
          }, 
        } 
      ); 
      setOrders(orders.filter((order) => order._id !== orderId)); 
    } catch (error) { 
      setError(error.message); 
    } 
  }; 
 
  // useEffect(() => { 
  //   fetchOrders(); 
  // }, [navigate]); // Fetch orders on component mount and navigate change 
 
   
  // useEffect(() => { 
  //   if (orders.length > 0) { 
  //     saveOrders(); 
  //   } 
  // }, [orders]); // Save orders whenever orders change 
 
  return ( 
    <> 
      <div className={styles.wrapper}> 
        <h1 className={styles.title}> 
          Shopping Cart 
          <Link to="/CartThree"> 
            <button className={styles.wishlistButton}> 
              <img 
                src={LoveIcon} 
                alt="Wishlist Icon" 
                className={styles.trackingImage} 
              /> 
              Wishlist 
            </button> 
          </Link> 
          <button className={styles.trackingButton}> 
            <img 
              src={EyeTracking} 
              alt="Cart Icon" 
              className={styles.trackingImage} 
            /> 
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
            <OrderCard key={order._id} order={order} onCancel={cancelOrder} /> 
          ))} 
          <Link to="/Cart"> 
            <button className={styles.goToCartButton}> 
              <img 
                src={CartIcon} 
                alt="Cart Icon" 
                className={styles.goToCartImage} 
              /> 
              Go To Shopping Cart 
            </button> 
          </Link> 
        </div> 
      </div> 
      <Footer /> 
    </> 
  ); 
}; 
 
export default MyOrders;