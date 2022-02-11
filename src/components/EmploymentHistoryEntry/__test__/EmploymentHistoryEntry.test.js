import { render, cleanup } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import EmploymentHistoryEntry from "../EmploymentHistoryEntry";

afterEach(cleanup);

it('renders', () => {
    const {asFragment} = render(<EmploymentHistoryEntry />);
    expect(asFragment()).toMatchSnapshot();
});
