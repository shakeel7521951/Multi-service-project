import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Language_Code = () => {
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

  const htmlLangExample = `<html lang="en">
  ...
</html>`;

  const xhtmlLangExample = `<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
  ...
</html>`;

  const languageCodes = [
    ["Abkhazian", "ab"], ["Afar", "aa"], ["Afrikaans", "af"], ["Akan", "ak"],
    ["Albanian", "sq"], ["Amharic", "am"], ["Arabic", "ar"], ["Aragonese", "an"],
    ["Armenian", "hy"], ["Assamese", "as"], ["Avaric", "av"], ["Avestan", "ae"],
    ["Aymara", "ay"], ["Azerbaijani", "az"], ["Bambara", "bm"], ["Bashkir", "ba"],
    ["Basque", "eu"], ["Belarusian", "be"], ["Bengali (Bangla)", "bn"],
    ["Bihari", "bh"], ["Bislama", "bi"], ["Bosnian", "bs"], ["Breton", "br"],
    ["Bulgarian", "bg"], ["Burmese", "my"], ["Catalan", "ca"], ["Chamorro", "ch"],
    ["Chechen", "ce"], ["Chichewa, Chewa, Nyanja", "ny"], ["Chinese", "zh"],
    ["Chinese (Simplified)", "zh-Hans"], ["Chinese (Traditional)", "zh-Hant"],
    ["Chuvash", "cv"], ["Cornish", "kw"], ["Corsican", "co"], ["Cree", "cr"],
    ["Croatian", "hr"], ["Czech", "cs"], ["Danish", "da"], ["Divehi, Dhivehi, Maldivian", "dv"],
    ["Dutch", "nl"], ["Dzongkha", "dz"], ["English", "en"], ["Esperanto", "eo"],
    ["Estonian", "et"], ["Ewe", "ee"], ["Faroese", "fo"], ["Fijian", "fj"],
    ["Finnish", "fi"], ["French", "fr"], ["Fula, Fulah, Pulaar, Pular", "ff"],
    ["Galician", "gl"], ["Gaelic (Scottish)", "gd"], ["Gaelic (Manx)", "gv"],
    ["Georgian", "ka"], ["German", "de"], ["Greek", "el"], ["Greenlandic", "kl"],
    ["Guarani", "gn"], ["Gujarati", "gu"], ["Haitian Creole", "ht"], ["Hausa", "ha"],
    ["Hebrew", "he"], ["Herero", "hz"], ["Hindi", "hi"], ["Hiri Motu", "ho"],
    ["Hungarian", "hu"], ["Icelandic", "is"], ["Ido", "io"], ["Igbo", "ig"],
    ["Indonesian", "id, in"], ["Interlingua", "ia"], ["Interlingue", "ie"],
    ["Inuktitut", "iu"], ["Inupiak", "ik"], ["Irish", "ga"], ["Italian", "it"],
    ["Japanese", "ja"], ["Javanese", "jv"], ["Kannada", "kn"], ["Kashmiri", "ks"],
    ["Kazakh", "kk"], ["Khmer", "km"], ["Kikuyu", "ki"], ["Kinyarwanda (Rwanda)", "rw"],
    ["Korean", "ko"], ["Kurdish", "ku"], ["Latin", "la"], ["Latvian (Lettish)", "lv"],
    ["Lithuanian", "lt"], ["Luxembourgish", "lb"], ["Macedonian", "mk"],
    ["Malay", "ms"], ["Malayalam", "ml"], ["Maltese", "mt"], ["Maori", "mi"],
    ["Marathi", "mr"], ["Mongolian", "mn"], ["Nepali", "ne"], ["Norwegian", "no"],
    ["Pashto, Pushto", "ps"], ["Persian (Farsi)", "fa"], ["Polish", "pl"],
    ["Portuguese", "pt"], ["Punjabi (Eastern)", "pa"], ["Quechua", "qu"],
    ["Romanian", "ro"], ["Russian", "ru"], ["Sanskrit", "sa"], ["Serbian", "sr"],
    ["Sindhi", "sd"], ["Sinhala", "si"], ["Slovak", "sk"], ["Slovenian", "sl"],
    ["Somali", "so"], ["Spanish", "es"], ["Swahili (Kiswahili)", "sw"],
    ["Swedish", "sv"], ["Tamil", "ta"], ["Telugu", "te"], ["Thai", "th"],
    ["Turkish", "tr"], ["Ukrainian", "uk"], ["Urdu", "ur"], ["Uzbek", "uz"],
    ["Vietnamese", "vi"], ["Welsh", "cy"], ["Yiddish", "yi, ji"], ["Zulu", "zu"]
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Language Code Reference</h1>

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
          <h2 className="text-3xl font-bold mb-4">Declaring Language in HTML</h2>
          <p className="mb-4">
            Always include the <code>lang</code> attribute inside the <code>&lt;html&gt;</code> tag to declare the language of the web page. This helps search engines and browsers.
          </p>

          {/* HTML lang example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-6">
            <h3 className="font-bold mb-3">HTML Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{htmlLangExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(htmlLangExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === htmlLangExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* XHTML example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">XHTML Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{xhtmlLangExample}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(xhtmlLangExample)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === xhtmlLangExample ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Language Code Table */}
          <h3 className="text-2xl font-semibold mb-4">Language ISO Codes</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-300 rounded-lg">
              <thead className="bg-[#04AA6D] text-white">
                <tr>
                  <th className="px-4 py-2 border-r border-white">Language</th>
                  <th className="px-4 py-2">ISO Code</th>
                </tr>
              </thead>
              <tbody>
                {languageCodes.map(([language, code], index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-4 py-2 border border-gray-300">{language}</td>
                    <td className="px-4 py-2 border border-gray-300">{code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Html_Language_Code;
