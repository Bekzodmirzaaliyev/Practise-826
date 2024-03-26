import React from 'react'
import Recipes from './Pages/Recipes'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router';
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users';
import Comments from './Pages/Comments';
import Products from './Pages/Products';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Wrap your routes with Routes */}
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/comments" element={<Comments />} />
          <Route path="/products" element={<Products />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

