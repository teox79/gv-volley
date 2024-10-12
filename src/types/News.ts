export interface INewsItem {
    date: string; // Formato: GG/MM/YYYY
    description: string;
}

export interface INewsItemsByMonth {
    [key: string]: INewsItem[]; // Chiave: MeseAnno, Valore: Array di INewsItem
}
