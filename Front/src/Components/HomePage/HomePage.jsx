import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import Electronics from '../Electronics/Electronics';
import EndHome from '../EndHome/EndHome';
import Offers from '../Offers/Offers';
import MediaHome from './MediaHome';
import MediaGeneral from './MediaGeneral';
import styles from '../Offers/Offers.module.css';
import logo from '../../Assets/Logo1.jpg';
import SearchNotFound from '../SearchNotFound/SearchNotFound';
import { CartContext } from '../../Contexts/CartContext';
import SearchFound from '../SearchFound/SearchFound';
import axios from 'axios';
import Filter from '../Filter/Filter'
import Footer from '../Footer/Footer';


export default function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setSearchPerformed(true);
  };
  const {searchTerm}  = useContext(CartContext)

  return (
    <>
      
      <Header onSearch={handleSearchResults} />
      
        <>
       
        
          {
            searchTerm?
            <SearchFound />: <>
               <MediaHome />
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '20px' }}>
            <img src={logo} alt='logo' style={{ width: '30px', marginRight: '10px' }} />
            <h2 className={styles.sectionTitle}>
              GAZ<span className={styles.highlightedText}>IER</span> Offers
            </h2>
          </div>
              <Offers />
            <MediaGeneral />
            {/* <Electronics /> */}
            <Filter/> 
            <EndHome />
            <Footer/>
            </>
          }
       
       
        </>

    </>
  );
}
