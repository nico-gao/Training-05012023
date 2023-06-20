import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import Loader from "./Loader";
import { IBookItem, search, updatePage } from "../redux/slices/searchbookSlice";
import BookItem from "./BookItem";
interface BooklistProps {
  books: IBookItem[];
}
const Booklist: FC<BooklistProps> = ({ books }) => {
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.searchbookSlice.isLoading
  );
  const wishlistBooks = useSelector<RootState, IBookItem[]>(
    (state) => state.wishlistSlice.books
  );
  const currentPage = useSelector<RootState, number>(
    (state) => state.searchbookSlice.currentPage
  );
  const totalPages = useSelector<RootState, number>(
    (state) => state.searchbookSlice.totalPages
  );
  const dispatch: AppDispatch = useDispatch();
  const handlePrev = () => {
    dispatch(updatePage(currentPage - 1));
    dispatch(search());
  };

  const handleNext = () => {
    dispatch(updatePage(currentPage + 1));
    dispatch(search());
  };
  return (
    <div className="book-list-container">
      {isLoading ? (
        <Loader />
      ) : books.length === 0 ? (
        "no result"
      ) : (
        <>
          <ul className="book-list">
            {books.map((book) => {
              const liked = wishlistBooks.some((item) => item.id === book.id);
              return <BookItem key={book.id} liked={liked} item={book} />;
            })}
          </ul>
          <div className="pagination">
            <button onClick={handlePrev} disabled={currentPage === 1}>
              prev
            </button>
            <span>{currentPage}</span>
            <button onClick={handleNext} disabled={currentPage === totalPages}>
              next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Booklist;
