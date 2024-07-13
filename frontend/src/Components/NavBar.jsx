import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar bg="light" variant="light" expand="md">
            <Navbar.Brand href="#home">Kangaroo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="home">Home</Nav.Link> 
                        <Nav.Link href="categories"> Categories</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>

        </Navbar>
    )
};

export default Navigation;
