import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Audio = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
      })
      .catch(() => {
        alert("Failed to copy. Please copy manually.");
      });
  };

  // Examples
  const basicExample = `<audio controls>
  <source src=\"horse.ogg\" type=\"audio/ogg\">
  <source src=\"horse.mp3\" type=\"audio/mpeg\">
Your browser does not support the audio element.
</audio>`;

  const autoplayExample = `<audio controls autoplay>
  <source src=\"horse.ogg\" type=\"audio/ogg\">
  <source src=\"horse.mp3\" type=\"audio/mpeg\">
Your browser does not support the audio element.
</audio>`;

  const mutedExample = `<audio controls autoplay muted>
  <source src=\"horse.ogg\" type=\"audio/ogg\">
  <source src=\"horse.mp3\" type=\"audio/mpeg\">
Your browser does not support the audio element.
</audio>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Audio</h1>

        <section className="text-gray-800">
          {/* Description */}
          <p className="mb-4">
            The HTML <code>&lt;audio&gt;</code> element is used to play an audio file on a web page.
          </p>

          {/* Basic Example */}
          <h2 className="text-3xl font-bold mb-4">The HTML <code>&lt;audio&gt;</code> Element</h2>
          <p className="mb-4">
            To play an audio file in HTML, use the <code>&lt;audio&gt;</code> element:
          </p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{basicExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(basicExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === basicExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Autoplay Example */}
          <h3 className="text-2xl font-semibold mb-2">HTML <code>&lt;audio&gt;</code> Autoplay</h3>
          <p className="mb-4">
            To start an audio file automatically, use the <code>autoplay</code> attribute:
          </p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{autoplayExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(autoplayExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === autoplayExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Muted Example */}
          <h3 className="text-2xl font-semibold mb-2">Autoplay with Muted</h3>
          <p className="mb-4">
            To autoplay audio without sound, add the <code>muted</code> attribute:
          </p>
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{mutedExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(mutedExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === mutedExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Formats Table */}
          <h3 className="text-2xl font-semibold mb-2">HTML Audio Formats</h3>
          <p className="mb-4">
            There are three supported audio formats: MP3, WAV, and OGG. The browser support for the different formats is:
          </p>
          <div className="overflow-auto mb-10">
            <table className="min-w-full bg-white rounded-xl">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Browser</th>
                  <th className="px-4 py-2 text-left">MP3</th>
                  <th className="px-4 py-2 text-left">WAV</th>
                  <th className="px-4 py-2 text-left">OGG</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">Edge/IE</td>
                  <td className="px-4 py-2">YES</td>
                  <td className="px-4 py-2">YES*</td>
                  <td className="px-4 py-2">YES*</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Chrome</td>
                  <td className="px-4 py-2">YES</td>
                  <td className="px-4 py-2">YES</td>
                  <td className="px-4 py-2">YES</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Firefox</td>
                  <td className="px-4 py-2">YES</td>
                  <td className="px-4 py-2">YES</td>
                  <td className="px-4 py-2">YES</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Safari</td>
                  <td className="px-4 py-2">YES</td>
                  <td className="px-4 py-2">YES</td>
                  <td className="px-4 py-2">NO</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Opera</td>
                  <td className="px-4 py-2">YES</td>
                  <td className="px-4 py-2">YES</td>
                  <td className="px-4 py-2">YES</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm italic mt-2">*From Edge 79</p>
          </div>

          {/* Media Types Table */}
          <h3 className="text-2xl font-semibold mb-2">HTML Audio - Media Types</h3>
          <p className="mb-4">
            File Format and its corresponding media type:
          </p>
          <div className="overflow-auto mb-10">
            <table className="min-w-full bg-white rounded-xl">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">File Format</th>
                  <th className="px-4 py-2 text-left">Media Type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">MP3</td>
                  <td className="px-4 py-2">audio/mpeg</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">OGG</td>
                  <td className="px-4 py-2">audio/ogg</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">WAV</td>
                  <td className="px-4 py-2">audio/wav</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="flex justify-between mt-10">
          <button
            type="button"
            aria-label="Previous"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer"
          >
            <FaChevronLeft />
            Previous
          </button>
          <button
            type="button"
            aria-label="Next"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer"
          >
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Html_Audio;
