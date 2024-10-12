import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IMatch } from '../types/CalendarType';
import { calendarData } from '../data/calendar';
import { ITeam } from '../types/TeamsType';
import { teamsData } from '../data/teams';
import { IRanking } from '../types/RankingType';
import { rankingData } from '../data/ranking';
import { INewsItemsByMonth } from '../types/News';
import { newsItemsData } from '../data/news';
import { IGymInfo } from '../types/Gyms';
import { gymsData } from '../data/gyms';

// Definisci il tipo per il contesto generale
interface AppContextType {
    matches: IMatch[];
    setMatches: React.Dispatch<React.SetStateAction<IMatch[]>>;
    teams: ITeam[];
    setTeams: React.Dispatch<React.SetStateAction<ITeam[]>>;
    ranking: IRanking[];
    setRanking: React.Dispatch<React.SetStateAction<IRanking[]>>;
    news: INewsItemsByMonth;
    setNews: React.Dispatch<React.SetStateAction<INewsItemsByMonth>>;
    gyms: IGymInfo[];
    setGyms: React.Dispatch<React.SetStateAction<IGymInfo[]>>;
}

// Crea il contesto con un valore di default
const AppContext = createContext<AppContextType | undefined>(undefined);

// Crea il provider del contesto
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [matches, setMatches] = useState<IMatch[]>(calendarData);
    const [teams, setTeams] = useState<ITeam[]>(teamsData);
    const [ranking, setRanking] = useState<IRanking[]>(rankingData);
    const [news, setNews] = useState<INewsItemsByMonth>(newsItemsData);
    const [gyms, setGyms] = useState<IGymInfo[]>(gymsData);

    return (
        <AppContext.Provider value={{ matches, setMatches, teams, setTeams, ranking, setRanking, news, setNews, gyms, setGyms }}>
            {children}
        </AppContext.Provider>
    );
};

// Hook per utilizzare il contesto
export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};