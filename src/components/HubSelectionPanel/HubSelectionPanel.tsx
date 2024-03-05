import React from 'react';
import { useData } from '../../context/DataContext';
import { CloseIcon, OngoingIcon, PlusIcon, TickIcon } from '../UI/Icons';

const HubSelectionPanel: React.FC = () => {

    const { parentChildHubs, setParentChildHubs, performActionsAfterParentHubToggle } = useData();

    if (!parentChildHubs.length)
        return null;

    const isAllHubSelected = !parentChildHubs.some(hub => hub.isSelected === false)

    const updateHubState = (index: number) => {
        parentChildHubs[index].isSelected = !parentChildHubs[index].isSelected;
        setParentChildHubs([...parentChildHubs]);
        performActionsAfterParentHubToggle()
    }

    const selectAllParentHubs = () => {
        parentChildHubs.forEach(hub => {
            hub.isSelected = !isAllHubSelected;
        })
        setParentChildHubs([...parentChildHubs]);
        performActionsAfterParentHubToggle()

    }

    return (
        <div className='bg-neutral-50 p-2 mb-2'>

            <button className="mb-3 items-center bg-gray-50 text-light-black px-2 py-1 rounded transition-colors duration-300 hover:bg-gray-200 hover:text-black" onClick={selectAllParentHubs}>
                <input type="checkbox" name="select-all" id="" className='mr-2' checked={isAllHubSelected} />
                {isAllHubSelected ? 'Unselect All Hubs' : 'Select All Hubs'}
            </button>

            <div className="flex flex-wrap gap-2 ml-4">
                {parentChildHubs.map((parentChildHub, index) => (
                    <div key={index} className={`flex items-center text-md font-medium me-2 px-2.5 py-1 rounded border ${parentChildHub.isSelected ? parentChildHub.className : 'bg-gray-100 text-gray-800 border-gray-500'} `}>

                        <div className="mr-2" >
                            {parentChildHub.isSelected && <TickIcon />}
                            {!parentChildHub.isSelected && <OngoingIcon />}
                        </div>

                        <div className='mr-2'>{parentChildHub.name}</div>

                        <button className='text-black-200 border border-gray-300 transition-colors duration-300 hover:border-gray-400' onClick={() => updateHubState(index)}>
                            {parentChildHub.isSelected && <CloseIcon />}
                            {!parentChildHub.isSelected && <PlusIcon />}
                        </button>
                    </div>
                ))}
            </div>

        </div>
    )
};
export default HubSelectionPanel;