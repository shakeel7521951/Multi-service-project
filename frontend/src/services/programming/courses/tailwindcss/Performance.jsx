import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Performance = () => {
  const performanceSections = [
    {
      title: "Tree-Shaking with Purge",
      description:
        "Tailwind removes unused CSS classes in production builds, keeping bundle size small. Configure `content` paths in tailwind.config.js.",
      example: `// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: { extend: {} },
  plugins: [],
};`,
      explanations: [
        "`content` → tells Tailwind which files to scan for class names.",
        "Unused classes not found in these files are removed from production CSS.",
      ],
    },
    {
      title: "JIT Mode (Just-in-Time)",
      description:
        "JIT compiles styles on-demand, making builds faster and supporting arbitrary values.",
      example: `// tailwind.config.js
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
};`,
      explanations: [
        "`mode: 'jit'` → enables Just-in-Time mode.",
        "Arbitrary values like `bg-[#04AA6D]` or `w-[72px]` become available instantly.",
      ],
    },
    {
      title: "Minimizing CSS Size",
      description:
        "In production, Tailwind automatically minifies CSS to reduce file size.",
      example: `// In package.json
"scripts": {
  "build": "NODE_ENV=production vite build"
}`,
      explanations: [
        "`NODE_ENV=production` → tells Tailwind to optimize and minify output.",
        "Reduces CSS size by removing comments, whitespace, and unused styles.",
      ],
    },
    {
      title: "Extracting Components",
      description:
        "Use reusable classes with `@apply` in your CSS to keep HTML cleaner and improve maintainability.",
      example: `/* styles.css */
.btn-primary {
  @apply bg-[#04AA6D] text-white px-4 py-2 rounded hover:bg-[#03945f];
}`,
      explanations: [
        "`@apply` → allows you to combine multiple utilities into one class.",
        "This reduces repetitive inline utility clutter in templates.",
      ],
    },
    {
      title: "Optimizing for Large Projects",
      description:
        "For big projects, reduce rebuild time by narrowing down content paths and caching node_modules.",
      example: `// tailwind.config.js
module.exports = {
  content: ["./src/components/**/*.{js,jsx}", "./public/index.html"],
};`,
      explanations: [
        "Narrow `content` paths → avoids scanning unnecessary files.",
        "Improves rebuild speed and performance in dev mode.",
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
            Tailwind CSS Performance
          </h1>
          <p className="text-gray-600 text-lg">
            Learn how to optimize Tailwind CSS for performance. Use tree-shaking,
            JIT mode, minification, and smart configuration to keep your project
            fast and lightweight.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Performance Sections */}
        {performanceSections.map((section, idx) => (
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
                  {item.includes("→") ? (
                    <>
                      <code>{item.split("→")[0].trim()}</code> →{" "}
                      {item.split("→")[1]}
                    </>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next: Advanced Techniques
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Performance;
