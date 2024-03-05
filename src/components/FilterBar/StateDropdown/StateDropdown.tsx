import React, { useState } from 'react';
import Dropdown from '../../UI/Dropdown/Dropdown';
import { HUB_STATE } from '../../../types/Hub';
import { useData } from '../../../context/DataContext';

interface Option {
    label: string;
    value: string;
}

const StateDropdown: React.FC = () => {
    const options: Option[] = [
        { label: 'Default', value: '' },
        { label: 'Demo', value: HUB_STATE.DEMO },
        { label: 'Active', value: HUB_STATE.ACTIVE },
        { label: 'Inactive', value: HUB_STATE.INACTIVE }
    ];

    const [selectedState, setSelectedState] = useState<Option>(options[0]);

    const { setHubState } = useData();


    const handleStateChange = (newState: Option) => {
        setSelectedState(newState);
        setHubState(newState.value as HUB_STATE | '')
    };

    return (
        <div>
            <Dropdown
                label="State"
                options={options}
                selectedOption={selectedState}
                onChange={handleStateChange}
            />
        </div>
    );
};

export default StateDropdown;
