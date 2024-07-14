import React, { useState } from "react";
import "./SideBar.css";

export default function SideBar({
  cat,
  setQuery,
  setSelectedCategory,
  setSelectedBrand,
  setSelectedRate,
  setSelectedPrice,
}) {
  const mobile = window.innerWidth <= 768;
  const [openDelivery, setOpenDelivery] = useState(false);
  const [openBrand, setOpenBrand] = useState(false);
  const [openCondition, setOpenCondition] = useState(false);
  const [openRate, setOpenRate] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedBrand('');
    setSelectedRate('');
    setSelectedPrice('');
    setQuery('');
    document.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = false);
  };

  // Checkbox Filtering
  const handleChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCategory(checked ? value : '');
  };

  const handleChangeBrand = (event) => {
    const { value, checked } = event.target;
    setSelectedBrand(checked ? value : '');
  };

  const handleChangeRate = (event) => {
    const { value, checked } = event.target;
    setSelectedRate(checked ? value : '');
  };

  const handleChangePrice = (event) => {
    const { value, checked } = event.target;
    setSelectedPrice(checked ? value : '');
  };

  return (
    <div className={`side-bar p-3 ${mobile ? 'mb-3' : ''}`}>
      <div className="header">
        <div className="title mb-3 pb-2">
          <h3 className="m-0 text-capitalize">{cat}</h3>
        </div>
        {/* <div className="search-bar position-relative d-flex align-items-center mb-4">
          <span>
            <i className="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
          </span>
          <input
            type="text"
            className="form-control px-3"
            placeholder="Search Here"
          />
        </div> */}
      </div>

      <div className={`filter ${mobile ? 'd-flex justify-content-around flex-wrap' : ''}`}>
        <div className="delivery mb-3">
          <h4
            className="text-capitalize py-2 fs-6 title-border pointer"
            onClick={() => setOpenDelivery(!openDelivery)}
          >
            eligible for free delivery
          </h4>
          <div className={`check d-flex align-items-center ${mobile ? (openDelivery ? 'd-block' : 'd-none') : ''}`}>
            <input type="checkbox" name="delivery" id="check" />
            <label className="m-0 ms-2 text-capitalize" htmlFor="check">
              free shipping
            </label>
          </div>
        </div>

        <div className="brand mb-3">
          <h4
            className="text-capitalize py-2 fs-6 title-border pointer"
            onClick={() => setOpenBrand(!openBrand)}
          >
            brand
          </h4>
          <div className={`${mobile ? (openBrand ? 'd-block' : 'd-none') : ''}`}>
            {["tornado", "beko", "bosch", "sonai", "black & decker", "braun"].map((brand) => (
              <div className="check d-flex align-items-center" key={brand}>
                <input
                  type="checkbox"
                  name="brand"
                  value={brand}
                  id={brand}
                  onChange={handleChangeBrand}
                />
                <label className="m-0 ms-2 text-capitalize" htmlFor={brand}>
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="condition mb-3">
          <h4
            className="text-capitalize py-2 fs-6 title-border pointer"
            onClick={() => setOpenCondition(!openCondition)}
          >
            condition
          </h4>
          <div className={`${mobile ? (openCondition ? 'd-block' : 'd-none') : ''}`}>
            {["new", "used"].map((condition) => (
              <div className="check d-flex align-items-center" key={condition}>
                <input
                  type="checkbox"
                  name="condition"
                  value={condition}
                  id={condition}
                  onChange={handleChange}
                />
                <label className="m-0 ms-2 text-capitalize" htmlFor={condition}>
                  {condition}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="rate mb-3">
          <h4
            className="text-capitalize py-2 fs-6 title-border pointer"
            onClick={() => setOpenRate(!openRate)}
          >
            avg. customer review
          </h4>
          <div className={`${mobile ? (openRate ? 'd-block' : 'd-none') : ''}`}>
            {[5, 4, 3, 2, 1].map((stars) => (
              <div className="check d-flex align-items-center" key={stars}>
                <input
                  type="radio"
                  name="rate"
                  value={stars}
                  id={`star-${stars}`}
                  onChange={handleChangeRate}
                />
                <label className="m-0 ms-2 text-capitalize" htmlFor={`star-${stars}`}>
                  {[...Array(stars)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star" style={{ color: "orange" }}></i>
                  ))}
                  {[...Array(5 - stars)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star" style={{ color: "rgb(174, 173, 173)" }}></i>
                  ))}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="price mb-3">
          <h4
            className="text-capitalize py-2 fs-6 title-border pointer"
            onClick={() => setOpenPrice(!openPrice)}
          >
            price
          </h4>
          <div className={`${mobile ? openPrice ? 'd-block' : 'd-none' : ''}`}>
            {[
              { label: "up to 100$", value: "100" },
              { label: "100 to 200$", value: "200" },
              { label: "200 to 300$", value: "300" },
              { label: "300 to 400$", value: "400" },
              { label: "400$ & above", value: "500" }
            ].map((price) => (
              <div className="check d-flex align-items-center" key={price.value}>
                <input
                  type="checkbox"
                  name="price"
                  value={price.value}
                  id={`price-${price.value}`}
                  onChange={handleChangePrice}
                />
                <label className="m-0 ms-2 text-capitalize" htmlFor={`price-${price.value}`}>
                  {price.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
  <button className="reset-button mt-4" onClick={resetFilters}>
    Reset Filters
  </button>
</div>

      </div>
    </div>
  );
}
