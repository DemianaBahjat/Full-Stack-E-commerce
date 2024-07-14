import React, { useState } from "react";
import axios from "axios";
import styles from "./ResetPassword.module.css";
import imageSrc from "../../Assets/freepik--Plant--inject-137.png";
import shadow from "../../Assets/Ellipse 89.png";
import { useNavigate, useParams } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const {id} =useParams()
  const navigate=useNavigate()
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {data} = await axios.patch(
        `http://localhost:4021/api/users/success/${id}`,{ password });
         setMessage("Password has been successfully reset!");
          navigate('/login')
         
      setError("");
    } catch (err) {
      setError(err.response?.data?.message );
      console.log(err)
      setMessage("");
    }
  };

  return (
   <>
       
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <h2 className={styles.forgetPasswordTitle}>Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <label className={styles.emailLabel} htmlFor="password">
              New Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className={styles.input}
              value={password}
              onChange={handlePasswordChange}
              name="password"
            />
          </div>
          
          {message && <p className="alert alert-success p-2 m-2 w-100 text-center">{message}</p>}
          {error && <p className="alert alert-danger p-2 m-2 w-100 text-center">{error}</p>}
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.sendButton}>Save</button>
          </div>
        </form>
      </div>
      <img src={imageSrc} alt="Decoration" className={styles.image} />
      <img src={shadow} alt="Shadow" className={styles.shadow} />
    </div>
   </>
  );
}
