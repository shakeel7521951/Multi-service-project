
import { useState } from 'react';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { FaChevronRight } from "react-icons/fa";

export default function jsIntro() {
    const data = `<p id="demo">Original Text</p>
    
<script>
  document.getElementById("demo").innerHTML = "Hello JavaScript";
</script>
`.trim()
    const [text, setText] = useState(data)
    const [copied, setCopied] = useState(false)

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const bulb = `
<img id="bulb" src="bulb-off.jpg" alt="Light Bulb">
<button onclick="turnOn()">Turn On</button>
<button onclick="turnOff()">Turn Off</button>

<script>
  function turnOn() {
    document.getElementById("bulb").src = "bulb-on.jpg";
  }

  function turnOff() {
    document.getElementById("bulb").src = "bulb-off.jpg";
  }
</script>

    `
    return (
        <div className='max-w-5xl mx-auto'>
            <h1 className='px-4 text-2xl sm:text-4xl'>JavaScript Introduction</h1>
            <div className='flex justify-between items-center p-3 mt-2 text-white'>
                <button className='py-2 px-2 text-md sm:text-xl flex items-center  cursor-pointer rounded-md bg-[#059862]'>
                    <MdOutlineKeyboardArrowLeft className='text-2xl' />
                    Previous
                </button>
                <button className='py-2 px-2 text-md sm:text-xl flex items-center  cursor-pointer rounded-md bg-[#059862]'>
                    Next
                    <MdKeyboardArrowRight className='text-2xl' />
                </button>
            </div>

            <div className=' mt-4 px-3 flex flex-col gap-2'>
                <h1 className='  text-lg font-semibold sm:text-2xl'>What is JavaScript?</h1>
                <ol className=' px-4'>
                    <li className='list-disc'>It can manipulate and update both HTML and CSS in real-time</li>
                    <li className='list-disc'>It allows you to respond to user actions, such as clicks, inputs, or form submissions.</li>
                    <li className='list-disc'>It can perform calculations, validate data, and control multimedia, animations, and more.</li>
                    <li className=' list-disc'>JavaScript is supported by all modern web browsers and is essential for building responsive, user-friendly web applications.</li>
                </ol>
            </div>

            <div className=' mt-4 px-3 flex flex-col gap-2'>
                <h1 className='  text-lg font-semibold sm:text-2xl'>Why Study JavaScript?</h1>
                <p>JavaScript is one of the three core technologies every web developer must learn:</p>
                <ol className=' px-4'>
                    <li className='list-decimal'>HTML – Defines the structure and content of web pages</li>
                    <li className='list-decimal'>CSS – Controls the styling and layout of web pages</li>
                    <li className='list-decimal'>JavaScript – Adds interactivity and functionality to web pages</li>
                </ol>
                <span className=' text-xl sm:text-2xl font-semibold'>JavaScript Can Change HTML Content</span>
                <p>JavaScript allows you to dynamically update the content of HTML elements. <br />
                    One commonly used method is getElementById(), which targets an element by its id.</p>


            </div>

            <div className=' mt-4 px-3'>
                <span className=' text-xl '>Example</span>
                <div className=' rounded-md bg-[#E7E9EB] p-4'>
                    <div className=' p-2 bg-white mb-2'>
                        <h1 className=' text-2xl font-semibold mb-2'>My Code:</h1>
                        <div className=' p-2 rounded-md border w-full break-all '>
                            <span className=' text-wrap'>{data}</span>
                        </div>
                    </div>
                    <button className=' px-3 flex justify-center items-center p-2 rounded-md bg-[#059862]'>
                        <span className=' text-white cursor-pointer' onClick={() => copy()}>{copied ? 'Copied' : 'Copy Code'}</span>
                    </button>

                </div>
            </div>

            <div className=' mt-4 p-3 rounded-md bg-[#FFFFCC]'>
                <h1 className=' text-md sm:text-xl mb-2'>JavaScript Accepts Both Single and Double Quotes:</h1>
                <span>In JavaScript, you can use either single (') or double (") quotes to define a string. Both are valid and work the same way:</span>
            </div>


            <div className=' w-full mt-4 px-3'>
                <h1 className='text-xl mb-3 font-semibold sm:text-2xl'>JavaScript Can Change HTML Attribute Values</h1>
                <p>JavaScript can be used to dynamically change attribute values of HTML elements.</p>
                <p>
                    For example, you can change the src (source) attribute of an "img" tag to turn a light bulb on or off.</p>
                <div className='w-full rounded-md p-3 bg-[#ced1d4] '>
                    <div className=' p-2 bg-white mb-2'>
                        <h1 className=' text-2xl font-semibold mb-2'>Hint:</h1>
                        <div className=' p-2 rounded-md border w-full text-sm sm:text-base break-all '>
                            <span>{bulb}</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className=' w-full mt-4 px-3'>
                <h1 className='text-xl mb-3 font-semibold sm:text-2xl'>Modern JavaScript Can Change HTML Styles (Using Classes)</h1>
                <p>Instead of directly modifying an element’s inline style, it's now recommended to use classList to apply or remove predefined CSS classes. This keeps styling separate from logic, improves maintainability, and follows best practices.</p>

                <div className='w-full rounded-md p-3 bg-[#ced1d4] '>
                    <div className=' p-2 bg-white mb-2'>
                        <h1 className=' text-2xl font-semibold mb-2'>Updated Example:</h1>
                        <div className='p-2 rounded-md border w-full text-sm sm:text-base break-all'>
                            <span className=' text-wrap'><code className=' text-wrap'>document.querySelector("#demo").classList.toggle("large-font");</code></span>
                        </div>
                    </div>
                </div>
            </div>


            <div className=' mt-4 px-3 p-4 bg-[#FFF4A3] rounded-md'>
                <h1 className='mb-4 text-xl sm:text-2xl font-semibold'>Did You Know?</h1>
                <div className=' flex flex-col gap-3'>
                    <p>Despite the similar names, JavaScript and Java are entirely different languages in both purpose and design.</p>
                    <p>JavaScript was created by Brendan Eich in 1995 and later standardized as ECMAScript by ECMA International in 1997.</p>
                    <p>The official specification is called ECMA-262, and ECMAScript is the formal name of the language.</p>
                    <p>JavaScript powers interactive web pages, while Java is a general-purpose programming language used in many environments, including mobile and enterprise apps.</p>
                </div>
            </div>
        </div>
    )
}
