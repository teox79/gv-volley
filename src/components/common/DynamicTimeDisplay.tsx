import React, { useEffect, useState } from 'react';

const DynamicTimeDisplay: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>('');

    const formatCurrentDateTime = (): string => {
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const monthNames = [
            "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
            "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
        ];
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();

        return `${hours}:${minutes} - ${day} ${month} ${year}`;
    };

    useEffect(() => {
        // Funzione per aggiornare l'ora
        const updateTime = () => {
            setCurrentTime(formatCurrentDateTime());
        };

        // Aggiorna l'ora immediatamente all'inizio
        updateTime();

        // Imposta un intervallo per aggiornare ogni minuto
        const intervalId = setInterval(updateTime, 60000);

        // Pulisci l'intervallo quando il componente viene smontato
        return () => clearInterval(intervalId);
    }, []);

    return (
        <span>{currentTime}</span>
    );
};

export default DynamicTimeDisplay;
