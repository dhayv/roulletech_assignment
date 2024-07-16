import React, { useContext, useState } from 'react'
import api from '../api'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalContext } from '../Context/GlobalContext'

const RecipeList = () => {
  const { categories, recipes, setRecipes } = useContext(GlobalContext)

  useEffect = () => {
    api.get(`api/recipes/${categories}`)
      .then(response => setRecipes(response.data.meals))
      .catch(error => console.error('Error fetching meals:', error))
  }

  return (
    <p>Recipe List</p>
  )
}

export default RecipeList
