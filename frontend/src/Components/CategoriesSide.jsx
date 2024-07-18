import React, { useContext, useEffect, useState } from 'react';
import api from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from '../Context/GlobalContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const CategoryMenu = () => {
  const { categories, setCategories, setCategoryView } = useContext(GlobalContext);
  const [basicActive, setBasicActive] = useState('');

  useEffect(() => {
    api.get('api/categories')
      .then(response => {
        const categoriesData = response.data.categories;
        setCategories(categoriesData);
        setBasicActive(categoriesData[0].strCategory);
        setCategoryView(categoriesData[0].strCategory); 
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, [setCategories, setCategoryView]);

  const handleBasicClick = (category) => {
    if (basicActive !== category) {
      setBasicActive(category);
      setCategoryView(category); 
    }
  };

  if (!Array.isArray(categories)) {
    return <div>Loading...</div>;
  }

  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top">
      <Container>
        <NavbarToggle 
          aria-controls="category-navbar-nav" 
          style={{ borderColor: 'transparent' }}
          className="custom-toggler"
        />
        <NavbarCollapse id="category-navbar-nav">
          <Nav className="me-auto justify-content-center w-100">
            {categories.map(category => (
              <NavItem key={category.idCategory}>
                <NavLink
                  onClick={() => handleBasicClick(category.strCategory)}
                  active={basicActive === category.strCategory}
                  className={basicActive === category.strCategory ? 'active' : ''}
                  style={{ cursor: 'pointer' }}
                >
                  {category.strCategory}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default CategoryMenu;
