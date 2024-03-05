
import React from "react";

const SortIcon: React.FC = () => {

    return <svg
        data-testid="sort-icon"
        className="h-5 w-5 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>;
};

const SearchIcon: React.FC = () => {

    return <svg
        data-testid="search-icon"
        className="h-5 w-5 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-5.2-5.2"
        />
        <circle cx="10" cy="10" r="8" />
    </svg>;
};

const ClearIcon: React.FC = () => {

    return <svg
        data-testid="clear-icon"
        className="h-4 w-4 text-gray-500 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
};

const InfoIcon: React.FC = () => {

    return <svg
        data-testid="info-icon"
        className="w-8 h-8 transition duration-75 group-hover:text-gray-900 text-gray-900"
        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
        <path
            d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
    </svg>
};

const ToggleIcon: React.FC = () => {

    return <svg
        data-testid="toggle-icon"
        className="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
    </svg>

};


const LocationIcon: React.FC = () => {

    return <svg data-testid='location-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 63 58">
        <g fill="none" fillRule="evenodd">
            <g>
                <path fill="#FFF" d="M0 0H1440V8021H0z" transform="translate(-372 -7515)" />
                <g fillRule="nonzero">
                    <g fill="#0091FF">
                        <path d="M12.5 16.625c-2.464 0-4.464-1.958-4.464-4.375s2-4.375 4.464-4.375c2.466 0 4.464 1.958 4.464 4.375s-1.998 4.375-4.464 4.375zM12.5 0C5.598 0 0 5.484 0 12.25 0 21.437 12.5 35 12.5 35S25 21.437 25 12.25C25 5.484 19.402 0 12.5 0z" transform="translate(-372 -7515) translate(374 7522) translate(15 10)" />
                    </g>
                    <g fill="#66BFFF">
                        <path d="M9 11.875c-1.774 0-3.214-1.399-3.214-3.125S7.226 5.625 9 5.625c1.776 0 3.214 1.399 3.214 3.125S10.776 11.875 9 11.875zM9 0C4.03 0 0 3.917 0 8.75 0 15.312 9 25 9 25s9-9.688 9-16.25C18 3.917 13.97 0 9 0z" transform="translate(-372 -7515) translate(374 7522) translate(41 3)" />
                    </g>
                    <g fill="#E6F4FF">
                        <path d="M6 8.075c-1.183 0-2.143-.951-2.143-2.125S4.817 3.825 6 3.825c1.184 0 2.143.951 2.143 2.125S7.183 8.075 6 8.075zM6 0C2.687 0 0 2.664 0 5.95 0 10.412 6 17 6 17s6-6.588 6-11.05C12 2.664 9.313 0 6 0z" transform="translate(-372 -7515) translate(374 7522)" />
                    </g>
                </g>
            </g>
        </g>
    </svg>
};

