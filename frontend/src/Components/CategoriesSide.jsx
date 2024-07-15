import React, { useEffect, useState } from "react";
import api from '../api.js'


const Categories = () => {

    const [] = useState():


    useEffect = (() => {
        api.get('api/categories')
        .then(response => 
            
        )
        .catch(error => console.error())
    })

    return(
        <div>Hello World</div>
    )
}

export default Categories;