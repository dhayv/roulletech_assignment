import React from 'react'
import CategoryMenu from './CategoriesSide'
import MealList from './MealList'
import WelcomeMessage from './WelcomeMessage'

const Home = () => {
  return (
    <>
      <CategoryMenu />
      <WelcomeMessage/>
      <MealList />

    </>

  )
}

export default Home
