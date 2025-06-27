import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const RWDFrameworks = () => {
  const [copied, setCopied] = useState(false);

  const codeExample = `<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<body>

<div class="w3-container w3-blue">
  <h1>W3Schools Demo</h1>
  <p>Resize this responsive page!</p>
</div>

<div class="w3-row-padding">
  <div class="w3-third">
    <h2>London</h2>
    <p>London is the capital city of England.</p>
    <p>It is the most populous city in the United Kingdom,
    with a metropolitan area of over 13 million inhabitants.</p>
  </div>

  <div class="w3-third">
    <h2>Paris</h2>
    <p>Paris is the capital of France.</p>
    <p>The Paris area is one of the largest population centers in Europe,
    with more than 12 million inhabitants.</p>
  </div>

  <div class="w3-third">
    <h2>Tokyo</h2>
    <p>Tokyo is the capital of Japan.</p>
    <p>It is the center of the Greater Tokyo Area,
    and the most populous metropolitan area in the world.</p>
  </div>
</div>

</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExample).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="px-4">
      <div className="mt-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-4xl">Responsive Web Design - Frameworks</h1>
          <CiBookmark className="text-4xl text-green-500" />
        </div>

        <div className="bg-[#D9EEE1] px-6 py-10 rounded-md">
          <p className="pb-3">
            There are many free CSS Frameworks that offer Responsive Design.
          </p>
          <p className="pb-3">
            A great way to create a responsive design is to use a responsive style sheet, like <strong>W3.CSS</strong>.
          </p>
          <p className="pb-3">
            W3.CSS makes it easy to develop sites that look nice at any size!
          </p>
          <p className="pb-3">
            <strong>W3.CSS Demo:</strong> Resize the page to see the responsiveness!
          </p>
        </div>

        <div className="my-6">
          <h2 className="text-3xl font-semibold mb-4">Example</h2>
          <pre className="bg-[#E7E9EB] p-5 rounded-md text-sm overflow-x-auto">
            <code>{codeExample}</code>
          </pre>
          <button
            onClick={copyToClipboard}
            className="mt-4 px-5 py-2 bg-[#03945F] text-white rounded-md font-semibold hover:bg-green-700"
          >
            {copied ? "Copied!" : "Copy Code"}
            <MdOutlineKeyboardArrowRight className="inline ml-2 text-2xl" />
          </button>
        </div>

        <div className="flex justify-between">
          <Link
            to="#"
            className="flex items-center mt-6 px-3 py-2 text-md font-semibold text-white bg-[#03945F] rounded-md"
          >
            <MdKeyboardArrowLeft className="text-3xl" /> Previous
          </Link>
          <Link
            to="#"
            className="flex items-center mt-6 px-5 py-2 text-xl font-semibold text-white bg-[#03945F] rounded-md"
          >
            Next <MdOutlineKeyboardArrowRight className="text-3xl ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RWDFrameworks;