import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Page500 from './Page500';
import HubDetailsPage from './HubDetailsPage';
import { DataProvider } from '../context/DataContext';

const Home: React.FC = () => {
    return (
        <DataProvider>
            <Sidebar />
            <Routes>
                <Route path="/hubs" element={<HubDetailsPage />} />
                <Route path="/error-page" element={<Page500 />} />
                <Route path="*" element={<HubDetailsPage />} />
            </Routes>
        </DataProvider>
    );
};

export default Home;
