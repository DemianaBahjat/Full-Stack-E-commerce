import React from 'react'
import styles from '../BuyNow/BuyNow.module.css';
import img from '../../Assets/purshing.svg'
import img1 from '../../Assets/defulatAdress.svg'
import img2 from '../../Assets/newAddress.svg'
import Footer from '../Footer/Footer';

export default function BuyNow() {
  return (
    <>
      
      <div className={styles.collparent}>
        <div className='w-10 mx-3'>
          <img src={img} alt='' className='w-100' />
        </div>
        <h1 className='text-dark ' >purchasing process</h1>
      </div>

      <div className={styles.container}>
        <input type="range" name="" id="" min={100} max={700} />
        <div className="d-flex align-items-center gap-2 mt-4">
          <div  style={{ width: '30px' }}>
            <img src={img1} alt='' className='w-100' />
          </div>
          <h3 className='text-dark ' >Default Adress</h3>
        </div>

        <div className='ms-3 mt-4'>

          <input type="checkbox" id="checkbox1" className={`${styles.input} checkmark mx-2`} />
          <label htmlFor="checkbox1"> Use as my default address.</label>


        </div>
        <div className="d-flex mt-4 gap-2">
          <div className='' style={{ width: '30px' }}>
            <img src={img2} alt='' className='w-100' />
          </div>
          <h1 className='text-dark ' style={{fontSize:'25px'}}>Add New Adress</h1>
        </div>
        <div className="form container mt-3">
          <div className={` w-75 justify-content-between gap-5 bold ${styles.iti}`}>
            <div className={`${styles.left}`}>
              <label htmlFor="inptName" >Full name (First and Last name)</label>
              <input type="text" className='form-control ' id='inptName' />
              <label htmlFor="Street_name">Street name</label>
              <input type="text" className='form-control ' id='Street_name' />
              <label htmlFor="City">City/Area</label>
              <input type="email" className='form-control ' id='City' />
            </div>
            <div className={`${styles.right} `}>
              <label htmlFor="Mobile_number">Mobile number</label>
              <input type="number" className={`${styles.colorInput} form-control`} min={0} id='Mobile_number' />
              <label htmlFor="Building_name">Building name/no</label>
              <input type="number" className='form-control ' id='Building_name' min={0} />
              <label htmlFor="Nearest">Nearest landmark</label>
              <input type="number" className='form-control ' id='Nearest' />
            </div>

          </div>

          <input type="submit" name="" id="" className={`${styles.submit} my-5  `} />

        </div>
       
      </div>
      <Footer/>
    </>
  )
}
