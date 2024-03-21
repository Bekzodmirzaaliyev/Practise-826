import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Navbar from './components/Navbar';
import Products from './Pages/Products';
import Recipes from './Pages/Recipes';
import Comments from './Pages/Comments';
import Users from './Pages/Users';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router> {/* Wrap your entire application with Router */}
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
