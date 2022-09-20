import React from 'react';
import { Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import Categories from './components/Categories';
import Books from './components/Books';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
