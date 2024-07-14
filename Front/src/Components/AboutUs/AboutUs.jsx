
import React from 'react';
import img from '../../Assets/AboutUs.jpg';
import img1 from '../../Assets/Group45.png';
import imgTeam from '../../Assets/prof.svg'
import styles from '../AboutUs/AboutUs.module.css'
import Footer from '../Footer/Footer';

export default function AboutUs() {
  return (
   <>

    <div className='container'>
      <div className={`d-flex justify-content-between align-items-center ${styles.section} `}>
        <div className={`w-50 ${styles.about_text}`}>
          <img src={img1} alt="" className='w-60 text-align-center mb-3' />
          <p className={`w-75 ${styles.para} `}>
            Gazier is positioned as a comprehensive e-commerce solution that meets the needs of both consumers and sellers. By focusing on user experience, security, and efficient service delivery, Gazier aims to become a preferred online shopping destination. Whether you're looking to purchase everyday items or special products, Gazier provides a reliable and enjoyable shopping experience.
          </p>
          <h5>Team Members</h5>
          <div className="ourTeams d-flex" style={{width:'30%'}}>
            <div >
              <img src={imgTeam} alt="" className={` ${styles.imges} ` } />
            </div>
            <div >
              <img src={imgTeam} alt="" className={` ${styles.imges} ` } />
            </div>
            <div >
              <img src={imgTeam} alt="" className={` ${styles.imges} ` } />
            </div>
            <div >
              <img src={imgTeam} alt="" className={` ${styles.imges} ` } />
            </div>
            <div >
              <img src={imgTeam} alt="" className={` ${styles.imges} ` } />
            </div>
            <div >
              <img src={imgTeam} alt="" className={` ${styles.imges} ` } />
            </div>
          </div>

        </div>
        <div className="w-50">
          <img src={img} alt="" className='w-100' />
        </div>

      </div>
    </div>
    <Footer/>
   </>
  );
}

