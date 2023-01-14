import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertBook } from "../Store/bookSlice";

const AddForm = () => {
  const title = useRef(null);
  const price = useRef(null);
  const description = useRef(null);
  const dispatch = useDispatch(null);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const handlerSumbit = (e) => {
    e.preventDefault();
    const data = {
      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
    };
    dispatch(insertBook(data));
    console.log(data);
    title.current.value = null;
    price.current.value = null;
    description.current.value = null;
  };

  return (
    <div className="border-dotted border rounded border-teal-500 w-80 mx-auto shadow-xl mb-8 ">
      <div className="flex justify-center ">
        <h2 className="text-xl mt-5 font-medium font-bold font-sans text-black ">
          Insert Books{" "}
        </h2>
      </div>
      <div className="flex justify-center mt-5   ">
        <form onSubmit={handlerSumbit}>
          <div className="mb-1">
            <label
              htmlFor="title"
              className="text-lg mt-5 font-medium  font-sans text-black"
            >
              Title:
            </label>
            <input
              id="title"
              ref={title}
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Write Title..."
              required
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="price"
              className="text-lg mt-5 font-medium  font-sans text-black"
            >
              Price:
            </label>
            <input
              id="price"
              ref={price}
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Write Price..."
              required
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="description"
              className="text-lg mt-5 font-medium  font-sans text-black"
            >
              Description:
            </label>
            <br />
            <textarea
              id="description"
              ref={description}
              rows={3}
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Write a Description about your Book..."
            ></textarea>
          </div>
          <button
            className="btn-primary mb-5"
            type="submit"
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
