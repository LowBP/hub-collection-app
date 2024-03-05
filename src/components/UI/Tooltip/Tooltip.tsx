import React, { useState, ReactNode } from 'react';

interface TooltipProps {
    children: ReactNode;
    content: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className="relative inline-block">
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
            {showTooltip && (
                <div
                    role="tooltip"
                    className="absolute z-10 visible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip"
                >
                    {content}
                    <div className="tooltip-arrow"></div>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
