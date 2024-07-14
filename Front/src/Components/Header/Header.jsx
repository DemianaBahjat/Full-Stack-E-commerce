import React, { useContext, useState } from 'react';
import './Header.css';
import left from '../../Assets/left-side.jpg';
import right from '../../Assets/right-side.jpg';
import center from '../../Assets/center.jpg';
import Categories from '../Categories/Categories';
import { CartContext } from '../../Contexts/CartContext';

export default function Header({ onSearch }) {
const {searchTerm, setSearchTerm}  = useContext(CartContext)

  // const handleSearch = async (e) => {
  //   if (e.key === 'Enter') {
  //     try {
  //       const url = `http://localhost:4021/api/products/search?name=${searchTerm}`;
  //       const response = await fetch(url);

  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const products = await response.json();
  //       console.log('Search Results:', products);
  //       onSearch(products);
  //     } catch (error) {
  //       console.error(error.message);
  //       onSearch([]);
  //     }
  //   }
  // };

  return (
    <section className='header py-3 position-relative'>
      <div className="left-image">
        <img src={left} alt="left" className='w-100' />
      </div>
      <div className="header-body mx-auto">
        <div className="top-image w-75 m-auto">
          <img src={center} alt="center" className='w-100' />
        </div>
        <div className="search position-relative d-flex align-items-center mb-4">
          <span><i className="fa-solid fa-magnifying-glass fa-flip-horizontal"></i></span>
          <input 
            type="text" 
            className='form-control px-3' 
            placeholder='Search Here' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            // onKeyDown={handleSearch} 
          />
        </div>
        <div className="header-text text-center mb-4">
          <h2 className='text-capitalize'><span>shop</span> smart, live better</h2>
          <p>Discover the Best Deals, Enjoy a Better Life – Shop with Us Today!</p>
        </div>
      </div>
      <div className="right-image">
        <img src={right} alt="right" className='w-100' />
      </div>
      <Categories />
    </section>
  );
}
