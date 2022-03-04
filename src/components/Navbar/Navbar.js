import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar() {
  const [showDropdown, setShowDropdown] = React.useState(false);
 return <div>
<ReactBootStrap.Navbar collapseOnSelect expand="xl"  className='shadow-sm p-3 mt-5 bg-white rounded' fixed='top'>
  <ReactBootStrap.Container fluid>
  <ReactBootStrap.Navbar.Brand className='navbar-logo' ><Link to='/'><i className="fas fa-tooth" />&nbsp;DENTAL-CLINIC</Link></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">

    <ReactBootStrap.Nav className='ms-auto mb-2 mb-lg-0'>
    <ReactBootStrap.NavDropdown title="GENERAL" id="collasible-nav-dropdown" onMouseLeave={() => setShowDropdown(false)} onMouseOver={() => setShowDropdown(true)} show={showDropdown}>
        <ReactBootStrap.NavDropdown.Item ><Link to='/Services'>Cleanings & Exams</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to='/WhiteFilling'>White Fillings</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to='/Features'>Emergency Care</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to='/Root-Canals'>Root Canals</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to='/Features'>Porcelain Crowns</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to='/Features'>Holistic Dentistry</Link></ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
    <ReactBootStrap.NavDropdown title="COSMETIC" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
    <ReactBootStrap.NavDropdown title="SURGICAL" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
    <ReactBootStrap.Nav.Link href="#features">REVIEWS</ReactBootStrap.Nav.Link>
    <ReactBootStrap.NavDropdown title="NEW PATIENTS" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
    <ReactBootStrap.NavDropdown title="ABOUT" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
    <ReactBootStrap.Button className='bookonline-btn'><Link to='./bookonline'> BOOK ONLINE</Link> </ReactBootStrap.Button>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
  </div>;
}

export default Navbar;
