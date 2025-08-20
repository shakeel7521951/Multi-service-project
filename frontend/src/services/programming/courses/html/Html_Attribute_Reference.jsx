import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Attribute_Reference = () => {
  const attributeData = [
    { attr: "accept", belongsTo: "<input>", desc: "Specifies the types of files that the server accepts (only for type=\"file\")" },
    { attr: "accept-charset", belongsTo: "<form>", desc: "Specifies the character encodings that are to be used for the form submission" },
    { attr: "accesskey", belongsTo: "Global Attributes", desc: "Specifies a shortcut key to activate/focus an element" },
    { attr: "action", belongsTo: "<form>", desc: "Specifies where to send the form-data when a form is submitted" },
    { attr: "align", belongsTo: "Not supported in HTML 5.", desc: "Specifies alignment. Use CSS instead" },
    { attr: "alt", belongsTo: "<area>, <img>, <input>", desc: "Specifies an alternate text when the original element fails to display" },
    { attr: "async", belongsTo: "<script>", desc: "Script is executed asynchronously (only for external scripts)" },
    { attr: "autocomplete", belongsTo: "<form>, <input>", desc: "Enables/disables autocomplete for the element" },
    { attr: "autofocus", belongsTo: "<button>, <input>, <select>, <textarea>", desc: "Automatically gets focus on page load" },
    { attr: "autoplay", belongsTo: "<audio>, <video>", desc: "Starts playing as soon as it's ready" },
    { attr: "bgcolor", belongsTo: "Not supported in HTML 5.", desc: "Specifies background color. Use CSS instead" },
    { attr: "border", belongsTo: "Not supported in HTML 5.", desc: "Specifies element border. Use CSS instead" },
    { attr: "charset", belongsTo: "<meta>, <script>", desc: "Specifies character encoding" },
    { attr: "checked", belongsTo: "<input>", desc: "Pre-selects checkbox/radio on load" },
    { attr: "cite", belongsTo: "<blockquote>, <del>, <ins>, <q>", desc: "Specifies source URL of the quote/text" },
    { attr: "class", belongsTo: "Global Attributes", desc: "Defines one or more class names for CSS styling" },
    { attr: "color", belongsTo: "Not supported in HTML 5.", desc: "Specifies text color. Use CSS instead" },
    { attr: "cols", belongsTo: "<textarea>", desc: "Visible width of a text area" },
    { attr: "colspan", belongsTo: "<td>, <th>", desc: "Specifies how many columns a cell should span" },
    { attr: "content", belongsTo: "<meta>", desc: "Value for the http-equiv or name attribute" },
    { attr: "contenteditable", belongsTo: "Global Attributes", desc: "Indicates if content is editable" },

    // Newly added entries
    { attr: "ontimeupdate", belongsTo: "<audio>, <video>", desc: "Script to be run when the playing position has changed (e.g. user fast-forwards)" },
    { attr: "ontoggle", belongsTo: "<details>", desc: "Script to be run when the user opens or closes the <details> element" },
    { attr: "onunload", belongsTo: "<body>", desc: "Script to be run when a page has unloaded (or the window closed)" },
    { attr: "onvolumechange", belongsTo: "<audio>, <video>", desc: "Script to be run when the volume changes" },
    { attr: "onwaiting", belongsTo: "<audio>, <video>", desc: "Script to be run when media is paused but expected to resume" },
    { attr: "onwheel", belongsTo: "All visible elements.", desc: "Script to be run when the mouse wheel is used" },
    { attr: "open", belongsTo: "<details>", desc: "Specifies that the details should be visible (open) to the user" },
    { attr: "optimum", belongsTo: "<meter>", desc: "Specifies what value is the optimal value for the gauge" },
    { attr: "pattern", belongsTo: "<input>", desc: "Specifies a regex pattern the input value is checked against" },
    { attr: "placeholder", belongsTo: "<input>, <textarea>", desc: "Provides a short hint for expected value" },
    { attr: "popover", belongsTo: "Global Attributes", desc: "Specifies a popover element" },
    { attr: "popovertarget", belongsTo: "<button>, <input>", desc: "Specifies which popover element to invoke" },
    { attr: "popovertargetaction", belongsTo: "<button>, <input>", desc: "Specifies what happens to the popover on click" },
    { attr: "poster", belongsTo: "<video>", desc: "Image to show while video loads or until play is pressed" },
    { attr: "preload", belongsTo: "<audio>, <video>", desc: "Specifies how/if the media should load when the page loads" },
    { attr: "readonly", belongsTo: "<input>, <textarea>", desc: "Marks input as read-only" },
    { attr: "rel", belongsTo: "<a>, <area>, <form>, <link>", desc: "Specifies the relationship to the linked document" },
    { attr: "required", belongsTo: "<input>, <select>, <textarea>", desc: "Requires the field to be filled before form submit" },
    { attr: "reversed", belongsTo: "<ol>", desc: "Reverses the list order (e.g. 9,8,7...)" },
    { attr: "rows", belongsTo: "<textarea>", desc: "Specifies number of visible text lines" },
    { attr: "rowspan", belongsTo: "<td>, <th>", desc: "Specifies number of rows a cell spans" },
    { attr: "sandbox", belongsTo: "<iframe>", desc: "Applies extra restrictions to iframe content" },
    { attr: "scope", belongsTo: "<th>", desc: "Defines whether header is for row, column, or group" },
    { attr: "selected", belongsTo: "<option>", desc: "Pre-selects the option" },
    { attr: "shape", belongsTo: "<area>", desc: "Specifies the shape of the area" },
    { attr: "size", belongsTo: "<input>, <select>", desc: "Width in characters or visible options" },
    { attr: "sizes", belongsTo: "<img>, <link>, <source>", desc: "Specifies size of linked resource" },
    { attr: "span", belongsTo: "<col>, <colgroup>", desc: "Number of columns to span" },
    { attr: "spellcheck", belongsTo: "Global Attributes", desc: "Checks spelling and grammar if enabled" },
    { attr: "src", belongsTo: "<audio>, <embed>, <iframe>, <img>, <input>, <script>, <source>, <track>, <video>", desc: "Specifies media file URL" },
    { attr: "srcdoc", belongsTo: "<iframe>", desc: "HTML content to show in iframe" },
    { attr: "srclang", belongsTo: "<track>", desc: "Language of track text data (required if kind='subtitles')" },
    { attr: "srcset", belongsTo: "<img>, <source>", desc: "Image URL to use in different situations" },
    { attr: "start", belongsTo: "<ol>", desc: "Start value of ordered list" },
    { attr: "step", belongsTo: "<input>", desc: "Legal number intervals" },
    { attr: "style", belongsTo: "Global Attributes", desc: "Inline CSS styling" },
    { attr: "tabindex", belongsTo: "Global Attributes", desc: "Element tab order" },
    { attr: "target", belongsTo: "<a>, <area>, <base>, <form>", desc: "Specifies where to open linked document or submit form" },
    { attr: "title", belongsTo: "Global Attributes", desc: "Extra information about an element" },
    { attr: "translate", belongsTo: "Global Attributes", desc: "Should content be translated" },
    { attr: "type", belongsTo: "<a>, <button>, <embed>, <input>, <link>, <menu>, <object>, <script>, <source>, <style>", desc: "Specifies element type" },
    { attr: "usemap", belongsTo: "<img>, <object>", desc: "Use image as client-side image map" },
    { attr: "value", belongsTo: "<button>, <input>, <li>, <option>, <meter>, <progress>, <param>", desc: "Specifies the element’s value" },
    { attr: "width", belongsTo: "<canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>", desc: "Specifies width" },
    { attr: "wrap", belongsTo: "<textarea>", desc: "Controls text wrapping when submitted" },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Attribute Reference</h1>

        <div className="flex justify-between mb-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Previous
          </button>
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] transition">
            Next
            <FaChevronRight />
          </button>
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-lg bg-[#E7E9EB]">
          <table className="min-w-full bg-white border border-gray-300 text-sm text-left">
            <thead className="bg-[#04AA6D] text-white">
              <tr>
                <th className="px-4 py-3 border-r border-white">Attribute</th>
                <th className="px-4 py-3 border-r border-white">Belongs to</th>
                <th className="px-4 py-3">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {attributeData.map(({ attr, belongsTo, desc }) => (
                <tr key={attr} className="border-t border-gray-200 hover:bg-gray-100">
                  <td className="px-4 py-3 font-medium text-[#04AA6D]">{attr}</td>
                  <td className="px-4 py-3">{belongsTo}</td>
                  <td className="px-4 py-3">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-gray-600">
          Note: This is a partial list. For a complete list of all HTML attributes, refer to the official documentation or MDN.
        </p>
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

export default Html_Attribute_Reference;
