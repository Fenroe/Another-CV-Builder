import { render, cleanup } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import DataEntry from "../DataEntry";

afterEach(cleanup);

it("renders", () => {
    const {asFragment} = render(<DataEntry />);
    expect(asFragment()).toMatchSnapshot();
});
