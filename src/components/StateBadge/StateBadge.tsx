import React from "react";
import { HUB_STATE } from "../../types/Hub";

interface StateBadgeProps {
    label: string;
    state: HUB_STATE;
}

const StateBadge: React.FC<StateBadgeProps> = ({ label, state }) => {
    let bgTextClassName, dotClassName;

    switch (state) {
        case HUB_STATE.DEMO:
            dotClassName = 'bg-orange-500';
            bgTextClassName = 'bg-orange-100 text-orange-800';
            break;

        case HUB_STATE.ACTIVE:
            dotClassName = 'bg-green-500';
            bgTextClassName = 'bg-green-100 text-green-800';
            break;

        case HUB_STATE.INACTIVE:
            dotClassName = 'bg-red-500';
            bgTextClassName = 'bg-red-100 text-red-800';
            break;

        default:
            dotClassName = 'bg-orange-500';
            bgTextClassName = 'bg-orange-100 text-orange-800';
    }

    return (
        <span className={`absolute top-2 left-2 inline-flex items-center  text-xs font-medium px-2.5 py-0.5 rounded-full ${bgTextClassName}`} data-testid="state-badge">
            <span className={`w-2 h-2 me-1 rounded-full ${dotClassName}`} data-testid="dot"></span>
            {label}
        </span>
    );
};

export default StateBadge;
