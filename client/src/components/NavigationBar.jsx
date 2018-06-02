import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,    
    Button
} from 'react-bootstrap'
import '../css/navigationBar.css'

export default (props) => {

    const { brand,id } = props;

    return <Navbar id={id} inverse collapseOnSelect className="navbar-fixed-top">
    <Navbar.Header>
        <Navbar.Brand>
            {brand}
    </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav pullRight>
            <NavItem eventKey={1} href="#home-scroll">
                Home
      </NavItem>
            <NavItem eventKey={2} href="#ceremony-scroll">
                About
      </NavItem>
            <NavItem eventKey={3} href="#location">
                Location
      </NavItem>
      <NavItem eventKey={4} href="#rsvp-scroll">
                RSVP
      </NavItem>
        </Nav>
    </Navbar.Collapse>
</Navbar>



} 