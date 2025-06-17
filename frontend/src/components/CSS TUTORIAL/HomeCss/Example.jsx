import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const Example = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 mb-4">
        {" "}
        <h1 className="text-4xl">Examples in Each Chapter</h1>
        <p>This CSS tutorial contains hundreds of CSS examples.</p>
        <p>
          With our online editor, you can edit the CSS, and click on a button to
          view the result.
        </p>
      </div>
      <div className="px-3 py-5 bg-gray-500 rounded-md">
        <h1 className="text-2xl">CSS Example</h1>
        <div className="bg-gray-700 flex flex-col gap-5 px-10 py-15 mt-3">
          <p>
            {/* body{ */}
            background-color:  lightblue;
            {/* } */}
          </p>
          <p>
            {/* body{ */}
            background-color:  lightblue;
            {/* } */}
          </p>
          <p>
            {/* body{ */}
            background-color:  lightblue;
            {/* } */}
          </p>
          <p>
            {/* body{ */}
            background-color:  lightblue;
            {/* } */}
          </p>
        </div>
        <Link to="/" className="flex my-3 px-5 w-xs cursor-pointer py-2 text-xl font-semibold rounded-lg bg-green-400 items-center">
          Try it Yourself
          <MdOutlineKeyboardArrowRight className="text-3xl" />
        </Link>
      </div>
    </div>
  );
};

export default Example;
