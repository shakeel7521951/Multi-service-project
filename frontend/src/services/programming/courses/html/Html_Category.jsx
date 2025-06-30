import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi"; // React Icon
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Category = () => {
  const [expanded, setExpanded] = useState({});

  const toggleCategory = (category) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const data = [
    {
      category: "Basic HTML",
      elements: [
        ["<!DOCTYPE>", "Defines the document type"],
        ["<html>", "Defines an HTML document"],
        ["<head>", "Contains metadata/information for the document"],
        ["<title>", "Defines a title for the document"],
        ["<body>", "Defines the document's body"],
        ["<h1> to <h6>", "Defines HTML headings"],
        ["<p>", "Defines a paragraph"],
        ["<br>", "Inserts a single line break"],
        ["<hr>", "Defines a thematic change in the content"],
        ["<!--...-->", "Defines a comment"],
      ],
    },
    {
      category: "Formatting",
      elements: [
        ["<acronym>", "Not supported in HTML5. Use <abbr> instead."],
        ["<abbr>", "Defines an abbreviation or an acronym"],
        ["<address>", "Defines contact information"],
        ["<b>", "Defines bold text"],
        ["<bdi>", "Isolates text with different direction"],
        ["<bdo>", "Overrides text direction"],
        ["<big>", "Not supported in HTML5. Use CSS instead."],
        ["<blockquote>", "Defines a quote from another source"],
        ["<center>", "Not supported in HTML5. Use CSS instead."],
        ["<cite>", "Defines the title of a work"],
        ["<code>", "Defines computer code"],
        ["<del>", "Deleted text"],
        ["<dfn>", "Specifies a term being defined"],
        ["<em>", "Emphasized text"],
        ["<font>", "Not supported in HTML5. Use CSS instead."],
        ["<i>", "Alternate voice or mood"],
        ["<ins>", "Inserted text"],
        ["<kbd>", "Keyboard input"],
        ["<mark>", "Highlighted text"],
        ["<meter>", "Scalar measurement"],
        ["<pre>", "Preformatted text"],
        ["<progress>", "Progress of a task"],
        ["<q>", "Short quotation"],
        ["<rp>", "Fallback for ruby annotation"],
        ["<rt>", "Pronunciation of characters"],
        ["<ruby>", "Ruby annotation"],
        ["<s>", "Strikethrough (no longer correct)"],
        ["<samp>", "Sample output"],
        ["<small>", "Smaller text"],
        ["<strike>", "Deprecated. Use <del> or <s> instead."],
        ["<strong>", "Important text"],
        ["<sub>", "Subscripted text"],
        ["<sup>", "Superscripted text"],
        ["<template>", "Hidden content container"],
        ["<time>", "Specific time or datetime"],
        ["<tt>", "Deprecated. Use CSS instead."],
        ["<u>", "Unarticulated styled text"],
        ["<var>", "Variable"],
        ["<wbr>", "Possible line-break"],
      ],
    },
    {
      category: "Forms and Input",
      elements: [
        ["<form>", "Defines an HTML form"],
        ["<input>", "Defines an input control"],
        ["<textarea>", "Multiline input control"],
        ["<button>", "Clickable button"],
        ["<select>", "Drop-down list"],
        ["<optgroup>", "Group of related options"],
        ["<option>", "Option in a drop-down list"],
        ["<label>", "Label for an input element"],
        ["<fieldset>", "Groups related form elements"],
        ["<legend>", "Caption for a fieldset"],
        ["<datalist>", "List of predefined options"],
        ["<output>", "Result of a calculation"],
      ],
    },
    {
      category: "Frames",
      elements: [
        ["<frame>", "Not supported in HTML5"],
        ["<frameset>", "Not supported in HTML5"],
        ["<noframes>", "Not supported in HTML5"],
        ["<iframe>", "Defines an inline frame"],
      ],
    },
    {
      category: "Images",
      elements: [
        ["<img>", "Defines an image"],
        ["<map>", "Client-side image map"],
        ["<area>", "Area inside an image map"],
        ["<canvas>", "Graphics via JavaScript"],
        ["<figcaption>", "Caption for <figure>"],
        ["<figure>", "Self-contained content"],
        ["<picture>", "Container for multiple images"],
        ["<svg>", "SVG graphics container"],
      ],
    },
    {
      category: "Audio / Video",
      elements: [
        ["<audio>", "Defines sound content"],
        ["<source>", "Multiple media resources"],
        ["<track>", "Text tracks for media"],
        ["<video>", "Defines a video"],
      ],
    },
    {
      category: "Links",
      elements: [
        ["<a>", "Defines a hyperlink"],
        ["<link>", "External resource (like CSS)"],
        ["<nav>", "Navigation links"],
      ],
    },
    {
      category: "Lists",
      elements: [
        ["<menu>", "Alternative unordered list"],
        ["<ul>", "Unordered list"],
        ["<ol>", "Ordered list"],
        ["<li>", "List item"],
        ["<dir>", "Deprecated. Use <ul> instead."],
        ["<dl>", "Description list"],
        ["<dt>", "Term/name in a description list"],
        ["<dd>", "Description of a term/name"],
      ],
    },
    {
      category: "Tables",
      elements: [
        ["<table>", "Defines a table"],
        ["<caption>", "Table caption"],
        ["<th>", "Header cell"],
        ["<tr>", "Table row"],
        ["<td>", "Table cell"],
        ["<thead>", "Groups table headers"],
        ["<tbody>", "Groups table body"],
        ["<tfoot>", "Groups table footer"],
        ["<col>", "Column properties"],
        ["<colgroup>", "Column group formatting"],
      ],
    },
    {
      category: "Styles and Semantics",
      elements: [
        ["<style>", "Style info for document"],
        ["<div>", "Section in a document"],
        ["<span>", "Inline section"],
        ["<header>", "Header section"],
        ["<hgroup>", "Heading group"],
        ["<footer>", "Footer section"],
        ["<main>", "Main content"],
        ["<section>", "Document section"],
        ["<search>", "Search section"],
        ["<article>", "Defines an article"],
        ["<aside>", "Content aside from main"],
        ["<details>", "Expandable details"],
        ["<dialog>", "Dialog box"],
        ["<summary>", "Heading for <details>"],
        ["<data>", "Machine-readable content"],
      ],
    },
    {
      category: "Meta Info",
      elements: [
        ["<head>", "Document metadata"],
        ["<meta>", "Metadata"],
        ["<base>", "Base URL for relative URLs"],
        ["<basefont>", "Deprecated. Use CSS instead."],
      ],
    },
    {
      category: "Programming",
      elements: [
        ["<script>", "Client-side script"],
        ["<noscript>", "Alternative for unsupported JS"],
        ["<applet>", "Deprecated. Use <embed> or <object>"],
        ["<embed>", "External resource container"],
        ["<object>", "Container for external resource"],
        ["<param>", "Parameter for object"],
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          HTML Element Reference - By Category
        </h1>
 <div className="flex justify-between mb-10">
                  <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
                    <FaChevronLeft />
                    Previous
                  </button>
                </div>
        {data.map((section) => {
          const isOpen = expanded[section.category];
          return (
            <div key={section.category} className="mb-6 border rounded-lg shadow-sm">
              <button
                onClick={() => toggleCategory(section.category)}
                className="w-full flex justify-between items-center px-5 py-3 bg-[#04AA6D] text-white font-semibold text-lg rounded-t hover:bg-[#03945f] transition"
              >
                <span>{section.category}</span>
                <FiChevronDown
                  className={`ml-2 text-white transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  size={20}
                />
              </button>

              {isOpen && (
                <div className="p-5 bg-[#f9f9f9] rounded-b">
                  <table className="w-full text-sm table-auto border-collapse">
                    <thead>
                      <tr className="text-left border-b border-gray-300">
                        <th className="py-2 pr-4">Tag</th>
                        <th className="py-2">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.elements.map(([tag, desc], i) => (
                        <tr key={i} className="border-b border-gray-200 hover:bg-white">
                          <td className="py-2 pr-4 font-mono text-[#04AA6D]">{tag}</td>
                          <td className="py-2">{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
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

export default Html_Category;
