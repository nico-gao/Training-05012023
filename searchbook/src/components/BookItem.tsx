import React, { FC } from "react";
import { IBookItem } from "../redux/slices/searchbookSlice";
import { useDispatch } from "react-redux";
import { saveWishlistToLS } from "../redux/slices/wishlistSlice";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';



interface BookItemProps {
    item: IBookItem;
    liked: boolean
}
const BookItem: FC<BookItemProps> = ({ item, liked }) => {
    const {
        id,
        volumeInfo: {
            title = "N/A",
            publishedDate = "N/A",
            description = "N/A",
            authors,
            imageLinks: { smallThumbnail, thumbnail } = { smallThumbnail: "", thumbnail: "" },
        },
    } = item;

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(saveWishlistToLS(item))
    }
    return (
        <li className="book-item" >
            <div className="like-btn"><IconButton color={liked?"error":"default"} onClick={handleClick} aria-label="like" ><FavoriteIcon /></IconButton></div>

            <div className="thumbnail">
                <img src={thumbnail} alt={title} />
            </div>
            <ul className="book-info">
                <li><b>title: </b>{title}</li>
                <li><b>published date: </b>{publishedDate}</li>
                <li><b>authors: </b>{authors?.join(", ") ?? "N/A"}</li>
                <li><b>description: </b>{description}</li>
            </ul>
        </li>
    );
};

export default BookItem;
