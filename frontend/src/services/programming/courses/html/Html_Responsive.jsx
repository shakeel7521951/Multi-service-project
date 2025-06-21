import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Responsive = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const viewportCode = `<meta name="viewport" content="width=device-width, initial-scale=1.0">`;
  const widthImageExample = `<img src="img_girl.jpg" style="width:100%;">`;
  const maxWidthImageExample = `<img src="img_girl.jpg" style="max-width:100%;height:auto;">`;
  const pictureExample = `<picture>
  <source srcset="https://images.unsplash.com/photo-1618221195710-dd6b41faaea5?auto=format&fit=crop&w=300&q=80" media="(max-width: 600px)">
  <source srcset="https://images.unsplash.com/photo-1506027909766-afdcbbce2c0d?auto=format&fit=crop&w=600&q=80" media="(max-width: 1500px)">
  <source srcset="https://images.unsplash.com/photo-1504198458649-3128b932f49b?auto=format&fit=crop&w=900&q=80">
  <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea5?auto=format&fit=crop&w=300&q=80" alt="Flowers">
</picture>`;
  const vwTextExample = `<h1 style="font-size:10vw">Hello World</h1>`;
  const mediaQueryExample = `<style>
.left, .right {
  float: left;
  width: 20%;
}
.main {
  float: left;
  width: 60%;
}
@media screen and (max-width: 800px) {
  .left, .main, .right {
    width: 100%;
  }
}
</style>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Responsive Web Design</h1>

        <div className="flex justify-between mb-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            <FaChevronLeft />
            Previous
          </button>
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>

        <section className="text-gray-800">
          <p className="mb-4">Responsive web design is about creating web pages that look good on all devices!</p>
          <p className="mb-6">A responsive web design will automatically adjust for different screen sizes and viewports.</p>

          <h2 className="text-3xl font-bold mb-4">What is Responsive Web Design?</h2>
          <p className="mb-6">
            It uses HTML and CSS to resize, hide, shrink, or enlarge content to look great on all devices: desktops, tablets, and phones.
          </p>

          {/* Viewport Meta Tag */}
          <h3 className="text-2xl font-semibold mb-2">Setting the Viewport</h3>
          <p className="mb-4">Add this meta tag in your HTML <code>&lt;head&gt;</code> to control layout on mobile browsers:</p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded whitespace-pre-wrap">
              <code>{viewportCode}</code>
            </pre>
            <button
              onClick={() => handleCopy(viewportCode)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === viewportCode ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Responsive Images */}
          <h2 className="text-3xl font-bold mb-4">Responsive Images</h2>
          <p className="mb-6">Images that scale properly to fit any screen size.</p>
          <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80" alt="Example" className="w-full rounded mb-4" />

          <h3 className="text-2xl font-semibold mb-2">Using <code>width: 100%</code></h3>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded whitespace-pre-wrap">
              <code>{widthImageExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(widthImageExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === widthImageExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Using <code>max-width: 100%</code></h3>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded whitespace-pre-wrap">
              <code>{maxWidthImageExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(maxWidthImageExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === maxWidthImageExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Responsive Text */}
          <h2 className="text-3xl font-bold mb-4">Responsive Text</h2>
          <p className="mb-4">Using viewport width (vw) to resize text dynamically:</p>
          <h1 style={{ fontSize: "10vw" }} className="text-[#04AA6D] font-bold mb-4">Hello World</h1>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded whitespace-pre-wrap">
              <code>{vwTextExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(vwTextExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === vwTextExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Media Queries */}
          <h2 className="text-3xl font-bold mb-4">Media Queries</h2>
          <p className="mb-6">Use media queries to apply different styles based on screen size.</p>
          <div className="flex flex-wrap mb-4">
            <div className="left bg-green-100 p-4 w-full sm:w-1/5 mb-2">Left Menu</div>
            <div className="main bg-blue-100 p-4 w-full sm:w-3/5 mb-2">Main Content</div>
            <div className="right bg-purple-100 p-4 w-full sm:w-1/5 mb-2">Right Content</div>
          </div>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded whitespace-pre-wrap">
              <code>{mediaQueryExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(mediaQueryExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === mediaQueryExample ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Responsive;
