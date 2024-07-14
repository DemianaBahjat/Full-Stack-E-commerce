import React, { useContext, useState } from 'react';
import styles from './login.module.css';
import { json, Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthContext';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Spinner } from 'react-bootstrap';

export default function Login() {
  const { setUserIsLoggedIn } = useContext(authContext);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
      email: Yup.string().required("Email is required").email("Enter a valid Email"),
      password: Yup.string().required('Password is required').min(6, 'Password is too short').max(16, 'Password is too long'),
    
  
  });

  const { values, handleSubmit, handleChange, errors, touched, handleBlur, isValid } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async () => {
      setErrorMsg('');
      try {
        setIsLoading(true);
        let { data } = await axios.post('http://localhost:4021/api/users/login', values);
        console.log(data)
        setUserIsLoggedIn(true);
        localStorage.setItem('token', data.token);
        localStorage.setItem("user", JSON.stringify(data?.user));
        localStorage.setItem( "roleUser",data?.user?.role );
        if (window.location.pathname === '/login') {
          navigate('/home');
        }
      } catch (error) {
        console.log(error)
        setErrorMsg(error.response?.data?.msg || 'An error occurred');
      }
      setIsLoading(false);
    },
    
    validationSchema
  });

  return (
    <>
    
     <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.heading}>
          Welcome <span className={styles.spanI}>Back!</span>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="email"> Email </label>
              <input
                className={styles.input}
                id="email"
                type="email"
                name="email"
                onChange={handleChange} onBlur={handleBlur} value={values.email}
              />
              {errors.email && touched.email && <p className='alert alert-danger mt-1 p-1'>{errors.email}</p>}
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="password"> Password </label>
              <input
                className={styles.input}
                id="password"
                type="password"
                name="password"
                onChange={handleChange} onBlur={handleBlur} value={values.password}
              />
              {errors.password && touched.password && <p className='alert alert-danger w-100 p-1 m-0'>{errors.password}</p>}
            </div>
          </div>

          <div className={styles.forgotPasswordContainer}>
            <Link className={styles.forgotPasswordLink} to="/ForgetPassword">Forget Password?</Link>
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.button} type="submit" disabled={!isValid || isLoading}>
              {isLoading ? 
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              
              : 'Login'}
            </button>
          </div>
          
          {errorMsg && <div className="alert alert-danger p-1 m-2">{errorMsg}</div>}

          <div className={styles.loginPrompt}>
            Don't have account? <Link className={styles.loginLink} to="/signup"> Create an account</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
