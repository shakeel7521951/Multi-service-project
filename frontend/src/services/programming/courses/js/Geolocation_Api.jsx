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
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-3xl font-extrabold mb-2">Web Geolocation API</h1>
          <p className="text-gray-600 text-lg">
            Locate and work with user's geographical position in web applications.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex justify-between">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            <FaChevronLeft />
            Home
          </button>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#D9EEE1] p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4">Locate the User's Position</h2>
          <p className="text-gray-800 mb-3">
            The HTML Geolocation API is used to get the geographical position of a user.
          </p>
          <p className="text-gray-800 mb-3">
            Since this can compromise privacy, the position is not available unless the user approves it.
          </p>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
            <p className="font-semibold">Note</p>
            <p>Geolocation is most accurate for devices with GPS, like smartphones.</p>
          </div>
        </section>

        {/* Browser Support Section */}
        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Browser Support</h2>
          <p className="mb-4">The Geolocation API is supported in all browsers:</p>
          <div className="bg-white p-4 rounded inline-block mb-4">
            <p>Chrome ✔️ Firefox ✔️ Safari ✔️ Edge ✔️ Opera ✔️</p>
          </div>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
            <p className="font-semibold">Note</p>
            <p>The Geolocation API will only work on secure contexts such as HTTPS.</p>
            <p>If your site is hosted on a non-secure origin (such as HTTP) the requests to get the users location will no longer function.</p>
          </div>
        </section>

        {/* Basic Usage Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Using the Geolocation API</h2>
          <p className="text-gray-700 mb-4">
            The <code className="bg-gray-100 px-1 rounded">getCurrentPosition()</code> method is used to return the user's position.
          </p>
          <p className="mb-4">The example below returns the latitude and longitude of the user's position:</p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl mb-6">
            <h3 className="font-bold mb-3">Example:</h3>
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{exampleCode}</code>
            </pre>
            <button
              onClick={() => handleCopy('basic')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.basic ? "Copied!" : "Copy Code"}
            </button>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-8">
            <h3 className="font-bold mb-2">Example explained:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Check if Geolocation is supported</li>
              <li>If supported, run the getCurrentPosition() method. If not, display a message to the user</li>
              <li>If the getCurrentPosition() method is successful, it returns a coordinates object to the function specified in the parameter (showPosition)</li>
              <li>The showPosition() function outputs the Latitude and Longitude</li>
            </ul>
          </div>
        </section>

        {/* Error Handling Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Handling Errors and Rejections</h2>
          <p className="mb-4">
            The second parameter of the getCurrentPosition() method is used to handle errors. It specifies a function to run if it fails to get the user's location:
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{errorHandlingCode}</code>
            </pre>
            <button
              onClick={() => handleCopy('error')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.error ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Map Integration Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Displaying the Result in a Map</h2>
          <p className="mb-4">
            To display the result in a map, you need access to a map service, like Google Maps.
          </p>
          <p className="mb-4">
            In the example below, the returned latitude and longitude is used to show the location in a Google Map (using a static image):
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{mapExampleCode}</code>
            </pre>
            <button
              onClick={() => handleCopy('map')}
              className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold mt-4 px-6 py-2 rounded transition"
            >
              {copied.map ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Location-specific Info */}
        <section className="bg-[#D9EEE1] p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-3">Location-specific Information</h2>
          <p className="mb-3">This page has demonstrated how to show a user's position on a map.</p>
          <p>Geolocation is also very useful for location-specific information, like:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Up-to-date local information</li>
            <li>Showing Points-of-interest near the user</li>
            <li>Turn-by-turn navigation (GPS)</li>
          </ul>
        </section>

        {/* Return Data Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The getCurrentPosition() Method - Return Data</h2>
          <p className="mb-4">
            The getCurrentPosition() method returns an object on success. The latitude, longitude and accuracy properties are always returned. The other properties are returned if available:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b font-semibold text-left">Property</th>
                  <th className="py-2 px-4 border-b font-semibold text-left">Returns</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">coords.latitude</td>
                  <td className="py-2 px-4 border-b">The latitude as a decimal number (always returned)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">coords.longitude</td>
                  <td className="py-2 px-4 border-b">The longitude as a decimal number (always returned)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">coords.accuracy</td>
                  <td className="py-2 px-4 border-b">The accuracy of position (always returned)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">coords.altitude</td>
                  <td className="py-2 px-4 border-b">The altitude in meters above the mean sea level (returned if available)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">coords.altitudeAccuracy</td>
                  <td className="py-2 px-4 border-b">The altitude accuracy of position (returned if available)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">coords.heading</td>
                  <td className="py-2 px-4 border-b">The heading as degrees clockwise from North (returned if available)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">coords.speed</td>
                  <td className="py-2 px-4 border-b">The speed in meters per second (returned if available)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">timestamp</td>
                  <td className="py-2 px-4 border-b">The date/time of the response (returned if available)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Other Methods Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Geolocation Object - Other interesting Methods</h2>
          <p className="mb-4">
            The Geolocation object also has other interesting methods:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li><code className="bg-gray-100 px-1 rounded">watchPosition()</code> - Returns the current position of the user and continues to return updated position as the user moves (like the GPS in a car).</li>
            <li><code className="bg-gray-100 px-1 rounded">clearWatch()</code> - Stops the watchPosition() method.</li>
          </ul>
          <p className="mb-4">
            The example below shows the watchPosition() method. You need an accurate GPS device to test this (like smartphone):
          </p>
          
          <div className="bg-[#E7E9EB] p-6 rounded-xl">
            <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm rounded overflow-x-auto">
              <code>{`<script>
const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
</script>`}</code>
            </pre>
          </div>
        </section>

        {/* HTML References */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Geolocation API References</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Explore our comprehensive references for the Geolocation API to understand all methods, properties, and best practices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {references.map((ref, idx) => (
              <button
                key={idx}
                className="cursor-pointer bg-gray-100 hover:bg-black hover:text-white text-gray-800 text-center font-medium py-3 px-4 rounded transition"
              >
                {ref}
              </button>
            ))}
          </div>
        </section>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white font-semibold px-5 py-2 rounded hover:bg-[#03945f] transition">
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Geolocation_Api;
