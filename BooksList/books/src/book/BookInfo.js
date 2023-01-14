import React, { Fragment } from "react";

const BookInfo = ({ info }) => {
  return (
    <Fragment>
      <h2 className="text-xl mt-5 mb-3 font-medium font-bold font-sans text-black">
        {" "}
        Book Details
      </h2>
      {info ? (
        <div>
          <p className="text-lg mt-5 font-medium  font-sans text-black">
            {" "}
            Title : {info.title}{" "}
          </p>
          <p className="text-lg mt-5 font-medium  font-sans text-black">
            {" "}
            Inserted by :{info.userName}
          </p>
          <p className="text-lg mt-5 font-medium  font-sans text-black">
            {" "}
            Description : {info.description}
          </p>
          <p className="text-lg mt-5 font-medium  font-sans text-black">
            {" "}
            Price : {info.price}
          </p>
        </div>
      ) : (
        <div> There is no book selected yet. Please select!</div>
      )}
    </Fragment>
  );
};

export default BookInfo;
