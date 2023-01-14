import React from "react";
import BookContainer from "./book/BookContainer";
import Header from "./navBar/Header";
import AddForm from "./book/AddForm";

const App = () => {
  return (
    <div>
      <Header />
      <AddForm />
      <BookContainer />
    </div>
  );
};

export default App;
