import React, { Fragment, useState } from "react";
import { getBooks } from "../Store/bookSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import BookInfo from "./BookInfo";
import BookList from "./BookList";
import { useSelector } from "react-redux";
import { deleteBook } from "../Store/bookSlice";

const BookContainer = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const dispatch = useDispatch();
  const { isLoading, books } = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const getBookId = (id) => {
    const selectedBook = books.find((item) => item.id === id);
    setSelectedBook((prev) => {
      return { ...prev, ...selectedBook };
    });
  };
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <Fragment>
      <div className="flex justify-between  container mx-auto px-20">
        <div className="border-dotted border rounded border-teal-500 w-2/5		 p-8  mx-auto shadow-xl mb-8">
          <BookList
            isLoading={isLoading}
            books={books}
            isLoggedIn={isLoggedIn}
            deleteBook={deleteBook}
            dispatch={dispatch}
            getBookId={getBookId}
          />
        </div>
        <div className="border-dotted border rounded border-teal-500 w-2/5	 p-8	  mx-auto shadow-xl mb-8">
          <BookInfo info={selectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default BookContainer;
