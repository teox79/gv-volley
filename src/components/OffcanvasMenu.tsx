import React, { useState } from 'react';
import { Offcanvas, ListGroup, NavDropdown } from 'react-bootstrap';
import { FaFacebook, FaVimeo, FaTwitter, FaGooglePlusG, FaInstagram, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const OffcanvasMenu: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [openGymDropdown, setOpenGymDropdown] = useState<boolean>(false);
    const handleClose = () => {
        setShow(false);
        setOpenGymDropdown(false);
    };
    const handleShow = () => setShow(true);
    const toggleGymDropdown = () => setOpenGymDropdown(!openGymDropdown);

    return (
        <>

            <section className="top-nav" onClick={handleShow}>
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' >
                    <div className='menu-button'></div>
                </label>
            </section>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton >
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* Sezione Menu */}
                    <ListGroup variant="flush" className="main-menu mobile-menu" style={{ width: "100%" }}>
                        <ListGroup.Item>
                            <NavLink to="/" className="nav-link" onClick={handleClose}>
                                Home
                            </NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <NavLink to="/calendar" className="nav-link" onClick={handleClose}>
                                Calendario
                            </NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <NavLink to="/results" className="nav-link" onClick={handleClose}>
                                Risultati
                            </NavLink>
                        </ListGroup.Item>
                        {/* Dropdown Paleste in formato menu espandibile */}
                        <ListGroup.Item action onClick={toggleGymDropdown} style={{
                            display: 'flex',
                            gap: '20px',
                            justifyContent: "center",
                            alignItems: "center",

                        }}>
                            Paleste
                            {openGymDropdown ? <FaChevronDown /> : <FaChevronRight />}
                        </ListGroup.Item>
                        {openGymDropdown && (
                            <ListGroup variant="flush" className="submenu">
                                <ListGroup.Item>
                                    <NavLink to="/gyms/gym_001" className="nav-link" onClick={handleClose}>
                                        Palestra Mariano "Jammonet"
                                    </NavLink>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <NavLink to="/gyms/gym_002" className="nav-link" onClick={handleClose}>
                                        Palestra Mariano "Dante Alighieri"
                                    </NavLink>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <NavLink to="/gyms/gym_003" className="nav-link" onClick={handleClose}>
                                        Palestra Paina "Salvo D’Acquisto"
                                    </NavLink>
                                </ListGroup.Item>
                            </ListGroup>
                        )}
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas >
        </>
    );
};

export default OffcanvasMenu;
