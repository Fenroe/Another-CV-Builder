import { render, cleanup } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import PersonalInfoEntry from "../PersonalInfoEntry";

afterEach(cleanup);

it('renders', () => {
    const {asFragment} = render(<PersonalInfoEntry />);
    expect(asFragment()).toMatchSnapshot();
});
