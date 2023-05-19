import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App";

describe("App component", () => {
    it("renders correct heading", () => {
        render(<App />);
        screen.logTestingPlaygroundURL(screen.getByText('Our First Test'));
        expect(screen.getByRole("heading", { name: "Our First Test" }).textContent).toMatch(/our first test/i)
    })
})
