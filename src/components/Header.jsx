import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <nav>
      <h1>Bookstore CMS</h1>
      <ul>
        <li><Link to="/" style={{ textDecoration: 'none' }}>BOOKS</Link></li>
        <li><Link to="/categories" style={{ textDecoration: 'none' }}>CATEGORIES</Link></li>
      </ul>
    </nav>
  </div>
);

export default Header;
