import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Header = () => (
  <div>
    <nav className="main-nav">
      <h1>Bookstore CMS</h1>
      <div className="nav-bar-book">
        <ul className="nav-link">
          <li><Link to="/" style={{ textDecoration: 'none' }}>BOOKS</Link></li>
          <li><Link to="/categories" style={{ textDecoration: 'none' }} className="cats">CATEGORIES</Link></li>
        </ul>
        <CgProfile className="book-avatar" />
      </div>
    </nav>
  </div>
);

export default Header;
