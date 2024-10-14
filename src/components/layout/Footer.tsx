import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaCopy, FaThumbtack, FaFacebook, FaTwitter, FaTumblr, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useAppContext } from '../../state/AppContext';

const Footer: React.FC = () => {
    const { ui } = useAppContext();
    return (
        <footer className="footer-section set-bg footer-bg-custom" style={{ backgroundImage: "url('img/footer-bg-v1.jpg')" }}>
            <Container>
                <Row>
                    <Col lg={3} md={6}>
                        <div className="fs-logo">
                            <div className="logo">
                                <a href="/"><img src={`${ui.globalUi.baseUrl}img/logo/logo_v1.png`} width="100px" alt="gv vlley Logo" /></a>
                            </div>
                            <ul style={{ display: "none" }}>
                                <li><FaEnvelope /> Info.colorlib@gmail.com</li>
                                <li><FaCopy /> +(12) 345 6789 10</li>
                                <li><FaThumbtack /> 40 Baria Street 133/2 New York City, United States</li>
                            </ul>
                            <div className="fs-social" style={{ display: "none" }}>
                                <a href="#"><FaFacebook /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaTumblr /></a>
                                <a href="#"><FaLinkedin /></a>
                                <a href="#"><FaInstagram /></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="offset-lg-1">
                        <div className="fs-widget">
                            <h4>Club</h4>
                            <ul className="fw-links">
                                <li><a href="https://ardorvolley.it/">Ardor 2k Volley</a></li>
                                <li><a href="https://pallavoloarosio.it/home">ASD Pallavolo Arosio</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="copyright-option">
                    <Row>
                        <Col lg={12}>
                            <div className="co-text">
                                <p style={{ color: "#b5b8be" }}>
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer >
    );
}

export default Footer;
