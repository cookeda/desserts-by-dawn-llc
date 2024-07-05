import React from 'react';
import Layout from '../components/Layout';
import About from './about';
import Contact from './contact';
import DessertTruck from './dessert-truck';
import Gallery from './gallery';
import Menu from './menu';

const IndexPage = () => (
  <div>
    <h1>Welcome to Desserts by Dawn</h1>
    <p>Your favorite place for delicious treats!</p>
    <div>
      <About />
      <Contact />
      <DessertTruck />
      <Gallery />
      <Menu />
    </div>
  </div>
);

export default IndexPage;
