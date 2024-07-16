import React, { useContext } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import RecipeList from './RecipeList'
import { GlobalContext } from '../context/GlobalContext'
import api from '../api' // Adjust the path according to your project structure

jest.mock('../api')
jest.mock('../context/GlobalContext')

describe('RecipeList', () => {
  test('fetches and displays recipes', async () => {
    const mockSetRecipes = jest.fn()
    const mockCategories = 'desserts'
    const mockRecipes = [
      { id: 1, name: 'Recipe 1' },
      { id: 2, name: 'Recipe 2' }
    ]

    useContext.mockReturnValue({
      categories: mockCategories,
      recipes: [],
      setRecipes: mockSetRecipes
    })

    api.get.mockResolvedValue({ data: { meals: mockRecipes } })

    render(<RecipeList />)

    await waitFor(() => {
      expect(mockSetRecipes).toHaveBeenCalledWith(mockRecipes)
    })

    mockRecipes.forEach(recipe => {
      expect(screen.getByText(recipe.name)).toBeInTheDocument()
    })
  })

  test('handles error during fetching', async () => {
    const mockSetRecipes = jest.fn()
    const mockCategories = 'desserts'
    const mockError = new Error('Error fetching meals')

    useContext.mockReturnValue({
      categories: mockCategories,
      recipes: [],
      setRecipes: mockSetRecipes
    })

    console.error = jest.fn() // Mock console.error to avoid logging during tests

    api.get.mockRejectedValue(mockError)

    render(<RecipeList />)

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith('Error fetching meals:', mockError)
    })
  })
})
