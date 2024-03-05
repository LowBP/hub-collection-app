import React from "react";
import SearchInput from "./SearchInput/SearchInput";
import SortMenu from "./SortMenu/SortMenu";
import TriStateBoolean from "./TriStateBoolean/TriStateBoolean";
import StateDropdown from "./StateDropdown/StateDropdown";

const FilterBar: React.FC = React.memo(() => {
    return (
        <div className="flex flex-col gap-2 max-[492px]:gap-4">
            <div className="flex items-center gap-4 justify-between max-[1099px]:hidden">
                <SearchInput />
                <div className="flex">
                    <div className="mr-2">
                        <TriStateBoolean />
                    </div>
                    <StateDropdown />
                    <SortMenu />
                </div>
            </div>

            {/* small screen */}
            <div className="flex  gap-4 min-[1100px]:hidden flex-col w-full">
                <div className="flex flex-row justify-between">
                    <SearchInput />
                    <div className="min-[415px]:hidden">
                        <SortMenu />
                    </div>
                </div>
                <div className="flex max-[380px]:justify-between justify-end">
                    <div className="mr-2">
                        <TriStateBoolean />
                    </div>
                    <StateDropdown />
                    <div className="max-[414px]:hidden">
                        <SortMenu />

                    </div>

                </div>
            </div>
        </div>
    );
});
FilterBar.displayName = 'FilterBar';
export default FilterBar;
