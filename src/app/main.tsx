import './globals.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AboutUs from '../features/aboutUs';
import CryptoList from '../features/crypto/components/cryptoList';
import ErrorPage from '../features/error';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from '../routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <CryptoList />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
