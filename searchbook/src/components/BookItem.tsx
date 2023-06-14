import React, { FC } from "react";
import { IBookItem } from "../redux/slices/searchbookSlice";


interface BookItemProps {
    item: IBookItem;
}
const BookItem: FC<BookItemProps> = ({ item }) => {
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
    return (
        <li>
            <ul>
                <li>{title}</li>
                <li>{publishedDate}</li>
                <li>{authors?.join(", ") ?? "N/A"}</li>
                <li>{description}</li>
            </ul>
        </li>
    );
};

export default BookItem;
