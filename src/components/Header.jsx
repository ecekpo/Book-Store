import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Header = () => (
  <div>
    <nav>
      <h1>Bookstore CMS</h1>
      <ul className="nav-link">
        <li><Link to="/" style={{ textDecoration: 'none' }}>BOOKS</Link></li>
        <li><Link to="/categories" style={{ textDecoration: 'none' }}>CATEGORIES</Link></li>
      </ul>
      <CgProfile className="book-avatar" />
    </nav>
  </div>
);

export default Header;
