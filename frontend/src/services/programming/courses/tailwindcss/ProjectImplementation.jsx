import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectImplementation = () => {
  const implementationSections = [
    {
      title: "Setting Up Tailwind CSS",
      description:
        "Start by installing Tailwind CSS into your project and configuring it with PostCSS or your chosen build tool.",
      example: `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`,
      explanations: [
        "`npm install -D tailwindcss postcss autoprefixer` → installs Tailwind and required dependencies.",
        "`npx tailwindcss init -p` → creates Tailwind and PostCSS config files.",
      ],
    },
    {
      title: "Configure Tailwind Paths",
      description:
        "Ensure Tailwind scans your source files by defining paths in the config file.",
      example: `// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`,
      explanations: [
        "`content` → tells Tailwind which files to scan for classes.",
        "`./src/**/*.{js,jsx,ts,tsx,html}` → covers React or HTML projects.",
      ],
    },
    {
      title: "Include Tailwind in CSS",
      description:
        "Import Tailwind's base, components, and utilities into your main CSS file.",
      example: `/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`,
      explanations: [
        "`@tailwind base` → includes default styles like resets.",
        "`@tailwind components` → includes pre-built component styles.",
        "`@tailwind utilities` → enables utility classes for styling.",
      ],
    },
    {
      title: "Building Layout",
      description:
        "Use Tailwind utilities to quickly build responsive layouts.",
      example: `<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-200 p-4">1</div>
  <div class="bg-blue-300 p-4">2</div>
  <div class="bg-blue-400 p-4">3</div>
</div>`,
      explanations: [
        "`grid grid-cols-3` → creates a 3-column grid.",
        "`gap-4` → adds spacing between grid items.",
        "`bg-blue-200/300/400` → applies different shades of blue.",
      ],
    },
    {
      title: "Responsive Design",
      description:
        "Tailwind makes it easy to design for different screen sizes using breakpoints.",
      example: `<div class="p-4 bg-green-200 sm:bg-green-300 md:bg-green-400 lg:bg-green-500">
  Responsive Box
</div>`,
      explanations: [
        "`sm:bg-green-300` → applies green-300 background from small screens upward.",
        "`md:bg-green-400` → changes background at medium screens.",
        "`lg:bg-green-500` → further updates background at large screens.",
      ],
    },
    {
      title: "Deploying Project",
      description:
        "Tailwind automatically purges unused CSS in production for optimized builds.",
      example: `// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
};`,
      explanations: [
        "`content` → ensures Tailwind removes unused styles in production.",
        "`purging unused CSS` → results in smaller build size and faster performance.",
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
            Tailwind CSS Project Implementation
          </h1>
          <p className="text-gray-600 text-lg">
            Step-by-step guide on setting up and implementing Tailwind CSS in a project, from installation to deployment.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Implementation Sections */}
        {implementationSections.map((section, idx) => (
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
            Next: Typography
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectImplementation;
