import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Event_Attributes = () => {
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

  const windowEvents = `onafterprint      Fires after the document is printed
onbeforeprint     Fires before the document is printed
onbeforeunload    Fires when the document is about to be unloaded
onerror           Fires when an error occurs
onhashchange      Fires when the anchor part of the URL changes
onload            Fires when the page has finished loading
onmessage         Fires when a message is received
onoffline         Fires when the browser goes offline
ononline          Fires when the browser goes online
onpagehide        Fires when navigating away from a page
onpageshow        Fires when navigating to a page
onpopstate        Fires when the browser history changes
onresize          Fires when the browser window is resized
onstorage         Fires when local storage changes
onunload          Fires when the page is unloaded`;

  const formEvents = `onblur           Fires when the element loses focus
onchange         Fires when the element's value changes
oncontextmenu    Fires when the context menu is triggered
onfocus          Fires when the element gets focus
oninput          Fires when the element receives user input
oninvalid        Fires when the element is invalid
onreset          Fires when a form is reset
onsearch         Fires when a user types in a search field
onselect         Fires when text is selected
onsubmit         Fires when the form is submitted`;

  const keyboardEvents = `onkeydown   Fires when a key is pressed
onkeypress  Fires when a key is pressed and held
onkeyup     Fires when a key is released`;

  const mouseEvents = `onclick        Fires on mouse click
ondblclick     Fires on double click
onmousedown    Fires when mouse button is pressed
onmousemove    Fires when mouse is moving
onmouseout     Fires when mouse moves out of an element
onmouseover    Fires when mouse moves over an element
onmouseup      Fires when mouse button is released
onmousewheel   Deprecated – use onwheel
onwheel        Fires when mouse wheel scrolls`;

  const dragEvents = `ondrag         Fires when an element is dragged
ondragend      Fires at the end of a drag
ondragenter    Fires when dragged element enters drop zone
ondragleave    Fires when dragged element leaves drop zone
ondragover     Fires while dragging over a target
ondragstart    Fires at the start of a drag
ondrop         Fires on drop
onscroll       Fires when scrollbar is used`;

  const clipboardEvents = `oncopy   Fires on copy
oncut    Fires on cut
onpaste  Fires on paste`;

  const mediaEvents = `onabort              Fires on abort
oncanplay           Fires when media is ready to play
oncanplaythrough    Fires when media can play to end
oncuechange         Fires on track cue change
ondurationchange    Fires when media length changes
onemptied           Fires when media becomes unavailable
onended             Fires when media ends
onerror             Fires on media load error
onloadeddata        Fires when media data is loaded
onloadedmetadata    Fires when metadata is loaded
onloadstart         Fires when loading starts
onpause             Fires when media is paused
onplay              Fires when media starts playing
onplaying           Fires when playback starts
onprogress          Fires while downloading
onratechange        Fires on playback speed change
onseeked            Fires when seeking ends
onseeking           Fires when seeking starts
onstalled           Fires when data can't be fetched
onsuspend           Fires when fetch is suspended
ontimeupdate        Fires when playback position changes
onvolumechange      Fires when volume changes
onwaiting           Fires when playback pauses for buffering`;

  const miscEvents = `ontoggle  Fires when a <details> element is opened/closed`;

  const sections = [
    { title: "Global Event Attributes", code: windowEvents },
    { title: "Form Events", code: formEvents },
    { title: "Keyboard Events", code: keyboardEvents },
    { title: "Mouse Events", code: mouseEvents },
    { title: "Drag Events", code: dragEvents },
    { title: "Clipboard Events", code: clipboardEvents },
    { title: "Media Events", code: mediaEvents },
    { title: "Misc Events", code: miscEvents },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Event Attributes</h1>

        <div className="flex justify-between mb-10">
          <button
            type="button"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer"
          >
            <FaChevronLeft />
            Previous
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer"
          >
            Next
            <FaChevronRight />
          </button>
        </div>

        <section className="text-gray-800">
          <p className="mb-6">
            HTML lets you assign event attributes to elements, allowing JavaScript to respond to user actions like clicks, typing, or page loading.
          </p>

          {sections.map(({ title, code }) => (
            <div key={title} className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">{title}</h2>
              <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left">
                <h3 className="font-bold mb-3">Examples:</h3>
                <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
                  <code>{code}</code>
                </pre>
                <button
                  type="button"
                  onClick={() => handleCopy(code)}
                  className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
                >
                  {copiedCode === code ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>
          ))}
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

export default Html_Event_Attributes;
