import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { IBookItem } from '../redux/slices/searchbookSlice'
import wishlistSlice, { initWishlist } from '../redux/slices/wishlistSlice'
import BookItem from '../components/BookItem'

const Wishlist = () => {
  const books = useSelector<RootState, IBookItem[]>(state=>state.wishlistSlice.books);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initWishlist())
  },[])
  return (
    <div className='wishlist-container'>
      <ul className='wishlist'>
        {books.map(book=>{
          const liked = books.some(item=>item.id === book.id)
          return <BookItem key={book.id} liked={liked} item={book}/>
        })}
      </ul>
    </div>
  )
}

export default Wishlist