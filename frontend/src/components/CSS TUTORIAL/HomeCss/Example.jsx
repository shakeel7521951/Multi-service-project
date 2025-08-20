import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Example = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const cssCode = `
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
  `;

  const copyText = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-4 mb-4">
        <h1 className="text-4xl">Examples in Each Chapter</h1>
        <p>This CSS tutorial contains hundreds of CSS examples.</p>
        <p>
          With our online editor, you can edit the CSS, and click on a button to
          view the result.
        </p>
      </div>

      <div className="px-3 py-5 bg-[#E7E9EB] rounded-md">
        <h1 className="text-2xl">CSS Example</h1>
        <pre className="bg-white text-black font-mono text-sm whitespace-pre-wrap px-6 py-5 mt-3 rounded-md">
          {cssCode}
        </pre>

        <button
          onClick={copyText}
          className="flex items-center my-3 px-5 py-2 text-xl font-semibold rounded-lg bg-[#03945F] text-white cursor-pointer transition-colors"
        >
          {copySuccess ? "Copied!" : "Copy text"}
          <MdOutlineKeyboardArrowRight className="text-3xl ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Example;
