import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Form_Attributes = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const actionExample = `<form action=\"/action_page.php\">
  <label for=\"fname\">First name:</label><br>
  <input type=\"text\" id=\"fname\" name=\"fname\" value=\"John\"><br>
  <label for=\"lname\">Last name:</label><br>
  <input type=\"text\" id=\"lname\" name=\"lname\" value=\"Doe\"><br><br>
  <input type=\"submit\" value=\"Submit\">
</form>`;

  const targetExample = `<form action=\"/action_page.php\" target=\"_blank\">`;

  const methodGetExample = `<form action=\"/action_page.php\" method=\"get\">`;

  const methodPostExample = `<form action=\"/action_page.php\" method=\"post\">`;

  const autocompleteExample = `<form action=\"/action_page.php\" autocomplete=\"on\">`;

  const novalidateExample = `<form action=\"/action_page.php\" novalidate>`;

  const renderExample = (title, code) => (
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
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Form Attributes</h1>

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
          <h2 className="text-3xl font-bold mb-4">The Action Attribute</h2>
          <p className="mb-4">
            The <code>action</code> attribute defines the action to be performed when the form is submitted. Typically, this involves sending form data to a server-side script.
          </p>
          {renderExample("On submit, send form data to 'action_page.php':", actionExample)}

          <h2 className="text-3xl font-bold mb-4">The Target Attribute</h2>
          <p className="mb-4">
            The <code>target</code> attribute specifies where to display the response after submitting the form. Options include: <code>_blank</code>, <code>_self</code>, <code>_parent</code>, <code>_top</code>, and a named iframe.
          </p>
          {renderExample("Submitted result opens in new tab:", targetExample)}

          <h2 className="text-3xl font-bold mb-4">The Method Attribute</h2>
          <p className="mb-4">
            The <code>method</code> attribute defines the HTTP method: <code>get</code> or <code>post</code>. The default is <code>get</code>.
          </p>
          {renderExample("Using GET method:", methodGetExample)}
          {renderExample("Using POST method:", methodPostExample)}

          <h2 className="text-3xl font-bold mb-4">The Autocomplete Attribute</h2>
          <p className="mb-4">
            Enables browser-based autofill for inputs based on prior user entries when set to <code>on</code>.
          </p>
          {renderExample("A form with autocomplete on:", autocompleteExample)}

          <h2 className="text-3xl font-bold mb-4">The Novalidate Attribute</h2>
          <p className="mb-4">
            When present, disables default browser form validation before submitting.
          </p>
          {renderExample("A form with novalidate attribute:", novalidateExample)}
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

export default Html_Form_Attributes;
