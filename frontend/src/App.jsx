import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'; 

import Footer from './Components/Footer'
import Navigation from './Components/NavBar'
import Home from './Components/Home'
import { GlobalProvider } from './Context/GlobalContext'
import CategoryMenu from './Components/CategoriesSide'
import MealList from './Components/MealList'
import RecipeDetails from './Components/RecipeDetail'

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
      <div className='container'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/meals" element={<MealList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
        
          <Footer />
          </div>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
