import React, { useContext } from 'react';
import { ProductContext } from '../../context/context';
import getUniqueOptions from '../../functions/getUniqueOptions';

const ProductFilters = () => {
  const {
    storeProducts,
    handleChange,
    search,
    category,
    price,
    minPrice,
    maxPrice,
  } = useContext(ProductContext);

  const categoryOptions = getUniqueOptions(storeProducts, 'category');

  return (
    <section className="product-filters">
      <form className="filter-form">
        {/* search */}
        <div className="form-group">
          <label className="form-group__label" htmlFor="search">
            Wyszukaj
          </label>
          <input
            className="form-group__form-control form-group__form-control--search"
            onChange={handleChange}
            value={search}
            type="text"
            id="search"
            name="search"
            autoComplete="off"
          />
        </div>

        {/* category */}
        <div className="form-group">
          <label className="form-group__label" htmlFor="category">
            Kategoria
          </label>
          <select
            className="form-group__form-control form-group__form-control--select"
            onChange={handleChange}
            value={category}
            name="category"
            id="category"
          >
            {categoryOptions}
          </select>
        </div>

        {/* price */}
        <div className="form-group form-group__form-control--price">
          <label className="form-group__label " htmlFor="price">
            Cena:
            {price},00 zł
          </label>
          <input
            className="form-group__form-control"
            type="range"
            value={price}
            onChange={handleChange}
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
          />
        </div>
      </form>
    </section>
  );
};

export default ProductFilters;
