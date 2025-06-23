import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Style_Guide = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const styleExamples = {
    doctype: `<!DOCTYPE html>`,
    lowercaseTags: `<body>\n  <p>This is a paragraph.</p>\n</body>`,
    uppercaseTags: `<BODY>\n  <P>This is a paragraph.</P>\n</BODY>`,
    closedElements: `<section>\n  <p>This is a paragraph.</p>\n  <p>This is a paragraph.</p>\n</section>`,
    unclosedElements: `<section>\n  <p>This is a paragraph.\n  <p>This is a paragraph.\n</section>`,
    lowercaseAttributes: `<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>`,
    uppercaseAttributes: `<a HREF="https://www.w3schools.com/html/">Visit our HTML tutorial</a>`,
    quotedAttributes: `<table class="striped">`,
    unquotedAttributes: `<table class=striped>`,
    badAttributes: `<table class=table striped>`,
    imageExample: `<img src="html5.gif" alt="HTML5" style="width:128px;height:128px">`,
    badImage: `<img src="html5.gif">`,
    spacingExample: `<link rel="stylesheet" href="styles.css">`,
    spacingBad: `<link rel = "stylesheet" href = "styles.css">`,
    indentationGood: `<body>\n\n  <h1>Famous Cities</h1>\n\n  <h2>Tokyo</h2>\n  <p>Tokyo is the capital of Japan...</p>\n\n</body>`,
    indentationBad: `<body>\n<h1>Famous Cities</h1>\n<h2>Tokyo</h2><p>Tokyo is the capital of Japan...</p>\n</body>`,
    goodTable: `<table>\n  <tr>\n    <th>Name</th>\n    <th>Description</th>\n  </tr>\n  <tr>\n    <td>A</td>\n    <td>Description of A</td>\n  </tr>\n</table>`,
    goodList: `<ul>\n  <li>London</li>\n  <li>Paris</li>\n  <li>Tokyo</li>\n</ul>`,
    titleTag: `<title>HTML Style Guide and Coding Conventions</title>`,
    langMeta: `<!DOCTYPE html>\n<html lang="en-us">\n<head>\n  <meta charset="UTF-8">\n  <title>Page Title</title>\n</head>`,
    viewport: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
    commentShort: `<!-- This is a comment -->`,
    commentLong: `<!--\n  This is a long comment.\n  It spans multiple lines.\n-->`,
    cssShort: `p.intro {font-family:Verdana;font-size:16em;}`,
    cssLong: `body {\n  background-color: lightgrey;\n  font-family: "Arial Black", Helvetica, sans-serif;\n  font-size: 16em;\n  color: black;\n}`,
    scriptExample: `<script src="myscript.js">`,
    jsCaseSensitive: `getElementById("Demo").innerHTML = "Hello";\ngetElementById("demo").innerHTML = "Hello";`,
    fileNameExample: `"london.jpg" vs "London.jpg"`,
  };

  const renderExample = (label, code) => (
    <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
      <h3 className="font-bold mb-3">{label}</h3>
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
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Style Guide</h1>

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

        <section className="text-gray-800 space-y-8">
          <p className="mb-4">
            Consistent, clean, and tidy HTML code makes it easier for others to read and understand your code.
          </p>

          {renderExample("Always Declare Document Type", styleExamples.doctype)}
          {renderExample("Good: Lowercase Tags", styleExamples.lowercaseTags)}
          {renderExample("Bad: Uppercase Tags", styleExamples.uppercaseTags)}
          {renderExample("Good: Closed Elements", styleExamples.closedElements)}
          {renderExample("Bad: Unclosed Elements", styleExamples.unclosedElements)}
          {renderExample("Good: Lowercase Attributes", styleExamples.lowercaseAttributes)}
          {renderExample("Bad: Uppercase Attributes", styleExamples.uppercaseAttributes)}
          {renderExample("Good: Quoted Attributes", styleExamples.quotedAttributes)}
          {renderExample("Bad: Unquoted Attributes", styleExamples.unquotedAttributes)}
          {renderExample("Very Bad: Spaces in Attributes", styleExamples.badAttributes)}
          {renderExample("Good: Image with alt, width, height", styleExamples.imageExample)}
          {renderExample("Bad: Image without attributes", styleExamples.badImage)}
          {renderExample("Good: No spaces around equal sign", styleExamples.spacingExample)}
          {renderExample("Bad: Spaces around equal sign", styleExamples.spacingBad)}
          {renderExample("Good: Proper Indentation", styleExamples.indentationGood)}
          {renderExample("Bad: No Indentation", styleExamples.indentationBad)}
          {renderExample("Good Table Example", styleExamples.goodTable)}
          {renderExample("Good List Example", styleExamples.goodList)}
          {renderExample("Required <title> Tag", styleExamples.titleTag)}
          {renderExample("Language & Charset Metadata", styleExamples.langMeta)}
          {renderExample("Viewport Meta Tag", styleExamples.viewport)}
          {renderExample("Short Comment", styleExamples.commentShort)}
          {renderExample("Long Comment", styleExamples.commentLong)}
          {renderExample("Short CSS Syntax", styleExamples.cssShort)}
          {renderExample("Multi-line CSS", styleExamples.cssLong)}
          {renderExample("JavaScript Import", styleExamples.scriptExample)}
          {renderExample("Case Sensitivity in JavaScript", styleExamples.jsCaseSensitive)}
          {renderExample("Use Lowercase File Names", styleExamples.fileNameExample)}

          {/* HTML Tags Guidelines Section */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">HTML Tags Guidelines</h3>
            <div className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded space-y-4 leading-relaxed">
              <p><strong>Tag Naming:</strong> Use lowercase tags like <code>&lt;div&gt;</code> instead of <code>&lt;DIV&gt;</code>.</p>
              <p><strong>Closing Tags:</strong> Always close elements: <code>&lt;p&gt;Hello&lt;/p&gt;</code>.</p>
              <p><strong>Void Elements:</strong> Tags like <code>&lt;br&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code> don’t need a closing tag.</p>
              <p><strong>Nesting:</strong> Tags must be properly nested, like <code>&lt;b&gt;&lt;i&gt;text&lt;/i&gt;&lt;/b&gt;</code>.</p>
              <p><strong>Semantic Tags:</strong> Use meaningful tags like <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;header&gt;</code>.</p>
              <p><strong>Deprecated Tags:</strong> Avoid <code>&lt;font&gt;</code>, <code>&lt;center&gt;</code>, etc. Use CSS instead.</p>
              <p><strong>Quotes for Attributes:</strong> Always use double quotes. E.g. <code>&lt;img src="image.jpg"&gt;</code></p>
            </div>
          </div>

          {/* File Naming and Extensions Section */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">File Naming and Extensions</h3>
            <div className="bg-white border-l-4 border-[#04AA6D] p-4 text-sm rounded space-y-4 leading-relaxed">
              <p><strong>Use Lowercase File Names:</strong> Some web servers are case-sensitive. <code>london.jpg</code> ≠ <code>London.jpg</code>.</p>
              <p><strong>File Extensions:</strong></p>
              <ul className="list-disc pl-6">
                <li><code>.html</code> for HTML</li>
                <li><code>.css</code> for CSS</li>
                <li><code>.js</code> for JavaScript</li>
              </ul>
              <p><strong>Default Filenames:</strong> Use <code>index.html</code> for the homepage unless otherwise configured.</p>
            </div>
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

export default Html_Style_Guide;
