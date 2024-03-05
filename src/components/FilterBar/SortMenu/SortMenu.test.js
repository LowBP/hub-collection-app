import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SortMenu from "./SortMenu";

// Mock DataProvider
jest.mock("../../../context/DataContext", () => ({
    useData: () => ({
        onApplySort: jest.fn(),
    }),
}));

describe("SortMenu component", () => {
    beforeEach(() => {
        render(<SortMenu />);
    });

    it("toggles the visibility of the sort menu", () => {
        const sortMenuButton = screen.getByTestId('sort-btn');

        fireEvent.click(sortMenuButton);
        expect(screen.getByRole("menu")).toBeInTheDocument();

        fireEvent.click(sortMenuButton);
        expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });

    it("updates the sortBy state when a sort menu item is clicked", () => {
        const sortMenuButton = screen.getByTestId('sort-btn');

        fireEvent.click(sortMenuButton);

        const sortMenuItem = screen.getByLabelText("Hub Name");
        fireEvent.click(sortMenuItem);

        expect(sortMenuItem).toBeChecked();
    });

    it("resets sorting options when clear button is clicked", () => {
        const sortMenuButton = screen.getByTestId('sort-btn');

        fireEvent.click(sortMenuButton);

        const clearButton = screen.getByText("Clear");
        fireEvent.click(clearButton);

        expect(screen.queryAllByRole("radio", { name: /Hub Name/ })).toHaveLength(0);
    });

    it("triggers sorting with the appropriate order when ascending and descending buttons are clicked", () => {
        const sortMenuButton = screen.getByTestId('sort-btn');

        fireEvent.click(sortMenuButton);
        const sortMenuItem = screen.getByLabelText("Hub Name");
        fireEvent.click(sortMenuItem);

        expect(sortMenuItem).toBeChecked();

        const ascendingButton = screen.getByRole("button", { name: "↑" });
        fireEvent.click(ascendingButton);
        expect(screen.getByRole('menu')).toHaveTextContent("↑ (asc)");

        const descendingButton = screen.getByRole("button", { name: "↓" });
        fireEvent.click(descendingButton);
        expect(screen.getByRole('menu')).toHaveTextContent("↓ (desc)");
    });
});
