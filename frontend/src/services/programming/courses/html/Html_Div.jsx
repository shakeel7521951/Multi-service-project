import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Div = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const exampleBasicDiv = `Lorem Ipsum <div>I am a div</div> dolor sit amet.`;

  const exampleContainer = `<div>
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>London has over 9 million inhabitants.</p>
</div>`;

  const exampleCenterAlign = `<style>
div {
  width: 300px;
  margin: auto;
}
</style>`;

  const exampleMultipleDivs = `<div>
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>London has over 9 million inhabitants.</p>
</div>

<div>
  <h2>Oslo</h2>
  <p>Oslo is the capital city of Norway.</p>
  <p>Oslo has over 700,000 inhabitants.</p>
</div>

<div>
  <h2>Rome</h2>
  <p>Rome is the capital city of Italy.</p>
  <p>Rome has over 4 million inhabitants.</p>
</div>`;

  const exampleFloat = `<style>
.mycontainer {
  width: 100%;
  overflow: auto;
}
.mycontainer div {
  width: 33%;
  float: left;
}
</style>`;

  const exampleInlineBlock = `<style>
div {
  width: 30%;
  display: inline-block;
}
</style>`;

  const exampleFlex = `<style>
.mycontainer {
  display: flex;
}
.mycontainer > div {
  width: 33%;
}
</style>`;

  const exampleGrid = `<style>
.grid-container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
</style>`;

  const sections = [
    {
      title: "The HTML <div> Element",
      content: [
        "The <div> element is used as a container for other HTML elements.",
        "It is a block-level element, taking up the full width available."
      ],
      code: exampleBasicDiv,
    },
    {
      title: "<div> as a Container",
      content: [
        "The <div> element is often used to group sections of a web page together.",
      ],
      code: exampleContainer,
    },
    {
      title: "Center Align a <div> Element",
      content: [
        "To center a div that is not full-width, you can set `margin: auto` in CSS.",
      ],
      code: exampleCenterAlign,
    },
    {
      title: "Multiple <div> Elements",
      content: [
        "You can use many <div> containers on the same page for different content sections.",
      ],
      code: exampleMultipleDivs,
    },
    {
      title: "Aligning <div> Elements Side-by-Side: Float",
      content: [
        "Using `float: left` to align multiple divs next to each other is a classic method.",
      ],
      code: exampleFloat,
    },
    {
      title: "Aligning with Inline-Block",
      content: [
        "Using `display: inline-block` avoids line breaks and aligns divs horizontally.",
      ],
      code: exampleInlineBlock,
    },
    {
      title: "Aligning with Flex",
      content: [
        "Flexbox is a modern, powerful layout method for flexible alignment.",
      ],
      code: exampleFlex,
    },
    {
      title: "Aligning with Grid",
      content: [
        "CSS Grid is used for layout using rows and columns, making complex designs easier.",
      ],
      code: exampleGrid,
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML &lt;div&gt; Element</h1>

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
          {sections.map((sec, idx) => (
            <div key={idx} className="mb-12">
              <h3 className="text-2xl font-semibold mb-2">{sec.title}</h3>
              {sec.content.map((para, pidx) => (
                <p key={pidx} className="mb-4">{para}</p>
              ))}

              <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mt-4">
                <h4 className="font-bold mb-3">Example:</h4>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
                  <code>{sec.code}</code>
                </pre>
                <button
                  onClick={() => handleCopy(sec.code)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
                >
                  {copiedCode === sec.code ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>
          ))}
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

export default Html_Div;

