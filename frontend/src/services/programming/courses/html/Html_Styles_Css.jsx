import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Styles_CSS = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const inlineCssExample = `<h1 style="color:blue;">A Blue Heading</h1>
<p style="color:red;">A red paragraph.</p>`;

  const internalCssExample = `<!DOCTYPE html>
<html>
<head>
<style>
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`;

  const externalCssExample = `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`;

  const stylesCssFile = `body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  color: red;
}`;

  const cssColorsFontsExample = `<!DOCTYPE html>
<html>
<head>
<style>
h1 {
  color: blue;
  font-family: verdana;
  font-size: 300%;
}
p {
  color: red;
  font-family: courier;
  font-size: 160%;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`;

  const cssBorderExample = `p {
  border: 2px solid powderblue;
}`;

  const cssPaddingExample = `p {
  border: 2px solid powderblue;
  padding: 30px;
}`;

  const cssMarginExample = `p {
  border: 2px solid powderblue;
  margin: 50px;
}`;

  const linkExternalExample1 = `<link rel="stylesheet" href="https://www.w3schools.com/html/styles.css">`;

  const linkExternalExample2 = `<link rel="stylesheet" href="/html/styles.css">`;

  const linkExternalExample3 = `<link rel="stylesheet" href="styles.css">`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Styles - CSS</h1>

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

        <section className="text-gray-800 space-y-6">

          <h2 className="text-3xl font-bold mb-4">What is CSS?</h2>
          <p>
            Cascading Style Sheets (CSS) is used to format the layout of a webpage.
          </p>
          <p>
            With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!
          </p>

          <h2 className="text-3xl font-bold mb-4">Using CSS</h2>
          <p>
            CSS can be added to HTML documents in 3 ways:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Inline - by using the style attribute inside HTML elements</li>
            <li>Internal - by using a <code>&lt;style&gt;</code> element in the <code>&lt;head&gt;</code> section</li>
            <li>External - by using a <code>&lt;link&gt;</code> element to link to an external CSS file</li>
          </ul>
          <p>
            The most common way to add CSS is to keep the styles in external CSS files. However, in this tutorial, we use inline and internal styles because this is easier to demonstrate and try yourself.
          </p>

          <h3 className="text-2xl font-semibold mb-3">Inline CSS Example</h3>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{inlineCssExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(inlineCssExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === inlineCssExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-3">Internal CSS Example</h3>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{internalCssExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(internalCssExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === internalCssExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-3">External CSS Example</h3>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{externalCssExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(externalCssExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === externalCssExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-3">styles.css File Example</h3>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{stylesCssFile}</code>
            </pre>
            <button
              onClick={() => handleCopy(stylesCssFile)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === stylesCssFile ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h2 className="text-3xl font-bold mb-4">CSS Colors, Fonts and Sizes</h2>
          <p>
            The CSS color property defines the text color to be used.<br />
            The CSS font-family property defines the font to be used.<br />
            The CSS font-size property defines the text size.<br />
          </p>
          <h3 className="text-2xl font-semibold mb-3">Example:</h3>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{cssColorsFontsExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(cssColorsFontsExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === cssColorsFontsExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h2 className="text-3xl font-bold mb-4">CSS Border, Padding and Margin</h2>
          <p>
            The CSS border property defines a border around an HTML element.<br />
            The padding property defines space between the text and the border.<br />
            The margin property defines space outside the border.<br />
          </p>

          <h3 className="text-xl font-semibold mb-2">Border Example:</h3>
          <div className="bg-[#E7E9EB] p-4 rounded-lg text-left mb-6">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-3 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{cssBorderExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(cssBorderExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-1 px-6 mt-1 transition cursor-pointer"
            >
              {copiedCode === cssBorderExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-xl font-semibold mb-2">Padding Example:</h3>
          <div className="bg-[#E7E9EB] p-4 rounded-lg text-left mb-6">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-3 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{cssPaddingExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(cssPaddingExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-1 px-6 mt-1 transition cursor-pointer"
            >
              {copiedCode === cssPaddingExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-xl font-semibold mb-2">Margin Example:</h3>
          <div className="bg-[#E7E9EB] p-4 rounded-lg text-left mb-10">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-3 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{cssMarginExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(cssMarginExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-1 px-6 mt-1 transition cursor-pointer"
            >
              {copiedCode === cssMarginExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h2 className="text-3xl font-bold mb-4">Link to External CSS</h2>
          <p>
            External style sheets can be referenced with a full URL or with a path relative to the current web page.
          </p>

          <h3 className="text-xl font-semibold mb-2">Full URL Example:</h3>
          <div className="bg-[#E7E9EB] p-4 rounded-lg text-left mb-6">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-3 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{linkExternalExample1}</code>
            </pre>
            <button
              onClick={() => handleCopy(linkExternalExample1)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-1 px-6 mt-1 transition cursor-pointer"
            >
              {copiedCode === linkExternalExample1 ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-xl font-semibold mb-2">Relative Path Example (html folder):</h3>
          <div className="bg-[#E7E9EB] p-4 rounded-lg text-left mb-6">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-3 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{linkExternalExample2}</code>
            </pre>
            <button
              onClick={() => handleCopy(linkExternalExample2)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-1 px-6 mt-1 transition cursor-pointer"
            >
              {copiedCode === linkExternalExample2 ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-xl font-semibold mb-2">Relative Path Example (same folder):</h3>
          <div className="bg-[#E7E9EB] p-4 rounded-lg text-left mb-10">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-3 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{linkExternalExample3}</code>
            </pre>
            <button
              onClick={() => handleCopy(linkExternalExample3)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-1 px-6 mt-1 transition cursor-pointer"
            >
              {copiedCode === linkExternalExample3 ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h2 className="text-3xl font-bold mb-6">Chapter Summary</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Use the HTML style attribute for inline styling</li>
            <li>Use the HTML &lt;style&gt; element to define internal CSS</li>
            <li>Use the HTML &lt;link&gt; element to refer to an external CSS file</li>
            <li>Use the HTML &lt;head&gt; element to store &lt;style&gt; and &lt;link&gt; elements</li>
            <li>Use the CSS color property for text colors</li>
            <li>Use the CSS font-family property for text fonts</li>
            <li>Use the CSS font-size property for text sizes</li>
            <li>Use the CSS border property for borders</li>
            <li>Use the CSS padding property for space inside the border</li>
            <li>Use the CSS margin property for space outside the border</li>
          </ul>
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

export default Html_Styles_CSS;

