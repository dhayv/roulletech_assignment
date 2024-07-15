import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Navigation from './Components/NavBar';
import Home from './Components/Home';
import { GlobalProvider } from './Context/GlobalContext';

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
