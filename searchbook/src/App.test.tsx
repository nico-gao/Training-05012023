import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test("clicking router links should change the page", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <App />
        </MemoryRouter>
    );
    const linkEls = screen.getAllByRole("link");
    expect(linkEls).toHaveLength(2);
    const submitBtnEl = screen.getByText("submit");
    expect(submitBtnEl).toBeInTheDocument();//search page is the default page
    userEvent.click(linkEls[1]);
    const ulEl = screen.getByRole("list");
    expect(ulEl).toBeInTheDocument();//wishlist page should be rendered
});
