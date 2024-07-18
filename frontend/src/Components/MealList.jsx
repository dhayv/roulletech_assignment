import React, { useContext, useState, useEffect } from 'react'
import api from '../api'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalContext } from '../Context/GlobalContext'
import { MDBCol, MDBListGroup, MDBListGroupItem, MDBRow, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit'

const MealList = () => {
  const { meals, setMeals, categoryView } = useContext(GlobalContext);

  useEffect(() => {
    if (categoryView) {
    api.get(`api/recipes/${categoryView}`)
      .then(response => setMeals(response.data.meals))
      .catch(error => console.error('Error fetching meals:', error))
    }
  },[categoryView, setMeals]);



  return (
    <div>
      <h6>Recipes</h6>
        <MDBRow>
          {}
        </MDBRow>
    </div>
  )
}

export default MealList;
