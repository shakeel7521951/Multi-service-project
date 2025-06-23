import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Input_Types = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const inputTypes = [
    "button", "checkbox", "color", "date", "datetime-local", "email",
    "file", "hidden", "image", "month", "number", "password", "radio",
    "range", "reset", "search", "submit", "tel", "text", "time",
    "url", "week"
  ];

  const examples = [
    {
      title: "Input Type Text",
      code: `<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>`
    },
    {
      title: "Input Type Password",
      code: `<form>
  <label for="username">Username:</label><br>
  <input type="text" id="username" name="username"><br>
  <label for="pwd">Password:</label><br>
  <input type="password" id="pwd" name="pwd">
</form>`
    },
    {
      title: "Input Type Submit",
      code: `<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>`
    },
    {
      title: "Input Type Reset",
      code: `<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
  <input type="reset" value="Reset">
</form>`
    },
    {
      title: "Input Type Radio",
      code: `<form>
  <p>Choose your favorite Web language:</p>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form>`
    },
    {
      title: "Input Type Checkbox",
      code: `<form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label>
</form>`
    },
    {
      title: "Input Type Button",
      code: `<input type="button" onclick="alert('Hello World!')" value="Click Me!">`
    },
    {
      title: "Input Type Color",
      code: `<form>
  <label for="favcolor">Select your favorite color:</label>
  <input type="color" id="favcolor" name="favcolor">
</form>`
    },
    {
      title: "Input Type Date",
      code: `<form>
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday">
</form>`
    },
    {
      title: "Input Type Datetime-local",
      code: `<form>
  <label for="birthdaytime">Birthday (date and time):</label>
  <input type="datetime-local" id="birthdaytime" name="birthdaytime">
</form>`
    }
  ];

  const inputAttributes = [
    { attr: "checked", desc: "Pre-selects input (checkbox/radio)" },
    { attr: "disabled", desc: "Disables the input" },
    { attr: "max", desc: "Max value for input" },
    { attr: "maxlength", desc: "Max character length" },
    { attr: "min", desc: "Min value for input" },
    { attr: "pattern", desc: "Pattern to validate input" },
    { attr: "readonly", desc: "Makes input read-only" },
    { attr: "required", desc: "Field must be filled" },
    { attr: "size", desc: "Width of input field" },
    { attr: "step", desc: "Legal number intervals" },
    { attr: "value", desc: "Default value" }
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Input Types</h1>
        <div className="flex justify-between mb-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            <FaChevronLeft />
            Previous
          </button>
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>
<div className="border-t-2 border-gray-100 mb-2"></div>
        <section className="text-gray-800 mb-10">
          <p className="mb-4">The <code>&lt;input&gt;</code> element is one of the most used form elements in HTML. Here are the available input types:</p>
          <ul className="list-disc pl-6 mb-6 ">
            {inputTypes.map((type) => (
              <li key={type} className="text-[#DC143C]">&lt;input type="{type}"&gt;</li>
            ))}
          </ul>
        </section>

        {examples.map(({ title, code }) => (
          <div key={title} className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
              <h4 className="font-bold mb-3">Example:</h4>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
                <code>{code}</code>
              </pre>
              <button
                onClick={() => handleCopy(code)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
              >
                {copiedCode === code ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>
        ))}
<div className="border-t-2 border-gray-100 mb-4"></div>
        <section className="text-gray-800 mt-8">
          <h2 className="text-3xl font-bold mb-4">Input Restrictions</h2>
          <p className="mb-4">Here are some common attributes used to restrict or modify input behavior:</p>
          <table className="w-full text-left border border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Attribute</th>
                <th className="border px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {inputAttributes.map(({ attr, desc }) => (
                <tr key={attr}>
                  <td className="border px-4 py-2 font-mono">{attr}</td>
                  <td className="border px-4 py-2">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Input_Types;
