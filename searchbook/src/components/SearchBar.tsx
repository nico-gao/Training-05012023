import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { search, updateKeyword } from "../redux/slices/searchbookSlice";

const SearchBar = () => {
    const dispatch: AppDispatch = useDispatch();
    const keyword = useSelector<RootState, string>(state=>state.searchbookSlice.keyword)

    const handleSubmit = () => {
        dispatch(search());
    }
    return (
        <div>
            <input value={keyword} onChange={(e)=>{dispatch(updateKeyword(e.target.value))}}/>
            <button onClick={handleSubmit}>search</button>
        </div>
    );
};

export default SearchBar;
