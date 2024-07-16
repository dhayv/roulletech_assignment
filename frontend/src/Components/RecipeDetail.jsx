import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalContext } from '../Context/GlobalContext'

const RecipeDetails = () => {
  const { recipeDetails, setRecipeDetails } = useContext(GlobalContext)
  const { id: recipeId } = useParams()

  useEffect(() => {
    api.get(`api/recipes/${recipeId}`)
      .then(response => setRecipeDetails(response.data.meals[0]))
      .catch(error => console.error('Error fetching meal information:', error))
  }, [recipeId, setRecipeDetails])

  return (
    <h2>Recipe detail</h2>
  )
}

export default RecipeDetails
