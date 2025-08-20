import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Html_Canvas_Graphics = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const canvasMarkup = `<canvas id="myCanvas" width="200" height="100"></canvas>`;
  const canvasExample = `<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>`;
  const drawLine = `<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
</script>`;
  const drawCircle = `<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
</script>`;
  const fillText = `<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
</script>`;
  const strokeText = `<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 10, 50);
</script>`;
  const linearGradient = `<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
</script>`;
  const radialGradient = `<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
</script>`;
  const drawImage = `<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("scream");
ctx.drawImage(img, 10, 10);
</script>`;

  const renderExample = (title, code) => (
    <div className="bg-[#E7E9EB] p-5 rounded-2xl text-left mb-10">
      <h3 className="font-bold mb-3">{title}</h3>
      <pre className="bg-white border-l-4 border-[#04AA6D] p-4 font-mono text-sm whitespace-pre-wrap rounded">
        <code>{code}</code>
      </pre>
      <button
        onClick={() => handleCopy(code)}
        className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-semibold rounded py-2 px-10 mt-3 transition cursor-pointer"
      >
        {copiedCode === code ? "Copied!" : "Copy Code"}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">HTML Canvas Graphics</h1>

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
          <h2 className="text-3xl font-bold mb-4">What is HTML Canvas?</h2>
          <p className="mb-4">
            The HTML <code>&lt;canvas&gt;</code> element is used to draw graphics on the fly via JavaScript.
          </p>
          <p className="mb-4">
            It acts only as a container. JavaScript is required to draw graphics inside it.
          </p>
          <p className="mb-6">
            Canvas supports paths, boxes, circles, text, images, and more. It's supported by all major browsers.
          </p>

          {renderExample("Canvas Markup", canvasMarkup)}
          {renderExample("Canvas with Border", canvasExample)}
          <h3 className="text-2xl font-semibold mb-4">Add JavaScript to Draw</h3>
          <p className="mb-4">
            After creating the canvas, use JavaScript to draw shapes, text, gradients, and images.
          </p>

          {renderExample("Draw a Line", drawLine)}
          {renderExample("Draw a Circle", drawCircle)}
          {renderExample("Fill Text", fillText)}
          {renderExample("Stroke Text", strokeText)}
          {renderExample("Linear Gradient Fill", linearGradient)}
          {renderExample("Radial Gradient Fill", radialGradient)}
          {renderExample("Draw Image", drawImage)}
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

export default Html_Canvas_Graphics;
