import { render, cleanup } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import KeySkillsEntry from "../KeySkillsEntry";

afterEach(cleanup);

it('renders', () => {
    const {asFragment} = render(<KeySkillsEntry />);
    expect(asFragment()).toMatchSnapshot();
});
