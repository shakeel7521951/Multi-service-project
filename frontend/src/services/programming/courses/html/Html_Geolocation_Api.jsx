import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Geolocation_Api = () => {
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

  const errorHandlingCode = `function error(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
}`;

  const watchPositionCode = `<script>
const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(success, error);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function success(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function error(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
}
</script>`;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Geolocation API</h1>

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

          {/* Locate the User's Position */}
          <div className="bg-[#D9EEE1] p-5 rounded-2xl mb-6">
          <h2 className="text-3xl font-bold mb-4">Locate the User's Position</h2>
          <p className="mb-4">
            The Geolocation API is used to access the user's current location.
          </p>
          <p className="mb-6">
            Since this can compromise privacy, the location is not available unless the user approves it.
          </p>
</div>
          {/* Error Handling Example */}
          <h3 className="text-2xl font-semibold mb-2">Error Handling and Rejections</h3>
          <p className="mb-4">
            The second parameter of the <code>getCurrentPosition()</code> method is used to handle errors.
            It specifies a function to run if it fails to get the user's location.
          </p>

          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{errorHandlingCode}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(errorHandlingCode)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === errorHandlingCode ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Return Data */}
          <h3 className="text-2xl font-semibold mb-2">The getCurrentPosition() Method - Return Data</h3>
          <p className="mb-4">When successful, it returns a position object with properties like:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><code>coords.latitude</code>: The latitude as a decimal number (always returned)</li>
            <li><code>coords.longitude</code>: The longitude as a decimal number (always returned)</li>
            <li><code>coords.accuracy</code>: The accuracy of position</li>
            <li><code>coords.altitude</code>: Altitude above sea level (if available)</li>
            <li><code>coords.altitudeAccuracy</code>: Altitude accuracy (if available)</li>
            <li><code>coords.heading</code>: Heading in degrees (if available)</li>
            <li><code>coords.speed</code>: Speed in meters per second (if available)</li>
            <li><code>timestamp</code>: The time the position was retrieved</li>
          </ul>

          {/* Geolocation Methods */}
          <h3 className="text-2xl font-semibold mb-2">Geolocation Object - Other Methods</h3>
          <p className="mb-4">
            The Geolocation object also offers:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><code>watchPosition()</code>: Continually returns updated position as user moves</li>
            <li><code>clearWatch()</code>: Stops the <code>watchPosition()</code> updates</li>
          </ul>

          {/* watchPosition Example */}
          <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
              <code>{watchPositionCode}</code>
            </pre>
            <button
              type="button"
              onClick={() => handleCopy(watchPositionCode)}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
            >
              {copiedCode === watchPositionCode ? "Copied!" : "Copy Code"}
            </button>
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

export default Html_Geolocation_Api;
