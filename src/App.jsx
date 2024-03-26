import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import
import Navbar from './components/Navbar';
import Products from './Pages/Products';
import Recipes from './Pages/Recipes';
import Comments from './Pages/Comments';
import Users from './Pages/Users';
import Dashboard from './Pages/Dashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
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
