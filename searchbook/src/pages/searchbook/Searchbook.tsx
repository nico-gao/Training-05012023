import React from "react";
import SearchBar from "../../components/SearchBar";
import Booklist from "../../components/Booklist";
import {useSelector} from "react-redux"
import { RootState } from "../../redux/store";
import { IBookItem } from "../../redux/slices/searchbookSlice";
/* 
    startIndex: currentPage * itemsPerPage
    maxResult: 20

    totalItems: 101;
    

    current page
    items per page
    total pages: Math.ceil(totalItem / itemsPerPage)
*/


const Searchbook = () => {
    const books = useSelector<RootState, IBookItem[]>(state=> state.searchbookSlice.books)
    return (
        <div className="searchbook">
            <SearchBar />
            <Booklist books={books}/>
            
        </div>
    );
};

export default Searchbook;
