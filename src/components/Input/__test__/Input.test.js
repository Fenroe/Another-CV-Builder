import { render, cleanup } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Input from "../Input";

afterEach(cleanup);

it("renders", () => {
    const {asFragment} = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
});
