import React, { useContext, useEffect, useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import api from '../api'
import { GlobalContext } from '../Context/GlobalContext'
import '../App.css'

const CategoryMenu = () => {
  const { categories, setCategories, setCategoryView } = useContext(GlobalContext)
  const [basicActive, setBasicActive] = useState('')

  useEffect(() => {
    api.get('api/categories')
      .then(response => {
        const categoriesData = response.data.categories
        setCategories(categoriesData)
        setBasicActive(categoriesData[0].strCategory)
        setCategoryView(categoriesData[0].strCategory)
      })
      .catch(error => console.error('Error fetching categories:', error))
  }, [setCategories, setCategoryView])

  const handleBasicClick = (category) => {
    if (basicActive !== category) {
      setBasicActive(category)
      setCategoryView(category)
    }
  }

  if (!Array.isArray(categories)) {
    return <div>Loading...</div>
  }

  return (
    <Navbar collapseOnSelect sticky='top' expand='lg' bg='white' variant='light' className='my-3'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' className='custom-toggler' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mx-auto justify-content-center w-100'>
            {categories.map(category => (
              <Nav.Link
                key={category.idCategory}
                onClick={() => handleBasicClick(category.strCategory)}
                className={basicActive === category.strCategory ? 'active' : ''}
                style={{ cursor: 'pointer', padding: '0.5rem 1rem', display: 'inline-block', whiteSpace: 'nowrap' }}
              >
                {category.strCategory}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CategoryMenu
