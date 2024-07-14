import React, { useContext } from 'react'
import './Filter.css'
import khalat from '../../Assets/5lat.jpg'
import ghsala from '../../Assets/8sala.jpg'
import fan from '../../Assets/fan.jpg'
import sticks from '../../Assets/wooden sticks.jpg'

// 
import  { useState } from 'react';
import Products from '../products/products';
import SideBar from '../SideBar/SideBar';
import { authContext } from '../../Contexts/AuthContext'

export default function Filter({filteredProducts}) {
  const {cat} = useContext(authContext)

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 11;
  
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedRate, setSelectedRate] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredProducts.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredProducts.length - slidesToShow : prevIndex - 1
    );
  };
  return (
    <section className='Electronics'>
      <div className="row gx-0 mb-3">
        <div className="col-md-2">
            <SideBar cat={cat} setQuery={setQuery} setSelectedCategory={setSelectedCategory} setSelectedBrand={setSelectedBrand}  setSelectedRate={setSelectedRate}  setSelectedPrice={setSelectedPrice}/>
        </div>
        <div className="col-md-10">
          <div className="products px-3">
          <div className="row gy-3">
            <div className="col-md-12"> 
            <Products query={query} selectedCategory={selectedCategory} selectedBrand={selectedBrand} selectedRate={selectedRate} selectedPrice={selectedPrice} filteredProducts={filteredProducts} />
            </div>
            
          </div>
          </div>
          
        </div>
      </div>

      <div className="pages d-flex align-items-center justify-content-center gap-5 fs-1">
        <div className="left-arrow" onClick={prevSlide}><i class="fa-solid fa-circle-arrow-left text-orange"></i></div>
        <div className="righ-arrow" onClick={nextSlide}><i class="fa-solid fa-circle-arrow-right text-orange"></i></div>
      </div>
    </section>
  )
}
