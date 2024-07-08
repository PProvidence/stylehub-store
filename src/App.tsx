import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import All from './components/All';
// import logo from './logo.svg';
// import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/all" element={<All />}></Route>
        </Route>
      </Routes>

    </Router>

  );
};

export default App;