const CompanyIcon: React.FC = () => {
    return <svg className="svg-icon" data-testid='company-icon' style={{
        width: '24px',
        height: '24px',
        verticalAlign: 'middle',
        fill: 'currentColor',
        overflow: 'hidden'
    }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M564.2 138.8c0.1-10.3-10.5-17.4-20.6-13.9L212.7 243.6c-6 2.1-10 7.7-10 13.9v572.6h361.5V138.8zM359.8 716.3c0 12.3-10.2 22.3-23 22.3h-40.2c-12.7 0-23-9.9-23-22.3v-14.8c0-12.3 10.2-22.3 23-22.3h40.2c12.7 0 23 9.9 23 22.3v14.8z m0-86.8c0 12.3-10.2 22.3-23 22.3h-40.2c-12.7 0-23-9.9-23-22.3v-14.8c0-12.3 10.2-22.3 23-22.3h40.2c12.7 0 23 9.9 23 22.3v14.8z m0-91.3c0 12.3-10.2 22.3-23 22.3h-40.2c-12.7 0-23-9.9-23-22.3v-14.8c0-12.3 10.2-22.3 23-22.3h40.2c12.7 0 23 9.9 23 22.3v14.8z m0-89.5c0 12.3-10.2 22.3-23 22.3h-40.2c-12.7 0-23-9.9-23-22.3v-14.8c0-12.3 10.2-22.3 23-22.3h40.2c12.7 0 23 9.9 23 22.3v14.8z m0-89.4c0 12.3-10.2 22.3-23 22.3h-40.2c-12.7 0-23-9.9-23-22.3v-14.8c0-12.3 10.2-22.3 23-22.3h40.2c12.7 0 23 9.9 23 22.3v14.8z m135.8 357c0 12.3-10.2 22.3-23 22.3h-40.2c-12.7 0-23-9.9-23-22.3v-14.8c0-12.3 10.2-22.3 23-22.3h40.2c12.7 0 23 9.9 23 22.3v14.8z m0-86.8c0 12.3-10.2 22.3-23 22.3h-40.2c-12.7 0-23-9.9-23-22.3v-14.8c0-12.3 10.2-22.3 23-22.3h40.2c12.7 0 23 9.9 23 22.3v14.8z m0-91.3c0 12.3-10.2 22.3-23 22.3h-40.2c-12.7 0-23-9.9-23-22.3v-14.8c0-12.3 10.2-22.3 23-22.3h40.2c12.7 0 23 9.9 23 22.3v14.8z m0-89.5c0 12.3-10.2 22.3-23 22.3h-40.2c-12.7 0-23-9.9-23-22.3v-14.8c0-12.3 10.2-22.3 23-22.3h40.2c12.7 0 23 9.9 23 22.3v14.8z m0-89.4c0 12.3-10.2 22.3-23 22.3h-40.2c-12.7 0-23-9.9-23-22.3v-14.8c0-12.3 10.2-22.3 23-22.3h40.2c12.7 0 23 9.9 23 22.3v14.8z m0-87.3c0 12.3-10.2 22.3-23 22.3h-40.2c-12.7 0-23-9.9-23-22.3v-14.8c0-12.3 10.2-22.3 23-22.3h40.2c12.7 0 23 9.9 23 22.3V272zM838.2 338.3c0.1-5.5-3-10.5-7.9-13.1L613.4 211.6c-10.2-5.4-22.6 1.9-22.6 13.1v605.5h247.4V338.3z m-83.6 378c0 12.3-10.2 22.3-23 22.3h-40.2c-12.7 0-23-9.9-23-22.3v-14.8c0-12.3 10.2-22.3 23-22.3h40.2c12.7 0 23 9.9 23 22.3v14.8z m0-86.8c0 12.3-10.2 22.3-23 22.3h-40.2c-12.7 0-23-9.9-23-22.3v-14.8c0-12.3 10.2-22.3 23-22.3h40.2c12.7 0 23 9.9 23 22.3v14.8z m0-91.3c0 12.3-10.2 22.3-23 22.3h-40.2c-12.7 0-23-9.9-23-22.3v-14.8c0-12.3 10.2-22.3 23-22.3h40.2c12.7 0 23 9.9 23 22.3v14.8z m0-89.5c0 12.3-10.2 22.3-23 22.3h-40.2c-12.7 0-23-9.9-23-22.3v-14.8c0-12.3 10.2-22.3 23-22.3h40.2c12.7 0 23 9.9 23 22.3v14.8z m0-89.4c0 12.3-10.2 22.3-23 22.3h-40.2c-12.7 0-23-9.9-23-22.3v-14.8c0-12.3 10.2-22.3 23-22.3h40.2c12.7 0 23 9.9 23 22.3v14.8z" fill="#66AFFF" /><path d="M876 900.8H147.2c-8.4 0-15.2-8-15.2-17.7v-35.3c0-9.7 6.8-17.7 15.2-17.7H876c8.4 0 15.2 8 15.2 17.7v35.3c0 9.8-6.8 17.7-15.2 17.7z" fill="#66AFFF" /></svg>
}

const OnboardIcon: React.FC = () => {

    return <svg data-testid='onboard-icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
}

const OngoingIcon: React.FC = () => {

    return <svg data-testid='ongoing-icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
}

const TickIcon: React.FC = () => {

    return <svg data-testid='tick-icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-green-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>
}

const CloseIcon: React.FC = () => {
    return <svg data-testid='close-icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>

}

const PlusIcon: React.FC = () => {

    return <svg data-testid='plus-icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
}

const ArrowDownIcon: React.FC = () => {

    return <svg
        className="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        data-testid='arrow-down-icon'
    >
        <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
            clipRule="evenodd"
        />
    </svg>
}


export { SortIcon, SearchIcon, ClearIcon, InfoIcon, ToggleIcon, LocationIcon, CompanyIcon, OnboardIcon, OngoingIcon, TickIcon, CloseIcon, PlusIcon, ArrowDownIcon };
