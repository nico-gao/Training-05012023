import React from "react";
import SearchBar from "../components/SearchBar";
import Booklist from "../components/Booklist";
import {useSelector} from "react-redux"
import { RootState } from "../redux/store";
import { IBookItem } from "../redux/slices/searchbookSlice";

const Searchbook = () => {
    const books = useSelector<RootState, IBookItem[]>(state=> state.searchbookSlice.books)
    return (
        <div>
            <SearchBar />
            <Booklist books={books}/>
        </div>
    );
};

export default Searchbook;
