import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'
import { GlobalContext } from '../Context/GlobalContext'
import { Row, Col, Card, Button, Container } from 'react-bootstrap'

const MealList = () => {
  const { meals, setMeals, categoryView, setRecipeId } = useContext(GlobalContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (categoryView) {
      api.get(`api/recipes?category=${categoryView}`)
        .then(response => {
          setMeals(response.data.meals)
        })
        .catch(error => console.error('Error fetching meals:', error))
    }
  }, [categoryView, setMeals])

  const handleBasicClick = (meal) => {
    setRecipeId(meal.idMeal)
    navigate(`/recipe/${meal.idMeal}`)
  }

  return (
    <Container>
      <Row>
        {meals.length > 0
          ? (
              meals.map(meal => (
                <Col md={4} key={meal.idMeal} className='mb-3'>
                  <Card>
                    <Card.Img
                      variant='top'
                      src={meal.strMealThumb}
                      className='img-thumbnail'
                      style={{ objectFit: 'cover', height: '200px' }}
                    />
                    <Card.Body>
                      <Card.Title>{meal.strMeal}</Card.Title>
                      <Card.Text className='text-truncate' style={{ maxHeight: '3.6em' }}>
                        {meal.strInstructions}
                      </Card.Text>
                      <Button onClick={() => handleBasicClick(meal)}>View Recipe</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )
          : (
            <p>No recipes available for this category.</p>
            )}
      </Row>
    </Container>
  )
}

export default MealList
