import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Attributes = () => {
  const htmlExample = `<!DOCTYPE html>
<html lang="en-US">
<body>
...
</body>
</html>`;

  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Attributes</h1>

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
          <h2 className="text-3xl font-bold mb-4">HTML Attributes</h2>
          <p className="mb-4">HTML attributes provide additional information about HTML elements.</p>

          <ul className="list-disc ml-10 space-y-3 mb-10">
            {[
              "All HTML elements can have attributes",
              "Attributes provide additional information about elements",
              "Attributes are always specified in the start tag",
              'Attributes usually come in name/value pairs like: name="value"',
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* href Attribute */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">The href Attribute</h3>
            <p className="mb-2">
              The &lt;a&gt; tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:
            </p>
            <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
              <h3 className="font-bold mb-3">Example:</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
                <code>{`<a href="https://www.w3schools.com">Visit W3Schools</a>`}</code>
              </pre>
              <button
                onClick={() => handleCopy(`<a href="https://www.w3schools.com">Visit W3Schools</a>`)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
              >
                {copiedCode === `<a href="https://www.w3schools.com">Visit W3Schools</a>` ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>

          {/* src Attribute */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">The src Attribute</h3>
            <p className="mb-2">
              The &lt;img&gt; tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:
            </p>
            <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
              <h3 className="font-bold mb-3">Example:</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
                <code>{`<img src="img_girl.jpg">`}</code>
              </pre>
              <button
                onClick={() => handleCopy(`<img src="img_girl.jpg">`)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
              >
                {copiedCode === `<img src="img_girl.jpg">` ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>

          {/* width and height Attributes */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">The width and height Attributes</h3>
            <p className="mb-2">
              The &lt;img&gt; tag should also contain the width and height attributes, which specify the width and height of the image (in pixels):
            </p>
            <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
              <h3 className="font-bold mb-3">Example:</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
                <code>{`<img src="img_girl.jpg" width="500" height="600">`}</code>
              </pre>
              <button
                onClick={() => handleCopy(`<img src="img_girl.jpg" width="500" height="600">`)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
              >
                {copiedCode === `<img src="img_girl.jpg" width="500" height="600">` ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>

          {/* lang Attribute */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">The lang Attribute</h3>
            <p className="mb-2">
              You should always include the lang attribute inside the &lt;html&gt; tag, to declare the language of the Web page. This is meant to assist search engines and browsers.
            </p>
            <p className="mb-2">The following example specifies English as the language:</p>
            <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-6">
              <h3 className="font-bold mb-3">Example:</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
                <code>{`<!DOCTYPE html>
<html lang="en">
<body>
...
</body>
</html>`}</code>
              </pre>
              <button
                onClick={() =>
                  handleCopy(`<!DOCTYPE html>
<html lang="en">
<body>
...
</body>
</html>`)
                }
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
              >
                {copiedCode === `<!DOCTYPE html>
<html lang="en">
<body>
...
</body>
</html>` ? "Copied!" : "Copy Code"}
              </button>
            </div>

            <p className="mb-2">
              Country codes can also be added to the language code in the lang attribute. So, the first two characters define the language of the HTML page, and the last two characters define the country.
            </p>
            <p className="mb-2">
              The following example specifies English as the language and United States as the country:
            </p>
            <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
              <h3 className="font-bold mb-3">Example:</h3>
              <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
                <code>{htmlExample}</code>
              </pre>
              <button
                onClick={() => handleCopy(htmlExample)}
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
              >
                {copiedCode === htmlExample ? "Copied!" : "Copy Code"}
              </button>
            </div>
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

export default Html_Attributes;

