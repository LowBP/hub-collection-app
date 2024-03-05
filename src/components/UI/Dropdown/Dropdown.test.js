import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown component", () => {
    const options = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
    ];

    const selectedOption = options[0]; // Select the first option for testing

    it("toggles the visibility of the dropdown menu", () => {
        render(
            <Dropdown
                label="Dropdown"
                options={options}
                selectedOption={selectedOption}
                onChange={() => { }}
            />
        );

        const dropdownButton = screen.getByRole("button", { name: /Dropdown/ });
        fireEvent.click(dropdownButton);

        const dropdownMenu = screen.getByRole("menu");
        expect(dropdownMenu).toBeInTheDocument();

        fireEvent.click(dropdownButton); // Click again to close the dropdown
        expect(dropdownMenu).not.toBeInTheDocument();
    });

    it("triggers onChange with the correct option when an option is clicked", () => {
        const mockOnChange = jest.fn();
        render(
            <Dropdown
                label="Dropdown"
                options={options}
                selectedOption={selectedOption}
                onChange={mockOnChange}
            />
        );

        const dropdownButton = screen.getByRole("button", { name: /Dropdown/ });
        fireEvent.click(dropdownButton);

        const optionToClick = screen.getByText("Option 2");
        fireEvent.click(optionToClick);

        expect(mockOnChange).toHaveBeenCalledWith(options[1]);
    });
});
