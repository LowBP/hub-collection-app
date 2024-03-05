import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HubSelectionPanel from './HubSelectionPanel';
import { DataProvider } from '../../context/DataContext';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('HubSelectionPanel', () => {
    test('renders component properly', async () => {
        // Mocking the DataContextProvider
        jest.mock('../../context/DataContext', () => ({
            useData: () => ({
                parentChildHubs: [
                    { name: 'Hub 1', isSelected: true },
                    { name: 'Hub 2', isSelected: true }
                ],
                setParentChildHubs: jest.fn(),
                performActionsAfterParentHubToggle: jest.fn(),
                isLoading: false
            })
        }));

        global.fetch = jest.fn().mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce([
                { name: 'Hub 1', isSelected: true },
                { name: 'Hub 2', isSelected: true }
            ]),
        });


        const { getByText } = render(
            <DataProvider>
                <HubSelectionPanel />
            </DataProvider>
        );
        act(() => {
            jest.advanceTimersByTime(400);
        });
        await waitFor(() => {
            expect(getByText('Hub 1')).toBeInTheDocument();
            expect(getByText('Hub 2')).toBeInTheDocument();
        });
    });

    test('selects all hubs', async () => {

        // Mocking the DataContextProvider
        jest.mock('../../context/DataContext', () => ({
            useData: () => ({
                parentChildHubs: [
                    { name: 'Hub 1', isSelected: true },
                    { name: 'Hub 2', isSelected: true }
                ],
                setParentChildHubs: jest.fn(),
                performActionsAfterParentHubToggle: jest.fn(),
                isLoading: false
            })
        }));

        global.fetch = jest.fn().mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce([
                { name: 'Hub 1', isSelected: true },
                { name: 'Hub 2', isSelected: true }
            ]),
        });


        const { getByText, getByTestId } = render(
            <DataProvider>
                <HubSelectionPanel />
            </DataProvider>
        );
        act(() => {
            jest.advanceTimersByTime(400);
        });
        await waitFor(async () => {
            await fireEvent.click(getByTestId('hub-checkbox-0'));
            expect(getByTestId('hub-checkbox-0')).toBeChecked();
        });

    });

    test('renders loading skeleton when isLoading is true', async () => {

        // Mocking the DataContextProvider
        jest.mock('../../context/DataContext', () => ({
            useData: () => ({
                parentChildHubs: [
                    { name: 'Hub 1', isSelected: true },
                    { name: 'Hub 2', isSelected: true }
                ],
                setParentChildHubs: jest.fn(),
                performActionsAfterParentHubToggle: jest.fn(),
                isLoading: false
            })
        }));

        global.fetch = jest.fn().mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce([
                { name: 'Hub 1', isSelected: true },
                { name: 'Hub 2', isSelected: true }
            ]),
        });


        const { getByTestId } = render(
            <DataProvider>
                <HubSelectionPanel />
            </DataProvider>
        );
        const loadingSkeleton = getByTestId('loading-skeleton');
        expect(loadingSkeleton).toBeInTheDocument();

    });
});
