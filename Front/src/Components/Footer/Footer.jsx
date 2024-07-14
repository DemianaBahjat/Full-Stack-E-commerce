import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <h2 className={styles.logo}>GAZ <span className={styles.spanI}>IER</span></h2>
                    <div className={styles.categories}>
                        <h3 className={styles.aboutSec}>My Categories</h3>
                        <ul>
                           <Link to='/mainElectronics' className='text-decoration-none text-white'> <li>Electronics</li> </Link> 
                           <Link to='/mobiles' className='text-decoration-none text-white'> <li>Mobiles</li> </Link> 
                           <Link to='/appliances' className='text-decoration-none text-white'>  <li>Appliances</li> </Link> 
                           <Link to='/kitchen' className='text-decoration-none text-white'> <li>Kitchen</li> </Link> 
                           <Link to='/furniture' className='text-decoration-none text-white'>  <li>Furniture</li> </Link> 
                           <Link to='/offers' className='text-decoration-none text-white'> <li>Offers</li> </Link> 
                        </ul>
                    </div>
                </div>

                <div className={styles.contactSection}>
                    <h3 className={styles.aboutSec}>Contact Us</h3>
                    <div className={styles.socialIcons}>
                        <Link to="/"><i className="fab fa-facebook"></i></Link>
                        <Link to="/"><i className="fab fa-instagram"></i></Link>
                        <Link to="/"><i className="fab fa-twitter"></i></Link>
                        <Link to="/"><i className="fab fa-facebook-messenger"></i></Link>

                    </div>
                </div>
                <div className={styles.downloadSection}>
                    <h3><span className={styles.aboutSec}>Download</span> GAZIER <span className={styles.aboutSec}>App</span></h3>
                    
                    <div className={styles.appButtons}>
                       <button className={styles.googlePlayBtn}>Google Play</button>
                       <button className={styles.appStoreBtn}>App Store</button>
                    </div>
                    
                </div>
                <div className={styles.aboutSection}>
                    <h3> <span className={styles.aboutSec}>About</span> GAZ <span className={styles.spanI}>IER</span></h3>
                    <Link to="/aboutUs">Click here to know more about Gazier</Link>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>© Gazier for Trade and Distribution, all rights reserved.</p>
                <Link to="/TermsAndConditions">Terms & Conditions</Link>
            </div>
        </footer>
    );
};

export default Footer;
