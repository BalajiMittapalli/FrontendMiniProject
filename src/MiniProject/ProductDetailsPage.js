import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductDetailsPage() {
  const { state } = useLocation();

  return (
    <div className='bg-primary' style={{ minHeight: '100vh', paddingTop: 50 }}>
      <div className='container pt-5'>
        <div className='row justify-content-center bg-white p-4 rounded-4'>
          <div className='col-lg-6'>
            <img
              src={state.image}
              style={{
                width: '100%',
                maxWidth: 350,
                height: 'auto',
                padding:'20px 20px',
                border: '2px solid #ddd', // Border styling
                borderRadius: '8px', // Border radius
              }}
              className='rounded-4 mb-4'
              alt=''
            />
          </div>
          <div className='col-lg-6'>
            <h2>Title: {state.title}</h2>
            <p className='mb-4 display-6'>Price: {state.price}</p>
            <p className='mb-4 '>Description: {state.description}</p>
            <p className='mb-4 display-4'>Rating: {state.rating.rate}</p>
            <p className='mb-4 display-4'>Count: {state.rating.count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
