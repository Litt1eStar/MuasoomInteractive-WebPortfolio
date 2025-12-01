import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../../pages/Home/navbar/Navbar';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;