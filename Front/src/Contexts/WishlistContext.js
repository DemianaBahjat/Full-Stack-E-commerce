// // WishlistContext.js
// import React, { createContext, useState } from 'react';

// export const WishlistContext = createContext();

// export default function WishlistContextProvider({ children }) {
//   const [wishlist, setWishlist] = useState([]);

//   const addToWishlist = (item) => {
//     setWishlist((prevWishlist) => [...prevWishlist, item]);
//   };

//   const deleteItems = (itemIds) => {
//     setWishlist((prevWishlist) =>
//       prevWishlist.filter((item) => !itemIds.includes(item.id))
//     );
//   };

//   return (
//     <WishlistContext.Provider
//       value={{
//         wishlist,
//         addToWishlist,
//         deleteItems,
//       }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// }
// src/Contexts/WishlistContext.js
import React, { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};


