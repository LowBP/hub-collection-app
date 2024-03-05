import React from "react";
import { ClearIcon, SearchIcon } from "../../UI/Icons";
import { useData } from "../../../context/DataContext";

const SearchInput: React.FC = () => {

    const [searchTerm, setSearchTerm] = React.useState("");
    const { setSearchName } = useData();


    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target

        if (!value?.trim()) {
            handleClear();
            return;
        }

        setSearchTerm(value);
    };

    const handleSearch = () => {
        setSearchName(searchTerm)
    };

    const handleClear = () => {
        setSearchTerm("");
        setSearchName("")

    };

    const handleKeyDown = () => {
        handleSearch();
    };


    return (
        <div className="flex">
            <div className="relative flex items-center w-80 max-[492px]:w-48">
                <input
                    type="text"
                    placeholder="Search Hub name..."
                    className="border p-2 rounded-l focus:outline-none w-full"
                    value={searchTerm}
                    onInput={onChangeInput}
                    onKeyDown={handleKeyDown}
                />
                {searchTerm && (
                    <div
                        className="absolute top-0 right-0 h-full px-2  rounded-r flex items-center"
                        onClick={handleClear}
                        data-testid="clear-button"
                    >
                        <ClearIcon />
                    </div>
                )}
            </div>
            <button
                className="flex items-center bg-gray-200 py-2 px-4 rounded-r text-gray-800"
                onClick={handleSearch}
            >
                <SearchIcon />
            </button>
        </div>
    );
};

export default SearchInput;
