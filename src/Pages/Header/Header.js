import { faAddressBook, faHome, faShoppingBag, faShoppingBasket, faSignInAlt, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/UseAuth';
import './Header.css'
import logo from '../Images/images-removebg-preview.png'

const Header = () => {
    const { user, logOut } = useAuth();


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="sticky-top">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            className=" me-auto">
                            <div className='d-flex align-items-center logo-header'>
                                <img className='logo' src={logo} alt="" />
                                <h2 className='header'>Orchos</h2>
                            </div>
                        </Nav>
                        <Nav>
                            <Link to='/home' className="items"><FontAwesomeIcon icon={faHome} />Home</Link>
                            <Link to='/moreitems' className="items"><FontAwesomeIcon icon={faShoppingBasket} />  Shoes</Link>

                            <Link to="/about" className="items"><FontAwesomeIcon icon={faAddressBook} />About</Link>
                            <Link to="/dashboard" className="items"><FontAwesomeIcon icon={faShoppingBag} />DashBoard</Link>
                            <h6 className="items">{user?.displayName}</h6>
                            {user?.email ? <a onClick={logOut} className="items"><FontAwesomeIcon icon={faSignInAlt} />Log Out</a> : <Link to="/login" className="items"><FontAwesomeIcon icon={faSignInAlt} />Log In</Link>}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>


    );
};

export default Header;