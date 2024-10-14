export interface IRanking {
    id: string;
    squadra: string;
    punti: number;
    partiteGiocate: number;
    partiteVinte: number;
    setVinti: number;
    setPersi: number;
    quozienteSet: number | string;
    quozientePunti: number;
    penalità: number;
}
