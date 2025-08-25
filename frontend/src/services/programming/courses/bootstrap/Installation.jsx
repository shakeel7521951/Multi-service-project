import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CodeBlock from "./CodeBlock";
const Installation = () => {
  const bootstrapCDN = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`;

  const bootstrapStarter = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap Example</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <div class="container text-center mt-5">
    <h1 class="text-primary">Bootstrap is Working!</h1>
    <p class="lead">This page is styled with Bootstrap.</p>
    <button class="btn btn-success">Click Me</button>
  </div>

  <!-- Bootstrap Bundle JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-[#f9f9f9] to-[#f0f0f0] px-0 sm:px-4 lg:px-6 py-3 sm:py-10 lg:py-14">
      <div className="max-w-6xl mx-auto space-y-5 sm:space-y-10 lg:space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#04AA6D] drop-shadow">
            Bootstrap Installation & Setup
          </h1>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Before you can start using Bootstrap, you need to include it in your
            project. Bootstrap can be added in two common ways: using a CDN link
            or by downloading it locally. Below, you will learn both methods in
            detail with examples.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/introduction"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            <FaChevronLeft className="text-xs sm:text-sm" /> Introduction
          </Link>

          <Link
            to="/bootstrap/containers"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            Containers <FaChevronRight className="text-xs sm:text-sm" />
          </Link>
        </div>

        {/* CDN Section */}
        <section className="bg-[#D9EEE1] p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            Method 1: Use Bootstrap via CDN
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">
            The simplest way to include Bootstrap in your project is to use a
            CDN (Content Delivery Network). By using this method, you don't need
            to download anything; you just add the Bootstrap CSS and JavaScript
            links into your HTML file.
          </p>

          <h3 className="font-bold mb-3 text-sm sm:text-base">
            Copy and paste this into the head of your HTML:
          </h3>
          <CodeBlock code={bootstrapCDN} />

          <p className="text-gray-800 mt-4 sm:mt-6 leading-relaxed text-sm sm:text-base">
            The CSS link should go inside the <code>&lt;head&gt;</code> section,
            while the JavaScript bundle should be placed before the closing{" "}
            <code>&lt;/body&gt;</code> tag.
          </p>
        </section>

        {/* Starter Template */}
        <section className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            Bootstrap Starter Template
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">
            Here is a complete starter HTML page that includes Bootstrap. You
            can save this file as <code>index.html</code> and open it in your
            browser to confirm Bootstrap is working.
          </p>

          <CodeBlock code={bootstrapStarter} />
        </section>

        {/* Download Section */}
        <section className="bg-[#D9EEE1] p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-[#04AA6D]/30">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            Method 2: Download Bootstrap Locally
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">
            If you prefer to host Bootstrap yourself, you can download the files
            and include them locally in your project. This method is helpful if
            you need to work offline or want full control over your
            dependencies.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-sm sm:text-base">
            <li>
              Go to the official website:{" "}
              <a
                href="https://getbootstrap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-words"
              >
                getbootstrap.com
              </a>
            </li>
            <li>Download the latest version of Bootstrap.</li>
            <li>
              Extract the files and link{" "}
              <code className="break-words">bootstrap.min.css</code> and{" "}
              <code className="break-words">bootstrap.bundle.min.js</code> into
              your HTML file.
            </li>
          </ul>
        </section>

        {/* Package Managers */}
        <section className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-[#04AA6D]">
            Method 3: Install Bootstrap with Package Managers
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed text-sm sm:text-base">
            Bootstrap can also be installed via popular package managers like{" "}
            <strong>npm</strong> or <strong>yarn</strong>. This method is
            commonly used in React, Angular, and Vue projects.
          </p>
          <div className="bg-[#E7E9EB] p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-inner border border-gray-300 space-y-3">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-3 sm:p-4 font-mono text-xs sm:text-sm rounded-lg overflow-x-auto shadow">
              <code>npm install bootstrap</code>
            </pre>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-3 sm:p-4 font-mono text-xs sm:text-sm rounded-lg overflow-x-auto shadow">
              <code>yarn add bootstrap</code>
            </pre>
          </div>
          <p className="text-gray-800 mt-4 leading-relaxed text-sm sm:text-base">
            After installation, import Bootstrap in your project entry file,
            usually <code>index.js</code> or <code>App.js</code>:
          </p>
          <pre className="bg-white border-l-4 border-[#04AA6D] p-3 sm:p-4 font-mono text-xs sm:text-sm rounded-lg overflow-x-auto shadow mt-3">
            <code>import 'bootstrap/dist/css/bootstrap.min.css';</code>
          </pre>
        </section>

        {/* Bottom Navigation */}
        <div className="flex sm:flex-row justify-between gap-4 sm:gap-0">
          <Link
            to="/bootstrap/introduction"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            <FaChevronLeft className="text-xs sm:text-sm" /> Introduction
          </Link>

          <Link
            to="/bootstrap/containers"
            className="flex items-center justify-center gap-2 bg-[#04AA6D] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#03945f] transition transform hover:scale-105 text-sm sm:text-base"
          >
            Containers <FaChevronRight className="text-xs sm:text-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Installation;
