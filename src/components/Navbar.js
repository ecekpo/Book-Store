import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';

function Navbar() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default Navbar;
