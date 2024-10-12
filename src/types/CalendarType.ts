export interface IMatch {
    matchday: number;
    matchNumber: string;
    date: string;
    time: string;
    homeTeam: string;
    awayTeam: string;
    address: string;
    homeTeamId: string;
    awayTeamId: string;
    result: {
        homeTeamScore: number;
        awayTeamScore: number;
    }
    toBeRescheduled: boolean;
}
