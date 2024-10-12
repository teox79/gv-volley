import React from "react";
import { useAppContext } from "../state/AppContext";
import { filtersForTeams, getTeamFlag, sortMatchesByDate } from "../utils/Utility";
import ResultsMatchRow from "../components/results/ResultsMatchRow";
import classNames from 'classnames';


const Results: React.FC = () => {

    const { matches, teams } = useAppContext();
    const teamIds = ["PVI-A01", "PVI-M02"];
    const matchesSorted = sortMatchesByDate(matches, 'asc');
    const filteredMatches = filtersForTeams(matchesSorted, teamIds);

    return (
        <>
            {/* Breadcrumb Section Begin */}
            <section
                className="breadcrumb-section set-bg"
                style={{ backgroundImage: `url('img/breadcrumb-bg-results.png')` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-text">
                                <h2>Risultati</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}

            {/* Results Section Begin */}
            <section className="schedule-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 left-blog-pad">
                            <div className="schedule-text">
                                <h4 className="st-title">Campionato invernale</h4>
                                <div className="st-table">
                                    <table className="table results">
                                        <tbody>
                                            {/* Matches */}
                                            {filteredMatches.map((match, index) => {
                                                const classNameTr = classNames({ toBeRescheduled: match.toBeRescheduled });
                                                return (
                                                    <tr key={index} className={classNameTr}>
                                                        <td className="left-team">
                                                            <img
                                                                src={getTeamFlag(match.homeTeamId, teams)}
                                                                alt={match.homeTeam}
                                                            />
                                                            <h4>{match.homeTeam}</h4>
                                                        </td>
                                                        <ResultsMatchRow match={match} />
                                                        <td className="right-team">
                                                            <img
                                                                src={getTeamFlag(match.awayTeamId, teams)}
                                                                alt={match.homeTeam}
                                                            />
                                                            <h4>{match.awayTeam}</h4>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Results Section End */}
        </>
    );
};

export default Results;