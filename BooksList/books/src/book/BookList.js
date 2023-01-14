import React from "react";

const BookList = ({
  isLoading,
  books,
  isLoggedIn,
  deleteBook,
  dispatch,
  getBookId,
}) => {
  const bookList =
    books.length > 0
      ? books.map((item) => {
          return (
            <li key={item.id} className="flex items-center mb-5 ">
              <div className="text-lg mt-3 font-medium  font-sans mr-8 text-black">
                {item.title}{" "}
              </div>

              <div>
                <button
                  className="btn-primary mr-1"
                  onClick={() => getBookId(item.id)}
                >
                  Read
                </button>
                <button
                  className="btn-red mr-1"
                  disabled={!isLoggedIn}
                  onClick={() =>
                    dispatch(deleteBook(item))
                      .unwrap()
                      .then((originalPromiseResult) => {
                        console.log(originalPromiseResult);
                      })
                      .catch((rejectedValueOrSerializedError) => {
                        console.log(rejectedValueOrSerializedError);
                      })
                  }
                >
                  Delete{" "}
                </button>
              </div>
            </li>
          );
        })
      : "There is no books available";
  return (
    <div>
      <h2 className="text-xl mt-5 mb-3 font-medium font-bold font-sans text-black">
        Book List{" "}
      </h2>
      {isLoading ? "loading ..." : <ul>{bookList}</ul>}
    </div>
  );
};

export default BookList;
