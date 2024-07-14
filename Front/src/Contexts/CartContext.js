import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [showQuantityOptions, setShowQuantityOptions] = useState(false);

  useEffect(() => {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalQuantity);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const deleteItems = (itemIds) => {
    setCart((prevCart) => prevCart.filter((item) => !itemIds.includes(item.id)));
  };

  const handleDeleteItem = (itemId) => {
    deleteItems([itemId]);
  };

  const handleToggleQuantityOptions = (productId) => {
    if (selectedProductId === productId) {
      setSelectedProductId(null);
      setShowQuantityOptions(false);
    } else {
      setSelectedProductId(productId);
      setShowQuantityOptions(true);
    }
  };

  const increaseCartQuantity = (id) => {
    setCart((currItems) => 
      currItems.map((item) => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseCartQuantity = (id) => {
    setCart((currItems) => 
      currItems
        .map((item) => 
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const moveToWishlist = (selectedItems) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !selectedItems.includes(item.id))
    );
  };

  const dispatch = (action) => {
    switch (action.type) {
      case 'DELETE_ITEMS':
        deleteItems(action.payload);
        break;
      case 'UPDATE_QUANTITY':
        handleQuantityChange(action.payload.id, action.payload.amount);
        break;
      default:
        console.error('Unknown action type');
    }
  };

  const handleQuantityChange = (itemId, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + amount } : item
      )
    );
  };

  // Function to construct orders object dynamically from cart
  const constructOrdersObject = () => {
    const userId = JSON.parse(localStorage.getItem("user")); // Adjust this based on your localStorage setup
    const orderItems = cart.map(item => ({
      productId: item.id, // Assuming item.id is your productId in the cart item
      quantity: item.quantity
    }));

    return {
      userId:userId._id,
      orderItems
    };
  };

  // Function to save the constructed orders object to local storage
  const saveOrdersToLocalStorage = () => {
    const ordersObject = constructOrdersObject();
    localStorage.setItem('orders', JSON.stringify(ordersObject));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        deleteItems,
        handleDeleteItem,
        handleToggleQuantityOptions,
        selectedProductId,
        showQuantityOptions,
        moveToWishlist,
        searchTerm,
        setSearchTerm,
        increaseCartQuantity,
        decreaseCartQuantity,
        dispatch,
        constructOrdersObject,
        saveOrdersToLocalStorage // Include the saveOrdersToLocalStorage function in the context value
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
