import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Calendar from '../pages/Calendar';
import Gyms from '../pages/Gyms';
import Results from '../pages/Results';


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/gyms/gym_001" element={<Gyms id="gym_001" />} />
            <Route path="/gyms/gym_002" element={<Gyms id="gym_002" />} />
            <Route path="/gyms/gym_003" element={<Gyms id="gym_003" />} />
            <Route path="/results" element={<Results />} />
        </Routes>
    );
};

export default AppRoutes;