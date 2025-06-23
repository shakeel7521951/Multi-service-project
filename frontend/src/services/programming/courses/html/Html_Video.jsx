import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Video = () => {
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

  const basicVideoExample = `<video width="320" height="240" controls>
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`;

  const autoplayExample = `<video width="320" height="240" autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>`;

  const autoplayMutedExample = `<video width="320" height="240" autoplay muted>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Video</h1>

        <div className="flex justify-between mb-10">
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

        <section className="text-gray-800">
          <h2 className="text-3xl font-bold mb-4">The HTML &lt;video&gt; Element</h2>
          <p className="mb-4">The HTML <code>&lt;video&gt;</code> element is used to show a video on a web page.</p>

          <div className="mb-6">
            <p className="mb-2 font-semibold">Example - Courtesy of Big Buck Bunny:</p>
            <video width="320" height="240" controls className="rounded shadow">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">HTML Video Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{basicVideoExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(basicVideoExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === basicVideoExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">HTML &lt;video&gt; Autoplay</h3>
          <p className="mb-4">To start a video automatically, use the <code>autoplay</code> attribute.</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Autoplay Example:</h3>
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

          <p className="mb-4">Add <code>muted</code> after <code>autoplay</code> to let your video start playing automatically (but muted):</p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Autoplay Muted Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{autoplayMutedExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(autoplayMutedExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === autoplayMutedExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">HTML Video Formats</h3>
          <p className="mb-4">There are three supported video formats: MP4, WebM, and Ogg.</p>
          <p className="mb-4">Browser support for these formats:</p>
          <table className="w-full mb-10 text-sm border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2">Browser</th>
                <th className="border px-3 py-2">MP4</th>
                <th className="border px-3 py-2">WebM</th>
                <th className="border px-3 py-2">Ogg</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">Edge</td>
                <td className="border px-3 py-2">YES</td>
                <td className="border px-3 py-2">YES</td>
                <td className="border px-3 py-2">YES</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Chrome</td>
                <td className="border px-3 py-2">YES</td>
                <td className="border px-3 py-2">YES</td>
                <td className="border px-3 py-2">YES</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Firefox</td>
                <td className="border px-3 py-2">YES</td>
                <td className="border px-3 py-2">YES</td>
                <td className="border px-3 py-2">YES</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Safari</td>
                <td className="border px-3 py-2">YES</td>
                <td className="border px-3 py-2">YES</td>
                <td className="border px-3 py-2">NO</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Opera</td>
                <td className="border px-3 py-2">YES</td>
                <td className="border px-3 py-2">YES</td>
                <td className="border px-3 py-2">YES</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-semibold mb-2">HTML Video Tags</h3>
          <table className="w-full text-sm border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2">Tag</th>
                <th className="border px-3 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">&lt;video&gt;</td>
                <td className="border px-3 py-2">Defines a video or movie</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">&lt;source&gt;</td>
                <td className="border px-3 py-2">Defines multiple media resources for media elements, such as &lt;video&gt; and &lt;audio&gt;</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">&lt;track&gt;</td>
                <td className="border px-3 py-2">Defines text tracks in media players</td>
              </tr>
            </tbody>
          </table>
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

export default Html_Video;