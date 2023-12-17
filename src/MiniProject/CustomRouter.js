import React from 'react';
import HomePage from './HomePage';
import ProductDetailsPage from './ProductDetailsPage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
function CustomRouter() {
  const router= createBrowserRouter([
    {
      path: '',
      element: <HomePage />,
    },
    {
      path: 'details',
      element: <ProductDetailsPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default CustomRouter;
