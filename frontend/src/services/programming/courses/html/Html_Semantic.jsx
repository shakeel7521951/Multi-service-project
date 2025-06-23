import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Semantic = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Code examples
  const sectionExample = `<section>
  <h1>WWF</h1>
  <p>The World Wide Fund for Nature (WWF) is an international organization working on conservation, research, and restoration of the environment, founded in 1961.</p>
</section>

<section>
  <h1>WWF's Panda Symbol</h1>
  <p>The Panda has become the symbol of WWF, inspired by a panda named Chi Chi transferred from Beijing Zoo to London Zoo.</p>
</section>`;

  const articleExample = `<article>
  <h2>Google Chrome</h2>
  <p>Google Chrome is a web browser developed by Google, released in 2008.</p>
</article>

<article>
  <h2>Mozilla Firefox</h2>
  <p>Mozilla Firefox is an open-source browser developed by Mozilla, released in 2004.</p>
</article>

<article>
  <h2>Microsoft Edge</h2>
  <p>Microsoft Edge is a browser developed by Microsoft, released in 2015 to replace Internet Explorer.</p>
</article>`;

  const headerExample = `<article>
  <header>
    <h1>What Does WWF Do?</h1>
    <p>WWF's mission</p>
  </header>
  <p>WWF works to stop environmental degradation and build a future in which humans live in harmony with nature.</p>
</article>`;

  const footerExample = `<footer>
  <p>Author: Hege Refsnes</p>
  <p><a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>`;

  const navExample = `<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>`;

  const asideExample = `<aside>
  <h4>Epcot Center</h4>
  <p>Epcot is a theme park at Walt Disney World Resort featuring attractions, international pavilions, and fireworks.</p>
</aside>`;

  const figureExample = `<figure>
  <img src="pic_trulli.jpg" alt="Trulli, Puglia, Italy" />
  <figcaption>Fig1. Trulli houses in Puglia, Italy.</figcaption>
</figure>`;

  const detailsExample = `<details>
  <summary>Click to read more</summary>
  <p>This content is hidden until the user clicks.</p>
</details>`;

  const timeExample = `<p>Published on <time datetime="2025-06-21">June 21, 2025</time></p>`;

  // Your requested additional semantic elements table to add at the bottom:
  const semanticElementsTable = (
    <div className="text-gray-800 mb-10 space-y-6">
      <h2 className="text-2xl font-semibold">Why Semantic Elements?</h2>
      <p>
        According to the W3C: <em>"A semantic Web allows data to be shared and reused across applications, enterprises, and communities."</em>
      </p>

      <h2 className="text-2xl font-semibold">Semantic Elements in HTML</h2>
      <p>Below is a list of some of the semantic elements in HTML:</p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-900">
            <tr>
              <th className="border px-4 py-2">Tag</th>
              <th className="border px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 bg-white">
            {[
              ["<article>", "Defines independent, self-contained content"],
              ["<aside>", "Defines content aside from the page content"],
              ["<details>", "Defines additional details that the user can view or hide"],
              ["<figcaption>", "Defines a caption for a <figure> element"],
              ["<figure>", "Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc."],
              ["<footer>", "Defines a footer for a document or section"],
              ["<header>", "Specifies a header for a document or section"],
              ["<main>", "Specifies the main content of a document"],
              ["<mark>", "Defines marked/highlighted text"],
              ["<nav>", "Defines navigation links"],
              ["<section>", "Defines a section in a document"],
              ["<summary>", "Defines a visible heading for a <details> element"],
              ["<time>", "Defines a date/time"],
            ].map(([tag, description], i) => (
              <tr key={i} className="even:bg-gray-50">
                <td className="border px-4 py-2 font-mono">{tag}</td>
                <td className="border px-4 py-2">{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Semantic Elements</h1>

        {/* Existing intro and table */}
        <div className="text-gray-800 mb-10 space-y-6">
          <h2 className="text-2xl font-semibold">Why Semantic Elements?</h2>
          <p>
            According to the W3C:{" "}
            <em>"A semantic Web allows data to be shared and reused across applications, enterprises, and communities."</em>
          </p>

          <h2 className="text-2xl font-semibold">Semantic Elements in HTML</h2>
          <p>Below is a list of some of the semantic elements in HTML:</p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-900">
                <tr>
                  <th className="border px-4 py-2">Tag</th>
                  <th className="border px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-800 bg-white">
                {[
                  ["<article>", "Defines independent, self-contained content"],
                  ["<aside>", "Defines content aside from the page content"],
                  ["<details>", "Defines additional details that the user can view or hide"],
                  ["<figcaption>", "Defines a caption for a <figure> element"],
                  ["<figure>", "Specifies self-contained content like illustrations, diagrams, etc."],
                  ["<footer>", "Defines a footer for a document or section"],
                  ["<header>", "Specifies a header for a document or section"],
                  ["<main>", "Specifies the main content of a document"],
                  ["<mark>", "Defines marked/highlighted text"],
                  ["<nav>", "Defines navigation links"],
                  ["<section>", "Defines a section in a document"],
                  ["<summary>", "Defines a visible heading for a <details> element"],
                  ["<time>", "Defines a date/time"],
                ].map(([tag, desc], idx) => (
                  <tr key={idx} className="even:bg-gray-50">
                    <td className="border px-4 py-2 font-mono">{tag}</td>
                    <td className="border px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mb-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Previous
          </button>
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] transition">
            Next
            <FaChevronRight />
          </button>
        </div>

        {/* Examples Section */}
        <section className="text-gray-800 space-y-8">
          {[
            { title: "<section>", code: sectionExample },
            { title: "<article>", code: articleExample },
            { title: "<header>", code: headerExample },
            { title: "<footer>", code: footerExample },
            { title: "<nav>", code: navExample },
            { title: "<aside>", code: asideExample },
            { title: "<figure> & <figcaption>", code: figureExample },
            { title: "<details> & <summary>", code: detailsExample },
            { title: "<time>", code: timeExample },
          ].map(({ title, code }) => (
            <div key={title}>
              <h2 className="text-2xl font-semibold mb-2">{title} Element</h2>
              <div className="bg-[#E7E9EB] p-5 rounded-2xl">
                <h3 className="font-bold mb-2">Example:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded whitespace-pre-wrap">
                  <code>{code}</code>
                </pre>
                <button
                  onClick={() => handleCopy(code)}
                  className="mt-3 bg-[#04AA6D] hover:bg-[#03945f] text-white px-6 py-2 rounded transition"
                >
                  {copiedCode === code ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Your requested additional semantic elements table at the bottom */}
        {semanticElementsTable}

        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Semantic;

