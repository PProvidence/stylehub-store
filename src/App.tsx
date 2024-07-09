import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Cart from './pages/Cart';
import All from './pages/All';
import Favourite from './pages/Favourite';

const App: React.FC = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home" element={<Home />}></Route>
        </Route>
        
        <Route path="/all" element={<All />}></Route>
        <Route path="/discover" element={<Discover />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/favourite" element={<Favourite />}></Route>

      </Routes>

    </Router>

  );
};

export default App;

