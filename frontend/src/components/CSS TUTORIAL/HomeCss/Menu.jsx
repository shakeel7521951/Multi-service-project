import React from "react";
import { Link } from "react-router-dom";
Link
const Menu = () => {
  return (
    <div className="px-5 py-10">
      <div className="flex flex-col gap-5">
        <h1>CSS Examples</h1>
        <p>
          Learn from over 300 examples! With our editor, you can edit the CSS,
          and click on a button to view the result.
        </p>
        <Link to="/" className="px-10 font-semibold w-sm text-2xl rounded-md py-5 bg-gray-500 text-white" >Go to CSS Example! </Link>
      </div>
      <hr className="text-gray-300 my-4" /> 
      <div className="flex flex-col gap-5">
        <h1>CSS Menu</h1>
        <p>
          Learn from over 300 examples! With our editor, you can edit the CSS,
          and click on a button to view the result.
        </p>
        
      </div>
      <hr className="text-gray-300 my-4" /> 
      <div className="flex flex-col gap-5">
        <h1>CSS Templates</h1>
        <p>
          Learn from over 300 examples! With our editor, you can edit the CSS,
          and click on a button to view the result.
        </p>
        <Link to="/" className="px-10 font-semibold w-sm text-2xl rounded-md py-5 bg-gray-500 text-white" >Free CSS Templates </Link>
      </div>
      <hr className="text-gray-300 my-4" /> 
    </div>
  );
};

export default Menu;
