import { render, cleanup } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import EducationEntry from "../EducationEntry";

afterEach(cleanup);

it('renders', () => {
    const {asFragment} = render(<EducationEntry />);
    expect(asFragment()).toMatchSnapshot();
});
