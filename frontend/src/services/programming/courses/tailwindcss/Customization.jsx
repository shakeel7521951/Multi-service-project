import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Customization = () => {
  const [copied, setCopied] = useState(false);

  const examples = {
    config: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#04AA6D',
        secondary: '#03945f',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};`,
    customColors: `<div class="bg-primary text-white p-4 rounded">Primary Color</div>
<div class="bg-secondary text-white p-4 rounded mt-2">Secondary Color</div>`,
    customFonts: `<h1 class="font-sans text-3xl">Sans Font Heading</h1>
<p class="font-serif text-lg">Serif Font Paragraph</p>`,
    customBreakpoints: `// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
};`,
    plugins: `// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};`,
  };

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
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-extrabold mb-2">
            Tailwind CSS – Customization
          </h1>
          <p className="text-gray-600 text-lg">
            Learn how to customize Tailwind CSS to fit your project: extend themes, add colors, fonts, breakpoints, and plugins.
          </p>
        </header>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* SECTION 1: Tailwind Configuration */}
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Tailwind Configuration</h2>
          <p className="text-gray-700 mb-4">
            Customize Tailwind by editing <code className="bg-gray-100 px-1">tailwind.config.js</code>. You can extend colors, fonts, spacing, and more.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.config}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.config)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>extend</code> → lets you add new values without overriding defaults.</li>
            <li><code>colors.primary</code> → defines custom green (#04AA6D).</li>
            <li><code>colors.secondary</code> → defines secondary shade (#03945f).</li>
            <li><code>fontFamily.sans</code> → sets Inter as default sans font.</li>
          </ul>
        </section>

        {/* SECTION 2: Custom Colors */}
        <section>
          <h2 className="text-2xl font-bold mb-3">2. Custom Colors</h2>
          <p className="text-gray-700 mb-4">
            Extend Tailwind colors in the config and use them with <code className="bg-gray-100 px-1">bg-</code> or <code className="bg-gray-100 px-1">text-</code> classes.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.customColors}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.customColors)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>bg-primary</code> → applies your custom primary color.</li>
            <li><code>bg-secondary</code> → applies secondary green shade.</li>
            <li><code>text-white</code> → ensures text contrasts properly.</li>
            <li><code>p-4</code> → padding inside the box.</li>
            <li><code>rounded</code> → rounded corners for boxes.</li>
            <li><code>mt-2</code> → margin-top spacing between elements.</li>
          </ul>
        </section>

        {/* SECTION 3: Custom Fonts */}
        <section>
          <h2 className="text-2xl font-bold mb-3">3. Custom Fonts</h2>
          <p className="text-gray-700 mb-4">
            Add custom fonts in the Tailwind config and apply them with <code className="bg-gray-100 px-1">font-</code> classes.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.customFonts}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.customFonts)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>font-sans</code> → uses Inter font defined in config.</li>
            <li><code>text-3xl</code> → large heading size.</li>
            <li><code>font-serif</code> → fallback to Tailwind’s serif font.</li>
            <li><code>text-lg</code> → medium size text for paragraph.</li>
          </ul>
        </section>

        {/* SECTION 4: Custom Breakpoints */}
        <section>
          <h2 className="text-2xl font-bold mb-3">4. Custom Breakpoints</h2>
          <p className="text-gray-700 mb-4">
            Define custom screen sizes in Tailwind config to control responsive design precisely.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.customBreakpoints}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.customBreakpoints)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>sm: '480px'</code> → small devices (phones).</li>
            <li><code>md: '768px'</code> → tablets.</li>
            <li><code>lg: '976px'</code> → laptops/desktops.</li>
            <li><code>xl: '1440px'</code> → large screens.</li>
          </ul>
        </section>

        {/* SECTION 5: Plugins */}
        <section>
          <h2 className="text-2xl font-bold mb-3">5. Plugins</h2>
          <p className="text-gray-700 mb-4">
            Tailwind supports official and third-party plugins to extend functionality like forms, typography, and aspect-ratio.
          </p>
          <div className="bg-[#D9EEE1] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{examples.plugins}</code>
            </pre>
            <button
              onClick={() => handleCopy(examples.plugins)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li><code>@tailwindcss/forms</code> → adds better base styles for forms.</li>
            <li><code>@tailwindcss/typography</code> → provides prose utilities for content-rich pages.</li>
          </ul>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next: Layout & Box Model
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customization;
