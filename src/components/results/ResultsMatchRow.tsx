import React from 'react';
import { IMatch } from '../../types/CalendarType';

interface MatchRowProps {
  match: IMatch
}

// Supponiamo che 'match' sia un oggetto con questi campi: { address, date, result: { homeTeamScore, awayTeamScore } }
const ResultsMatchRow: React.FC<MatchRowProps> = ({ match }) => {
  const currentDate = new Date();
  const matchDate = new Date(match.date);

  // Controlliamo se la partita deve ancora essere giocata o se il risultato è 0 - 0
  const isUpcoming = matchDate > currentDate;
  const isNoResult = match.result.homeTeamScore === 0 && match.result.awayTeamScore === 0;

  const displayMessage =
    isUpcoming || isNoResult
      ? "In programma"
      : `${match.result.homeTeamScore} - ${match.result.awayTeamScore}`;

  return (
    <td className="st-option">
      <div className="so-text">{match.address}</div>
      {match.toBeRescheduled ? (<h4>da recuperare</h4>) : (<h4>{displayMessage}</h4>)}
      <div className="so-text">{match.date}</div>
    </td>
  );
};

export default ResultsMatchRow;
