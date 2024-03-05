import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    it('renders Sidebar correctly', () => {
        render(
            <Router>
                <Sidebar />
            </Router>
        );

        const openSidebarButton = screen.getByRole('button', { name: 'Open sidebar' });
        const sidebar = screen.getByLabelText('Sidebar');
        const cleanHubLink = screen.getByRole('link', { name: 'Clean Hub' });
        const hubDetailsLink = screen.getByRole('link', { name: 'Hubs' });


        fireEvent.click(openSidebarButton);

        fireEvent.click(cleanHubLink);


        fireEvent.click(hubDetailsLink);


        fireEvent.click(openSidebarButton);

    });

    it('navigates to hub  route when link is clicked', () => {
        render(
            <Router>
                <Routes>
                    <Route path="/hubs">Hub Content</Route>
                </Routes>
                <Sidebar />
            </Router>
        );

        const openSidebarButton = screen.getByRole('button', { name: 'Open sidebar' });
        const cleanHubLink = screen.getByRole('link', { name: 'Clean Hub' });

        fireEvent.click(openSidebarButton);

        fireEvent.click(cleanHubLink);

        expect(screen.getByText('Hubs')).toBeInTheDocument();
    });


});
