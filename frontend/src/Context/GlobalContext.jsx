import React, {createContext, useState} from "react";


export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [categories, setCategories] = useState("");
    const [recipes, setRecipesList] = useState("");
    const [recipeDetails, setRecipeDetails] = useState("");


    const contextValues = {
        categories,
        setCategories,
        recipes,
        setRecipesList,
        recipeDetails,
        setRecipeDetails
    }

    return(
        <GlobalContext.Provider value={contextValues}>
            {children}
        </GlobalContext.Provider>
    )
}