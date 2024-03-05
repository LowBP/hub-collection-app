import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownIcon } from '../Icons';

interface Option {
    label: string;
    value: string;
}

interface DropdownProps {
    label?: string;
    options: Option[];
    selectedOption: Option;
    onChange: (option: Option) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, selectedOption, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleOptionChange = (option: Option) => {
        onChange(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="flex items-start">
            <div className="relative inline-block text-left" ref={menuRef}>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    aria-haspopup="true"
                    aria-expanded={isOpen ? 'true' : 'false'} // ARIA attribute for accessibility
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {label && <span className="mr-2">{label}:</span>}
                    {selectedOption.label}
                    <ArrowDownIcon />
                </button>
                {isOpen && (
                    <div
                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 z-10"
                        role="menu"
                        aria-orientation="vertical"
                    >
                        <div className="py-1" role="none">
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    className={`${selectedOption.value === option.value
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                        } block w-full px-4 py-2 text-sm text-left`}
                                    role="menuitem"
                                    onClick={() => handleOptionChange(option)}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
