import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Geolocation_Api = () => {
  const references = [
    "getCurrentPosition()",
    "watchPosition()",
    "clearWatch()",
    "Position Options",
    "Error Handling",
    "Coordinates Object",
    "Google Maps Integration",
    "Browser Support",
    "Privacy Considerations",
    "Secure Contexts",
    "Mobile Devices",
    "GPS Accuracy"
  ];

  const exampleCode = `const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}`;

  const errorHandlingCode = `function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}`;

  const mapExampleCode = `function showPosition(position) {
  let latlon = position.coords.latitude + "," + position.coords.longitude;

  let img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
  +latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

  document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}`;

  const [copied, setCopied] = useState({
    basic: false,
    error: false,
    map: false
  });

  const handleCopy = (type) => {
    let textToCopy;
    switch(type) {
      case 'basic':
        textToCopy = exampleCode;
        break;
      case 'error':
        textToCopy = errorHandlingCode;
        break;
      case 'map':
        textToCopy = mapExampleCode;
        break;
      default:
        return;
    }

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(prev => ({...prev, [type]: true}));
        setTimeout(() => setCopied(prev => ({...prev, [type]: false})), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
            Web Geolocation API
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Locate and work with a user's geographical position in modern web applications.
          </p>
        </header>

        {/* Navigation Top */}
        <nav className="flex justify-between items-center">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-medium px-5 py-2 rounded-xl shadow hover:scale-105 hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </nav>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Locate the User's Position</h2>
          <p className="text-gray-800 leading-relaxed mb-3">
            The HTML Geolocation API is used to get the geographical position of a user.
          </p>
          <p className="text-gray-800 leading-relaxed mb-3">
            Since this can compromise privacy, the position is not available unless the user approves it.
          </p>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
            <p className="font-semibold">⚠️ Note:</p>
            <p>Geolocation is most accurate for devices with GPS, like smartphones.</p>
          </div>
        </section>

        {/* Example Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Using the Geolocation API</h2>
          <p className="text-gray-700 mb-4">
            The <code className="bg-gray-100 px-1 py-0.5 rounded">getCurrentPosition()</code> method is used to return the user's position.
          </p>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-bold mb-3 text-lg">📌 Example</h3>
            <pre className="bg-gray-900 text-green-300 p-4 rounded-xl overflow-x-auto text-sm">
              <code>{exampleCode}</code>
            </pre>
            <button
              onClick={() => handleCopy('basic')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded-lg shadow transition"
            >
              {copied.basic ? "✅ Copied!" : "📋 Copy Code"}
            </button>
          </div>
        </section>

        {/* References Grid */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Geolocation API References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our references for the Geolocation API to understand all methods, properties, and best practices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:bg-[#04AA6D] hover:text-white text-gray-800 text-center font-medium py-4 px-4 rounded-xl transition-all duration-200"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-medium px-6 py-3 rounded-xl shadow hover:scale-105 hover:bg-[#03945f] transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Geolocation_Api;
