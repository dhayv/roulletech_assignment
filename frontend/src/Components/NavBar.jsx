import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Navigation = () => {
  return (
    <div>
      <Navbar bg='light' variant='light' expand='md'>
        <Navbar.Brand href='#home'>Kangaroo</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/categories'> Categories</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>

  )
}

export default Navigation
