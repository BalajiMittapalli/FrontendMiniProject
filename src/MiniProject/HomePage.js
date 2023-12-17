import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function HomePage() {
  let [products, setProducts] = useState([]);
  let [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((proObj) => setProducts(proObj))
      .catch((err) => console.log('error in fetching data ', err));
  }, []);

  return (
    <div>
      <div className='bg-info p-4 text-center'>
        <h1 className='text-warning'>Trendy Wendy</h1>
        <input
          type="text"
          id='search'
          placeholder='Search by product title'
          className='p-2 w-50 mb-5 rounded-4'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className='row'>
          {
          products.filter((p) => p.title.toLowerCase().includes(searchValue)).map((product, index) => (
              <div className='col-sm-12 col-md-6 col-lg-4 mb-3' key={index}>
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
