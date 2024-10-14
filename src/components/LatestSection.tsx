import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useAppContext } from '../state/AppContext';
import { getTeamFlag } from '../utils/Utility';


const LatestSection: React.FC = () => {
    const { teams, ranking, ui } = useAppContext();
    const [activeTab, setActiveTab] = useState('Invernale');
    const currentRanking = activeTab === 'Invernale' ? ranking : [];

    return (
        <section className="latest-section">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="section-title">
                            <h3>Classifica <span>{activeTab}</span></h3>
                            <ul>
                                <li onClick={() => setActiveTab('Invernale')} className={activeTab === 'Invernale' ? 'active' : ''}>
                                    Invernale
                                </li>
                                <li onClick={() => setActiveTab('Primaverile')} className={activeTab === 'Primaverile' ? 'active' : ''}>
                                    Primaverile
                                </li>
                            </ul>
                        </div>
                        <div className="points-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="th-o">Pos</th>
                                        <th>Team</th>
                                        <th className="th-o">Punti</th>
                                        <th className="th-o th-o d-none d-lg-table-cell">Partite giocate</th>
                                        <th className="th-o th-o d-none d-lg-table-cell">Partite vinte</th>
                                        <th className="th-o d-none d-lg-table-cell">Set vinti</th>
                                        <th className="th-o d-none d-lg-table-cell">Set persi</th>
                                        <th className="th-o d-none d-lg-table-cell">Quoziente set</th>
                                        <th className="th-o d-none d-lg-table-cell">Quoziente punti</th>
                                        <th className="th-o d-none d-lg-table-cell">Penalità</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRanking.map((team, index) => (
                                        <tr key={team.id}>
                                            {/* Posizione */}
                                            <td>{index + 1}</td>

                                            {/* Nome della squadra e immagine */}
                                            <td className="team-name">
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <img src={`${ui.globalUi.baseUrl}${getTeamFlag(team.id, teams)}`} alt={team.squadra} style={{ width: '40px', marginRight: '10px' }} />
                                                    <span>{team.squadra}</span>
                                                </div>
                                            </td>

                                            {/* Dati classifica */}
                                            <td>{team.punti}</td>
                                            <td className="d-none d-lg-table-cell">{team.partiteGiocate}</td>
                                            <td className="d-none d-lg-table-cell">{team.partiteVinte}</td>
                                            <td className="d-none d-lg-table-cell">{team.setVinti}</td>
                                            <td className="d-none d-lg-table-cell">{team.setPersi}</td>
                                            <td className="d-none d-lg-table-cell">{team.quozienteSet.toFixed(2)}</td>
                                            <td className="d-none d-lg-table-cell">{team.quozientePunti.toFixed(2)}</td>
                                            <td className="d-none d-lg-table-cell">{team.penalità}</td>
                                        </tr>
                                    ))}
                                    {currentRanking && currentRanking.length === 0 && (
                                        <tr>
                                            <td colSpan={10}>Campionato non ancora disputato</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>


                            {/*<a href="#" className="p-all">View All</a>*/}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default LatestSection;
