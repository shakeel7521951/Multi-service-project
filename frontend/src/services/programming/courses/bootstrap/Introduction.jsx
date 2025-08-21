// src/pages/bootstrap/Introduction.jsx
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Introduction = () => {
  const bootstrapExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap Example</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <div class="container mt-5 text-center">
    <h1 class="text-primary">Hello, Bootstrap!</h1>
    <p class="lead">This is a simple page styled with Bootstrap.</p>
    <button class="btn btn-success">Click Me</button>
  </div>

  <!-- Bootstrap Bundle JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(bootstrapExample)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Introduction
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Bootstrap is the world’s most popular front-end framework for
            building responsive and mobile-first websites. It provides ready-to-use
            HTML, CSS, and JavaScript components that help you design professional
            websites faster and easier.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Bootstrap
          </Link>

          <Link
            to="/bootstrap/installation-setup"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Installation & Setup <FaChevronRight />
          </Link>
        </div>

        {/* What is Bootstrap */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            What is Bootstrap?
          </h2>
          <p className="text-gray-800 mb-3 leading-relaxed">
            Bootstrap is a free, open-source front-end framework created by
            Twitter developers. It includes responsive layouts, powerful CSS
            classes, and ready-to-use JavaScript components that make web
            development faster and easier.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
            <li>Responsive grid system for layouts</li>
            <li>Pre-designed components like buttons, navbars, modals, and cards</li>
            <li>Mobile-first approach for modern devices</li>
            <li>Customizable with your own CSS or Sass</li>
          </ul>
        </section>

        {/* Why use Bootstrap */}
        <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Why Use Bootstrap?
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Bootstrap has become the most widely used framework because it saves
            time and ensures consistency in design. Whether you are a beginner or
            a professional developer, Bootstrap provides you with tools to create
            beautiful websites with minimal effort.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Easy to learn and implement</li>
            <li>Fast development with prebuilt classes</li>
            <li>Responsive design out of the box</li>
            <li>Large community and documentation</li>
            <li>Cross-browser compatibility</li>
          </ul>
        </section>

        {/* Example Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">
            Example: A Simple Bootstrap Page
          </h2>
          <p className="text-gray-700 mb-4">
            Below is a simple Bootstrap starter page. Save this as{" "}
            <code>index.html</code> and open it in your browser.
          </p>
          <div className="bg-[#E7E9EB] p-6 rounded-2xl shadow-inner border border-gray-300">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded-lg overflow-x-auto shadow">
              <code>{bootstrapExample}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-5 px-6 py-2 rounded-lg shadow transition transform hover:scale-105"
            >
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-[#D9EEE1] p-10 rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-3xl font-bold mb-5 text-[#04AA6D]">
            Key Features of Bootstrap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
            <div>
              <h3 className="font-bold mb-2">Grid System</h3>
              <p className="mb-4">
                Build flexible and responsive layouts with rows and columns.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Responsive Design</h3>
              <p className="mb-4">
                Works on all screen sizes from mobile to desktop without extra
                effort.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Components</h3>
              <p className="mb-4">
                Buttons, navbars, modals, forms, alerts, carousels, and many more.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Utilities</h3>
              <p>
                Quick classes for spacing, colors, typography, borders, shadows,
                and more.
              </p>
            </div>
          </div>
        </section>

        {/* Next Step */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#04AA6D]">Next Step</h2>
          <p className="text-gray-700">
            Now that you know what Bootstrap is and why it is useful, the next
            step is to learn how to{" "}
            <Link
              to="/bootstrap/installation-setup"
              className="text-[#04AA6D] font-semibold hover:underline"
            >
              Install and Set Up Bootstrap
            </Link>{" "}
            in your project.
          </p>
        </section>

        {/* Bottom Navigation */}
        <div className="flex justify-between">
          <Link
            to="/bootstrap"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            <FaChevronLeft /> Bootstrap
          </Link>

          <Link
            to="/bootstrap/installation-setup"
            className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105"
          >
            Installation & Setup <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
