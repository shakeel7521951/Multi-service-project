import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCheck, FaCopy } from "react-icons/fa";

const InstallationSetup = () => {
    const [copied, setCopied] = useState({});

    const installationMethods = [
        {
            title: "Using CDN (Quickest)",
            description: "The fastest way to get started with Tailwind CSS is to use the CDN. Just add this to your HTML:",
            code: `<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">`,
            note: "Note: While quick, CDN method doesn't allow customization and isn't recommended for production."
        },
        {
            title: "Using npm (Recommended)",
            description: "For full customization and production use, install Tailwind via npm:",
            code: `npm install -D tailwindcss
npx tailwindcss init`,
            note: "This creates a tailwind.config.js file for customization."
        },
        {
            title: "PostCSS Setup",
            description: "Add Tailwind to your PostCSS configuration:",
            code: `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}`,
            note: "Add this to your postcss.config.js file."
        },
        {
            title: "Include Tailwind in your CSS",
            description: "Create a CSS file and add the Tailwind directives:",
            code: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
            note: "Import this CSS file in your project."
        },
        {
            title: "Build your CSS",
            description: "Run the CLI tool to process your CSS:",
            code: `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`,
            note: "This watches for changes and rebuilds automatically."
        }
    ];

    const handleCopy = (code, index) => {
        navigator.clipboard
            .writeText(code)
            .then(() => {
                setCopied({ ...copied, [index]: true });
                setTimeout(() => {
                    setCopied(prev => ({ ...prev, [index]: false }));
                }, 1500);
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
                    <h1 className="text-3xl font-extrabold mb-2">Installation & Setup</h1>
                    <p className="text-gray-600 text-lg">
                        Get Tailwind CSS up and running in your project using various installation methods.
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                    <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
                        <FaChevronLeft />
                        Home
                    </button>
                    <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
                        Next: Core Concepts
                        <FaChevronRight />
                    </button>
                </div>

                {/* Prerequisites Section */}
                <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
                    <p className="text-gray-800 mb-4">
                        Before installing Tailwind CSS, make sure you have the following set up:
                    </p>
                    <ul className="list-disc pl-6 text-gray-800 space-y-2">
                        <li>Node.js and npm installed on your system</li>
                        <li>A basic understanding of HTML and CSS</li>
                        <li>A code editor (VS Code recommended)</li>
                        <li>Basic familiarity with command line tools</li>
                    </ul>
                </section>

                {/* Installation Methods */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6">Installation Methods</h2>
                    <div className="space-y-8">
                        {installationMethods.map((method, index) => (
                            <div key={index} className="bg-[#E7E9EB] p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-[#03945F]">{method.title}</h3>
                                <p className="text-gray-700 mb-4">{method.description}</p>

                                <div className="relative">
                                    <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto text-sm">
                                        <code>{method.code}</code>
                                    </pre>
                                    <button
                                        onClick={() => handleCopy(method.code, index)}
                                        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded"
                                    >
                                        {copied[index] ? <FaCheck className="text-green-400" /> : <FaCopy />}
                                    </button>
                                </div>

                                <p className="text-gray-600 mt-3 text-sm italic">{method.note}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Configuration Section */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Configuration File</h2>
                    <p className="text-gray-700 mb-4">
                        After installation, you'll have a <code className="bg-gray-200 px-1 py-0.5 rounded">tailwind.config.js</code> file.
                        This is where you can customize Tailwind to match your design needs.
                    </p>

                    <div className="bg-[#E7E9EB] p-6 rounded-xl">
                        <h3 className="font-bold mb-3">Default Configuration:</h3>
                        <div className="relative">
                            <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto text-sm">
                                <code>{`module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</code>
                            </pre>
                            <button
                                onClick={() => handleCopy(`module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}`, 'config')}
                                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded"
                            >
                                {copied['config'] ? <FaCheck className="text-green-400" /> : <FaCopy />}
                            </button>
                        </div>
                        <p className="text-gray-600 mt-3 text-sm">
                            The <code className="bg-gray-200 px-1 py-0.5 rounded">content</code> array tells Tailwind where to look for your HTML templates.
                        </p>
                    </div>
                </section>

                {/* Verification Section */}
                <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-4">Verify Your Installation</h2>
                    <p className="text-gray-800 mb-4">
                        To verify that Tailwind CSS is working correctly, create a simple HTML file with Tailwind classes:
                    </p>

                    <div className="relative">
                        <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind Test</title>
  <link href="./dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold text-blue-600 text-center mt-10">
    Hello Tailwind!
  </h1>
</body>
</html>`}</code>
                        </pre>
                        <button
                            onClick={() => handleCopy(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind Test</title>
  <link href="./dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold text-blue-600 text-center mt-10">
    Hello Tailwind!
  </h1>
</body>
</html>`, 'verify')}
                            className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded"
                        >
                            {copied['verify'] ? <FaCheck className="text-green-400" /> : <FaCopy />}
                        </button>
                    </div>

                    <p className="text-gray-800 mt-4">
                        If you see styled text, your installation is working correctly!
                    </p>
                </section>

                {/* Navigation */}
                <div className="flex justify-between pt-8">
                    <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
                        <FaChevronLeft />
                        Previous: Home
                    </button>
                    <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
                        Next: Core Concepts
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstallationSetup;