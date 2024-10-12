import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Define an interface for the soccer item
interface SoccerItem {
    title: string;
    date: string;
    comments: number;
    image: string;
}

const SoccerSection: React.FC = () => {
    // Use the SoccerItem interface to type the soccerItems array
    const soccerItems: SoccerItem[] = [
        { title: "Counting Your Chicken Before They Hatch", date: "May 19, 2019", comments: 3, image: "img/soccer/soccer-1.jpg" },
        { title: "Hypnotherapy For Motivation Getting The Drive Back", date: "May 19, 2019", comments: 3, image: "img/soccer/soccer-2.jpg" },
        { title: "Astronomy Binoculars A Great Alternative", date: "May 19, 2019", comments: 3, image: "img/soccer/soccer-3.jpg" },
        { title: "Decorate For Less With Art Posters", date: "May 19, 2019", comments: 3, image: "img/soccer/soccer-4.jpg" },
    ];

    return (
        <section className="soccer-section">
            <Container>
                <Row>
                    <Col lg={12} className="p-0">
                        <div className="section-title">
                            <h3>Soccer <span>Feed</span></h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {soccerItems.map((item, index) => (
                        <Col lg={3} sm={6} className="p-0" key={index}>
                            <div className="soccer-item set-bg" style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="si-tag">Soccer</div>
                                <div className="si-text">
                                    <h5><a href="#">{item.title}</a></h5>
                                    <ul>
                                        <li><i className="fa fa-calendar"></i> {item.date}</li>
                                        <li><i className="fa fa-edit"></i> {item.comments} Comment</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default SoccerSection;
