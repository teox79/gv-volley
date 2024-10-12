export interface IGymInfo {
    id: string;
    name: string;
    description: string;
    trainingSchedule: ITrainingSchedule[];
    mapIframeUrl: string;
}

export interface ITrainingSchedule {
    day: string;
    timeStart: string;
    timeEnd: string;
}
