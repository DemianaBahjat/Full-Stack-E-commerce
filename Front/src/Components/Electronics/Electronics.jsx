import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Electronics.css';
import SideBar from '../SideBar/SideBar';
import Product from '../Product/Product';
import { authContext } from '../../Contexts/AuthContext';

export default function Electronics() {
  const {cat} = useContext(authContext)

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://ecommerce-bf1g.onrender.com/api/categories/${cat}/products`);
        setProducts(response.data);
        console.log(response);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [cat]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className='Electronics'>
      <div className="row gx-0 mb-3">
        <div className="col-md-2">
          <SideBar cat={cat} /> 
        </div>
        <div className="col-md-10">
          <div className="products px-3">
            <div className="row gy-3">
              {products.map(product => (
                <div className="col-md-4" key={product._id}>
                  <Product image={product.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pages d-flex align-items-center justify-content-center gap-5 fs-1">
        <div className="left-arrow"><i className="fa-solid fa-circle-arrow-left text-orange"></i></div>
        <div className="right-arrow"><i className="fa-solid fa-circle-arrow-right text-orange"></i></div>
      </div>
    </section>
  );
}
