import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const SignUp = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(3, 'Min length must be 3 characters').max(20, 'Max length must be 20 characters'),
    phone: Yup.string().required('Phone is required').matches(/^01[0125][0-9]{8}$/, 'Enter valid phone number'),
    postalCode: Yup.string().required('Postal Code is required'),
    email: Yup.string().required("Email is required").email("Enter a valid Email"),
    password: Yup.string().required('Password is required').min(6, 'password must be at least 6 characters ').max(16, 'Password is too long'),
    confirmPassword: Yup.string().required('Repeat Password is required').oneOf([Yup.ref('password')]),
    city: Yup.string().required('City is required'),
    building: Yup.string().required('Building is required'),
    street: Yup.string().required('Street is required'),
    landmark: Yup.string().required('Landmark is required'),
    key:Yup.string().required('key is required'),
  });

  const { values, handleSubmit, handleChange, errors, touched, handleBlur, isValid } = useFormik({
    initialValues: {
      name: '',
      phone: '',
      city: '',
      street: '',
      landmark: '',
      building: '',
      email: '',
      postalCode: '',
      password: '',
      confirmPassword: '',
      key:''
    },
    onSubmit: async () => {
      setErrorMsg('');
      try {
        setIsLoading(true);
        let { data } = await axios.post('http://localhost:4021/api/users/register', values);
        console.log(data);
        navigate('/login');
      } catch (error) {
        if (error.response && error.response.data) {
          if (error.response.data.message === 'Email already exists') {
            setErrorMsg('This email is already registered. Please use a different email.');
          } else {
            setErrorMsg(error.response.data.message || 'An error occurred');
          }
        } else {
          setErrorMsg('An error occurred. Please try again later.');
        }
      }
      setIsLoading(false);
    },
    validationSchema,
  });

  return (
   <>
        
       <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.heading}>
          Welcome to <span className={styles.spanI}>GAZ</span>IER!
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="fullName">Full name (First and Last name)</label>
              <input
                className={styles.input}
                id="fullName"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && <p className="alert alert-danger p-1 m-2">{errors.name}</p>}
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="Email">Email</label>
              <input
                className={styles.input}
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && <p className="alert alert-danger p-1 m-2">{errors.email}</p>}
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="Password">Password</label>
              <input
                className={styles.input}
                id="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && <p className="alert alert-danger p-1 m-2">{errors.password}</p>}
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="repeatPassword">Repeat password</label>
              <input
                className={styles.input}
                id="repeatPassword"
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword && <p className="alert alert-danger p-1 m-2">{errors.confirmPassword}</p>}
            </div>
          </div>
           
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="phone">  Unique Key </label>
              <input
                className={styles.input}
                id="key"
                type="string"
                name="key"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.key}
              />
              {errors.key && touched.key && <p className="alert alert-danger p-1 m-2">{errors.key}</p>}
            </div>
            </div>

          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="phone">Phone</label>
              <input
                className={styles.input}
                id="phone"
                type="tel"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {errors.phone && touched.phone && <p className="alert alert-danger p-1 m-2">{errors.phone}</p>}
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="postalCode">Postal Code</label>
              <input
                className={styles.input}
                id="postalCode"
                type="text"
                name="postalCode"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.postalCode}
              />
              {errors.postalCode && touched.postalCode && <p className="alert alert-danger p-1 m-2">{errors.postalCode}</p>}
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="city">City</label>
              <input
                className={styles.input}
                id="city"
                type="text"
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />
              {errors.city && touched.city && <p className="alert alert-danger p-1 m-2">{errors.city}</p>}
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="street">Street</label>
              <input
                className={styles.input}
                id="street"
                type="text"
                name="street"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.street}
              />
              {errors.street && touched.street && <p className="alert alert-danger p-1 m-2">{errors.street}</p>}
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="landmark">Landmark</label>
              <input
                className={styles.input}
                id="landmark"
                type="text"
                name="landmark"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.landmark}
              />
              {errors.landmark && touched.landmark && <p className="alert alert-danger p-1 m-2">{errors.landmark}</p>}
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="building">Building</label>
              <input
                className={styles.input}
                id="building"
                type="text"
                name="building"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.building}
              />
              {errors.building && touched.building && <p className="alert alert-danger p-1 m-2">{errors.building}</p>}
            </div>
          </div>
          <div className={styles.inputCheck}>
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms"> I agree to terms and conditions</label>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button} type="submit" disabled={!isValid || isLoading}>
              {isLoading ? 
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              
              : 'Sign Up'}
            </button>
          </div>
              {errorMsg && <div className="alert alert-danger p-1 m-2">{errorMsg}</div>}

        </form>
        <p className={styles.loginPrompt}>
          Already have an account? <Link className={styles.loginLink} to="/login">Login here</Link>
        </p>
      </div>
    </div>
   </>
  );
};

export default SignUp;
