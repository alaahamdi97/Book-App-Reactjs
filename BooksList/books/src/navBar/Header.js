import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../Store/authSlice";
const Header = () => {
  const { error } = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <Fragment>
      {error && <div> {error}</div>}
      <div
        className="container mx-auto px-6 shadow-md

"
      >
        <nav className="flex  justify-between  mb-8 ">
          <div className="py-6 text-2xl font-medium font-bold font-sans text-teal-600	">
            <span>MY BOOKS</span>
          </div>
          <div className="py-6">
            <button
              className="btn-primary"
              onClick={() => dispatch(logInOut())}
            >
              {" "}
              {isLoggedIn ? "Log Out" : "Log In "}
            </button>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
