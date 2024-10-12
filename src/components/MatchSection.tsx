import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import '../assets/css/MatchSection.css';
import { useAppContext } from '../state/AppContext';
import { getTeamFlag } from '../utils/Utility';
import { IMatch } from '../types/CalendarType';


interface MatchSectionProps {
    nextMatches: IMatch[];
    recentResults: IMatch[];
}

const MatchSection: React.FC<MatchSectionProps> = ({ nextMatches, recentResults }) => {
    const { teams } = useAppContext();
    return (
        <section className="match-section">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="ms-content">
                            <h4>Prossime Partite</h4>
                            {nextMatches.map((match, index) => (
                                <div className="mc-table" key={index}>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td className="left-team">
                                                    <img src={getTeamFlag(match.homeTeamId, teams)} alt={match.homeTeam} />
                                                    <h6>{match.homeTeam}</h6>
                                                </td>
                                                <td className="mt-content">
                                                    <div className="mc-op">{match.date}</div>
                                                    <h4>VS</h4>
                                                    <div className="mc-op">{match.time}</div>
                                                </td>
                                                <td className="right-team">
                                                    <img src={getTeamFlag(match.awayTeamId, teams)} alt={match.awayTeam} />
                                                    <h6>{match.awayTeam}</h6>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="ms-content">
                            <h4>Risultati Recenti</h4>
                            {recentResults.map((match, index) => (
                                <div className="mc-table" key={index}>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td className="left-team">
                                                    <img src={getTeamFlag(match.homeTeamId, teams)} alt={match.homeTeam} />
                                                    <h6>{match.homeTeam}</h6>
                                                </td>
                                                <td className="mt-content">
                                                    <div className="mc-op">{match.date}</div>
                                                    <h4>{`${match.result.homeTeamScore} - ${match.result.awayTeamScore}`}</h4>
                                                    {match.toBeRescheduled ? (<div className="mc-op" style={{ color: "#dd1515", fontWeight: "bold", textTransform: "uppercase" }}>rinviata</div>) : (<div className="mc-op">{match.time}</div>)}

                                                </td>
                                                <td className="right-team">
                                                    <img src={getTeamFlag(match.awayTeamId, teams)} alt={match.awayTeam} />
                                                    <h6>{match.awayTeam}</h6>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MatchSection;
