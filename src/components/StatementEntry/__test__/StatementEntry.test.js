import { render, cleanup } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import StatementEntry from "../StatementEntry";

afterEach(cleanup);

it('renders', () => {
    const {asFragment} = render(<StatementEntry />);
    expect(asFragment()).toMatchSnapshot();
});
