import { faAddressBook, faBlog, faHome, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className=" bg-color sticky-top">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            className="me-auto">
                            <h2>Orchos</h2>



                        </Nav>
                        <Nav>
                            <NavLink to='/home' className="items"><FontAwesomeIcon icon={faHome} />Home</NavLink>
                            <NavLink to='/home' className="items"><FontAwesomeIcon icon={faTasks} />Home</NavLink>
                            <NavLink to="/explore" className="items"><FontAwesomeIcon icon={faAddressBook} />Explore</NavLink>
                            <NavLink to="/dashboard" className="items"><FontAwesomeIcon icon={faBlog} />DashBoard</NavLink>
                            {/* {user?.email ? <button onClick={logOut} className="px-4 items button-hover">Log Out</button> : <NavLink to="/login" className="items">Log In</NavLink>} */}
                            {/* <NavLink eventKey={2} to="/login" className="items">
                    <FontAwesomeIcon icon={faSign} />Login
                </NavLink> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>


    );
};

export default Header;