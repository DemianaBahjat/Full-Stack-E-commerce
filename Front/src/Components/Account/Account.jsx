import React, { useState } from "react";
import axios from "axios";
import styles from "../Account/Account.module.css";
import img1 from "../../Assets/photo_2024-06-26_08-03-29.jpg";
import img2 from "../../Assets/changePass.svg";
import img3 from "../../Assets/edit.svg";
import { jwtDecode } from "jwt-decode"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";

export default function Account() {
  const token = localStorage.getItem("token");
  const UserLocal = JSON.parse(localStorage.getItem("user"));

  const user = jwtDecode(token);

  const [formData, setFormData] = useState({
    name: UserLocal?.name,
    email: UserLocal?.email,
    phone: UserLocal?.phone,
    street: UserLocal?.street,
    apartment: UserLocal?.apartment,
    city: UserLocal?.city,
    country: UserLocal?.country,
    password: "",
    zip: UserLocal?.zip,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://gazierproject.vercel.app/api/users/${user.id}`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        street: formData.street,
        apartment: formData.apartment,
        zip: formData.zip,
        city: formData.city,
        country: formData.country,
        password: formData.password,
      });
      console.log(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      toast.success("User updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Error updating profile!");
    }
  };

  return (
    <>
       
      <ToastContainer />
      <section className={`${styles.myAccount}  `}>
        <div className=" mt-4">
          <div className={`${styles.imgeedit}`}>
            <div className={`${styles.peofile_Img}`}>
              <div className={`${styles.imgPerson}`}>
                <img src={img1} alt="account" className="" />
              </div>
              <div className={`${styles.edit}`}>
                <img src={img3} alt="edit" className="" />
              </div>
            </div>
          </div>

          <div className={`${styles.formContain}`}>
            <div className={styles.collparent}>
              <img src={img2} alt="change password" />
              <h2 className="text-dark">Personal Information</h2>
            </div>
            <form onSubmit={handleProfileSubmit}>
              <div className={`d-flex justify-content-between ${styles.mainSection}`}>
                <div className="row w-50">
                  <div className="col-lg-12">
                    <label htmlFor="name">Full name (First and Last name)</label>
                    <input
                      type="text"
                      className={`${styles.colorInput} ${styles.customControl} ${styles.marginInput}`}
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <label htmlFor="city">City/Area</label>
                    <input
                      type="text"
                      className={`${styles.colorInput} ${styles.customControl} ${styles.marginInput}`}
                      id="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    <label htmlFor="apartment">Building name/no</label>
                    <input
                      type="text"
                      className={`${styles.colorInput} ${styles.customControl} ${styles.marginInput}`}
                      id="apartment"
                      value={formData.apartment}
                      onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className={`${styles.colorInput} ${styles.customControl} ${styles.marginInput}`}
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className={`${styles.colorInput} ${styles.customControl} ${styles.marginInput}`}
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row w-50">
                  <div className="">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      type="text"
                      className={`${styles.colorInput} ${styles.customControl} ${styles.marginInput}`}
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <label htmlFor="street">Street name</label>
                    <input
                      type="text"
                      className={`${styles.colorInput} ${styles.customControl} ${styles.marginInput}`}
                      id="street"
                      value={formData.street}
                      onChange={handleChange}
                    />
                    <label htmlFor="zip">Postal Code</label>
                    <input
                      type="text"
                      className={`${styles.colorInput} ${styles.customControl} ${styles.marginInput}`}
                      id="zip"
                      value={formData.zip}
                      onChange={handleChange}
                    />
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      className={`${styles.colorInput} ${styles.customControl} ${styles.marginInput}`}
                      id="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className={`${styles.submit} mt-5`} name="profileSubmit" id="profileSubmit">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
