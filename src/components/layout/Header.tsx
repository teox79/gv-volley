import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col, NavDropdown } from 'react-bootstrap';
import { FaFacebook, FaVimeo, FaTwitter, FaGooglePlusG, FaInstagram, FaBars } from 'react-icons/fa';
import DynamicTimeDisplay from '../common/DynamicTimeDisplay';
import { NavLink } from 'react-router-dom'; // Importa NavLink
import { useAppContext } from '../../state/AppContext';

const Header: React.FC = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const { ui } = useAppContext();
    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };


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
                                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><img src={`${ui.globalUi.baseUrl}img/logo/logo_v1.png`} alt="Logo" width="100px" /></NavLink>
                            </div>
                        </Col>
                        <Col lg={10} >
                            <Navbar expand="lg" className="nav-menu pt-0 pb-0">
                                <Navbar.Toggle aria-controls="basic-navbar-nav">
                                    <FaBars />
                                </Navbar.Toggle>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                                        <NavLink to="/calendar" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Calendario</NavLink>
                                        <NavLink to="/results" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Risultati</NavLink>
                                        <NavDropdown
                                            title="Paleste"
                                            id="gym-nav-dropdown"
                                            show={showDropdown}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <NavDropdown.Item as={NavLink} to="/gyms/gym_001" >Palestra Mariano "Jammonet"</NavDropdown.Item>
                                            <NavDropdown.Item as={NavLink} to="/gyms/gym_002" >Palestra Mariano "Dante Alighieri"</NavDropdown.Item>
                                            <NavDropdown.Item as={NavLink} to="/gyms/gym_003" >Palestra Paina "Salvo D’Acquisto"</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
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
