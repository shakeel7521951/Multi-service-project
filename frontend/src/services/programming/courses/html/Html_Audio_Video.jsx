import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Audio_Video = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Audio/Video DOM Reference</h1>

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

          {/* Intro */}
          <h2 className="text-3xl font-bold mb-4">HTML Audio and Video DOM Reference</h2>
          <p className="mb-6">
            The HTML5 DOM provides properties, methods, and events specifically for handling the <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements.
          </p>

          {/* Methods */}
          <h3 className="text-2xl font-semibold mb-2">HTML Audio/Video Methods</h3>
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full text-left border border-gray-300 rounded-xl">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border-b">Method</th>
                  <th className="p-3 border-b">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["addTextTrack()", "Adds a new text track to the audio/video"],
                  ["canPlayType()", "Checks if the browser can play the specified audio/video type"],
                  ["load()", "Re-loads the audio/video element"],
                  ["play()", "Starts playing the audio/video"],
                  ["pause()", "Pauses the currently playing audio/video"]
                ].map(([method, desc], i) => (
                  <tr key={i} className="odd:bg-white even:bg-gray-50">
                    <td className="p-3 border-b font-mono text-sm">{method}</td>
                    <td className="p-3 border-b">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Properties */}
          <h3 className="text-2xl font-semibold mb-2">HTML Audio/Video Properties</h3>
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full text-left border border-gray-300 rounded-xl">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border-b">Property</th>
                  <th className="p-3 border-b">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["audioTracks", "Returns an AudioTrackList object representing available audio tracks"],
                  ["autoplay", "Sets or returns whether the audio/video should start playing as soon as it is loaded"],
                  ["buffered", "Returns a TimeRanges object representing the buffered parts of the audio/video"],
                  ["controller", "Returns the MediaController object representing the current media controller of the audio/video"],
                  ["controls", "Sets or returns whether the audio/video should display controls (like play/pause etc.)"],
                  ["crossOrigin", "Sets or returns the CORS settings of the audio/video"],
                  ["currentSrc", "Returns the URL of the current audio/video"],
                  ["currentTime", "Sets or returns the current playback position in the audio/video (in seconds)"],
                  ["defaultMuted", "Sets or returns whether the audio/video should be muted by default"],
                  ["defaultPlaybackRate", "Sets or returns the default speed of the audio/video playback"],
                  ["duration", "Returns the length of the current audio/video (in seconds)"],
                  ["ended", "Returns whether the playback of the audio/video has ended or not"],
                  ["error", "Returns a MediaError object representing the error state of the audio/video"],
                  ["loop", "Sets or returns whether the audio/video should start over again when finished"],
                  ["mediaGroup", "Sets or returns the group the audio/video belongs to (used to link multiple audio/video elements)"],
                  ["muted", "Sets or returns whether the audio/video is muted or not"],
                  ["networkState", "Returns the current network state of the audio/video"],
                  ["paused", "Returns whether the audio/video is paused or not"],
                  ["playbackRate", "Sets or returns the speed of the audio/video playback"],
                  ["played", "Returns a TimeRanges object representing the played parts of the audio/video"],
                  ["preload", "Sets or returns whether the audio/video should be loaded when the page loads"],
                  ["readyState", "Returns the current ready state of the audio/video"],
                  ["seekable", "Returns a TimeRanges object representing the seekable parts of the audio/video"],
                  ["seeking", "Returns whether the user is currently seeking in the audio/video"],
                  ["src", "Sets or returns the current source of the audio/video element"],
                  ["startDate", "Returns a Date object representing the current time offset"],
                  ["textTracks", "Returns a TextTrackList object representing the available text tracks"],
                  ["videoTracks", "Deprecated. Do not use it."],
                  ["volume", "Sets or returns the volume of the audio/video"]
                ].map(([property, desc], i) => (
                  <tr key={i} className="odd:bg-white even:bg-gray-50">
                    <td className="p-3 border-b font-mono text-sm">{property}</td>
                    <td className="p-3 border-b">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Events */}
          <h3 className="text-2xl font-semibold mb-2">HTML Audio/Video Events</h3>
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full text-left border border-gray-300 rounded-xl">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border-b">Event</th>
                  <th className="p-3 border-b">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["abort", "Fires when the loading of an audio/video is aborted"],
                  ["canplay", "Fires when the browser can start playing the audio/video"],
                  ["canplaythrough", "Fires when the browser can play through the audio/video without stopping for buffering"],
                  ["durationchange", "Fires when the duration of the audio/video is changed"],
                  ["emptied", "Fires when the current playlist is empty"],
                  ["ended", "Fires when the current playlist is ended"],
                  ["error", "Fires when an error occurred during the loading of an audio/video"],
                  ["loadeddata", "Fires when the browser has loaded the current frame of the audio/video"],
                  ["loadedmetadata", "Fires when the browser has loaded meta data for the audio/video"],
                  ["loadstart", "Fires when the browser starts looking for the audio/video"],
                  ["pause", "Fires when the audio/video has been paused"],
                  ["play", "Fires when the audio/video has been started or is no longer paused"],
                  ["playing", "Fires when the audio/video is playing after having been paused or stopped for buffering"],
                  ["progress", "Fires when the browser is downloading the audio/video"],
                  ["ratechange", "Fires when the playing speed of the audio/video is changed"],
                  ["seeked", "Fires when the user is finished moving/skipping to a new position in the audio/video"],
                  ["seeking", "Fires when the user starts moving/skipping to a new position in the audio/video"],
                  ["stalled", "Fires when the browser is trying to get media data, but data is not available"],
                  ["suspend", "Fires when the browser is intentionally not getting media data"],
                  ["timeupdate", "Fires when the current playback position has changed"],
                  ["volumechange", "Fires when the volume has been changed"],
                  ["waiting", "Fires when the video stops because it needs to buffer the next frame"]
                ].map(([event, desc], i) => (
                  <tr key={i} className="odd:bg-white even:bg-gray-50">
                    <td className="p-3 border-b font-mono text-sm">{event}</td>
                    <td className="p-3 border-b">{desc}</td>
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

export default Html_Audio_Video;
