import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Versus_XhtmL = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const doctypeExample = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Title of document</title>
</head>
<body>

  some content here...

</body>
</html>`;

  const nestingExample = `<b><i>Some text</i></b>`;

  const nestingWrong = `<b><i>Some text</b></i>`;

  const closingCorrect = `<p>This is a paragraph</p>
<p>This is another paragraph</p>`;

  const closingWrong = `<p>This is a paragraph
<p>This is another paragraph`;

  const emptyCorrect = `<br />
<hr />
<img src="happy.gif" alt="Happy face" />`;

  const emptyWrong = `<br>
<hr>
<img src="happy.gif" alt="Happy face">`;

  const lowercaseCorrect = `<body>
<p>This is a paragraph</p>
</body>`;

  const lowercaseWrong = `<BODY>
<P>This is a paragraph</P>
</BODY>`;

  const attrLowerCorrect = `<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>`;
  const attrLowerWrong = `<a HREF="https://www.w3schools.com/html/">Visit our HTML tutorial</a>`;

  const attrQuoteCorrect = `<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>`;
  const attrQuoteWrong = `<a href=https://www.w3schools.com/html/>Visit our HTML tutorial</a>`;

  const attrMiniCorrect = `<input type="checkbox" name="vehicle" value="car" checked="checked" />
<input type="text" name="lastname" disabled="disabled" />`;

  const attrMiniWrong = `<input type="checkbox" name="vehicle" value="car" checked />
<input type="text" name="lastname" disabled />`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML vs XHTML</h1>

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
          <h2 className="text-3xl font-bold mb-4">What is XHTML?</h2>
          <p className="mb-4">XHTML stands for <strong>EXtensible HyperText Markup Language</strong>.</p>
          <p className="mb-4">It is a stricter, more XML-based version of HTML.</p>
          <p className="mb-4">XHTML is defined as an XML application and is supported by all major browsers.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">Why XHTML?</h3>
          <p className="mb-4">
            XHTML was created to make HTML more extensible and strict, especially for integration with XML.
            Browsers often tolerate errors in HTML, but XHTML enforces cleaner structure.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">Key Differences from HTML</h3>
          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li><code>&lt;!DOCTYPE&gt;</code> is mandatory</li>
            <li><code>xmlns</code> attribute in <code>&lt;html&gt;</code> is required</li>
            <li>Basic tags like <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;title&gt;</code>, and <code>&lt;body&gt;</code> must be present</li>
            <li>Elements must be properly nested</li>
            <li>Elements must be closed</li>
            <li>Element and attribute names must be lowercase</li>
            <li>Attribute values must be quoted</li>
            <li>Attribute minimization is forbidden</li>
          </ul>

          {/* Example: Doctype */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-8">
            <h3 className="font-bold mb-3">XHTML Example with Required Tags:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{doctypeExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(doctypeExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === doctypeExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Nesting */}
          <h3 className="text-xl font-semibold mb-2">Proper Nesting</h3>
          <p className="mb-2">Correct:</p>
          <pre className="bg-gray-100 rounded p-3 mb-2"><code>{nestingExample}</code></pre>
          <p className="mb-2">Wrong:</p>
          <pre className="bg-gray-100 rounded p-3 mb-6"><code>{nestingWrong}</code></pre>

          {/* Closing Tags */}
          <h3 className="text-xl font-semibold mb-2">Closing Elements</h3>
          <p className="mb-2">Correct:</p>
          <pre className="bg-gray-100 rounded p-3 mb-2"><code>{closingCorrect}</code></pre>
          <p className="mb-2">Wrong:</p>
          <pre className="bg-gray-100 rounded p-3 mb-6"><code>{closingWrong}</code></pre>

          {/* Empty Elements */}
          <h3 className="text-xl font-semibold mb-2">Empty Elements</h3>
          <p className="mb-2">Correct:</p>
          <pre className="bg-gray-100 rounded p-3 mb-2"><code>{emptyCorrect}</code></pre>
          <p className="mb-2">Wrong:</p>
          <pre className="bg-gray-100 rounded p-3 mb-6"><code>{emptyWrong}</code></pre>

          {/* Lowercase */}
          <h3 className="text-xl font-semibold mb-2">Lowercase Elements</h3>
          <p className="mb-2">Correct:</p>
          <pre className="bg-gray-100 rounded p-3 mb-2"><code>{lowercaseCorrect}</code></pre>
          <p className="mb-2">Wrong:</p>
          <pre className="bg-gray-100 rounded p-3 mb-6"><code>{lowercaseWrong}</code></pre>

          {/* Lowercase Attributes */}
          <h3 className="text-xl font-semibold mb-2">Lowercase Attribute Names</h3>
          <p className="mb-2">Correct:</p>
          <pre className="bg-gray-100 rounded p-3 mb-2"><code>{attrLowerCorrect}</code></pre>
          <p className="mb-2">Wrong:</p>
          <pre className="bg-gray-100 rounded p-3 mb-6"><code>{attrLowerWrong}</code></pre>

          {/* Quoted Attribute Values */}
          <h3 className="text-xl font-semibold mb-2">Quoted Attribute Values</h3>
          <p className="mb-2">Correct:</p>
          <pre className="bg-gray-100 rounded p-3 mb-2"><code>{attrQuoteCorrect}</code></pre>
          <p className="mb-2">Wrong:</p>
          <pre className="bg-gray-100 rounded p-3 mb-6"><code>{attrQuoteWrong}</code></pre>

          {/* Attribute Minimization */}
          <h3 className="text-xl font-semibold mb-2">Attribute Minimization is Forbidden</h3>
          <p className="mb-2">Correct:</p>
          <pre className="bg-gray-100 rounded p-3 mb-2"><code>{attrMiniCorrect}</code></pre>
          <p className="mb-2">Wrong:</p>
          <pre className="bg-gray-100 rounded p-3 mb-10"><code>{attrMiniWrong}</code></pre>
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

export default Html_Versus_XhtmL;
