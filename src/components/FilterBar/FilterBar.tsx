import React from "react";
import SearchInput from "./SearchInput/SearchInput";
import SortMenu from "./SortMenu/SortMenu";
import TriStateBoolean from "./TriStateBoolean/TriStateBoolean";
import StateDropdown from "./StateDropdown/StateDropdown";

const FilterBar: React.FC = React.memo(() => {
    return (
        <div className="flex flex-col gap-2 max-[492px]:gap-4">
            <div className="flex items-center gap-4 justify-between ">
                <SearchInput />
                <div className="flex">
                    <div className="mr-2">
                        <StateDropdown />
                    </div>
                    <TriStateBoolean />
                    <SortMenu />
                </div>
            </div>
        </div>
    );
});
FilterBar.displayName = 'FilterBar';
export default FilterBar;
