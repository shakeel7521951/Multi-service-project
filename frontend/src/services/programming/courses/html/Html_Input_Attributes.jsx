import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Input_Attributes = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const examples = {
    value: `<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form>`,
    readonly: `<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John" readonly><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form>`,
    disabled: `<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John" disabled><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form>`,
    size: `<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" size="50"><br>
  <label for="pin">PIN:</label><br>
  <input type="text" id="pin" name="pin" size="4">
</form>`,
    maxlength: `<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" size="50"><br>
  <label for="pin">PIN:</label><br>
  <input type="text" id="pin" name="pin" maxlength="4" size="4">
</form>`,
    list: `<form>
  <input list="browsers">
  <datalist id="browsers">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form>`,
    autocomplete: `<form action="/action_page.php" autocomplete="on">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" autocomplete="off"><br><br>
  <input type="submit" value="Submit">
</form>`
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Input Attributes</h1>

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

          {/* Attribute Sections */}
          {[
            {
              title: "The value Attribute",
              description: "The input value attribute specifies an initial value for an input field.",
              codeKey: "value",
            },
            {
              title: "The readonly Attribute",
              description: "The input readonly attribute specifies that an input field is read-only.",
              codeKey: "readonly",
            },
            {
              title: "The disabled Attribute",
              description: "The input disabled attribute specifies that an input field should be disabled.",
              codeKey: "disabled",
            },
            {
              title: "The size Attribute",
              description: "The input size attribute specifies the visible width, in characters, of an input field.",
              codeKey: "size",
            },
            {
              title: "The maxlength Attribute",
              description: "The input maxlength attribute specifies the maximum number of characters allowed in an input field.",
              codeKey: "maxlength",
            },
            {
              title: "The list Attribute",
              description: "The input list attribute refers to a <datalist> element that contains pre-defined options for an <input>.",
              codeKey: "list",
            },
            {
              title: "The autocomplete Attribute",
              description: "The input autocomplete attribute specifies whether a form or an input field should have autocomplete on or off.",
              codeKey: "autocomplete",
            },
          ].map(({ title, description, codeKey }) => (
            <div key={codeKey} className="mb-10">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="mb-4">{description}</p>
              <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
                <h4 className="font-bold mb-3">Example:</h4>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
                  <code>{examples[codeKey]}</code>
                </pre>
                <button
                  onClick={() => handleCopy(examples[codeKey])}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
                >
                  {copiedCode === examples[codeKey] ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>
          ))}

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

export default Html_Input_Attributes;
