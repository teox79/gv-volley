import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../assets/css/heroSection.css';
import { IMatch } from '../../types/CalendarType';

interface HeroSectionProps {
    nextMatches: IMatch[];
}

const haveSameDate = (match1: IMatch, match2: IMatch) => {
    return match1.date === match2.date;
}

const HeroSection: React.FC<HeroSectionProps> = ({ nextMatches }) => {

    const isSameDay = nextMatches.length === 2 ? haveSameDate(nextMatches[0], nextMatches[1]) : false;
    const matches = isSameDay ? nextMatches : nextMatches.slice(0, 1);


    return (
        <section className="hero-section" style={{ backgroundImage: `url(img/hero/hero-3.png)` }}>
            <Container style={{ zIndex: 1 }}>
                <Row>
                    <Col lg={12}>
                        <div className="hs-item">
                            <Container>
                                <Row>
                                    {matches.map((match, index) => (
                                        <Col lg={12} style={{ marginTop: "10px" }} key={`hero_${index}`}>
                                            <div className="hs-text">
                                                <h4>{match.date}</h4>
                                                <h2 className='responsive-heading'>{match.homeTeam} <span style={{ color: "red" }} > VS</span> {match.awayTeam}</h2>
                                                < Button href={''} className="primary-btn" style={{ display: "none" }}>
                                                    Info
                                                </Button>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section >
    );
};

export default HeroSection;
