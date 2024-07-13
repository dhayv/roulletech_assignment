import { useState, Lazy } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Navigation from './Components/NavBar';



App = () => {
  

  return (
    <BrowserRouter>
      <Header/>
      <Navigation/>
      <Routes>
        <Route path='/' element/>

      </Routes>
    
    
    </BrowserRouter>
  )
   
}

export default App
