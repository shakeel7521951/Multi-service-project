import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HtmlForms = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const formExample = `<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>`;

  const formSubmitExample = `<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>`;

  const radioExample = `<form>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form>`;

  const checkboxExample = `<form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label>
</form>`;

  const nameAttrExample = `<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" value="John"><br><br>
  <input type="submit" value="Submit">
</form>`;

  const renderCodeBlock = (title, code) => (
    <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
      <h3 className="font-bold mb-3">{title}</h3>
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
  );

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Forms</h1>

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

        <section className="text-gray-800">
          <h2 className="text-3xl font-bold mb-4">Understanding HTML Forms</h2>
          <p className="mb-4">
            HTML forms are used to collect user input and typically send the data to a server for processing.
          </p>

          {renderCodeBlock("Basic Form Example", formExample)}

          <h3 className="text-2xl font-semibold mb-2">The &lt;form&gt; Element</h3>
          <p className="mb-4">
            The <code>&lt;form&gt;</code> element acts as a container for various input elements such as text fields, checkboxes, radio buttons, and more.
          </p>

          <h3 className="text-2xl font-semibold mb-2">Text Fields</h3>
          <p className="mb-4">
            Use <code>&lt;input type="text"&gt;</code> to create single-line text fields.
          </p>

          {renderCodeBlock("Form with Submit Button", formSubmitExample)}

          <h3 className="text-2xl font-semibold mb-2">Radio Buttons</h3>
          <p className="mb-4">
            Radio buttons allow users to select only one option from a predefined set.
          </p>

          {renderCodeBlock("Radio Button Group", radioExample)}

          <h3 className="text-2xl font-semibold mb-2">Checkboxes</h3>
          <p className="mb-4">
            Checkboxes allow users to select one or more options from a set.
          </p>

          {renderCodeBlock("Checkbox Options", checkboxExample)}

          <h3 className="text-2xl font-semibold mb-2">The &lt;label&gt; Element</h3>
          <p className="mb-4">
            Labels provide accessibility benefits and improve usability. They should be linked to input elements using the <code>for</code> attribute.
          </p>

          <h3 className="text-2xl font-semibold mb-2">The Name Attribute</h3>
          <p className="mb-4">
            Each input field must have a <code>name</code> attribute for its value to be submitted. Without it, the input data is ignored by the server.
          </p>

          {renderCodeBlock("Missing Name Attribute Example", nameAttrExample)}
        </section>
      </div>
    </div>
  );
};

export default HtmlForms;
