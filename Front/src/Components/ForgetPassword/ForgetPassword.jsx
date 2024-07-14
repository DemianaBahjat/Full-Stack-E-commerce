import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './ForgetPassword.module.css';
import imageSrc from '../../Assets/freepik--Plant--inject-137.png';
import shadow from '../../Assets/Ellipse 89.png'; 
import { Spinner } from 'react-bootstrap';

export default function ForgetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const [errorMsg, setErrorMsg] = useState('');

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Enter valid Email"),
    key: Yup.string().required('Key is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      key: ''
    },
    validationSchema,
      
    onSubmit: async (values) => {
      setErrorMsg('');
      setIsLoading(true);
      try {
        const response = await axios.post('http://localhost:4021/api/users/forgetPassword', {
          email: values.email,
          key: values.key
        });
        setErrorMsg(response.data.message); 
        
        const userId = response.data.userId;
        if(response.data.success == true){
            navigate(`/resetPassword/${userId}`);
        }
      } catch (error) {
        setErrorMsg(error.response.data.message); 
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <>
    
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <h2 className={styles.forgetPasswordTitle}>Forget Password?</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className={styles.input}
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={`alert alert-danger p-2 m-2 w-75 text-center ${styles.error}`}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="key">Key</label>
            <input
              type="text"
              id="key"
              name="key"
              className={styles.input}
              {...formik.getFieldProps('key')}
            />
            {formik.touched.key && formik.errors.key ? (
              <div className={`alert alert-danger p-2 m-2 w-75 text-center ${styles.error}`}>{formik.errors.key}</div>
            ) : null}
          </div>
            {errorMsg && <div className="alert alert-danger m-auto w-50 p-1 mt-2 text-center">{errorMsg}</div>}

          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.sendButton} disabled={isLoading}>
              {isLoading ? 
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner> : 'Send'}
            </button>
          </div>
        </form>

      </div>
      <img src={imageSrc} alt="Decoration" className={styles.image} />
      <img src={shadow} alt="Shadow" className={styles.shadow} />
    </div>
    </>
  );
}
