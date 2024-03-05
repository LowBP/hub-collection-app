import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ParentHub, flexibleSort, preprocessAndGenerateParentChildHubLists } from './utils';
import { HUB_STATE, Hub, SORT, Sort } from '../types/Hub';
import { useNavigate } from 'react-router-dom';

interface DataContextType {
    collectionHubs: Hub[];
    onApplySort: (sortBy: string, sortOrder: Sort) => void
    parentChildHubs: ParentHub[]
    isLoading: boolean;
    setSearchName: React.Dispatch<React.SetStateAction<string>>
    setParentChildHubs: React.Dispatch<React.SetStateAction<ParentHub[]>>
    performActionsAfterParentHubToggle: () => void
    setAssignableState: React.Dispatch<React.SetStateAction<string>>
    setHubState: React.Dispatch<React.SetStateAction<HUB_STATE | ''>>
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/';
    const navigate = useNavigate();


    const [parentChildHubs, setParentChildHubs] = useState<ParentHub[]>([]);
    const [collectionHubs, setCollectionHubs] = useState<Hub[]>([]);
    // loading state
    const [isLoading, setLoading] = useState(true);

    // filter
    const [searchName, setSearchName] = useState('');

    // sort
    const [sortKey, setSortKey] = useState('');
    const [sortOrder, setSortOrder] = useState<Sort>('');

    // boolean filter
    const [assignable, setAssignableState] = useState('');

    // hub state filter
    const [hubState, setHubState] = useState<HUB_STATE | ''>('');


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
                // redirect to error page
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

    const assignAllHubsAtInitialLoad = (parentChildHubs: ParentHub[]) => {
        parentChildHubs.forEach(parentChildHub => {
            setCollectionHubs(prev => [...prev, ...parentChildHub.children])
        });
    }

    const resetCollectionHubs = () => {
        setCollectionHubs([])
        parentChildHubs.forEach(parentChildHub => {
            if (parentChildHub.isSelected)
                setCollectionHubs([...parentChildHub.children])
        });
    }

    // sort action
    const onApplySort = (sortBy: string, sortOrder: Sort) => {
        // set sort key and sort order value
        setSortOrder(sortOrder);
        setSortKey(sortBy);
    }

    useEffect(() => {
        resetCollectionHubs();
        allMenuBarActions();
    }, [sortOrder])


    // parent hub toggle action
    const performActionsAfterParentHubToggle = () => {
        resetCollectionHubs();
        allMenuBarActions();
    }

    // search name action
    useEffect(() => {
        resetCollectionHubs();
        allMenuBarActions();
    }, [searchName])

    // filter assignable 
    useEffect(() => {
        resetCollectionHubs();
        allMenuBarActions();
    }, [assignable])


    // filter hub state 
    useEffect(() => {
        resetCollectionHubs();
        allMenuBarActions();
    }, [hubState])

    const allMenuBarActions = () => {
        switch (sortOrder) {
            case SORT.ASC:
                setCollectionHubs((prev) => [...prev.sort(flexibleSort<Hub>(sortKey as keyof Hub, sortOrder))])
                break;
            case SORT.DESC:
                setCollectionHubs((prev) => [...prev.sort(flexibleSort<Hub>(sortKey as keyof Hub, sortOrder))])
                break;
            default:
                resetCollectionHubs();
                break;
        }

        findMatchingNames();
        findAssignableHubs();
        findHubStates();
    }

    const findMatchingNames = () => {
        const searchKey = searchName?.trim()?.toLowerCase()
        if (searchName.trim()) {
            setCollectionHubs((prev) => prev.filter(hub => hub.displayName?.toLowerCase()?.includes(searchKey)))
        }
    }

    const findAssignableHubs = () => {
        if (assignable === 'true' || assignable === 'false') {
            const isAssignable = assignable === 'true' ? true : false
            setCollectionHubs((prev) => prev.filter(hub => hub.assignable === isAssignable))
        }
    }

    const findHubStates = () => {
        if (hubState) {
            setCollectionHubs((prev) => prev.filter(hub => hub.state === hubState))
        }
    }

    return (
        <DataContext.Provider value={{ collectionHubs, onApplySort, parentChildHubs, isLoading, setSearchName, setParentChildHubs, performActionsAfterParentHubToggle, setAssignableState, setHubState }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

export { DataContext }