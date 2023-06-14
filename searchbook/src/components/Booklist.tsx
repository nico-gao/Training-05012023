import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Loader from "./Loader";
import { IBookItem } from "../redux/slices/searchbookSlice";
import BookItem from "./BookItem";
interface BooklistProps {
    books: IBookItem[];
}
const Booklist: FC<BooklistProps> = ({ books }) => {
    const isLoading = useSelector<RootState, boolean>((state) => state.searchbookSlice.isLoading);
    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <ul>
                    {books.map((item) => {
                        return <BookItem key={item.id} item={item} />;
                    })}
                </ul>
            )}
        </div>
    );
};

export default Booklist;
