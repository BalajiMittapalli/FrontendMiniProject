import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {
  let navigate = useNavigate();

  function showDetails() {
    navigate('/details', { state: props.product });
  }  

  return (
    <div className='card text-center p-4 rounded-4' style={{ height: 420 }}>
      <div style={{ height: 400 }}>
        <img
          style={{ width: 150, height: 150 }}
          className='mx-auto rounded-4 mb-3'
          src={props.product.image}
          alt=""
        />
        <h4>{props.product.title}</h4>
        <h3>{props.product.price}</h3>
      </div>
      <button className='btn btn-success' onClick={showDetails}>
        Details
      </button>
    </div>
  );
}

export default ProductCard;
