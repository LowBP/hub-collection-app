import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "./SearchInput";

// Mock DataProvider
jest.mock("../../../context/DataContext", () => ({
    useData: () => ({
        setSearchName: jest.fn(),
    }),
}));

describe("SearchInput component", () => {
    beforeEach(() => {
        render(
            <SearchInput />
        );
    });

    it("updates search term as user types", () => {
        const input = screen.getByPlaceholderText("Search Hub name...");
        fireEvent.input(input, { target: { value: "test" } });
        expect(input.value).toBe("test");
    });

    it("triggers search when search button is clicked", () => {
        const input = screen.getByPlaceholderText("Search Hub name...");
        fireEvent.input(input, { target: { value: "test" } });

        const searchButton = screen.getByTestId("search-btn");
        fireEvent.click(searchButton);

        expect(screen.getByPlaceholderText("Search Hub name...").value).toBe("test");
    });

    it("clears search term when clear button is clicked", () => {
        const input = screen.getByPlaceholderText("Search Hub name...");
        fireEvent.input(input, { target: { value: "test" } });

        const clearButton = screen.getByTestId("clear-button");
        fireEvent.click(clearButton);

        expect(screen.getByPlaceholderText("Search Hub name...").value).toBe("");
    });
});
