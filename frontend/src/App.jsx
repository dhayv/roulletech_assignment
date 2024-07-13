import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Navigation from './Components/NavBar';
import Home from './Components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
