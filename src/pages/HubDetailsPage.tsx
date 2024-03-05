import React, { useEffect, useState } from 'react';
import HubList from '../components/HubList/HubList'
import FilterBar from '../components/FilterBar/FilterBar';
import { useData } from '../context/DataContext';
import CardLoader from '../components/UI/CardLoader/CardLoader';
import HubSelectionPanel from '../components/HubSelectionPanel/HubSelectionPanel';

const HubDetailsPage: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { isLoading, collectionHubs } = useData();


    useEffect(() => {
        const handleScroll = () => {
            // Add shadow class when scrolled
            setIsScrolled(window.scrollY > 0);
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="flex-1  min-[745px]:ml-64 max-[492px]:p-0">
                <div className={`sticky top-0 bg-white z-10 ${isScrolled ? 'shadow-md' : ''}`}>
                    <div className="max-[492px]:pt-2 max-[492px]:pb-2 p-6 pt-6 pb-6 font-bold text-xl">
                        Hub Details
                    </div>

                    <div className='pl-8 pr-8 pb-2 max-[492px]:p-3'>
                        <FilterBar />
                    </div>

                </div>

                <div className="p-8 pt-4 max-[492px]:p-2">
                    <div className='flex flex-col gap-2'>

                        <HubSelectionPanel />

                        <div className="grid gap-4 mb-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">

                            {isLoading && Array(6).fill(null).map((_, index) => <CardLoader key={index} isLoading={true} />)}
                            {!isLoading && <HubList />}
                        </div>

                        {!isLoading && !collectionHubs.length && <div className='flex items-center justify-center'>
                            <img className='object-cover h-500' src="/images/no-data.jpg" alt="no-data" />
                        </div>}
                    </div>
                </div>
            </div>

        </>
    );
};

export default HubDetailsPage;
