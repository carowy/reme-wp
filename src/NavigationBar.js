import React from 'react'
import './style.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import companyLogo from './images/reme-logo-white.png';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar className="navigation-bar" variant="dark" expand="lg">
                <Navbar.Brand id="navbar-brand"><Link to="/"><img src={companyLogo} width="119" height="40" className="d-inline-block align-top" alt="" /></Link></Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Link to="/" className="link-element">Avaleht</Link>
                    <Link to="/about" className="link-element">Ettevõttest</Link>
                    <Nav.Link href="/#ehitusteenused" className="link-element">Ehitusteenused</Nav.Link>
                    <Link to="/projects" className="link-element">Tehtud tööd</Link>
                    <Link to="/contact" className="link-element">Kontakt</Link>
                </Nav>
                <div className="navigation-languages">
                    <button>EST</button>
                    <button>ENG</button>
                </div>
                </Navbar.Collapse>
        </Navbar>
    )
}
export default NavigationBar;