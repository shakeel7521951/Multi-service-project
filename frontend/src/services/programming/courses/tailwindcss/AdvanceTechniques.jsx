import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AdvancedTechniques = () => {
  const advancedSections = [
    {
      title: "Responsive Design",
      description:
        "Tailwind makes it easy to apply styles at specific breakpoints with responsive prefixes.",
      example: `<div class="text-base md:text-lg lg:text-2xl">
  Responsive text size
</div>`,
      explanations: [
        "`text-base` → default font size.",
        "`md:text-lg` → applies large text on medium screens and above.",
        "`lg:text-2xl` → applies extra-large text on large screens and above.",
      ],
    },
    {
      title: "Dark Mode",
      description:
        "Easily toggle styles for dark mode using the `dark:` prefix.",
      example: `<div class="bg-white text-black dark:bg-gray-900 dark:text-white">
  Dark mode ready
</div>`,
      explanations: [
        "`bg-white text-black` → light mode styling.",
        "`dark:bg-gray-900` → sets background when dark mode is active.",
        "`dark:text-white` → sets text color in dark mode.",
      ],
    },
    {
      title: "Hover, Focus & State Variants",
      description:
        "Apply different styles when users interact with elements (hover, focus, active, etc).",
      example: `<button class="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
  Hover & Focus Me
</button>`,
      explanations: [
        "`hover:bg-blue-700` → darkens the button on hover.",
        "`focus:ring-2` → applies a ring when focused.",
        "`focus:ring-blue-400` → makes the ring blue.",
      ],
    },
    {
      title: "Group Hover",
      description:
        "Use `group` and `group-hover` utilities to style child elements when the parent is hovered.",
      example: `<div class="group p-4 bg-gray-200">
  <p class="group-hover:text-red-500">Hover parent to change me</p>
</div>`,
      explanations: [
        "`group` → applied to parent to track hover state.",
        "`group-hover:text-red-500` → child text turns red when parent is hovered.",
      ],
    },
    {
      title: "Arbitrary Values",
      description:
        "Use square brackets `[]` to apply custom values not in Tailwind's default scale.",
      example: `<div class="mt-[23px] bg-[#1DA1F2] w-[250px]">
  Custom spacing, width, and color
</div>`,
      explanations: [
        "`mt-[23px]` → margin-top of 23px.",
        "`bg-[#1DA1F2]` → custom hex background color.",
        "`w-[250px]` → sets width to 250px.",
      ],
    },
    {
      title: "Animations",
      description:
        "Use built-in animation utilities or define your own in the config.",
      example: `<div class="animate-bounce w-10 h-10 bg-green-500"></div>`,
      explanations: [
        "`animate-bounce` → applies Tailwind's bounce animation.",
        "`w-10 h-10 bg-green-500` → styles the animated box.",
      ],
    },
    {
      title: "Custom Utilities (Using @apply)",
      description:
        "Use `@apply` in your CSS to create reusable utility classes.",
      example: `/* styles.css */
.btn {
  @apply px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-700;
}`,
      explanations: [
        "`@apply` → lets you compose Tailwind utilities inside CSS.",
        "`.btn` → creates a reusable button class.",
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
            Tailwind CSS Advanced Techniques
          </h1>
          <p className="text-gray-600 text-lg">
            Master advanced Tailwind techniques like responsive design, dark
            mode, state variants, animations, and custom utilities.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Customization
          </button>
        </div>

        {/* Advanced Sections */}
        {advancedSections.map((section, idx) => (
          <section key={idx} className="bg-[#d9eee1] p-8 rounded-lg shadow">
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
            Next: Forms
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTechniques;
