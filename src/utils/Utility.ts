import { IMatch } from "../types/CalendarType";
import { INewsItem, INewsItemsByMonth } from "../types/News";
import { IRanking } from "../types/RankingType";
import { ITeam } from "../types/TeamsType";

// Funzione per ottenere la bandiera della squadra in base all'ID
export const getTeamFlag = (teamId: string, teams: ITeam[]) => {
    const team = teams.find((t: { id: string; flag: string }) => t.id === teamId);
    return team ? team.flag : '';
};

export const getNextMatchesForTeams = (calendarData: IMatch[], teamIds: string[]): IMatch[] => {
    const today = new Date();

    // Funzione che filtra e restituisce la prossima partita per una singola squadra
    const getNextMatchForTeam = (teamId: string) => {
        // Filtra le partite che coinvolgono la squadra specificata
        const filteredMatches = calendarData.filter(match =>
            match.homeTeamId === teamId || match.awayTeamId === teamId
        );

        // Ordina le partite per data
        const sortedMatches = filteredMatches.sort((a, b) => {
            const dateA = new Date(a.date.split('/').reverse().join('/')); // "DD/MM/YYYY" -> "YYYY/MM/DD"
            const dateB = new Date(b.date.split('/').reverse().join('/'));
            return dateA.getTime() - dateB.getTime();
        });

        // Trova la prima partita futura per questa squadra
        return sortedMatches.find(match => {
            const matchDate = new Date(match.date.split('/').reverse().join('/'));
            return matchDate >= today;
        });
    };

    // Mappa l'array degli ID delle squadre per ottenere la prossima partita per ognuna
    const nextMatches = teamIds.map(getNextMatchForTeam).filter(match => match !== undefined) as IMatch[];

    // Ordina le partite per data
    return nextMatches.sort((a, b) => {
        const dateA = new Date(a.date.split('/').reverse().join('/'));
        const dateB = new Date(b.date.split('/').reverse().join('/'));
        return dateA.getTime() - dateB.getTime();
    });
};

export const getLastMatchesForTeams = (matches: IMatch[], teamIds: string[], count: number): IMatch[] => {
    const today = new Date();

    // Funzione per convertire la data nel formato GG/MM/YYYY in un oggetto Date
    const parseDate = (dateString: string): Date => {
        const [day, month, year] = dateString.split('/').map(Number);
        return new Date(year, month - 1, day); // Mese in JavaScript è 0-indexed
    };

    // Filtra le partite giocate fino a oggi per le squadre specificate
    const filteredMatches = matches.filter(match =>
        (teamIds.includes(match.homeTeamId) || teamIds.includes(match.awayTeamId)) &&
        parseDate(match.date) <= today // Considera le partite fino a oggi
    );

    // Se non ci sono partite giocate fino a oggi, restituisci un array vuoto
    if (filteredMatches.length === 0) {
        return [];
    }

    // Ordina le partite per data (dalla più lontana alla più recente)
    filteredMatches.sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());

    // Restituisce le ultime 'count' partite
    return filteredMatches.slice(0, count);
};


export const getCurrentMonthNews = (newsItems: INewsItemsByMonth): INewsItem[] => {
    const today = new Date();
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0'); // Mese corrente (01, 02, ..., 12)
    const currentYear = String(today.getFullYear()); // Anno corrente

    // Chiave per l'oggetto newsItems (formato MMYYYY)
    const currentKey = `${currentMonth}${currentYear}`;

    const monthNews = newsItems[currentKey] || [];

    // Filtriamo le news future o al di fuori del mese
    return monthNews.filter(newsItem => {
        const [day, month, year] = newsItem.date.split("/").map(Number);
        const newsDate = new Date(year, month - 1, day);
        return newsDate >= today;
    });
}

export const getMonthNameFromDate = (dateStr?: string): string => {
    let date: Date;

    if (dateStr) {
        // Se viene fornita una stringa di data, la utilizziamo
        const [day, month, year] = dateStr.split('/').map(Number);
        date = new Date(year, month - 1, day);
    } else {
        // Se non viene fornita una data, utilizziamo la data corrente
        date = new Date();
    }

    // Array di nomi dei mesi in italiano
    const monthNames = [
        "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
        "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
    ];

    return monthNames[date.getMonth()]; // Restituisce il nome del mese
};

export const getItemById = <T extends { id: string }>(items: T[], id: string): T | undefined => {
    return items.find(item => item.id === id);
};

export const sortMatchesByDate = (matches: IMatch[], order: 'asc' | 'desc' = 'asc'): IMatch[] => {
    return matches.sort((a, b) => {
        const dateA = new Date(a.date.split('/').reverse().join('-')).getTime();
        const dateB = new Date(b.date.split('/').reverse().join('-')).getTime();

        if (order === 'asc') {
            return dateA - dateB;
        } else {
            return dateB - dateA;
        }
    });
};

export const filtersForTeams = (matches: IMatch[], teamIds: string[],): IMatch[] => {
    const filteredMatches = matches.filter(match =>
        (teamIds.includes(match.homeTeamId) || teamIds.includes(match.awayTeamId))
    );

    // Se non ci sono partite giocate fino a oggi, restituisci un array vuoto
    if (filteredMatches.length === 0) {
        return [];
    }

    return filteredMatches
};


export const sortRankingData = (data: IRanking[]) => {
    return data.sort((a, b) => {
        // Ordina per Partite Giocate (decrescente)
        if (b.partiteGiocate !== a.partiteGiocate) {
            return b.partiteGiocate - a.partiteGiocate;
        }
        // Ordina per Punti (decrescente)
        if (b.punti !== a.punti) {
            return b.punti - a.punti;
        }
        // Ordina per Partite Vinte (decrescente)
        if (b.partiteVinte !== a.partiteVinte) {
            return b.partiteVinte - a.partiteVinte;
        }
        // Ordina per Set Vinti (decrescente)
        if (b.setVinti !== a.setVinti) {
            return b.setVinti - a.setVinti;
        }
        // Ordina per Set Persi (decrescente)
        return b.setPersi - a.setPersi;
    });
};