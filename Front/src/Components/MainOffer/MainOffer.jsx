import React from 'react'
import Offers from '../Offers/Offers'
import Header from '../Header/Header'
import logo from '../../Assets/Logo1.jpg' 
import styles from '../Offers/Offers.module.css'
import Footer from '../Footer/Footer'

export default function MainOffer() {
  return (
    <>
        <Header/>
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '20px' }}>
        <img src={logo} alt='logo' style={{ width: '30px', marginRight: '10px' }} />
        <h2 className={styles.sectionTitle}>
          GAZ<span className={styles.highlightedText}>IER</span> Offers
        </h2>
       </div>
        <Offers/>
        <Footer/> 
        
    </>
  )
}
