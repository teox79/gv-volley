import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col, NavDropdown } from 'react-bootstrap';
import { FaFacebook, FaVimeo, FaTwitter, FaGooglePlusG, FaInstagram, FaBars, FaSearch } from 'react-icons/fa';
import DynamicTimeDisplay from '../common/DynamicTimeDisplay';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    const isActive = (path: string) => location.pathname === path;


    return (
        <header className="header-section">
            {/* Header Top */}
            <div className="header__top">
                <Container>
                    <Row>
                        <Col lg={6} className='d-flex justify-content-start'>
                            <div className="ht-info">
                                <ul>
                                    <li><DynamicTimeDisplay /></li>
                                    <li style={{ display: "none" }}><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} className="d-flex justify-content-end" >
                            <div className="ht-links" style={{ display: "none" }}>
                                <a href="#"><FaFacebook /></a>
                                <a href="#"><FaVimeo /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaGooglePlusG /></a>
                                <a href="#"><FaInstagram /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Header Nav */}
            <div className="header__nav">
                <Container>
                    <Row>
                        <Col lg={2}>
                            <div className="logo">
                                <a href="/">
                                    <img src="/img/logo/logo_v1.png" alt="Logo" width="100px" />
                                </a>
                            </div>
                        </Col>
                        <Col lg={10} >
                            <Navbar expand="lg" className="nav-menu pt-0 pb-0">
                                <Navbar.Toggle aria-controls="basic-navbar-nav">
                                    <FaBars />
                                </Navbar.Toggle>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="/" className={isActive('/') ? 'active' : ''}>Home</Nav.Link>
                                        <Nav.Link href="/calendar" className={isActive('/calendar') ? 'active' : ''}>Calendario</Nav.Link>
                                        <Nav.Link href="/results" className={isActive('/results') ? 'active' : ''}>Risultati</Nav.Link>
                                        <NavDropdown
                                            title="Paleste"
                                            id="gym-nav-dropdown"
                                            show={showDropdown}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <NavDropdown.Item href="/gyms/gym_001" className={isActive('/gyms/gym_001') ? 'active' : ''}>Palestra Mariano "Jammonet"</NavDropdown.Item>
                                            <NavDropdown.Item href="/gyms/gym_002" className={isActive('/gyms/gym_002') ? 'active' : ''}>Palestra Mariano "Dante Alighieri"</NavDropdown.Item>
                                            <NavDropdown.Item href="/gyms/gym_003" className={isActive('/gyms/gym_003') ? 'active' : ''}>Palestra Paina "Salvo D’Acquisto"</NavDropdown.Item>
                                        </NavDropdown>
                                        {/*}
                                        <Nav.Link href="#">Sport</Nav.Link>
                                        <Nav.Link href="./contact.html">Contact Us</Nav.Link>
                                        */}
                                    </Nav>
                                    {/* Search Switch
                                    <div className="nm-right search-switch">
                                        <FaSearch />
                                    </div>
                                     */}
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    );
};

export default Header;

