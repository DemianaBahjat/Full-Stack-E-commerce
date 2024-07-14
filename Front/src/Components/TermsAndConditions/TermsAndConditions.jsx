import React from 'react';
import styles from './TermsAndConditions.module.css';
import img from '../../Assets/terms.jpg'
import flow1 from '../../Assets/flower1.svg'
import flow2 from '../../Assets/flower2.svg'
import Footer from '../Footer/Footer';

const TermsAndConditions = () => {
  return (
    <>
      
       <div className={styles.container}>
      <div className='d-flex'>
        <div className='w-10 mx-3'>
        <img src={img} alt='' className='w-100' />
        </div>
        <h2>Terms & Conditions</h2>
      </div>
      <section>
        <h4>#Terms and Conditions for Gazier</h4>
        <p>Welcome to Gazier. These terms and conditions outline the rules and regulations for the use of Gazier's e-commerce website.</p>
        <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Gazier if you do not agree to take all of the terms and conditions stated on this page.</p>
      </section>
      <section>
        <h4>## Introduction</h4>
        <p>These Terms and Conditions govern your use of our website and the purchase of goods from Gazier. By using our website, you accept these Terms and Conditions in full. If you disagree with these Terms and Conditions or any part of these Terms and Conditions, you must not use our website.</p>
      </section>
      <div style={{position:'relative'}}>

     <img src={flow1} alt="flow1"  className={styles.imgTerm}/>
      <section>
        <h4>## Eligibility</h4>
        <p>You must be at least 18 years old to use our website. By using our website and agreeing to these Terms and Conditions, you warrant and represent that you are at least 18 years old.</p>
      </section>
      </div>
      <section>
        <h4>## Accounts</h4>
        <p>To access certain features of our website, you may be required to create an account. You must provide accurate and complete information and keep your account information updated. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.</p>
      </section>
      <section>
        <h4>## Orders</h4>
        <p>When you place an order on our website, you are making an offer to purchase the goods. We reserve the right to accept or reject any order for any reason. If we accept your order, we will send you a confirmation email.</p>
      </section>
      <section>
        <h4>## Pricing and Payment</h4>
        <p>All prices on our website are in Egyptian Pounds (EGP). We reserve the right to change prices at any time without prior notice. Payment must be made in full before the goods are dispatched. We accept various forms of payment, which will be detailed on our website.</p>
      </section>
      <section>
        <h4>## Shipping and Delivery</h4>
        <p>We will make every effort to deliver the goods within the estimated timescales. However, delays are occasionally inevitable due to unforeseen factors. We shall be under no liability for any delay or failure to deliver the products within the estimated timescales.</p>
      </section>
      <section>
        <h4>## Returns and Refunds</h4>
        <p>If you are not satisfied with your purchase, you may return the goods within 14 days of receipt for a refund or exchange. Goods must be returned in their original condition. Please refer to our Returns Policy for more information.</p>
      </section>
      <section>
        <h4>## Intellectual Property</h4>
        <p>All content on our website, including text, graphics, logos, images, and software, is the property of Gazier or its content suppliers and is protected by Egyptian and international copyright laws. You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the website without our express written permission.</p>
      </section>
      <section>
        <h4>## Limitation of Liability</h4>
        <p>To the maximum extent permitted by law, Gazier will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of, or inability to use, our website or services, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses.</p>
      </section>
      <section>
        <h4>## Governing Law</h4>
        <p>These Terms and Conditions are governed by and construed in accordance with the laws of Egypt. Any disputes relating to these Terms and Conditions will be subject to the exclusive jurisdiction of the courts of Egypt.</p>
      </section>
      <section>
        <h4>## Changes to Terms and Conditions</h4>
        <p>We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our website following the posting of changes will constitute your acceptance of such changes.</p>
      </section>
      <div style={{position:'relative'}}>
<img src={flow2} alt="flow2" style={{position:'absolute',right:'0',width:'150px'}} className={styles.imgTerm2}/>

      <section>
        <h4>## Contact Information</h4>
        <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
        <p><strong>** Gazier Customer Service **</strong></p>
        <p>Email: support@gazier.com</p>
        <p>Phone: +20 101 580 0248</p>
        <p>Address: 123 Gazier Street, Cairo, Egypt</p>
        <p>Thank you for shopping with Gazier. We appreciate your business.</p>
      </section>
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default TermsAndConditions;
