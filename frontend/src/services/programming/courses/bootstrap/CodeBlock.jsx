// src/components/CodeBlock.jsx
import { useState } from "react";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    });
  };

  return (
    <div className="bg-[#E7E9EB] p-3 sm:p-6 rounded-2xl shadow-inner border border-gray-300">
      {/* Code Box */}
      <pre className="bg-white border-l-4 border-[#04AA6D] p-3 sm:p-4 font-mono text-xs sm:text-sm md:text-base rounded-lg shadow overflow-x-auto max-w-full">
        <code>{code}</code>
      </pre>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="sm:mt-3 mt-2 px-2 py-1 text-sm sm:px-3 sm:py-2 sm:text-base 
             rounded-lg shadow font-semibold transition 
             bg-[#04AA6D] text-white hover:bg-[#03945f] w-fit"
      >
        {copied ? "Copied!" : "Copy Code"}
      </button>
    </div>
  );
};

export default CodeBlock;
