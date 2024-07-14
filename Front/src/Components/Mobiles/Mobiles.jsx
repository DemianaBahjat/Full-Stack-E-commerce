// import React from 'react'
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from '../SideBar/SideBar';
import Product from '../Product/Product';
import Header from '../Header/Header'
import Offers from '../Offers/Offers'
import logo from '../../Assets/Logo1.jpg' 
import Footer from '../Footer/Footer';



export default function Mobiles() {
  
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [filteredProducts, setFilteredProducts] = useState([]);
const [selectedCategory, setSelectedCategory] = useState('');
const [selectedBrand, setSelectedBrand] = useState('');
const [selectedRate, setSelectedRate] = useState('');
const [selectedPrice, setSelectedPrice] = useState('');
const [query, setQuery] = useState('');

useEffect(() => {
const fetchProducts = async () => {
  try {
    const response = await axios.get(`https://ecommerce-bf1g.onrender.com/api/categories/Mobiles/products`);
    setProducts(response.data);
    console.log(response);
    setFilteredProducts(response.data);  
    setLoading(false);
  } catch (err) {
    setError(err.message);
    setLoading(false);
  }
};
fetchProducts();
},[]);

useEffect(() => {
  let filtered = products;

  if (selectedCategory) {
    filtered = filtered.filter(product => product.category === selectedCategory);
  }

  if (selectedBrand) {
    filtered = filtered.filter(product => product.brand === selectedBrand);
  }

  if (selectedRate) {
    filtered = filtered.filter(product => product.rating >= parseInt(selectedRate));
  }

  if (selectedPrice) {
    filtered = filtered.filter(product => product.price <= parseInt(selectedPrice));
  }

  if (query) {
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  setFilteredProducts(filtered);
}, [selectedCategory, selectedBrand, selectedRate, selectedPrice, query, products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  //console.log("hiiiii", products[0].discription)
  return (
    <>
        <Header/> 
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '20px' }}>
        <img src={logo} alt='logo' style={{ width: '30px', marginRight: '10px' }} />
        <h3 className='fw-bold'> Mobiles  </h3>
       </div>

       <section className='mobiles'>
      <div className="row gx-0 mb-3">
        <div className="col-md-2">
          <SideBar  cat={'Mobiles'}
              setQuery={setQuery}
              setSelectedCategory={setSelectedCategory}
              setSelectedBrand={setSelectedBrand}
              setSelectedRate={setSelectedRate}
              setSelectedPrice={setSelectedPrice}/>
        </div>
    
        <div className=" gx-5 col-md-10 row">
          
              {filteredProducts.map(product => (
             
                <div className="col-md-4" key={product._id}>
                  <Product id={product._id} name={product.name} image={product.image} description={product.description} price={product.price} rating={product.rating} sold={product.sold} available={product.available}></Product>
                </div>
                
              ))}
              </div>
   </div>
        {/* <Offers/> 
        <MediaGeneral/> */}

      <div className="pages d-flex align-items-center justify-content-center gap-5 fs-1">
        <div className="left-arrow"><i class="fa-solid fa-circle-arrow-left text-orange"></i></div>
        <div className="righ-arrow"><i class="fa-solid fa-circle-arrow-right text-orange"></i></div>
      </div>
    </section>
    <Footer/>
    </>
   
  )
}
