import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Form_Elements = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const inputExample = `<label for="fname">First name:</label>\n<input type="text" id="fname" name="fname">`;

  const selectExample = `<label for="cars">Choose a car:</label>\n<select id="cars" name="cars">\n  <option value="volvo">Volvo</option>\n  <option value="saab">Saab</option>\n  <option value="fiat">Fiat</option>\n  <option value="audi">Audi</option>\n</select>`;

  const multipleSelectExample = `<label for="cars">Choose a car:</label>\n<select id="cars" name="cars" size="4" multiple>\n  <option value="volvo">Volvo</option>\n  <option value="saab">Saab</option>\n  <option value="fiat">Fiat</option>\n  <option value="audi">Audi</option>\n</select>`;

  const textareaExample = `<textarea name="message" rows="10" cols="30">\nThe cat was playing in the garden.\n</textarea>`;

  const buttonExample = `<button type="button" onclick="alert('Hello World!')">Click Me!</button>`;

  const fieldsetExample = `<form action="/action_page.php">\n  <fieldset>\n    <legend>Personalia:</legend>\n    <label for="fname">First name:</label><br>\n    <input type="text" id="fname" name="fname" value="John"><br>\n    <label for="lname">Last name:</label><br>\n    <input type="text" id="lname" name="lname" value="Doe"><br><br>\n    <input type="submit" value="Submit">\n  </fieldset>\n</form>`;

  const datalistExample = `<form action="/action_page.php">\n  <input list="browsers">\n  <datalist id="browsers">\n    <option value="Edge">\n    <option value="Firefox">\n    <option value="Chrome">\n    <option value="Opera">\n    <option value="Safari">\n  </datalist>\n</form>`;

  const outputExample = `<form action="/action_page.php"\n  oninput="x.value=parseInt(a.value)+parseInt(b.value)">\n  0\n  <input type="range" id="a" name="a" value="50">\n  100 +\n  <input type="number" id="b" name="b" value="50">\n  =\n  <output name="x" for="a b"></output>\n  <br><br>\n  <input type="submit">\n</form>`;

  const formTags = [
    { tag: "<form>", desc: "Defines an HTML form for user input" },
    { tag: "<input>", desc: "Defines an input control" },
    { tag: "<textarea>", desc: "Defines a multiline input control (text area)" },
    { tag: "<label>", desc: "Defines a label for an <input> element" },
    { tag: "<fieldset>", desc: "Groups related elements in a form" },
    { tag: "<legend>", desc: "Defines a caption for a <fieldset> element" },
    { tag: "<select>", desc: "Defines a drop-down list" },
    { tag: "<optgroup>", desc: "Defines a group of related options in a drop-down list" },
    { tag: "<option>", desc: "Defines an option in a drop-down list" },
    { tag: "<button>", desc: "Defines a clickable button" },
    { tag: "<datalist>", desc: "Specifies a list of pre-defined options for input controls" },
    { tag: "<output>", desc: "Defines the result of a calculation" },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900">HTML Form Elements</h1>
 <div className="flex justify-between mt-4">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            <FaChevronLeft /> Previous
          </button>
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next <FaChevronRight />
          </button>
        </div>
        <section className="text-gray-800">
          {[{
            title: "The <input> Element",
            description: "The <input> element is used to create interactive controls in a form.",
            example: inputExample
          }, {
            title: "The <select> Element",
            description: "The <select> element defines a drop-down list.",
            example: selectExample
          }, {
            title: "Allow Multiple Selections",
            description: "Use the multiple attribute to allow more than one selection.",
            example: multipleSelectExample
          }, {
            title: "The <textarea> Element",
            description: "Defines a multi-line text input control.",
            example: textareaExample
          }, {
            title: "The <button> Element",
            description: "Defines a clickable button.",
            example: buttonExample
          }, {
            title: "The <fieldset> and <legend> Elements",
            description: "Used to group related data in a form.",
            example: fieldsetExample
          }, {
            title: "The <datalist> Element",
            description: "Specifies a list of predefined options for input.",
            example: datalistExample
          }, {
            title: "The <output> Element",
            description: "Represents the result of a calculation.",
            example: outputExample
          }].map(({ title, description, example }, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="mb-4">{description}</p>
              <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
                <h4 className="font-bold mb-3">Example:</h4>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
                  <code>{example}</code>
                </pre>
                <button
                  onClick={() => handleCopy(example)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
                >
                  {copiedCode === example ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>
          ))}

          {/* HTML Form Tags Table */}
          <h3 className="text-2xl font-semibold mb-4">HTML Form Elements</h3>
          <p className="mb-6">Here is a list of commonly used HTML form elements along with their descriptions:</p>
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border border-gray-300 px-4 py-2">Tag</th>
                  <th className="border border-gray-300 px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {formTags.map(({ tag, desc }, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-2 font-mono">{tag}</td>
                    <td className="border border-gray-300 px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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

export default Html_Form_Elements;
