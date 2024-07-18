import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [meals, setMeals] = useState([])
  const [recipeId, setRecipeId] = useState(null)
  const [categoryView, setCategoryView] = useState('')

  const contextValues = {
    categories,
    setCategories,
    meals,
    setMeals,
    recipeId,
    setRecipeId,
    categoryView,
    setCategoryView
  }

  return (
    <GlobalContext.Provider value={contextValues}>
      {children}
    </GlobalContext.Provider>
  )
}
