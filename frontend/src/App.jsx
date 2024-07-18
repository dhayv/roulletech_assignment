import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Components/Footer'
import Navigation from './Components/NavBar'
import Home from './Components/Home'
import { GlobalProvider } from './Context/GlobalContext'
import CategoryMenu from './Components/CategoriesSide'
import MealList from './Components/MealList'

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
          <CategoryMenu />
          <MealList />
          <Footer />
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
