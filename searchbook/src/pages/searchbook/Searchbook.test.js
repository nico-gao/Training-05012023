import { render, screen, waitFor } from "@testing-library/react";
import Searchbook from "./Searchbook";
import { configureStore } from "@reduxjs/toolkit";

import searchbookSlice from "../../redux/slices/searchbookSlice";
import wishlistSlice from "../../redux/slices/wishlistSlice";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

const createMockStore = (
    preloadedState = {
        searchbookSlice: {
            books: [],
            keyword: "",
            isLoading: false,
            itemsPerPage: 10,
            totalPages: 1,
            currentPage: 1,
        },
        wishlistSlice: {
            books: [],
        },
    }
) => {
    return configureStore({
        reducer: {
            searchbookSlice,
            wishlistSlice,
        },
        preloadedState,
    });
};

fetch = jest.fn();

describe("Searchbook page", () => {
    beforeEach(() => {
        fetch.mockImplementation(() => {
            return Promise.resolve({
                json: () =>
                    Promise.resolve({
                        items: [
                            {
                                id: 1,
                                volumeInfo: {
                                    title: "",
                                    authors: [],
                                    publishedDate: "",
                                    description: "",
                                    imageLinks: {
                                        thumbnail: "",
                                        smallThumbnail: "",
                                    },
                                },
                            },
                            {
                                id: 2,
                                volumeInfo: {
                                    title: "",
                                    authors: [],
                                    publishedDate: "",
                                    description: "",
                                    imageLinks: {
                                        thumbnail: "",
                                        smallThumbnail: "",
                                    },
                                },
                            },
                        ],
                        kind: "",
                        totalItems: 2,
                    }),
            });
        });
    });

    test("snapshot", () => {
        const { asFragment } = render(
            <Provider store={createMockStore()}>
                <Searchbook />
            </Provider>
        );

        expect(asFragment()).toMatchSnapshot();
    });
    test("should be able to type in the search bar", () => {
        render(
            <Provider store={createMockStore()}>
                <Searchbook />
            </Provider>
        );

        const inputEl = screen.getByRole("textbox");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveValue("");

        userEvent.type(inputEl, "hello");
        expect(inputEl).toHaveValue("hello");
    });

    test("results should show up after typing keywords and clicking the search button", async () => {
        render(
            <Provider store={createMockStore()}>
                <Searchbook />
            </Provider>
        );
        const inputEl = screen.getByRole("textbox");
        const searchBtnEl = screen.getByText("search");
        let liEls = screen.queryAllByRole("listitem"); // []
        expect(liEls).toHaveLength(0);
        expect(fetch).toBeCalledTimes(0);

        userEvent.type(inputEl, "hello");
        userEvent.click(searchBtnEl);

        liEls = await screen.findAllByRole("listitem");
        expect(liEls).toHaveLength(2);
        expect(fetch).toBeCalledTimes(1);
    });

    test("loader should show up when the data is loading", async () => {
        render(
            <Provider store={createMockStore()}>
                <Searchbook />
            </Provider>
        );

        let loaderEl = screen.queryByTestId("loader");
        expect(loaderEl).not.toBeInTheDocument();
        userEvent.type(screen.getByRole("textbox"), "hello");
        userEvent.click(screen.getByText("search"));

        loaderEl = screen.queryByTestId("loader");
        expect(loaderEl).toBeInTheDocument();
        // wait for the request to be fulfilled
        await waitFor(() => {
            loaderEl = screen.queryByTestId("loader");
            expect(loaderEl).not.toBeInTheDocument();
        });
    });
});
