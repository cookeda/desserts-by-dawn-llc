import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header>
    <div className="container">
      <Link to="/">
        <img src="/images/icon.png" alt="Desserts by Dawn Logo" />
      </Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/dessert-truck">Dessert Truck</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
