import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { WishlistContext } from "../../Contexts/WishlistContext";
import styles from "./Cart.module.css";
import CartImage from "../../Assets/CartImage.png";
import EyeTracking from "../../Assets/fluent_eye-tracking-16-filled.png";
import LoveIcon from "../../Assets/ph_heart-bold.png";
import QuantityIcon from "../../Assets/arrow_forward_ios.png";
import EmptyCart from "../EmptyCart/EmptyCart";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import swal from "sweetalert";
import Footer from "../Footer/Footer";

export default function Cart() {
  const { cart, dispatch, decreaseCartQuantity, increaseCartQuantity, saveOrdersToLocalStorage } =
    useContext(CartContext); // Included saveOrdersToLocalStorage
  const { addToWishlist } = useContext(WishlistContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [userId, setUserId] = useState(null);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  }, [cart]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.id);
      } catch (error) {
        console.error("Invalid token specified:", error);
      }
    }
  }, []);

  const handleSelectAll = () => {
    setShowCheckboxes(!showCheckboxes);
    if (!showCheckboxes) {
      setSelectedItems(cart.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleDeleteSelected = () => {
    dispatch({ type: "DELETE_ITEMS", payload: selectedItems });
    setSelectedItems([]);
    setShowCheckboxes(false);
  };

  const handleDeleteItemWithConfirmation = (itemId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch({ type: "DELETE_ITEMS", payload: [itemId] });
        swal("Poof! Your item has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your item is safe!");
      }
    });
  };

  const handleMoveToWishlist = () => {
    selectedItems.forEach((itemId) => {
      const item = cart.find((product) => product.id === itemId);
      if (item) addToWishlist(item);
    });
    setSelectedItems([]);
    setShowCheckboxes(false);
  };

  const handleItemSelect = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((itemId) => itemId !== id)
        : [...prevSelectedItems, id]
    );
  };

  const handleBuyNow = async () => {
    try {
      saveOrdersToLocalStorage(); // Save the orders object to local storage before making the API call

      const response = await axios.post(
        "https://gazierproject.vercel.app/create-checkout-session",
        {
          cart,
          userId,
        }
      );
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleAddToWishlist = (item) => {
    addToWishlist(item);
    swal("Added to Wishlist!", {
      icon: "success",
    });
  };

  const handleQuantityChange = (itemId, amount) => {
    decreaseCartQuantity(itemId, amount); // استدعاء decreaseCartQuantity مع المعطيات المناسبة
  };

  if (cart && cart.length === 0) return <EmptyCart />;

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          <span className={styles.icon}>
            <img src={CartImage} alt="Cart Icon" />
          </span>{" "}
          Shopping Cart
          <Link to={"/CartThree"}>
            <button className={styles.wishlistButton}>
              <img
                src={LoveIcon}
                alt="Wishlist Icon"
                className={styles.trackingImage}
              />
              Wishlist
            </button>
          </Link>
          <Link to={"/Orders"}>
            <button className={styles.trackingButton}>
              <img
                src={EyeTracking}
                alt="Tracking Icon"
                className={styles.trackingImage}
              />
              Tracking My Orders
            </button>
          </Link>
        </h1>

        <div className={styles.wrapperInside}>
          <div className={styles.cart}>
            <div className={styles.buttonContainer}>
              <button onClick={handleSelectAll}>Select All Items</button>
              <button onClick={handleDeleteSelected}>
                Delete Selected Elements
              </button>
              <button onClick={handleMoveToWishlist}>
                Move Selected Items to Wishlist
              </button>
            </div>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className={styles.cartItem}>
                  <div className={styles.sideAndCardContainer}>
                    <input
                      type="checkbox"
                      className={`${styles.checkbox} ${
                        showCheckboxes ? styles.show : ""
                      }`}
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleItemSelect(item.id)}
                    />
                    <label
                      htmlFor={`checkbox-${item.id}`}
                      className={styles.customCheckbox}
                    />
                  </div>
                  <div className={styles.card}>
                    <div className={styles.io}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className={styles.cardImage}
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <h2 className={styles.cardTitle}>{item.name}</h2>
                      <p className={styles.cardParagraph}>
                        {showMore ? item.description : `${item.description.slice(0, 100)}...`}
                        {item.description.length > 100 && (
                          <span
                            onClick={() => setShowMore(!showMore)}
                            className={`show-more ${showMore ? 'show-less' : ''}`}
                            style={{ color: 'orange' }}
                          >
                            {showMore ? ' show less' : ' show more'}
                          </span>
                        )}
                      </p>
                      <p className={styles.cardPrice}>${item.price}</p>
                      <div className={styles.cardButtons}>
                        <button
                          className={styles.deleteButton}
                          onClick={() =>
                            handleDeleteItemWithConfirmation(item.id)
                          }
                        >
                          Delete
                        </button>
                        <div className={styles.quantitySelectContainer}>
                          <button onClick={() => decreaseCartQuantity(item.id)} className={`${styles.quantityButton}`}>
                            -
                          </button>
                          <div>
                            <span className="fs-3">quantity: {item.quantity}</span>
                          </div>
                          <button onClick={() => increaseCartQuantity(item.id)} className={`${styles.quantityButton}`}>
                            +
                          </button>
                        </div>
                        <div>
                          <button
                            className={styles.moveButton}
                            onClick={() => handleAddToWishlist(item)}
                          >
                            Move to Wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.cartLine}></div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className={styles.cartLineContainer}>
                <div className={styles.subtotalText}>Subtotal</div>
                <div className={styles.totalAmount}>${totalAmount}</div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className={styles.buttonContainerLeft}>
                <button className={styles.buyNowButton} onClick={handleBuyNow}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
