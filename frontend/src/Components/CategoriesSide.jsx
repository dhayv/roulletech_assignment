import React, { useContext, useEffect, useState } from "react";
import api from '../api.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from "../Context/GlobalContext.jsx";


const Categories = () => {

    const {categories, setCategories} = useContext(GlobalContext),

    useEffect = (() => {
        api.get(`api/categories`)
        .then(response => setCategories(response.data.categories))
        .catch(error => console.error("Error fetching categories:", error))
    }, []);

    return(
        <div>Hello World</div>
    )
}

export default Categories;