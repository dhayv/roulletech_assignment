import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate, useLocation, Link } from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Navbar className='navbar-light' bg='light' variant='light'>
      <Container>
        <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Recipe Meals</Navbar.Brand>
        <Nav className='ml-auto'>
          {location.pathname !== '/' && (
            <Nav.Link onClick={() => navigate(-1)}>{'<- Back'}</Nav.Link>
          )}
          <LinkContainer to='/'>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
