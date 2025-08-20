import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
const Default = () => {
  const [text, setText] = useState("console.log('Hello I'm JavaScript')")
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className='max-w-5xl mx-auto'>
      <h1 className='px-4 text-2xl sm:text-4xl'>JavaScript Tutorial</h1>
      <div className='flex justify-between items-center p-3 mt-2 text-white'>
        <button className='py-2 px-2 text-md sm:text-xl flex items-center  cursor-pointer rounded-md bg-[#059862]'>
          <MdOutlineKeyboardArrowLeft className='text-2xl' />
          Home
        </button>
        <button className='py-2 px-2 text-md sm:text-xl flex items-center  cursor-pointer rounded-md bg-[#059862]'>
          Next
          <MdKeyboardArrowRight className='text-2xl' />
        </button>
      </div>

      <div className='rounded-md bg-[#D9EEE1] p-10'>
        <h1 className=' text-2xl mb-2'>Learn JavaScript</h1>
        <ol className=' flex flex-col gap-2'>
          <li>JavaScript is one of the most widely-used and versatile programming languages in the world.</li>
          <li>It powers the dynamic behavior on most websites and is the backbone of modern web development.</li>
          <li>Whether you're building interactive websites, developing web apps, or diving into frameworks like React or Node.js,JavaScript is essential.</li>
          <li>This tutorial will guide you step by step, from the fundamentals to advanced concepts, making it easy and fun to learn.</li>
        </ol>
        <button className=' bg-[#059862] hover:bg-[#7baa998c] hover:text-black transition-all ease-in delay-100 cursor-pointer p-3 rounded-md flex justify-center items-center mt-4 text-white'>
          <span className=' text-xs sm:text-lg flex  items-center'>Start learning JavaScript now <MdKeyboardArrowRight /> </span>
        </button>
      </div>


      <div className=' mt-4 px-3'>
        <h1 className='text-xl mb-2 font-semibold sm:text-2xl'>Examples in Each Chapter</h1>
        <p className=' mb-2'>"Try it Yourself" copy code and view the result,in your editor.</p>
        <div className=' rounded-md bg-[#E7E9EB] p-4'>
          <span className=' text-xl '>Example</span>
          <div className=' p-2 bg-white mb-2'>
            <h1 className=' text-2xl font-semibold mb-2'>My First Code</h1>
            <div className=' p-2 rounded-md border w-full md:w-4/12'>
              <span><code>{text}</code></span>
            </div>
          </div>
          <button className=' px-3 flex justify-center items-center p-2 rounded-md bg-[#059862]'>
            <span className=' text-white cursor-pointer' onClick={() => copy()}>{copied ? 'Copied' : 'Copy Code'}</span>
          </button>

        </div>
      </div>


      <div className=' mt-4 px-3 flex flex-col gap-2'>
        <h1 className='  text-lg font-semibold sm:text-2xl'>Using the Menu</h1>
        <span>To get the most out of this tutorial, we recommend following the lessons in the order listed in the menu.</span>
        <ul className=' px-4'>
          <li className='list-disc'>On larger screens, the menu is always visible on the left for easy navigation.</li>
          <li className=' list-disc'>On smaller screens or mobile devices, tap the ☰ menu icon at the top to open the menu.</li>
        </ul>
        <p>Stay on track and learn step by step,everything you need is just a click away!</p>
      </div>

      <div className=' mt-4 px-3 flex flex-col gap-2'>
        <h1 className='  text-lg font-semibold sm:text-2xl'>Learn by Examples</h1>
        <span>The best way to learn is by seeing things in action. That’s why this tutorial is full of simple examples you can try yourself.</span>
        <p>Instead of long explanations, we’ll show you how things work step by step.</p>
        <div className=' bg-[#FFFFCC] rounded-md p-3'>
          <span>let name = "Asad"; <br />
            console.log("Welcome, " + name);
          </span>
        </div>

      </div>


      <div className=' mt-4 px-3 flex flex-col gap-2'>
        <h1 className='  text-lg font-semibold sm:text-2xl'>Why Study JavaScript?</h1>
        <span>JavaScript is one of the 3 languages all web developers must learn:</span>
        <ol className=' px-4'>
          <li className='list-decimal'><span className=' underline font-bold'>HTML</span> to define the content of web pages.</li>
          <li className=' list-decimal'><span className=' underline font-bold'>CSS</span> to specify the layout of web page.</li>
          <li className=' list-decimal'><span className='font-bold'>JavaScript</span> to program the behavior of web pages.</li>
        </ol>
      </div>



      <div className='mt-4 rounded-md bg-[#D9EEE1] p-10'>
        <h1 className=' text-2xl mb-2'>JavaScript Versions Covered</h1>
        <span>This tutorial guides you through all major versions of JavaScript — from the beginning to the latest updates:</span>
        <ol className=' flex px-4 flex-col gap-2'>
          <li className=' list-disc'>Original JavaScript (ES1–ES3) – Introduced between 1997 and 1999</li>
          <li className=' list-disc'>ES5 (2009) – The first major upgrade, still widely supported.</li>
          <li className=' list-disc'>ES6 (2015) – A big leap with modern features like let, const, arrow functions, and classes.</li>
          <li className=' list-disc'>Yearly Updates – New features are added every year (2016 to 2024 and beyond).</li>
        </ol>
      </div>


      <div className=' mt-4 px-3 flex flex-col gap-2'>
        <h1 className='  text-lg font-semibold sm:text-2xl'>Learn at Your Own Pace</h1>
        <span>This tutorial lets you learn JavaScript at a speed that works best for you.</span>
        <ul className=' px-4'>
          <li className=''>No pressure take your time, revisit topics, and explore examples until they make sense.</li>
          <li className=''>If something feels tricky, pause, take a break, or read it again. You're in control of your learning journey.</li>
        </ul>
        <p>And remember the real secret to becoming a confident programmer is simple:
          <br /> <span className=' font-semibold'>Practice. Explore. Build. Repeat</span>.</p>
      </div>



      <div className=' mt-4 px-3 flex flex-col gap-2'>
        <h1 className='  text-lg font-semibold sm:text-2xl'>Common Questions About JavaScript</h1>
        <ol className=' px-4'>
          <li className=''> Q1: How do I get JavaScript?</li>
          <li className=''>Q2: Where can I download JavaScript?</li>
          <li className=''>Q3: Is JavaScript free?</li>
        </ol>
        <span>✅ Good news! You don’t need to download or install anything.</span>
        <p>JavaScript is already built into all modern web browsers on your computer, tablet, and smartphone.</p>
        <p>And yes,JavaScript is completely free to use, for everyone, everywhere.</p>
        <p>You're ready to start coding right away!</p>
      </div>



      <div className=' mt-4 px-3 flex flex-col gap-2'>
        <h1 className='  text-lg font-semibold sm:text-2xl'>JavaScript Reference</h1>
        <p>W3Schools offers a complete JavaScript reference that covers everything you need from core JavaScript syntax to HTML DOM and browser-related objects.</p>
        <p>You'll find easy-to-follow examples for properties, methods, and events all regularly updated to match the latest web standards.</p>
        <p>Whether you're a beginner or brushing up your skills, this reference is your go-to guide for learning and lookup!</p>        
      </div>
<div className="flex justify-end mt-10">
          <button className="flex items-center gap-2 bg-[#04AA6D] text-white px-5 py-2 rounded-md hover:bg-[#03945f] font-medium transition cursor-pointer">
            Next
            <FaChevronRight />
          </button>
        </div>
    </div>
  )
}

export default Default;