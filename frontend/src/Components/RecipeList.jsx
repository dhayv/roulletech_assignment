import React, { useState } from "react";
import api from '../api'
import 'bootstrap/dist/css/bootstrap.min.css';


const RecipeList = () => {

    const [] = useState(''),

    useEffect = (() => {
        api.get(`api/recipes/${categories}`)
        .then(response => 

        )
        .catch(error => console.error())
    })

    return (
        <p>Recipe List</p>
    )
}

export default RecipeList;