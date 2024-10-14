import { useAppContext } from "../state/AppContext";
import { IMatch } from "../types/CalendarType";
import { filtersForTeams, getTeamFlag, sortMatchesByDate } from "../utils/Utility";
import classNames from 'classnames';

const Calendar: React.FC = () => {
    const { matches, teams, ui } = useAppContext();

    const matchesSorted = sortMatchesByDate(matches, 'asc');
    const teamIds = ["PVI-A01", "PVI-M02"];
    const matchesFiltered = filtersForTeams(matchesSorted, teamIds);


    return (
        <section className="schedule-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="schedule-text">
                            <h4 className="st-title">Calendario Partite</h4>
                            <div className="st-table">
                                <table className="calendar">
                                    <tbody>
                                        {matchesFiltered.map((match: IMatch, index: number) => {
                                            const classNameTr = classNames({ toBeRescheduled: match.toBeRescheduled });
                                            return (
                                                <tr key={index} className={classNameTr}>
                                                    <td className="left-team">
                                                        {/* Bandiere e nome della squadra di casa */}
                                                        <img
                                                            src={`${ui.globalUi.baseUrl}${getTeamFlag(match.homeTeamId, teams)}`} // Bandiera della squadra di casa
                                                            alt={match.homeTeam}
                                                        />
                                                        <h4>{match.homeTeam}</h4>
                                                    </td>
                                                    <td className="st-option">
                                                        <div className="so-text">{match.address}</div>
                                                        <h4>VS</h4>
                                                        {match.toBeRescheduled ? (
                                                            <div className="so-text" style={{ color: "#dd1515", textTransform: 'uppercase', fontWeight: 'bold' }}>Da recuperare</div>
                                                        ) : (
                                                            <div className="so-text">
                                                                {match.date} {match.time}
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className="right-team">
                                                        {/* Bandiere e nome della squadra ospite */}
                                                        <img
                                                            src={`${ui.globalUi.baseUrl}${getTeamFlag(match.awayTeamId, teams)}`} // Bandiera della squadra ospite
                                                            alt={match.awayTeam}
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
    );
};

export default Calendar;
