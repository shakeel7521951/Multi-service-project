import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Alphabet = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const elements = [
    { tag: "<!--...-->", description: "Defines a comment" },
    { tag: "<!DOCTYPE>", description: "Defines the document type" },
    { tag: "<a>", description: "Defines a hyperlink" },
    { tag: "<abbr>", description: "Defines an abbreviation or acronym" },
    { tag: "<address>", description: "Defines contact information" },
    { tag: "<area>", description: "Defines an area inside an image map" },
    { tag: "<article>", description: "Defines an article" },
    { tag: "<aside>", description: "Defines content aside from main content" },
    { tag: "<audio>", description: "Embeds sound content" },
    { tag: "<b>", description: "Defines bold text" },
    { tag: "<base>", description: "Specifies base URL for relative links" },
    { tag: "<bdi>", description: "Isolates part of text for bidirectional override" },
    { tag: "<bdo>", description: "Overrides the current text direction" },
    { tag: "<blockquote>", description: "Defines a long quotation" },
    { tag: "<body>", description: "Defines the document's body" },
    { tag: "<br>", description: "Inserts a single line break" },
    { tag: "<button>", description: "Defines a clickable button" },
    { tag: "<canvas>", description: "Used to draw graphics via scripting" },
    { tag: "<caption>", description: "Defines a table caption" },
    { tag: "<cite>", description: "Defines the title of a work" },
    { tag: "<code>", description: "Defines a piece of computer code" },
    { tag: "<col>", description: "Specifies column properties for tables" },
    { tag: "<colgroup>", description: "Groups columns in a table" },
    { tag: "<data>", description: "Links content with machine-readable value" },
    { tag: "<datalist>", description: "Specifies list of predefined options" },
    { tag: "<dd>", description: "Defines a description in a description list" },
    { tag: "<del>", description: "Defines deleted text" },
    { tag: "<details>", description: "Defines additional details" },
    { tag: "<dfn>", description: "Represents a definition term" },
    { tag: "<dialog>", description: "Defines a dialog box or modal window" },
    { tag: "<div>", description: "Generic container for flow content" },
    { tag: "<dl>", description: "Defines a description list" },
    { tag: "<dt>", description: "Defines a term in a description list" },
    { tag: "<em>", description: "Emphasizes text" },
    { tag: "<embed>", description: "Embeds external content (plugin)" },
    { tag: "<fieldset>", description: "Groups form elements" },
    { tag: "<figcaption>", description: "Caption for a <figure>" },
    { tag: "<figure>", description: "Groups media and caption" },
    { tag: "<footer>", description: "Defines a footer" },
    { tag: "<form>", description: "Defines an HTML form" },
    { tag: "<h1> - <h6>", description: "Defines HTML headings" },
    { tag: "<head>", description: "Contains document meta information" },
    { tag: "<header>", description: "Defines a header" },
    { tag: "<hr>", description: "Creates a thematic break" },
    { tag: "<html>", description: "Root element of HTML" },
    { tag: "<i>", description: "Defines italic text" },
    { tag: "<iframe>", description: "Embeds another HTML page" },
    { tag: "<img>", description: "Embeds an image" },
    { tag: "<input>", description: "Defines an input field" },
    { tag: "<ins>", description: "Defines inserted text" },
    { tag: "<kbd>", description: "Defines keyboard input" },
    { tag: "<label>", description: "Defines a label for form elements" },
    { tag: "<legend>", description: "Caption for a fieldset" },
    { tag: "<li>", description: "List item" },
    { tag: "<link>", description: "Link to external resources" },
    { tag: "<main>", description: "Main content of the document" },
    { tag: "<map>", description: "Defines an image map" },
    { tag: "<mark>", description: "Highlights text" },
    { tag: "<meta>", description: "Defines metadata" },
    { tag: "<meter>", description: "Defines a scalar measurement" },
    { tag: "<nav>", description: "Defines navigation links" },
    { tag: "<noscript>", description: "Alternative content for no-script support" },
    { tag: "<object>", description: "Embeds external resource" },
    { tag: "<ol>", description: "Ordered list" },
    { tag: "<optgroup>", description: "Group of options" },
    { tag: "<option>", description: "Defines option in select" },
    { tag: "<output>", description: "Displays calculation result" },
    { tag: "<p>", description: "Paragraph element" },
    { tag: "<param>", description: "Parameters for object" },
    { tag: "<picture>", description: "Responsive images" },
    { tag: "<pre>", description: "Preformatted text" },
    { tag: "<progress>", description: "Progress bar" },
    { tag: "<q>", description: "Short inline quote" },
    { tag: "<rp>", description: "Fallback for ruby" },
    { tag: "<rt>", description: "Ruby text" },
    { tag: "<ruby>", description: "Ruby annotation" },
    { tag: "<s>", description: "Strikethrough text" },
    { tag: "<samp>", description: "Sample program output" },
    { tag: "<script>", description: "Defines client-side script" },
    { tag: "<section>", description: "Defines a section" },
    { tag: "<select>", description: "Drop-down list" },
    { tag: "<slot>", description: "Placeholder in web components" },
    { tag: "<small>", description: "Small text" },
    { tag: "<source>", description: "Multiple media sources" },
    { tag: "<span>", description: "Inline container" },
    { tag: "<strong>", description: "Strong importance" },
    { tag: "<style>", description: "Style definitions" },
    { tag: "<sub>", description: "Subscript text" },
    { tag: "<summary>", description: "Summary for <details>" },
    { tag: "<sup>", description: "Superscript text" },
    { tag: "<svg>", description: "Vector graphics" },
    { tag: "<table>", description: "Table element" },
    { tag: "<tbody>", description: "Table body" },
    { tag: "<td>", description: "Table cell" },
    { tag: "<template>", description: "Client-side content template" },
    { tag: "<textarea>", description: "Multi-line input" },
    { tag: "<tfoot>", description: "Table footer" },
    { tag: "<th>", description: "Table header cell" },
    { tag: "<thead>", description: "Table header" },
    { tag: "<time>", description: "Date/time value" },
    { tag: "<title>", description: "Document title" },
    { tag: "<tr>", description: "Table row" },
    { tag: "<track>", description: "Text tracks for media" },
    { tag: "<u>", description: "Underlined text" },
    { tag: "<ul>", description: "Unordered list" },
    { tag: "<var>", description: "Variable in programming" },
    { tag: "<video>", description: "Embeds video content" },
    { tag: "<wbr>", description: "Line-break opportunity" },
  ];
  const filteredElements = elements.filter(({ tag, description }) =>
    tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
    description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">HTML Element Reference</h1>

        <div className="flex justify-between mb-6">
          <button
            type="button"
            aria-label="Previous"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition"
          >
            <FaChevronLeft />
            Previous
          </button>
          <button
            type="button"
            aria-label="Next"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition"
          >
            Next
            <FaChevronRight />
          </button>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search tags or descriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#04AA6D] focus:outline-none"
          />
        </div>

        <div className="overflow-x-auto bg-[#E7E9EB] rounded-2xl p-4">
          <table className="min-w-full table-auto text-left text-sm text-gray-800">
            <thead>
              <tr className="bg-white border-b">
                <th className="p-3 font-semibold">Tag</th>
                <th className="p-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {filteredElements.length > 0 ? (
                filteredElements.map((el, index) => (
                  <tr key={index} className="bg-white border-b hover:bg-gray-50">
                    <td className="p-3 font-mono text-[#04AA6D]">{el.tag}</td>
                    <td className="p-3">{el.description}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="p-4 text-center text-gray-500">
                    No matching tags found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Alphabet;
