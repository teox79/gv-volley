import React from 'react';
import { useAppContext } from '../state/AppContext';
import { getItemById } from '../utils/Utility';
import { IGymInfo } from '../types/Gyms';

interface IGymsProps {
    id: string;
}

const Gyms: React.FC<IGymsProps> = ({ id }) => {
    const { gyms } = useAppContext();

    const gym: IGymInfo = getItemById(gyms, id)!;

    return (
        <>
            <div className="map">
                <iframe src={gym.mapIframeUrl}
                    height="500" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <section className="contact-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-info">
                                <h2>{gym.name}</h2>
                                <p>
                                    {gym.description}
                                </p>
                                {gym.trainingSchedule.length > 0 && (
                                    <div className="ci-address">
                                        <h5>Giorni e orario allenamenti</h5>
                                        <ul>
                                            {gym.trainingSchedule.map((training, index) => (
                                                <li>{training.day} dalle {training.timeStart} alle {training.timeEnd}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gyms;
