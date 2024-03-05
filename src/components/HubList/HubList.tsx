import React from 'react';
import { useData } from '../../context/DataContext';
import HubCard from '../HubCard/HubCard';

const HubList: React.FC = () => {
    const { collectionHubs } = useData();

    return (
        <>
            {collectionHubs.map((hub, index) => <HubCard hub={hub} key={index} />)}
        </>
    );
};

export default HubList;
