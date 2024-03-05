import React from 'react';
import { render, act, screen, waitFor } from '@testing-library/react';
import { DataProvider, DataContext } from '../DataContext';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('DataProvider', () => {
    test('fetches data and sets state correctly', async () => {
        const mockData = [
        ];

        global.fetch = jest.fn().mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(mockData),
        });

        const navigateMock = jest.fn();

        await act(async () => {
            render(
                <DataContext.Provider value={{ navigate: navigateMock }}>
                    <DataProvider>
                        <div>Child Component</div>
                    </DataProvider>
                </DataContext.Provider>
            );
        });
        // Advance timers by 400ms

        act(() => {
            jest.advanceTimersByTime(400);
        });

        // Wait for the loading state to change
        await waitFor(() => {
            // Verify that the API URL is called
            expect(fetch).toHaveBeenCalledWith(expect.stringContaining('http://localhost:3000/api/'));
        });

        // Wait for the API call to complete and check if the data is rendered
        expect(await screen.findByText('Child Component')).toBeInTheDocument();
    });

});
