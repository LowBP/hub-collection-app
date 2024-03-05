// Import necessary modules and utilities
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ParentHub, flexibleSort, preprocessAndGenerateParentChildHubLists } from './utils';
import { HUB_STATE, Hub, SORT, Sort } from '../types/Hub';
import { useNavigate } from 'react-router-dom';

// Define the shape of the data context
interface DataContextType {
    collectionHubs: Hub[];
    onApplySort: (sortBy: string, sortOrder: Sort) => void;
    parentChildHubs: ParentHub[];
    isLoading: boolean;
    setSearchName: React.Dispatch<React.SetStateAction<string>>;
    setParentChildHubs: React.Dispatch<React.SetStateAction<ParentHub[]>>;
    performActionsAfterParentHubToggle: () => void;
    setAssignableState: React.Dispatch<React.SetStateAction<string>>;
    setHubState: React.Dispatch<React.SetStateAction<HUB_STATE | ''>>;
}

// Create a context for sharing data across components
const DataContext = createContext<DataContextType | undefined>(undefined);

// Define props for the data provider component
interface DataProviderProps {
    children: ReactNode;
}

// DataProvider component
export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    // Define API URL and router navigation hook
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/';
    const navigate = useNavigate();

    // State variables for managing data
    const [parentChildHubs, setParentChildHubs] = useState<ParentHub[]>([]);
    const [collectionHubs, setCollectionHubs] = useState<Hub[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [searchName, setSearchName] = useState('');
    const [sortKey, setSortKey] = useState('');
    const [sortOrder, setSortOrder] = useState<Sort>('');
    const [assignable, setAssignableState] = useState('');
    const [hubState, setHubState] = useState<HUB_STATE | ''>('');

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                const preprocessedParentChildHubs = preprocessAndGenerateParentChildHubLists(data)

                setParentChildHubs(preprocessedParentChildHubs);
                assignAllHubsAtInitialLoad(preprocessedParentChildHubs);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Redirect to error page if there's an error fetching data
                navigate('/error-page');
            } finally {
                setLoading(false);
            }
        };

        // Fetch data after a delay
        const timeoutId = setTimeout(() => {
            fetchData();
        }, 400);

        // Clean up timeout if component unmounts before the timeout
        return () => clearTimeout(timeoutId);
    }, []);

    // Assign all hubs at initial load
    const assignAllHubsAtInitialLoad = (parentChildHubs: ParentHub[]) => {
        parentChildHubs.forEach(parentChildHub => {
            setCollectionHubs(prev => [...prev, ...parentChildHub.children])
        });
    }

    // Reset collection hubs based on filters
    const resetCollectionHubs = () => {
        setCollectionHubs([])
        parentChildHubs.forEach(parentChildHub => {
            if (parentChildHub.isSelected)
                setCollectionHubs([...parentChildHub.children])
        });
    }

    // Apply sort action
    const onApplySort = (sortBy: string, sortOrder: Sort) => {
        setSortOrder(sortOrder);
        setSortKey(sortBy);
    }

    // Effect to reset collection hubs and perform actions based on sort order
    useEffect(() => {
        resetCollectionHubs();
        allMenuBarActions();
    }, [sortOrder])

    // parent hub toggle action
    const performActionsAfterParentHubToggle = () => {
        resetCollectionHubs();
        allMenuBarActions();
    }
    // Effect to reset collection hubs and perform actions based on search name
    useEffect(() => {
        resetCollectionHubs();
        allMenuBarActions();
    }, [searchName])

    // Effect to reset collection hubs and perform actions based on assignable filter
    useEffect(() => {
        resetCollectionHubs();
        allMenuBarActions();
    }, [assignable])

    // Effect to reset collection hubs and perform actions based on hub state filter
    useEffect(() => {
        resetCollectionHubs();
        allMenuBarActions();
    }, [hubState])

    // Perform all menu bar actions including sorting and filtering
    const allMenuBarActions = () => {
        switch (sortOrder) {
            case SORT.ASC:
            case SORT.DESC:
                setCollectionHubs((prev) => [...prev.sort(flexibleSort<Hub>(sortKey as keyof Hub, sortOrder))]);
                break;
            default:
                resetCollectionHubs();
                break;
        }

        findMatchingNames();
        findAssignableHubs();
        findHubStates();
    }

    // Filter collection hubs based on search name
    const findMatchingNames = () => {
        const searchKey = searchName?.trim()?.toLowerCase()
        if (searchName.trim()) {
            setCollectionHubs((prev) => prev.filter(hub => hub.displayName?.toLowerCase()?.includes(searchKey)))
        }
    }

    // Filter collection hubs based on assignable filter
    const findAssignableHubs = () => {
        if (assignable === 'true' || assignable === 'false') {
            const isAssignable = assignable === 'true' ? true : false
            setCollectionHubs((prev) => prev.filter(hub => hub.assignable === isAssignable))
        }
    }

    // Filter collection hubs based on hub state filter
    const findHubStates = () => {
        if (hubState) {
            setCollectionHubs((prev) => prev.filter(hub => hub.state === hubState))
        }
    }

    // Provide data context to children components
    return (
        <DataContext.Provider value={{ collectionHubs, onApplySort, parentChildHubs, isLoading, setSearchName, setParentChildHubs, performActionsAfterParentHubToggle, setAssignableState, setHubState }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook to use data context
export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

// Export DataContext for external use
export { DataContext }
