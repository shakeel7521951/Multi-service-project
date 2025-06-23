import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Symbols = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const euroExample = `<p>I will display &euro;</p>
<p>I will display &#8364;</p>
<p>I will display &#x20AC;</p>`;

  const mathSymbols = `
Char\tNumber\tEntity\tDescription
∀\t&#8704;\t&forall;\tFor all
∂\t&#8706;\t&part;\tPartial differential
∃\t&#8707;\t&exist;\tThere exists
∅\t&#8709;\t&empty;\tEmpty sets
∇\t&#8711;\t&nabla;\tNabla
∈\t&#8712;\t&isin;\tElement of
∉\t&#8713;\t&notin;\tNot an element of
∋\t&#8715;\t&ni;\tContains as member
∏\t&#8719;\t&prod;\tN-ary product
∑\t&#8721;\t&sum;\tN-ary summation
`.trim();

  const greekLetters = `
Char\tNumber\tEntity\tDescription
Α\t&#913;\t&Alpha;\tGREEK ALPHA
Β\t&#914;\t&Beta;\tGREEK BETA
Γ\t&#915;\t&Gamma;\tGREEK GAMMA
Δ\t&#916;\t&Delta;\tGREEK DELTA
Ε\t&#917;\t&Epsilon;\tGREEK EPSILON
Ζ\t&#918;\t&Zeta;\tGREEK ZETA
`.trim();

  const otherEntities = `
Char\tNumber\tEntity\tDescription
©\t&#169;\t&copy;\tCOPYRIGHT
®\t&#174;\t&reg;\tREGISTERED TRADEMARK
€\t&#8364;\t&euro;\tEURO SIGN
™\t&#8482;\t&trade;\tTRADEMARK
←\t&#8592;\t&larr;\tLEFT ARROW
↑\t&#8593;\t&uarr;\tUP ARROW
→\t&#8594;\t&rarr;\tRIGHT ARROW
↓\t&#8595;\t&darr;\tDOWN ARROW
♠\t&#9824;\t&spades;\tSPADE
♣\t&#9827;\t&clubs;\tCLUB
♥\t&#9829;\t&hearts;\tHEART
♦\t&#9830;\t&diams;\tDIAMOND
`.trim();

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Symbols</h1>

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

          <p className="mb-6">
            Symbols or letters that are not present on your keyboard can be added to HTML using entities.
          </p>

          <h2 className="text-3xl font-bold mb-4">HTML Symbol Entities</h2>
          <p className="mb-6">
            HTML entities were described in the previous chapter.
          </p>
          <p className="mb-6">
            Many mathematical, technical, and currency symbols are not present on a normal keyboard.
          </p>
          <p className="mb-6">
            To add such symbols to an HTML page, you can use the entity name or the entity number (a decimal or a hexadecimal reference) for the symbol:
          </p>

          {/* Euro Sign Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example: Display the euro sign</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{euroExample}</code>
            </pre>
            <button
              onClick={() => handleCopy(euroExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === euroExample ? "Copied!" : "Copy Code"}
            </button>
            <div className="mt-4 text-lg">
              <p>I will display €</p>
              <p>I will display €</p>
              <p>I will display €</p>
            </div>
          </div>

          {/* Mathematical Symbols */}
          <h3 className="text-2xl font-semibold mb-4">Some Mathematical Symbols Supported by HTML</h3>
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg text-left text-sm">
              <thead className="bg-[#04AA6D] text-white">
                <tr>
                  <th className="px-4 py-2">Char</th>
                  <th className="px-4 py-2">Number</th>
                  <th className="px-4 py-2">Entity</th>
                  <th className="px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { char: "∀", number: "&#8704;", entity: "&forall;", desc: "For all" },
                  { char: "∂", number: "&#8706;", entity: "&part;", desc: "Partial differential" },
                  { char: "∃", number: "&#8707;", entity: "&exist;", desc: "There exists" },
                  { char: "∅", number: "&#8709;", entity: "&empty;", desc: "Empty sets" },
                  { char: "∇", number: "&#8711;", entity: "&nabla;", desc: "Nabla" },
                  { char: "∈", number: "&#8712;", entity: "&isin;", desc: "Element of" },
                  { char: "∉", number: "&#8713;", entity: "&notin;", desc: "Not an element of" },
                  { char: "∋", number: "&#8715;", entity: "&ni;", desc: "Contains as member" },
                  { char: "∏", number: "&#8719;", entity: "&prod;", desc: "N-ary product" },
                  { char: "∑", number: "&#8721;", entity: "&sum;", desc: "N-ary summation" },
                ].map(({ char, number, entity, desc }, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{char}</td>
                    <td className="border px-4 py-2">{number}</td>
                    <td className="border px-4 py-2">{entity}</td>
                    <td className="border px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Greek Letters */}
          <h3 className="text-2xl font-semibold mb-4">Some Greek Letters Supported by HTML</h3>
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg text-left text-sm">
              <thead className="bg-[#04AA6D] text-white">
                <tr>
                  <th className="px-4 py-2">Char</th>
                  <th className="px-4 py-2">Number</th>
                  <th className="px-4 py-2">Entity</th>
                  <th className="px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { char: "Α", number: "&#913;", entity: "&Alpha;", desc: "GREEK ALPHA" },
                  { char: "Β", number: "&#914;", entity: "&Beta;", desc: "GREEK BETA" },
                  { char: "Γ", number: "&#915;", entity: "&Gamma;", desc: "GREEK GAMMA" },
                  { char: "Δ", number: "&#916;", entity: "&Delta;", desc: "GREEK DELTA" },
                  { char: "Ε", number: "&#917;", entity: "&Epsilon;", desc: "GREEK EPSILON" },
                  { char: "Ζ", number: "&#918;", entity: "&Zeta;", desc: "GREEK ZETA" },
                ].map(({ char, number, entity, desc }, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{char}</td>
                    <td className="border px-4 py-2">{number}</td>
                    <td className="border px-4 py-2">{entity}</td>
                    <td className="border px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Other Entities */}
          <h3 className="text-2xl font-semibold mb-4">Some Other Entities Supported by HTML</h3>
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg text-left text-sm">
              <thead className="bg-[#04AA6D] text-white">
                <tr>
                  <th className="px-4 py-2">Char</th>
                  <th className="px-4 py-2">Number</th>
                  <th className="px-4 py-2">Entity</th>
                  <th className="px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { char: "©", number: "&#169;", entity: "&copy;", desc: "COPYRIGHT" },
                  { char: "®", number: "&#174;", entity: "&reg;", desc: "REGISTERED TRADEMARK" },
                  { char: "€", number: "&#8364;", entity: "&euro;", desc: "EURO SIGN" },
                  { char: "™", number: "&#8482;", entity: "&trade;", desc: "TRADEMARK" },
                  { char: "←", number: "&#8592;", entity: "&larr;", desc: "LEFT ARROW" },
                  { char: "↑", number: "&#8593;", entity: "&uarr;", desc: "UP ARROW" },
                  { char: "→", number: "&#8594;", entity: "&rarr;", desc: "RIGHT ARROW" },
                  { char: "↓", number: "&#8595;", entity: "&darr;", desc: "DOWN ARROW" },
                  { char: "♠", number: "&#9824;", entity: "&spades;", desc: "SPADE" },
                  { char: "♣", number: "&#9827;", entity: "&clubs;", desc: "CLUB" },
                  { char: "♥", number: "&#9829;", entity: "&hearts;", desc: "HEART" },
                  { char: "♦", number: "&#9830;", entity: "&diams;", desc: "DIAMOND" },
                ].map(({ char, number, entity, desc }, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{char}</td>
                    <td className="border px-4 py-2">{number}</td>
                    <td className="border px-4 py-2">{entity}</td>
                    <td className="border px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default Html_Symbols;
