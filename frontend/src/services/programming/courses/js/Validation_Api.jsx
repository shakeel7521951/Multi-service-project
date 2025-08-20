import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Validation_Api = () => {
  const methods = [
    "checkValidity()",
    "setCustomValidity()",
    "reportValidity()"
  ];

  const properties = [
    "validity",
    "validationMessage",
    "willValidate"
  ];

  const validityProperties = [
    "customError",
    "patternMismatch",
    "rangeOverflow",
    "rangeUnderflow",
    "stepMismatch",
    "tooLong",
    "typeMismatch",
    "valueMissing",
    "valid"
  ];

  const checkValidityExample = `<input id="id1" type="number" min="100" max="300" required>
<button onclick="myFunction()">OK</button>

<p id="demo"></p>

<script>
function myFunction() {
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }
}
</script>`;

  const rangeOverflowExample = `<input id="id1" type="number" max="100">
<button onclick="myFunction()">OK</button>

<p id="demo"></p>

<script>
function myFunction() {
  let text = "Value OK";
  if (document.getElementById("id1").validity.rangeOverflow) {
    text = "Value too large";
  }
  document.getElementById("demo").innerHTML = text;
}
</script>`;

  const rangeUnderflowExample = `<input id="id1" type="number" min="100">
<button onclick="myFunction()">OK</button>

<p id="demo"></p>

<script>
function myFunction() {
  let text = "Value OK";
  if (document.getElementById("id1").validity.rangeUnderflow) {
    text = "Value too small";
  }
  document.getElementById("demo").innerHTML = text;
}
</script>`;

  const [activeTab, setActiveTab] = useState("checkValidity");
  const [copied, setCopied] = useState({
    checkValidity: false,
    rangeOverflow: false,
    rangeUnderflow: false
  });

  const handleCopy = (example, key) => {
    navigator.clipboard
      .writeText(example)
      .then(() => {
        setCopied({...copied, [key]: true});
        setTimeout(() => setCopied({...copied, [key]: false}), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">JavaScript Validation API</h1>
          <p className="text-gray-600 text-lg">
            Learn how to validate form inputs using the Constraint Validation API in JavaScript.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">What is Constraint Validation?</h2>
          <p className="text-gray-800 mb-3">
            The Constraint Validation API provides powerful tools for validating form inputs
            without relying on complex JavaScript code.
          </p>
          <p className="text-gray-800 mb-3">
            It offers methods to check input validity, properties to determine what's wrong,
            and ways to customize validation messages.
          </p>
          <p className="text-gray-800 mb-6">
            This modern API is supported in all major browsers and integrates seamlessly
            with HTML5 form validation attributes.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
            Try Examples Below »
          </button>
        </section>

        {/* Methods Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Constraint Validation DOM Methods</h2>
          <div className="bg-gray-100 p-6 rounded-xl mb-8">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-[#04AA6D] text-white">
                  <th className="p-3 text-left">Property</th>
                  <th className="p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 font-mono">checkValidity()</td>
                  <td className="p-3">Returns true if an input element contains valid data.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 font-mono">setCustomValidity()</td>
                  <td className="p-3">Sets the validationMessage property of an input element.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-3">The checkValidity() Method</h3>
          <p className="text-gray-700 mb-4">
            If an input field contains invalid data, display a message:
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{checkValidityExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(checkValidityExample, "checkValidity")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.checkValidity ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Properties Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Constraint Validation DOM Properties</h2>
          <div className="bg-gray-100 p-6 rounded-xl mb-8">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-[#04AA6D] text-white">
                  <th className="p-3 text-left">Property</th>
                  <th className="p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 font-mono">validity</td>
                  <td className="p-3">Contains boolean properties related to the validity of an input element.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 font-mono">validationMessage</td>
                  <td className="p-3">Contains the message a browser will display when the validity is false.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 font-mono">willValidate</td>
                  <td className="p-3">Indicates if an input element will be validated.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Validity Properties Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Validity Properties</h2>
          <p className="text-gray-700 mb-4">
            The validity property of an input element contains a number of properties related to the validity of data:
          </p>
          
          <div className="bg-gray-100 p-6 rounded-xl mb-8">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-[#04AA6D] text-white">
                  <th className="p-3 text-left">Property</th>
                  <th className="p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {validityProperties.map((prop, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3 font-mono">{prop}</td>
                    <td className="p-3">
                      {prop === "customError" && "Set to true, if a custom validity message is set."}
                      {prop === "patternMismatch" && "Set to true, if an element's value does not match its pattern attribute."}
                      {prop === "rangeOverflow" && "Set to true, if an element's value is greater than its max attribute."}
                      {prop === "rangeUnderflow" && "Set to true, if an element's value is less than its min attribute."}
                      {prop === "stepMismatch" && "Set to true, if an element's value is invalid per its step attribute."}
                      {prop === "tooLong" && "Set to true, if an element's value exceeds its maxLength attribute."}
                      {prop === "typeMismatch" && "Set to true, if an element's value is invalid per its type attribute."}
                      {prop === "valueMissing" && "Set to true, if an element (with a required attribute) has no value."}
                      {prop === "valid" && "Set to true, if an element's value is valid."}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          
          <div className="space-y-8">
            {/* Range Overflow Example */}
            <div>
              <h3 className="text-xl font-semibold mb-3">The rangeOverflow Property</h3>
              <p className="text-gray-700 mb-4">
                If the number in an input field is greater than 100 (the input's max attribute), display a message:
              </p>
              
              <div className="bg-[#E7E9EB] p-6 rounded-xl">
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{rangeOverflowExample}</code>
                </pre>
                <button
                  onClick={() => handleCopy(rangeOverflowExample, "rangeOverflow")}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied.rangeOverflow ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>
            
            {/* Range Underflow Example */}
            <div>
              <h3 className="text-xl font-semibold mb-3">The rangeUnderflow Property</h3>
              <p className="text-gray-700 mb-4">
                If the number in an input field is less than 100 (the input's min attribute), display a message:
              </p>
              
              <div className="bg-[#E7E9EB] p-6 rounded-xl">
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                  <code>{rangeUnderflowExample}</code>
                </pre>
                <button
                  onClick={() => handleCopy(rangeUnderflowExample, "rangeUnderflow")}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                >
                  {copied.rangeUnderflow ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Quick References</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {methods.map((method, idx) => (
              <button
                key={`method-${idx}`}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {method}
              </button>
            ))}
            {properties.map((prop, idx) => (
              <button
                key={`prop-${idx}`}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {prop}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};


export default Validation_Api;
