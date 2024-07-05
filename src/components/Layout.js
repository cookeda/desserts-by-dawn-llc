import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import './layout.css';

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <title>Desserts by Dawn</title>
    </Helmet>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
