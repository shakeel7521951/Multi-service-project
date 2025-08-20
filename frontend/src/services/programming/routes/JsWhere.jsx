import React from 'react'
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md'

export default function JsWhere() {
    const code = `<script>
  // Your JavaScript code here
</script>`
    const data = `
<p id="demo">Hello!</p>

<script>
  document.getElementById("demo").textContent = "My First JavaScript";
</script>
`
    const functions = `
<button onclick="greet()">Click Me</button>

<script>
  function greet() {
    alert("Hello there!");
  }
</script>
`
    const fun = `
<button id='demo' onclick="greet()">Click Me</button>

<script>
  function greet() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }
</script>
`
 const external = `

  function greet() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

`


    return (
        <div className='w-full'>
            <h1 className='px-4 text-2xl sm:text-4xl'>Where Can You Use JavaScript?</h1>
            <div className='flex justify-between items-center p-3 mt-2 text-white'>
                <button className='py-2 px-2 text-md sm:text-xl flex items-center cursor-pointer rounded-md bg-[#00C951]'>
                    <MdOutlineKeyboardArrowLeft className='text-2xl' />
                    Previous
                </button>
                <button className='py-2 px-2 text-md sm:text-xl flex items-center cursor-pointer rounded-md bg-[#00C951]'>
                    Next
                    <MdKeyboardArrowRight className='text-2xl' />
                </button>
            </div>

            <div className='w-full mt-4 px-3'>
                <h1 className='text-xl mb-3 font-semibold sm:text-2xl'>The script Tag in HTML</h1>
                <p>In HTML, JavaScript code is placed inside the script tag to make web pages interactive and dynamic.</p>
                <div className='w-full rounded-md p-3 mt-3 bg-[#ced1d4]'>
                    <div className='p-2 bg-white mb-2'>
                        <h1 className='text-xl font-semibold mb-2'>Syntax:</h1>
                        <div className='p-2 rounded-md border w-full'>
                            <code>{code}</code>
                        </div>
                    </div>
                </div>
                <h1 className='text-xl mb-3 mt-2 font-semibold sm:text-2xl'>Updated Example:</h1>
                <div className='w-full rounded-md p-3 mt-3 bg-[#ced1d4] '>
                    <div className='p-2 bg-white mb-2'>
                        <h1 className='text-xl font-semibold mb-2'>Syntax:</h1>
                        <div className='p-2 rounded-md border w-full break-all'>
                            <code className=' text-wrap'>{data}</code>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full mt-4 px-3'>
                <h1 className='text-xl mb-3 font-semibold sm:text-2xl'>JavaScript Functions and Events</h1>
                <p>A JavaScript function is a reusable block of code that performs a specific task. It runs only when it's called.</p>
                <p>Functions are often triggered by events, such as a user clicking a button, hovering over an element, or submitting a form.</p>
                <div className='w-full rounded-md p-3 mt-3 bg-[#ced1d4]'>
                    <div className='p-2 bg-white mb-2'>
                        <h1 className='text-xl font-semibold mb-2'>Syntax:</h1>
                        <div className='p-2 rounded-md border w-full break-all'>
                            <code className=' text-wrap'>{functions}</code>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-4 px-3 p-4 bg-[#FFF4A3] rounded-md'>
                <h1 className='mb-2 text-xl sm:text-2xl font-semibold'>What's Next?</h1>
                <p>You’ll dive deeper into functions and events in the upcoming chapters, unlocking powerful ways to make your web pages interactive and dynamic.</p>
            </div>

            <div className='w-full mt-4 mb-2 px-3'>
                <h1 className='text-xl mb-3 font-semibold sm:text-2xl'>JavaScript Placement in HTML:</h1>
                <p className=' text-wrap'>
                    You can add as many JavaScript <code>&lt;script&gt;</code>
                    tags as you like within an HTML document. These scripts can be placed either inside the &nbsp;
                    <code>&lt;head&gt;</code> section, the <code>&lt;body&gt;</code> section, or even both.
                </p>
            </div>
            <hr className=' bg-gray-400 h-1 opacity-50 border-none' />

            <div className='w-full mt-4 mb-2 px-3'>
                <h1 className='text-xl mb-3 font-semibold sm:text-2xl'>JavaScript in the <code>&lt;head&gt;</code> Section</h1>
                <p>
                    In this example, a JavaScript function is defined within the <code>&lt;head&gt;</code> section of the HTML document.
                </p>
                <p>The function doesn't run automatically,it gets executed only when a user clicks the button on the page.</p>

                <div className='w-full rounded-md p-3 mt-3 bg-[#ced1d4]'>
                    <div className='p-2 bg-white mb-2'>
                        <h1 className='text-xl font-semibold mb-2'>Example:</h1>
                        <div className='p-2 rounded-md border w-full break-all'>
                            <code className=' text-wrap'>{fun}</code>
                        </div>
                    </div>
                </div>
            </div>

             <div className='w-full mt-4 mb-2 px-3'>
                <h1 className='text-xl mb-3 font-semibold sm:text-2xl'>External JavaScript</h1>
                <p>
                    Scripts can also be placed in external files:
                </p>
                <div className='w-full rounded-md p-3 mt-3 bg-[#ced1d4]'>
                    <div className='p-2 bg-white mb-2'>
                        <h1 className='text-xl font-semibold mb-2'>External file: firstScript.js</h1>
                        <div className='p-2 rounded-md break-all border w-full'>
                            <code className=' text-wrap'>{external}</code>
                        </div>
                    </div>
                </div>

                <p className=' mt-3'>
                    External scripts are useful when the same JavaScript code needs to be reused across multiple web pages.
                </p>
                <p>These files have a .js extension and help keep your HTML clean and organized.</p>
                <p>To include an external JavaScript file, use the src (source) attribute inside the <code>&lt;script&gt;</code>tag like this:</p>
                 <div className='w-full rounded-md p-3 mt-3 bg-[#ced1d4]'>
                    <div className='p-2 bg-white mb-2'>
                        <h1 className='text-xl font-semibold mb-2'>Link External file in html</h1>
                        <div className='p-2 rounded-md border w-full'>
                            <code>&lt;script src='firstScript.js'&gt; </code><code>&lt;script&gt; </code>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full mt-4 mb-2 px-3'>
                <h1 className='text-xl mb-3 font-semibold sm:text-2xl'>Advantages of External JavaScript Files</h1>
                <p>
                    Placing JavaScript in external files offers several benefits:
                </p>
                <ol className=' px-4'>
                    <li className=' list-disc'> Separation of concerns: Keeps HTML and JavaScript separate, making your code more organized.</li>
                    <li className=' list-disc'> Improved readability & maintainability: Easier to read, update, and debug both your HTML and JS code.</li>
                    <li className=' list-disc'> Better performance: Browsers can cache external .js files, leading to faster page loads on repeat visits.</li>
                </ol>
            </div>
        </div>
    )
}
