import React, { useContext, useEffect } from 'react';
import api from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from '../Context/GlobalContext';
import { MDBCol, MDBCardImage, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBRow } from 'mdb-react-ui-kit';

const MealList = () => {
  const { meals, setMeals, categoryView } = useContext(GlobalContext);

  useEffect(() => {
    if (categoryView) {
      api.get(`api/recipes?category=${categoryView}`)
        .then(response => setMeals(response.data.meals))
        .catch(error => console.error('Error fetching meals:', error));
    }
  }, [categoryView, setMeals]);

  return (
    <div>
      <h6 className="bg-light p-2 border-top border-bottom">Recipes</h6>
      <MDBRow>
        {meals.length > 0 ? (
          meals.map(meal => (
            <MDBCol md="4" key={meal.idMeal} className="mb-3">
              <MDBCard>
                <MDBCardImage 
                  src={meal.strMealThumb} 
                  className="img-thumbnail" 
                  style={{ objectFit: 'cover', height: '200px', width: '100%' }}
                />
                <MDBCardBody>
                  <MDBCardTitle>{meal.strMeal}</MDBCardTitle>
                  <MDBCardText className="text-truncate" style={{ maxHeight: '3.6em' }}>
                    {meal.strInstructions}
                  </MDBCardText>
                  <MDBBtn>View Recipe</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))
        ) : (
          <p>No recipes available for this category.</p>
        )}
      </MDBRow>
    </div>
  );
};

export default MealList;
