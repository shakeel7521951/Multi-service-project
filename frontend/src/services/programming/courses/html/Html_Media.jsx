import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Multimedia = () => {
  const videoFormats = [
    {
      format: "MPEG",
      extension: ".mpg, .mpeg",
      description:
        "MPEG. Developed by the Moving Pictures Expert Group. The first popular video format on the web. Not supported anymore in HTML.",
    },
    {
      format: "AVI",
      extension: ".avi",
      description:
        "AVI (Audio Video Interleave). Developed by Microsoft. Commonly used in video cameras and TV hardware. Plays well on Windows computers, but not in web browsers.",
    },
    {
      format: "WMV",
      extension: ".wmv",
      description:
        "WMV (Windows Media Video). Developed by Microsoft. Commonly used in video cameras and TV hardware. Plays well on Windows computers, but not in web browsers.",
    },
    {
      format: "QuickTime",
      extension: ".mov",
      description:
        "QuickTime. Developed by Apple. Commonly used in video cameras and TV hardware. Plays well on Apple computers, but not in web browsers.",
    },
    {
      format: "RealVideo",
      extension: ".rm, .ram",
      description:
        "RealVideo. Developed by Real Media to allow video streaming with low bandwidths. Does not play in web browsers.",
    },
    {
      format: "Flash",
      extension: ".swf, .flv",
      description:
        "Flash. Developed by Macromedia. Often requires an extra component (plug-in) to play in web browsers.",
    },
    {
      format: "Ogg",
      extension: ".ogg",
      description:
        "Theora Ogg. Developed by the Xiph.Org Foundation. Supported by HTML.",
    },
    {
      format: "WebM",
      extension: ".webm",
      description:
        "WebM. Developed by Mozilla, Opera, Adobe, and Google. Supported by HTML.",
    },
    {
      format: "MPEG-4 or MP4",
      extension: ".mp4",
      description:
        "MP4. Developed by the Moving Pictures Expert Group. Commonly used in video cameras and TV hardware. Supported by all browsers and recommended by YouTube.",
    },
  ];

  const audioFormats = [
    {
      format: "MIDI",
      extension: ".mid, .midi",
      description:
        "MIDI (Musical Instrument Digital Interface). Main format for all electronic music devices like synthesizers and PC sound cards. MIDI files do not contain sound, but digital notes that can be played by electronics. Plays well on all computers and music hardware, but not in web browsers.",
    },
    {
      format: "RealAudio",
      extension: ".rm, .ram",
      description:
        "RealAudio. Developed by Real Media to allow streaming of audio with low bandwidths. Does not play in web browsers.",
    },
    {
      format: "WMA",
      extension: ".wma",
      description:
        "WMA (Windows Media Audio). Developed by Microsoft. Plays well on Windows computers, but not in web browsers.",
    },
    {
      format: "AAC",
      extension: ".aac",
      description:
        "AAC (Advanced Audio Coding). Developed by Apple as the default format for iTunes. Plays well on Apple computers, but not in web browsers.",
    },
    {
      format: "WAV",
      extension: ".wav",
      description:
        "WAV. Developed by IBM and Microsoft. Plays well on Windows, Macintosh, and Linux operating systems. Supported by HTML.",
    },
    {
      format: "Ogg",
      extension: ".ogg",
      description: "Ogg. Developed by the Xiph.Org Foundation. Supported by HTML.",
    },
    {
      format: "MP3",
      extension: ".mp3",
      description:
        "MP3 files are actually the sound part of MPEG files. MP3 is the most popular format for music players. Combines good compression (small files) with high quality. Supported by all browsers.",
    },
    {
      format: "MP4",
      extension: ".mp4",
      description:
        "MP4 is a video format, but can also be used for audio. Supported by all browsers.",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Multimedia</h1>

        <section className="text-gray-800 mb-16">
          <p className="mb-6 text-lg">
            Multimedia on the web is sound, music, videos, movies, and animations.
          </p>

          <h2 className="text-3xl font-bold mb-4">What is Multimedia?</h2>
          <p className="mb-8">
            Multimedia comes in many different formats. It can be almost anything you can hear or see, like images, music, sound, videos, records, films, animations, and more.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Video Formats</h3>

          <div className="overflow-x-auto mb-10">
            <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-[#04AA6D] text-white">
                <tr>
                  <th className="text-left py-3 px-6 font-semibold">Format</th>
                  <th className="text-left py-3 px-6 font-semibold">File Extension</th>
                  <th className="text-left py-3 px-6 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {videoFormats.map(({ format, extension, description }, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-[#E7E9EB]" : "bg-white"}
                  >
                    <td className="py-3 px-6 align-top font-medium">{format}</td>
                    <td className="py-3 px-6 align-top font-mono">{extension}</td>
                    <td className="py-3 px-6 align-top">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="text-gray-800">
          <h2 className="text-3xl font-bold mb-4">Common Audio Formats</h2>

          <p className="mb-4">
            MP3 is the best format for compressed recorded music. The term MP3 has become synonymous with digital music.
          </p>
          <p className="mb-8">
            If your website is about recorded music, MP3 is the choice.
          </p>

          <div className="overflow-x-auto mb-10">
            <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-[#04AA6D] text-white">
                <tr>
                  <th className="text-left py-3 px-6 font-semibold">Format</th>
                  <th className="text-left py-3 px-6 font-semibold">File Extension</th>
                  <th className="text-left py-3 px-6 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {audioFormats.map(({ format, extension, description }, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-[#E7E9EB]" : "bg-white"}
                  >
                    <td className="py-3 px-6 align-top font-medium">{format}</td>
                    <td className="py-3 px-6 align-top font-mono">{extension}</td>
                    <td className="py-3 px-6 align-top">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
        </section>
      </div>
    </div>
  );
};

export default Html_Multimedia;
