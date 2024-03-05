import React, { useState } from 'react';
import Dropdown from '../../UI/Dropdown/Dropdown';
import { useData } from '../../../context/DataContext';

interface Option {
    label: string;
    value: string;
}

const TriStateBoolean: React.FC = () => {
    const options: Option[] = [
        { label: 'Default', value: '' },
        { label: 'True', value: 'true' },
        { label: 'False', value: 'false' },
    ];
    const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

    const { setAssignableState } = useData();

    const handleStateChange = (newState: Option) => {
        setSelectedOption(newState);
        setAssignableState(newState.value)
    };

    return (
        <Dropdown
            label="Assignable"
            options={options}
            selectedOption={selectedOption}
            onChange={handleStateChange}
        />
    );
};

export default TriStateBoolean;
