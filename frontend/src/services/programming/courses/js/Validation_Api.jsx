import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Validation_Api = () => {
  const methods = ["checkValidity()", "setCustomValidity()", "reportValidity()"];
  const properties = ["validity", "validationMessage", "willValidate"];
  const validityProperties = [
    "customError",
    "patternMismatch",
    "rangeOverflow",
    "rangeUnderflow",
    "stepMismatch",
    "tooLong",
    "typeMismatch",
    "valueMissing",
    "valid",
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

  const [copied, setCopied] = useState({
    checkValidity: false,
    rangeOverflow: false,
    rangeUnderflow: false,
  });

  const handleCopy = (example, key) => {
    navigator.clipboard
      .writeText(example)
      .then(() => {
        setCopied({ ...copied, [key]: true });
        setTimeout(() => setCopied({ ...copied, [key]: false }), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen  px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Header */}
        <header className="text-center sm:text-left">
          <h1 className="text-4xl font-extrabold mb-3 text-gray-900">
            JavaScript Validation API
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Learn how to validate form inputs using the Constraint Validation API in JavaScript.
          </p>
        </header>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <button className="flex items-center justify-center sm:justify-start gap-2 bg-[#04AA6D] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#03945f] transition shadow-md">
            <FaChevronLeft /> Home
          </button>
        </div>

        {/* Introduction */}
        <section className="bg-[#D9EEE1] p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            What is Constraint Validation?
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            The Constraint Validation API provides powerful tools for validating form inputs
            without relying on complex JavaScript code.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            It offers methods to check input validity, properties to determine what's wrong,
            and ways to customize validation messages.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6">
            This modern API is supported in all major browsers and integrates seamlessly
            with HTML5 form validation attributes.
          </p>
          <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-3 rounded-lg shadow-md">
            Try Examples Below »
          </button>
        </section>

        {/* Methods Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Constraint Validation DOM Methods
          </h2>
          <div className="bg-white shadow-md rounded-xl overflow-hidden mb-10">
            <table className="min-w-full border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#04AA6D] text-white">
                  <th className="p-3 text-left">Method</th>
                  <th className="p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 font-mono">checkValidity()</td>
                  <td className="p-3">Returns true if an input element contains valid data.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-mono">setCustomValidity()</td>
                  <td className="p-3">Sets the validationMessage property of an input element.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            The checkValidity() Method
          </h3>
          <p className="text-gray-700 mb-4">
            If an input field contains invalid data, display a message:
          </p>

          <div className="bg-[#F5F6F7] p-6 rounded-xl shadow-md">
            <pre className="bg-gray-900 text-green-200 text-sm rounded-lg p-4 overflow-x-auto">
              <code>{checkValidityExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(checkValidityExample, "checkValidity")}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded-lg transition shadow-md"
            >
              {copied.checkValidity ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Properties Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Constraint Validation DOM Properties
          </h2>
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <table className="min-w-full border-collapse text-sm sm:text-base">
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
                  <td className="p-3">Contains the message shown when the validity is false.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 font-mono">willValidate</td>
                  <td className="p-3">Indicates if an input element will be validated.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Validity Properties Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Validity Properties</h2>
          <p className="text-gray-700 mb-4">
            The validity property of an input element contains several boolean values related to the state of the data:
          </p>

          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <table className="min-w-full border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#04AA6D] text-white">
                  <th className="p-3 text-left">Property</th>
                  <th className="p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {validityProperties.map((prop, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3 font-mono">{prop}</td>
                    <td className="p-3">
                      {prop === "customError" && "Set to true if a custom validity message is set."}
                      {prop === "patternMismatch" && "True if value doesn't match its pattern attribute."}
                      {prop === "rangeOverflow" && "True if value is greater than max attribute."}
                      {prop === "rangeUnderflow" && "True if value is less than min attribute."}
                      {prop === "stepMismatch" && "True if value is invalid per its step attribute."}
                      {prop === "tooLong" && "True if value exceeds maxLength."}
                      {prop === "typeMismatch" && "True if value is invalid per its type."}
                      {prop === "valueMissing" && "True if required input has no value."}
                      {prop === "valid" && "True if value is valid."}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Examples</h2>
          <div className="space-y-10">
            {/* Range Overflow Example */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                The rangeOverflow Property
              </h3>
              <p className="text-gray-700 mb-4">
                If the number entered is greater than 100 (max attribute), display a message:
              </p>
              <div className="bg-[#F5F6F7] p-6 rounded-xl shadow-md">
                <pre className="bg-gray-900 text-green-200 text-sm rounded-lg p-4 overflow-x-auto">
                  <code>{rangeOverflowExample}</code>
                </pre>
                <button
                  onClick={() => handleCopy(rangeOverflowExample, "rangeOverflow")}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded-lg transition shadow-md"
                >
                  {copied.rangeOverflow ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>

            {/* Range Underflow Example */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                The rangeUnderflow Property
              </h3>
              <p className="text-gray-700 mb-4">
                If the number entered is less than 100 (min attribute), display a message:
              </p>
              <div className="bg-[#F5F6F7] p-6 rounded-xl shadow-md">
                <pre className="bg-gray-900 text-green-200 text-sm rounded-lg p-4 overflow-x-auto">
                  <code>{rangeUnderflowExample}</code>
                </pre>
                <button
                  onClick={() => handleCopy(rangeUnderflowExample, "rangeUnderflow")}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded-lg transition shadow-md"
                >
                  {copied.rangeUnderflow ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick References */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Quick References</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {methods.map((method, idx) => (
              <button
                key={`method-${idx}`}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded-lg transition shadow-md"
              >
                {method}
              </button>
            ))}
            {properties.map((prop, idx) => (
              <button
                key={`prop-${idx}`}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded-lg transition shadow-md"
              >
                {prop}
              </button>
            ))}
          </div>
        </section>

        {/* Navigation Bottom */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#03945f] transition shadow-md">
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Validation_Api;
