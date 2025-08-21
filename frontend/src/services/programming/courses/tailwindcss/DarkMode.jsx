import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaCheck } from "react-icons/fa";

const DarkModeCoreConcepts = () => {
  // Initialize dark mode for each section from localStorage
  const [darkModes, setDarkModes] = useState(() => {
    return {
      utility: localStorage.getItem("dark_utility") === "true",
      responsive: localStorage.getItem("dark_responsive") === "true",
      flexbox: localStorage.getItem("dark_flexbox") === "true",
      grid: localStorage.getItem("dark_grid") === "true",
      typography: localStorage.getItem("dark_typography") === "true",
    };
  });

  // Save dark mode state to localStorage
  useEffect(() => {
    Object.entries(darkModes).forEach(([key, value]) => {
      localStorage.setItem(`dark_${key}`, value);
    });
  }, [darkModes]);

  const toggleDark = (key) => {
    setDarkModes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const [copied, setCopied] = useState("");

  // 🔹 Example snippets
  const examples = {
    utility: `<p class="text-xl font-bold text-blue-600 dark:text-blue-400">
  Tailwind is Utility-First!
</p>`,
    responsive: `<div class="bg-red-400 dark:bg-red-800 sm:bg-green-400 dark:sm:bg-green-800 md:bg-blue-400 dark:md:bg-blue-800 lg:bg-purple-400 dark:lg:bg-purple-800 xl:bg-pink-400 dark:xl:bg-pink-800 p-6 text-white rounded-lg">
  Resize the screen to see background change
</div>`,
    flex: `<div class="flex space-x-4 dark:space-x-6">
  <div class="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded">Box 1</div>
  <div class="bg-green-500 dark:bg-green-700 text-white px-4 py-2 rounded">Box 2</div>
  <div class="bg-red-500 dark:bg-red-700 text-white px-4 py-2 rounded">Box 3</div>
</div>`,
    grid: `<div class="grid grid-cols-3 gap-4 dark:gap-6">
  <div class="bg-blue-500 dark:bg-blue-700 text-white p-4 rounded">1</div>
  <div class="bg-green-500 dark:bg-green-700 text-white p-4 rounded">2</div>
  <div class="bg-red-500 dark:bg-red-700 text-white p-4 rounded">3</div>
</div>`,
    typography: `<h1 class="text-4xl font-extrabold text-gray-800 dark:text-gray-200">
  Typography Example
</h1>
<p class="text-lg text-gray-600 dark:text-gray-400">
  Tailwind gives you full control of font size, weight, and color.
</p>`,
  };

  const handleCopy = (code, key) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(key);
        setTimeout(() => setCopied(""), 1500);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  const ConceptSection = ({ title, description, exampleKey, darkKey, children }) => (
    <section 
      className={`cursor-pointer p-8 rounded-xl transition-all duration-500 mb-10 shadow-lg
                  ${darkModes[darkKey] 
                    ? "bg-gray-800 text-white" 
                    : "bg-gray-100 text-gray-900"
                  } hover:scale-[1.02]`}
      onClick={() => toggleDark(darkKey)}
    >
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold">
          {darkModes[darkKey] ? `${title} - Dark` : `${title} - Light`}
        </h2>
        <span className="text-sm px-2 py-1 rounded bg-gray-200 dark:bg-gray-700">
          Click anywhere to toggle
        </span>
      </div>
      
      <p className="mb-6">
        {description}
      </p>

      <div className={`p-6 rounded-xl ${darkModes[darkKey] ? "bg-gray-700" : "bg-[#D9EEE1]"}`}>
        <pre className={`${darkModes[darkKey] ? "bg-gray-600 text-gray-200" : "bg-white"} border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto`}>
          <code>{examples[exampleKey]}</code>
        </pre>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleCopy(examples[exampleKey], exampleKey);
          }}
          className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-4 py-2 rounded transition"
        >
          {copied === exampleKey ? <FaCheck /> : <FaCopy />}
          {copied === exampleKey ? "Copied!" : "Copy Code"}
        </button>
      </div>

      {children}
    </section>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4 py-10 transition-colors duration-300 mx-auto max-w-4xl">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* 🔹 Header */}
        <header className="text-center">
          <h1 className="text-3xl font-extrabold mb-2 text-gray-900 dark:text-white">
            Tailwind CSS – Core Concepts with Dark Mode
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Each section has independent dark mode. Click anywhere in a section to toggle.
          </p>
        </header>

        {/* 🔹 Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* 🔹 SECTION 1: Utility-First Classes */}
        <ConceptSection
          title="1. Utility-First Classes"
          description="Tailwind CSS uses utility classes like text-xl, font-bold, and bg-blue-600 to apply styles directly in your markup. This avoids writing custom CSS and speeds up development."
          exampleKey="utility"
          darkKey="utility"
        >
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">text-xl</code> → sets font size to <b>extra-large</b>.
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">font-bold</code> → makes text <b>bold</b>.
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">text-blue-600</code> → applies a <b>blue</b> color shade.
            </li>
          </ul>
        </ConceptSection>

        {/* 🔹 SECTION 2: Responsive Design */}
        <ConceptSection
          title="2. Responsive Design"
          description="Tailwind makes responsive design simple with prefixes like sm:, md:, lg:, and xl:. These apply styles at specific breakpoints."
          exampleKey="responsive"
          darkKey="responsive"
        >
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">sm:bg-green-400</code> → applies green background on <b>small screens</b> and up.
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">md:bg-blue-400</code> → applies blue background on <b>medium screens</b> and up.
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">lg:bg-purple-400</code> → applies purple background on <b>large screens</b>.
            </li>
          </ul>
        </ConceptSection>

        {/* 🔹 SECTION 3: Flexbox */}
        <ConceptSection
          title="3. Flexbox"
          description="Tailwind provides utilities like flex, items-center, and justify-between for building layouts with Flexbox."
          exampleKey="flex"
          darkKey="flexbox"
        >
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">flex</code> → turns container into a flexbox.
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">space-x-4</code> → adds horizontal spacing between children.
            </li>
          </ul>
        </ConceptSection>

        {/* 🔹 SECTION 4: Grid */}
        <ConceptSection
          title="4. CSS Grid"
          description="Tailwind makes grids simple with classes like grid-cols-3 and gap-4."
          exampleKey="grid"
          darkKey="grid"
        >
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">grid</code> → enables CSS Grid layout.
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">grid-cols-3</code> → creates a grid with 3 equal columns.
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">gap-4</code> → adds spacing between grid items.
            </li>
          </ul>
        </ConceptSection>

        {/* 🔹 SECTION 5: Typography */}
        <ConceptSection
          title="5. Typography"
          description="Tailwind gives fine-grained control over text with classes like text-4xl, font-extrabold, and text-gray-600."
          exampleKey="typography"
          darkKey="typography"
        >
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">text-4xl</code> → sets very large font size.
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">font-extrabold</code> → makes text extremely bold.
            </li>
            <li>
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">text-gray-600</code> → applies medium gray color.
            </li>
          </ul>
        </ConceptSection>

        {/* 🔹 Next Button */}
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

export default DarkModeCoreConcepts;