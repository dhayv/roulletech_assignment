import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../api'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalContext } from '../Context/GlobalContext'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'

const RecipeDetails = () => {
  const { recipeId } = useParams()
  const { setRecipeId } = useContext(GlobalContext)
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    if (recipeId) {
      setRecipeId(recipeId) // Ensure context is updated if needed
      api.get(`api/recipes/${recipeId}`)
        .then(response => setRecipe(response.data.meals[0]))
        .catch(error => console.error('Error fetching meal information:', error))
    }
  }, [recipeId, setRecipeId])

  return (
    <Container>
      <Card className='border-0'>
        <Card.Body>
          {recipe
            ? (
              <>
                <Card.Title>{recipe.strMeal}</Card.Title>
                <Row>
                  <Col md={6}>
                    <Image src={recipe.strMealThumb} alt={recipe.strMeal} className='img-thumbnail' style={{ width: '100%' }} />
                  </Col>
                  <Col md={6}>
                    <h4>Ingredients</h4>
                    <ul>
                      {Object.keys(recipe)
                        .filter(key => key.includes('strIngredient') && recipe[key])
                        .map((key, index) => (
                          <li key={index}>{recipe[key]} - {recipe[`strMeasure${key.replace('strIngredient', '')}`]}</li>
                        ))}
                    </ul>
                    <a as='a' href={recipe.strYoutube} target='_blank' className='btn btn-primary' rel='noreferrer'>Follow along on Youtube</a>
                  </Col>
                </Row>
                <Row className='mt-4'>
                  <Col>
                    <h4>Instructions</h4>
                    {recipe.strInstructions.split('\n').map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </Col>
                </Row>
              </>
              )
            : (
              <p>Loading...</p>
              )}
        </Card.Body>
      </Card>
    </Container>
  )
}

export default RecipeDetails
