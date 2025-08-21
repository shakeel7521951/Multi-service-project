import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Typography = () => {
  const typographySections = [
    {
      title: "Font Size",
      description:
        "Tailwind's text size utilities allow you to scale text consistently across your design.",
      example: `<p class="text-sm">This is small text.</p>
<p class="text-lg">This is large text.</p>
<p class="text-2xl">This is extra large text.</p>`,
      explanations: [
        "`text-sm` → sets small font size.",
        "`text-lg` → sets large font size.",
        "`text-2xl` → sets extra large font size (good for headings).",
      ],
    },
    {
      title: "Font Weight",
      description:
        "Font weight utilities let you control the thickness of text.",
      example: `<p class="font-thin">Thin text</p>
<p class="font-normal">Normal text</p>
<p class="font-bold">Bold text</p>`,
      explanations: [
        "`font-thin` → applies very light weight.",
        "`font-normal` → default font weight.",
        "`font-bold` → makes text bold.",
      ],
    },
    {
      title: "Text Color",
      description:
        "Use text color utilities to set foreground colors consistently.",
      example: `<p class="text-red-500">Red Text</p>
<p class="text-green-500">Green Text</p>
<p class="text-blue-500">Blue Text</p>`,
      explanations: [
        "`text-red-500` → sets text color to medium red.",
        "`text-green-500` → sets text color to medium green.",
        "`text-blue-500` → sets text color to medium blue.",
      ],
    },
    {
      title: "Text Alignment",
      description:
        "Align text horizontally using alignment utilities.",
      example: `<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>`,
      explanations: [
        "`text-left` → aligns text to the left.",
        "`text-center` → aligns text to the center.",
        "`text-right` → aligns text to the right.",
      ],
    },
    {
      title: "Line Height",
      description:
        "Control spacing between lines of text with leading utilities.",
      example: `<p class="leading-tight">Tightly spaced lines</p>
<p class="leading-relaxed">Relaxed lines for easier reading</p>`,
      explanations: [
        "`leading-tight` → compact line spacing.",
        "`leading-relaxed` → more open line spacing for readability.",
      ],
    },
    {
      title: "Letter Spacing",
      description:
        "Adjust spacing between characters with tracking utilities.",
      example: `<p class="tracking-tight">Tight letters</p>
<p class="tracking-wide">Wide letters</p>`,
      explanations: [
        "`tracking-tight` → decreases space between letters.",
        "`tracking-wide` → increases space between letters.",
      ],
    },
    {
      title: "Text Transform",
      description:
        "Change capitalization of text using transform utilities.",
      example: `<p class="uppercase">Uppercase Text</p>
<p class="lowercase">lowercase text</p>
<p class="capitalize">Capitalize Text</p>`,
      explanations: [
        "`uppercase` → transforms text to all uppercase.",
        "`lowercase` → transforms text to all lowercase.",
        "`capitalize` → capitalizes the first letter of each word.",
      ],
    },
    {
      title: "Text Decoration",
      description:
        "Decorate text with underline, line-through, or remove decorations.",
      example: `<p class="underline">Underlined Text</p>
<p class="line-through">Line-through Text</p>
<p class="no-underline">No underline</p>`,
      explanations: [
        "`underline` → underlines the text.",
        "`line-through` → draws a line through the text.",
        "`no-underline` → removes text decorations.",
      ],
    },
    {
      title: "Font Style",
      description:
        "Style text as italic or reset it to normal.",
      example: `<p class="italic">Italic Text</p>
<p class="not-italic">Normal Text</p>`,
      explanations: [
        "`italic` → makes text italic.",
        "`not-italic` → ensures text is normal style.",
      ],
    },
  ];

  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">
            Tailwind CSS Typography
          </h1>
          <p className="text-gray-600 text-lg">
            Learn how to style text with Tailwind CSS. Adjust font size, weight,
            color, alignment, spacing, and more using utility classes.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Typography Sections */}
        {typographySections.map((section, idx) => (
          <section
            key={idx}
            className="bg-[#d9eee1] p-8 rounded-lg shadow"
          >
            <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
            <p className="text-gray-800 mb-4">{section.description}</p>
            <div className="bg-white border-l-4 border-[#04AA6D] p-4 rounded font-mono text-sm overflow-x-auto">
              <code>{section.example}</code>
            </div>
            <button
              onClick={() => handleCopy(section.example)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>

            {/* Explanation Block */}
            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
              {section.explanations.map((item, i) => (
                <li key={i}>
                  <code>{item.split("→")[0].trim()}</code> → {item.split("→")[1]}
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next: Colors & Backgrounds
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Typography;
