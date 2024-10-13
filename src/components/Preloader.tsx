import React, { useState, useEffect } from 'react';
import '../assets/css/Preloader.css'; // Se hai bisogno di stili aggiuntivi
import { useAppContext } from '../state/AppContext';

const Preloader: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const { ui } = useAppContext();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Tempo di caricamento (in millisecondi)

        return () => clearTimeout(timer); // Pulisci il timer quando il componente viene smontato
    }, []);

    if (!loading) {
        return null; // Nascondi il preloader quando il caricamento è completo
    }

    /*
    return (
        <div id="preloader" className="preloader" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Spinner animation="border" role="status" variant="primary">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
    */

    return (
        <div id="preloader1" className="div-with-background">
            <img src={`${ui.globalUi.baseUrl}img/loader.png`} alt="Loading" className="loader-image" />
        </div>
    );
};

export default Preloader;
