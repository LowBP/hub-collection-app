import React from "react";
import { render } from "@testing-library/react";
import {
    SortIcon,
    SearchIcon,
    ClearIcon,
    InfoIcon,
    ToggleIcon,
    LocationIcon,
    CompanyIcon,
    OnboardIcon,
    OngoingIcon,
    TickIcon,
    CloseIcon,
    PlusIcon,
    ArrowDownIcon,
} from "./index";

describe("Icon components", () => {
    test("renders SortIcon", () => {
        const { getByTestId } = render(<SortIcon />);
        expect(getByTestId("sort-icon")).toBeInTheDocument();
    });

    test("renders SearchIcon", () => {
        const { getByTestId } = render(<SearchIcon />);
        expect(getByTestId("search-icon")).toBeInTheDocument();
    });

    test("renders ClearIcon", () => {
        const { getByTestId } = render(<ClearIcon />);
        expect(getByTestId("clear-icon")).toBeInTheDocument();
    });

    test("renders InfoIcon", () => {
        const { getByTestId } = render(<InfoIcon />);
        expect(getByTestId("info-icon")).toBeInTheDocument();
    });

    test("renders ToggleIcon", () => {
        const { getByTestId } = render(<ToggleIcon />);
        expect(getByTestId("toggle-icon")).toBeInTheDocument();
    });

    test("renders LocationIcon", () => {
        const { getByTestId } = render(<LocationIcon />);
        expect(getByTestId("location-icon")).toBeInTheDocument();
    });

    test("renders CompanyIcon", () => {
        const { getByTestId } = render(<CompanyIcon />);
        expect(getByTestId("company-icon")).toBeInTheDocument();
    });

    test("renders OnboardIcon", () => {
        const { getByTestId } = render(<OnboardIcon />);
        expect(getByTestId("onboard-icon")).toBeInTheDocument();
    });

    test("renders OngoingIcon", () => {
        const { getByTestId } = render(<OngoingIcon />);
        expect(getByTestId("ongoing-icon")).toBeInTheDocument();
    });

    test("renders TickIcon", () => {
        const { getByTestId } = render(<TickIcon />);
        expect(getByTestId("tick-icon")).toBeInTheDocument();
    });

    test("renders CloseIcon", () => {
        const { getByTestId } = render(<CloseIcon />);
        expect(getByTestId("close-icon")).toBeInTheDocument();
    });

    test("renders PlusIcon", () => {
        const { getByTestId } = render(<PlusIcon />);
        expect(getByTestId("plus-icon")).toBeInTheDocument();
    });

    test("renders ArrowDownIcon", () => {
        const { getByTestId } = render(<ArrowDownIcon />);
        expect(getByTestId("arrow-down-icon")).toBeInTheDocument();
    });
});
