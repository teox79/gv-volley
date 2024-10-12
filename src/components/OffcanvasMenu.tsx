import React, { useState } from 'react';
import { Offcanvas, Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaVimeo, FaTwitter, FaGooglePlusG, FaInstagram, FaTimes, FaSearch } from 'react-icons/fa';

const OffcanvasMenu: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="d-block d-md-none">
                Open Menu
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* Sezione Header con link social e informazioni */}
                    <div className="header__top--canvas">
                        <div className="ht-info">
                            <ul>
                                <li>20:00 - May 19, 2019</li>
                                <li><a href="#">Sign in</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="ht-links">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaVimeo /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaGooglePlusG /></a>
                            <a href="#"><FaInstagram /></a>
                        </div>
                    </div>

                    {/* Sezione Menu */}
                    <ListGroup variant="flush" className="main-menu mobile-menu">
                        <ListGroup.Item action href="./index.html">
                            Home
                        </ListGroup.Item>
                        <ListGroup.Item action href="./club.html">
                            Club
                        </ListGroup.Item>
                        <ListGroup.Item action href="./schedule.html">
                            Schedule
                        </ListGroup.Item>
                        <ListGroup.Item action href="./result.html">
                            Results
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                            Sport
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Pages
                            <ListGroup variant="flush" className="dropdown">
                                <ListGroup.Item action href="./blog.html">
                                    Blog
                                </ListGroup.Item>
                                <ListGroup.Item action href="./blog-details.html">
                                    Blog Details
                                </ListGroup.Item>
                                <ListGroup.Item action href="#">
                                    Schedule
                                </ListGroup.Item>
                                <ListGroup.Item action href="#">
                                    Results
                                </ListGroup.Item>
                            </ListGroup>
                        </ListGroup.Item>
                        <ListGroup.Item action href="./contact.html">
                            Contact Us
                        </ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default OffcanvasMenu;
