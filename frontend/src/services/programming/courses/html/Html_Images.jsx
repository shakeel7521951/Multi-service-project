import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Images = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const basicImageExample = `<img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Italian Trulli">`;

  const altExample = `<img src="wrongname.gif" alt="Flowers in Chania">`;

  const sizeExample = `<img src="https://www.w3schools.com/html/html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;">`;

  const folderExample = `<img src="/images/html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;">`;

  const externalExample = `<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">`;

  const backgroundImageExample = `<style>
body {
  background-image: url('https://www.w3schools.com/html/img_girl.jpg');
}
</style>`;

  const imageMapExample = `<img src="https://www.w3schools.com/html/workplace.jpg" alt="Workplace" useMap="#workmap">
<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="https://example.com/computer">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="https://example.com/phone">
</map>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Images & Related Elements</h1>

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

          <h2 className="text-3xl font-bold mb-4">HTML Images</h2>
          <p className="mb-4">Images can improve the design and appearance of a web page.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <img
              src="https://www.w3schools.com/html/pic_trulli.jpg"
              alt="Italian Trulli"
              className="mb-4 rounded-lg shadow-md"
            />
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{basicImageExample}</code>
            </pre>
            <button onClick={() => handleCopy(basicImageExample)} className="btn-copy">
              {copiedCode === basicImageExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">The alt Attribute</h3>
          <p className="mb-6">
            The <code>alt</code> attribute provides alternative text if the image cannot be displayed.
          </p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{altExample}</code>
            </pre>
            <button onClick={() => handleCopy(altExample)} className="btn-copy">
              {copiedCode === altExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Image Size</h3>
          <p className="mb-6">Use the <code>style</code> attribute for better control over image size.</p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <img
              src="https://www.w3schools.com/html/html5.gif"
              alt="HTML5 Icon"
              className="mb-4 rounded-lg"
              style={{ width: "128px", height: "128px" }}
            />
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{sizeExample}</code>
            </pre>
            <button onClick={() => handleCopy(sizeExample)} className="btn-copy">
              {copiedCode === sizeExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">External Images</h3>
          <p className="mb-6">You can also use images from other servers using full URLs.</p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <img
              src="https://www.w3schools.com/images/w3schools_green.jpg"
              alt="W3Schools.com"
              className="mb-4 rounded-lg shadow"
            />
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{externalExample}</code>
            </pre>
            <button onClick={() => handleCopy(externalExample)} className="btn-copy">
              {copiedCode === externalExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Background Images</h3>
          <p className="mb-6">Use CSS to add images as background instead of inline HTML.</p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{backgroundImageExample}</code>
            </pre>
            <button onClick={() => handleCopy(backgroundImageExample)} className="btn-copy">
              {copiedCode === backgroundImageExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Image Maps</h3>
          <p className="mb-6">Clickable areas inside images can be created with image maps.</p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <img
              src="https://www.w3schools.com/html/workplace.jpg"
              alt="Workplace"
              useMap="#workmap"
              className="mb-4 rounded"
            />
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{imageMapExample}</code>
            </pre>
            <button onClick={() => handleCopy(imageMapExample)} className="btn-copy">
              {copiedCode === imageMapExample ? "Copied!" : "Copy Code"}
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

export default Html_Images;

