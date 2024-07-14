import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import logo from '../../Assets/Logo1.jpg';
import SideBar from '../SideBar/SideBar';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';

export default function Appliances() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedRate, setSelectedRate] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://ecommerce-bf1g.onrender.com/api/categories/Appliances/products`);
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (selectedBrand) {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    if (selectedRate) {
      filtered = filtered.filter(product => product.rating >= parseInt(selectedRate));
    }

    if (selectedPrice) {
      filtered = filtered.filter(product => product.price <= parseInt(selectedPrice));
    }

    if (query) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedBrand, selectedRate, selectedPrice, query, products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '20px' }}>
        <img src={logo} alt='logo' style={{ width: '30px', marginRight: '10px' }} />
        <h3 className='fw-bold'>Appliances</h3>
      </div>

      <section className='Appliances'>
        <div className="row gx-0 mb-3">
          <div className="col-md-2">
            <SideBar
              cat={'Appliances'}
              setQuery={setQuery}
              setSelectedCategory={setSelectedCategory}
              setSelectedBrand={setSelectedBrand}
              setSelectedRate={setSelectedRate}
              setSelectedPrice={setSelectedPrice}
            />
          </div>

          <div className="gx-5 col-md-10 row">
            {filteredProducts.map(product => (
              <div className="col-md-4" key={product._id}>
                <Product
                id={product._id}
                  name={product.name}
                  image={product.image}
                  description={product.description}
                  price={product.price}
                  rating={product.rating}
                  sold={product.sold}
                  available={product.available}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="pages d-flex align-items-center justify-content-center gap-5 fs-1">
          <div className="left-arrow"><i className="fa-solid fa-circle-arrow-left text-orange"></i></div>
          <div className="right-arrow"><i className="fa-solid fa-circle-arrow-right text-orange"></i></div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
