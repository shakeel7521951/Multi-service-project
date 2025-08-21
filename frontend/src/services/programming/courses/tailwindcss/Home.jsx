import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Home = () => {
    const sections = [
        "Installation & Setup",
        "Core Concepts",
        "Typography",
        "Colors & Backgrounds",
        "Layout & Box Model",
        "Flexbox",
        "CSS Grid",
        "Responsive Design",
        "Borders & Effects",
        "Transforms & Transitions",
        "Customization",
        "Components",
        "Forms",
        "Navigation",
        "Cards & Grids",
        "Hero Sections",
        "Dark Mode",
        "Performance",
        "Advanced Techniques",
        "Project Implementation"
    ];

    const tailwindExample = `<div class="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
  <h1 class="text-3xl font-bold text-gray-800 mb-4">Welcome to Tailwind</h1>
  <p class="text-gray-600 mb-4">A utility-first CSS framework for rapidly building custom designs.</p>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Get Started
  </button>
</div>`;

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard
            .writeText(tailwindExample)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
    };

    return (
        <div className="min-h-screen bg-white px-4 py-10">
            <div className="max-w-5xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-start">
                    <h1 className="text-3xl font-extrabold mb-2">Tailwind CSS Fundamentals</h1>
                    <p className="text-gray-600 text-lg">
                        Master modern CSS with utility-first approach using our comprehensive Tailwind CSS guide.
                    </p>
                </div>

                {/* Navigation Top */}
                <div className="flex justify-between">
                    <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
                        <FaChevronLeft />
                        Home
                    </button>
                </div>

                {/* Introduction Section */}
                <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
                    <h2 className="text-3xl font-bold mb-4">Why Learn Tailwind CSS?</h2>
                    <p className="text-gray-800 mb-3">
                        Tailwind CSS is a utility-first CSS framework that enables you to build custom designs
                        without ever leaving your HTML.
                    </p>
                    <p className="text-gray-800 mb-3">
                        It provides low-level utility classes that let you build completely custom designs
                        without writing any custom CSS.
                    </p>
                    <p className="text-gray-800 mb-6">
                        Whether you're building a simple website or a complex web application, Tailwind CSS
                        helps you work faster and maintain consistency in your designs.
                    </p>
                    <button className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold px-6 py-2 rounded">
                        Start Learning Now »
                    </button>
                </section>

                {/* Code Editor Section */}
                <section>
                    <h2 className="text-2xl font-semibold mb-2">
                        Practice with Tailwind CSS
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Try out Tailwind CSS code directly and see how utility classes work together.
                    </p>
                    <div className="bg-[#E7E9EB] p-6 rounded-xl">
                        <h3 className="font-bold mb-3">Example:</h3>
                        <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
                            <code>{tailwindExample}</code>
                        </pre>
                        <button
                            onClick={handleCopy}
                            className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
                        >
                            {copied ? "Copied!" : "Copy Text"}
                        </button>
                    </div>
                </section>

                {/* Tailwind References */}
                <section>
                    <h2 className="text-3xl font-bold mb-4">Tailwind CSS References</h2>
                    <p className="text-gray-700 mb-6 max-w-3xl">
                        Use our comprehensive Tailwind CSS references to find details about utility classes,
                        customization options, and best practices.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {sections.map((ref, idx) => (
                            <button
                                key={idx}
                                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
                            >
                                {ref}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Next Button */}
                <div className="flex justify-end">
                    <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
                        Next: Installation & Setup
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;