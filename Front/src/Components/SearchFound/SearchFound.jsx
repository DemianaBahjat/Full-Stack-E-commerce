import React, { useContext, useEffect, useState } from 'react';
import styles from './SearchFound.module.css';
import Product from '../Product/Product';
import { CartContext } from '../../Contexts/CartContext';
import axios from 'axios';
import SearchNotFound from '../SearchNotFound/SearchNotFound';
import Footer from '../Footer/Footer';

function SearchFound({ products }) {
  const {searchTerm, setSearchTerm}  = useContext(CartContext)
  const [pro,setPro]=  useState([])

  useEffect(()=>{
    async function getSearch(){
      await axios.get(`https://gazierproject.vercel.app/api/products/search?name=${searchTerm}`).then((result)=>{
        console.log(result)
         setPro(result?.data)
      })
    }

getSearch()
  },[searchTerm])
  if(pro.length === 0)return <SearchNotFound/>
  return (
    <div>
      <section className={styles.main}>
        <div className="row gx-0 mb-3">
          <div className="col-md-12">
            <div className="products px-3">
              <div className="row gy-3">
                {pro.map((product, index) => (
                  <div className="col-md-3" key={index}>
                    <Product image={product.image} name={product.name} price={product.price} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default SearchFound;
