import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Input_Form_Attributes = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const examples = {
    form: `<form action="/action_page.php" id="form1">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="submit" value="Submit">
</form>

<label for="lname">Last name:</label>
<input type="text" id="lname" name="lname" form="form1">`,

    formaction: `<form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
  <input type="submit" formaction="/action_page2.php" value="Submit as Admin">
</form>`,

    formenctype: `<form action="/action_page_binary.asp" method="post">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="submit" value="Submit">
  <input type="submit" formenctype="multipart/form-data"
  value="Submit as Multipart/form-data">
</form>`,

    formmethod: `<form action="/action_page.php" method="get">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit using GET">
  <input type="submit" formmethod="post" value="Submit using POST">
</form>`,

    formtarget: `<form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
  <input type="submit" formtarget="_blank" value="Submit to a new window/tab">
</form>`,

    formnovalidate: `<form action="/action_page.php">
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email"><br><br>
  <input type="submit" value="Submit">
  <input type="submit" formnovalidate
  value="Submit without validation">
</form>`,

    novalidate: `<form action="/action_page.php" novalidate>
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email"><br><br>
  <input type="submit" value="Submit">
</form>`
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Input Form Attributes</h1>

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
          {/* Introduction */}
          <p className="mb-6">
            This chapter describes the different <strong>form*</strong> attributes for the HTML <code>&lt;input&gt;</code> element.
          </p>

          {/* Each Attribute Section */}
          {[
            { title: "The form Attribute", description: "Specifies the form the input element belongs to.", exampleKey: "form" },
            { title: "The formaction Attribute", description: "Specifies the URL of the file that will process the input when submitted.", exampleKey: "formaction" },
            { title: "The formenctype Attribute", description: "Specifies how form-data should be encoded (useful with method='post').", exampleKey: "formenctype" },
            { title: "The formmethod Attribute", description: "Defines the HTTP method (GET or POST) to use when sending form-data.", exampleKey: "formmethod" },
            { title: "The formtarget Attribute", description: "Specifies where to display the response after submitting the form.", exampleKey: "formtarget" },
            { title: "The formnovalidate Attribute", description: "Indicates that the input should not be validated when submitted.", exampleKey: "formnovalidate" },
            { title: "The novalidate Attribute", description: "Specifies that no form-data should be validated on submit.", exampleKey: "novalidate" }
          ].map(({ title, description, exampleKey }) => (
            <div key={title} className="mb-12">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="mb-4">{description}</p>
              <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
                <h4 className="font-bold mb-3">Example:</h4>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
                  <code>{examples[exampleKey]}</code>
                </pre>
                <button
                  onClick={() => handleCopy(examples[exampleKey])}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
                >
                  {copiedCode === examples[exampleKey] ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>
          ))}

          {/* Form Elements Overview */}
          <h3 className="text-2xl font-semibold mb-4">HTML Form and Input Elements</h3>
          <table className="table-auto w-full border border-gray-300 mb-12 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Tag</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">&lt;form&gt;</td>
                <td className="border border-gray-300 px-4 py-2">Defines an HTML form for user input</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">&lt;input&gt;</td>
                <td className="border border-gray-300 px-4 py-2">Defines an input control</td>
              </tr>
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

export default Html_Input_Form_Attributes;
