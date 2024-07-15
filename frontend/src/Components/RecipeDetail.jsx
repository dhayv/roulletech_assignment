import React from "react";
import api from '../api'
import 'bootstrap/dist/css/bootstrap.min.css';


const recipeDetails = () => {

    const [] = useState(''),

    useEffect = (() => {
        api.get(`api/recipes/${recipe_id}`)
        .then(response => 

        )
        .catch(error => console.error())
    })

    return (
        <h2>Recipe detail</h2>
    )
}

export default recipeDetails;