import { IGymInfo } from "../types/Gyms";

export const gymsData: IGymInfo[] = [{
    id: "gym_001",
    name: "Palestra Presso Istituto IIS JEAN MONNET",
    description: "La palestra dell'IIS Jean Monnet offre uno spazio moderno e attrezzato per la pratica della pallavolo. Qui, studenti e atleti possono partecipare a allenamenti e competizioni, godendo di un ambiente sicuro e stimolante. La struttura è dotata di campi regolamentari e attrezzature adeguate, garantendo un'ottima esperienza sportiva per lo sviluppo delle abilità fisiche e il lavoro di squadra.",
    trainingSchedule: [
        {
            day: "Giovedì",
            timeStart: "17:00",
            timeEnd: "19:00"
        },
        {
            day: "Venerdì",
            timeStart: "17:00",
            timeEnd: "19:00"
        }
    ],
    mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22295.881806310303!2d9.159316328153075!3d45.69126849704419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bd4c71196083%3A0xc35e0329b6230ff2!2sIIS%20Jean%20Monnet!5e0!3m2!1sit!2sch!4v1728574417465!5m2!1sit!2sch"
},
{
    id: "gym_002",
    name: "Palestra presso la scuola Secondaria di 1° Grado Dante Alighieri",
    description: "La palestra presso la Scuola Secondaria di Primo Grado Dante Alighieri è uno spazio funzionale e ben attrezzato, dedicato alla pratica della pallavolo. Gli studenti hanno la possibilità di partecipare ad allenamenti e competizioni in un ambiente sicuro e stimolante. La struttura dispone di campi regolamentari e attrezzature moderne, ideali per favorire lo sviluppo delle abilità sportive e promuovere il lavoro di squadra.",
    trainingSchedule: [],
    mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.825459671606!2d9.176774777722672!3d45.69447462107886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786a2b3c25f3019%3A0x4f31bd98edf43e7f!2sScuola%20Secondaria%20di%201%C2%B0%20Grado%20%22Dante%20Alighieri%22!5e0!3m2!1sit!2sch!4v1728628239014!5m2!1sit!2sch"
},
{
    id: "gym_003",
    name: "Palestra presso la scuola secondaria di primo grado Salvo D’Acquisto",
    description: "La palestra presso la Scuola Secondaria di Primo Grado Salvo D'Acquisto è uno spazio moderno e ben attrezzato, ideale per la pratica della pallavolo. Qui, studenti e atleti possono allenarsi in un ambiente sicuro e stimolante, dotato di campi regolamentari e attrezzature di qualità. La palestra favorisce lo sviluppo delle abilità tecniche e il lavoro di squadra, rendendola un luogo perfetto per allenamenti e competizioni di pallavolo.",
    trainingSchedule: [
        {
            day: "Lunedì",
            timeStart: "17:00",
            timeEnd: "19:00"
        }
    ],
    mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11149.358776953168!2d9.199777041432625!3d45.684154537253235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bd259926092d%3A0x68ef2a2de25e5513!2sScuola%20secondaria%20di%20primo%20grado%20%E2%80%9CSalvo%20D%E2%80%99Acquisto%E2%80%9D!5e0!3m2!1sit!2sch!4v1728627902899!5m2!1sit!2sch"
}
];