import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState('');
  const [categoryView, setCategoryView] = useState('');

  const contextValues = {
    categories,
    setCategories,
    meals,
    setMeals,
    recipeDetails,
    setRecipeDetails,
    categoryView, 
    setCategoryView,
  }

  return (
    <GlobalContext.Provider value={contextValues}>
      {children}
    </GlobalContext.Provider>
  )
}
