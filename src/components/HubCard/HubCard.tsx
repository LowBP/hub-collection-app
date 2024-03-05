import React from 'react';
import StateBadge from '../StateBadge/StateBadge';
import { CompanyIcon, LocationIcon, OnboardIcon, OngoingIcon } from '../UI/Icons';
import Tooltip from '../UI/Tooltip/Tooltip';
import { HUB_STAGE, HUB_STATE, Hub } from '../../types/Hub';

interface HubCardProps {
    hub: Hub
}

const HubCard: React.FC<HubCardProps> = ({ hub }) => {
    const DETAIL_LINK_URL = process.env.REACT_APP_TEST_APP_URL
    return (
        <>
            <a href={`${DETAIL_LINK_URL}/${hub.slug}`} target='_blank' rel="noreferrer"
                className={`flex items-center justify-center min-h-48 rounded smoothing-antialiased shadow-md hover:cursor-pointer transition-transform transform hover:shadow-lg flex-col ${hub.state === HUB_STATE.INACTIVE && 'opacity-80'}`}
            >
                <div className="image-container border-gray-300" style={{ height: '200px' }}>
                    <img className="rounded-t " src={hub.cardImage.directLink} alt="" />
                    <div className='absolute top-28 right-2 text-xs text-white bg-blue-800 font-medium p-2 pl-5 pr-5'>
                        <div>
                            Collected STATUS
                        </div>
                        <div className='text-xl'>
                            {hub.formattedTotalRecoveredQuantity} {hub.recoveredQuantityUnit}
                        </div>
                    </div>

                </div>

                <StateBadge label={hub.state} state={hub.state} />

                <div
                    className="border-r border-b border-l border-gray-300 bg-white rounded-b p-5 flex flex-col justify-between leading-normal h-full w-full shadow-lg  antialiased relative"
                >
                    <span className={`absolute top-2 right-2 inline-flex items-center text-sm font-semibold px-2.5 py-0.5 rounded-medium ${hub.parentHubBadgeClass}`}>Hub: {hub.parentHubName}</span>

                    <div>

                        <h1 className="text-2xl font-medium text-gray-600 pb-1">
                            {hub.displayName}
                        </h1>

                        <div className='flex gap-2 mb-3'>
                            <CompanyIcon />
                            <h3 className="text-l font-medium text-gray-500 pb-4">
                                {hub.type}
                            </h3>
                            <LocationIcon />
                            {hub.location}
                        </div>

                        <div className="flex justify-between mb-3">
                            <div className="pr-0 flex gap-4 flex-col">

                                {/* Stage details  */}
                                <div className="flex flex-row">
                                    <div className="w-24">
                                        <div className='text-gray-600 font-medium'>
                                            Stage
                                        </div>
                                    </div>
                                    <div>
                                        <Tooltip content={hub.stage === HUB_STAGE.FULLY_ONBOARDED ? HUB_STAGE.FULLY_ONBOARDED : HUB_STAGE.PILOT}>
                                            <div>{hub.stage === HUB_STAGE.FULLY_ONBOARDED && <OnboardIcon />}</div>
                                            <div>{hub.stage === HUB_STAGE.PILOT && <OngoingIcon />}</div>
                                        </Tooltip>
                                    </div>
                                </div>

                                {/* Unassigned Plastic details  */}
                                <div className="flex flex-row">
                                    <div className="w-24">
                                        <div className='text-gray-600 font-medium'>
                                            Unassigned Plastic
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{Math.ceil(hub.unassignedQuantityTotal)} {hub.referenceQuantityUnit}</div>
                                    </div>
                                </div>

                            </div>

                            <div className="pr-0 flex gap-4 flex-col">

                                {/* Category details  */}
                                <div className="flex flex-row">
                                    <div className="w-24">
                                        <div className='text-gray-600 font-medium'>
                                            Category
                                        </div>
                                    </div>
                                    <div>
                                        <div >{hub.category}</div>
                                    </div>
                                </div>

                                {/* slug details  */}
                                <div className="flex flex-row">
                                    <div className="w-24">
                                        <div className='text-gray-600 font-medium'>
                                            Slug
                                        </div>
                                    </div>
                                    <div>
                                        <div>{hub.slug}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='text-gray-600 font-bold pb-2'>Description</div>
                            <div className="font-light">
                                {hub.cardDescription}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
};

export default HubCard;
