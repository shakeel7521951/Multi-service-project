import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Emojis = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const emojiChars = `😄 😍 💗`;

  const emojiEntities = `
🗻 &#128507;
🗼 &#128508;
🗽 &#128509;
🗾 &#128510;
🗿 &#128511;
😀 &#128512;
😁 &#128513;
😂 &#128514;
😃 &#128515;
😄 &#128516;
😅 &#128517;`;

  const htmlEmojisExample = `🚀🚁🚂🚃🚄
💺💻💼💽💾`;

  const htmlCharsetExample = `<meta charset="UTF-8">`;

  const utf8Example = `<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<body>

<p>I will display A B C</p>
<p>I will display &#65; &#66; &#67;</p>

</body>
</html>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Using Emojis in HTML</h1>

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

        <section className="text-gray-800 space-y-6">

          <p>
            Emojis are characters from the UTF-8 character set: <span className="text-2xl">{emojiChars}</span>
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
            <h2 className="text-3xl font-bold mb-4">Emoji Character Entities</h2>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded max-h-48 overflow-auto">
              <code>{emojiEntities}</code>
            </pre>
          </div>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
            <h2 className="text-3xl font-bold mb-4">HTML Emojis Examples</h2>
            <p className="text-3xl mb-4">🚀🚁🚂🚃🚄</p>
            <p className="text-3xl mb-4">💺💻💼💽💾</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">What are Emojis?</h2>
            <p className="mb-2">
              Emojis look like images, or icons, but they are not.
            </p>
            <p>
              They are letters (characters) from the UTF-8 (Unicode) character set.
            </p>
          </div>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
            <h2 className="text-3xl font-bold mb-4">The HTML <code>&lt;meta&gt;</code> charset Attribute</h2>
            <p className="mb-4">
              To display an HTML page correctly, a web browser must know the character set used in the page.
            </p>
            <p className="mb-6">
              This is specified in the <code>&lt;meta&gt;</code> tag:
            </p>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{htmlCharsetExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(htmlCharsetExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === htmlCharsetExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">UTF-8 Characters</h2>
            <p className="mb-4">
              Many UTF-8 characters cannot be typed on a keyboard, but they can always be displayed using numbers (called entity numbers):
            </p>
            <p className="mb-2">A is 65</p>
            <p className="mb-2">B is 66</p>
            <p className="mb-6">C is 67</p>
          </div>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h2 className="text-3xl font-bold mb-4">Example</h2>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{utf8Example}</code>
            </pre>
            <button
              onClick={() => handleCopy(utf8Example)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === utf8Example ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Example Explained</h2>
            <p>
              The <code>&lt;meta charset="UTF-8"&gt;</code> element defines the character set.
            </p>
            <p>
              The characters A, B, and C, are displayed by the numbers 65, 66, and 67.
            </p>
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

export default Html_Emojis;
