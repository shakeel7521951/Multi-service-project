import React from 'react'
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md'

export default function JsOutput() {
    const external = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JavaScript innerHTML Example</title>
</head>
<body>

  <h1>My First Web Page</h1>
  <p>This is my first paragraph.</p>

  <p id="demo"></p>

  <script>
    document.getElementById("demo").innerHTML = "<h2>Hello, World!</h2>";
  </script>

</body>
</html>
`

    return (
        <div className='px-4 s'>
            <h1 className='text-2xl sm:text-4xl font-bold'>JavaScript Output</h1>

            {/* Navigation Buttons */}
            <div className='w-full  flex justify-between flex-wrap  items-center p-3 mt-4 text-white'>
                <button className='py-2 px-2 sm:px-4 text-md sm:text-xl flex-wrap flex items-center cursor-pointer rounded-md bg-[#059862]'>
                    <MdOutlineKeyboardArrowLeft className='text-2xl' />
                    Previous
                </button>
                <button className='py-2 px-4 text-md sm:text-xl flex items-center cursor-pointer rounded-md bg-[#059862]'>
                    Next
                    <MdKeyboardArrowRight className='text-2xl' />
                </button>
            </div>

            <hr className='bg-gray-400 h-1 opacity-50 border-none my-4' />


            <div className='w-full mb-6'>
                <h2 className='text-xl sm:text-2xl font-semibold mb-3'>JavaScript Display Options</h2>
                <p>
                    JavaScript can display data in several ways, depending on how and where you want the output to appear:
                </p>
                <ol className='list-disc px-5 mt-3 space-y-1'>
                    <li>Display in an HTML element using <code>innerHTML</code> or <code>innerText</code>.</li>
                    <li>Write directly to the document using <code>document.write()</code> (mostly used for testing).</li>
                    <li>Show a popup message using <code>window.alert()</code>.</li>
                    <li>Log output for debugging using <code>console.log()</code> (in the browser’s developer console).</li>
                </ol>
            </div>

            <hr className='bg-gray-400 h-1 opacity-50 border-none my-4' />


            <div className='w-full mb-6'>
                <h2 className='text-xl sm:text-2xl font-semibold mb-3'>Using <code>innerHTML</code> to Update Content</h2>
                <p>
                    To access and update an HTML element, use the <code>document.getElementById(id)</code> method.
                    Assign a unique <code>id</code> to the element you want to target, and then use the <code>innerHTML</code> property to change its content dynamically.
                </p>
                <p className='mt-2'>This allows JavaScript to modify the visible content of a web page.</p>
            </div>


            <div className='w-full rounded-md p-3 bg-[#ced1d4] overflow-auto'>
                <h3 className='text-xl font-semibold mb-2'>Example:</h3>
                <div className='p-2 bg-white rounded-md shadow-sm break-all'>

                    <code className=' text-wrap'>{external}</code>

                </div>
            </div>


            <div className=' mt-4 rounded-md bg-[#FFF4A3] px-3 p-3'>
                <h1 className=' font-semibold text-xl sm:text-2xl '>Note:</h1>
                <p className=' mt-2'>
                    Modifying the innerHTML property is one of the most common and effective ways to display dynamic content within an HTML element using JavaScript.
                </p>
            </div>

            <div className='w-full mb-6 mt-3'>
                <h2 className='text-xl sm:text-2xl font-semibold mb-3'>Using innerText to Update Text Content</h2>
                <p>
                    JavaScript can display data in several ways, depending on how and where you want the output to appear:To access a specific HTML element, use the document.getElementById(id) method. <br />
                    Then, use the innerText property to update only the text content of that element without rendering any HTML tags.
                </p>
            </div>

            <div className='w-full mb-6 mt-3'>
                <h2 className='text-xl sm:text-2xl font-semibold mb-3'>Using document.write()</h2>
                <p>
                    The document.write() method is mainly used for quick testing or debugging during development.
                </p>
                <p>It writes directly to the HTML output stream, which means it can overwrite the entire page if used after the page has loaded.</p>
            </div>
            <div className=' mt-4 rounded-md bg-[#FFF4A3] px-3 p-3'>
                <h1 className=' font-semibold text-xl sm:text-2xl '>Note:</h1>
                <p className=' mt-2'>
                    It's not recommended for use in modern production websites.
                </p>
            </div>
            <div className=' mt-3 w-full rounded-md p-3 bg-[#ced1d4] overflow-auto'>
                <h3 className='text-xl font-semibold mb-2'>Example:</h3>
                <div className='p-2 bg-white rounded-md shadow-sm break-all'>
                    <pre className='p-3 text-wrap text-sm sm:text-base bg-gray-100 rounded-md overflow-auto'>
                        <code className=' text-wrap'>&lt;script&gt;</code>  document.write(5 + 6); <code>&lt;/script&gt;</code>
                    </pre>
                </div>
            </div>


            <div className='w-full mb-6 mt-3'>
                <h2 className='text-xl sm:text-2xl font-semibold mb-3'>Using window.alert() to Display Data</h2>
                <p>
                    The window.alert() method displays a popup dialog box with a message for the user.
                    It's often used to show simple notifications, warnings, or debugging messages that require the user’s acknowledgment before continuing..
                </p>
                <div className=' mt-3 w-full rounded-md p-3 bg-[#ced1d4] overflow-auto'>
                    <h3 className='text-xl font-semibold mb-2'>Example:</h3>
                    <div className='p-2 bg-white rounded-md shadow-sm break-all'>

                        <code className=' text-wrap'>&lt;script&gt;</code>  window.alert(5 + 6); <code>&lt;/script&gt;</code>

                    </div>

                </div>
            </div>


            <div className='w-full mb-6 mt-3'>
                <h2 className='text-xl sm:text-2xl font-semibold mb-3'>Using console.log() for Debugging</h2>
                <p>
                    The console.log() method is commonly used during development to output messages or data to the browser’s developer console.
                </p>
                <p>This helps developers inspect values, trace program flow, and debug their code without disrupting the user experience.</p>
                <div className=' mt-3 w-full rounded-md p-3 bg-[#ced1d4] overflow-auto'>
                    <h3 className='text-xl font-semibold mb-2'>Example:</h3>
                    <div className='p-2 bg-white rounded-md shadow-sm break-all'>

                        <code className='text-wrap'>&lt;script&gt;</code> console.log('hello programmer'); <code>&lt;/script&gt;</code>

                    </div>

                </div>
            </div>
        </div>
    )
}
