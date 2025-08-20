import React from 'react'
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md'

export default function JsStatement() {
    const example = `let a=10;\nlet b=20;
    \n\nconsole.log(a+b);`;

    const func = `
    
  function myFunction() {
    document.getElementById("one").innerHTML = "Hello Asad!";
    document.getElementById("two").innerHTML = "How are you?";
  }
myFunction()


    `
    const space = `
    let name = "Asad";
let name="Asad";
    `
    const student = `
    document.getElementById("student").innerHTML = "Hello Students";
    `
    const string = ` {...}`
    return (
        <div className=' w-full'>
            <h1 className='px-4 text-2xl sm:text-4xl'>JavaScript Statements</h1>
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
                <h1 className='text-xl mb-3 font-semibold sm:text-2xl'>Statement in JavaScript?</h1>
                <p>A statement in JavaScript is a complete instruction that the browser can execute.</p>
                <p>Think of it like a sentence in English,just as a sentence tells you something, a JavaScript statement tells the computer to do something.</p>
                <div className='w-full rounded-md p-3 mt-3 bg-[#ced1d4]'>
                    <div className='p-2 bg-white mb-2'>
                        <h1 className='text-xl font-semibold mb-2'>example:</h1>
                        <div className='p-2 rounded-md border w-full break-all'>
                            <code>{example}</code>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full mt-4 px-3'>
                <h1 className='text-xl mb-3 font-semibold sm:text-2xl'>JavaScript Programs</h1>
                <p>A computer program is a set of instructions that a computer follows to perform a task</p>
                <p>In programming languages, these instructions are called statements.</p>
                <p>A JavaScript program is simply a sequence of statements executed by the browser from top to bottom.</p>
            </div>

            <div className='mt-4 px-3 p-4 bg-[#FFF4A3] rounded-md'>
                <h1 className='mb-2 text-xl sm:text-xl'>In HTML, JavaScript programs are executed by the web browser to make web pages interactive and dynamic.</h1>

            </div>

            <div className='w-full mt-4 px-3'>
                <h1 className='text-xl mb-3 font-semibold sm:text-2xl'>JavaScript Statements</h1>
                <p>JavaScript statements are instructions that the browser can execute.</p>
                <p>They are made up of values, operators, expressions, keywords, and comments.</p>
                <p>For example, the following statement tells the browser to insert the text "Hello Student" into an HTML element with the ID "student":</p>
                <div className='w-full rounded-md p-3 mt-3 bg-[#ced1d4]'>
                    <div className='p-2 bg-white mb-2 break-all'>
                        <h1 className='text-xl font-semibold mb-2'>example:</h1>
                        <div className='p-2 rounded-md border w-full'>
                            <code>{student}</code>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full mt-4 px-3'>
                <p>Most JavaScript programs consist of multiple statements.</p>
                <p>These statements are executed sequentially, one after another, in the order they are written.</p>
            </div>

            <div className='mt-4 px-3 p-4 bg-[#FFF4A3] rounded-md'>
                <h1 className='mb-2 text-xl sm:text-xl'>JavaScript programs and the statements they contain are commonly referred to as JavaScript code.</h1>

            </div>


            <div className='w-full mt-4 px-3'>
                <h1 className='mb-2 text-xl sm:text-2xl font-semibold'>Semicolon (;)</h1>
                <p>In JavaScript, semicolons are used to separate executable statements.</p>
                <p>It’s a good practice to add a semicolon at the end of each statement to clearly indicate where one instruction ends and the next begins.</p>

            </div>

            <div className='mt-4 px-3 p-4 bg-[#FFF4A3] rounded-md'>
                <h1 className='mb-2 text-xl sm:text-xl'>On the web, you might come across JavaScript examples that don’t use semicolons.</h1>
                <p>While semicolons are not strictly required, it's highly recommended to end each statement with a semicolon to avoid unexpected behavior and improve code clarity.</p>
            </div>

            <div className='w-full mt-4 px-3'>
                <h1 className='text-xl mb-3 font-semibold sm:text-2xl'>JavaScript White Space</h1>
                <p>JavaScript ignores extra spaces, tabs, and line breaks, so you can use white space freely to make your code easier to read.</p>
                <div className='w-full rounded-md p-3 mt-3 bg-[#ced1d4]'>
                    <div className='p-2 bg-white mb-2 break-all'>
                        <h1 className='text-xl font-semibold mb-2'>example:</h1>
                        <div className='p-2 rounded-md border w-full'>
                            <code>{space}</code>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full mt-4 px-3'>
                <h1 className='text-xl mb-3 font-semibold sm:text-2xl'>JavaScript Code Blocks</h1>
                <p>JavaScript statements can be grouped together inside code blocks, which are enclosed by curly braces {string}</p>
                <p>Code blocks allow you to group multiple statements so they execute together as a single unit.</p>
                <p>A common place to find code blocks is inside functions, where related statements are bundled to perform specific tasks.</p>
                <div className='w-full rounded-md p-3 mt-3 bg-[#ced1d4]'>
                    <div className='p-2 bg-white mb-2 break-all'>
                        <h1 className='text-xl font-semibold mb-2'>example:</h1>
                        <div className='p-2 rounded-md border w-full'>
                            <code>{func}</code>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full mt-4 px-3'>
                <h1 className='text-xl mb-3 font-semibold sm:text-2xl'>JavaScript Keywords</h1>
                <p>JavaScript statements often begin with keywords, which tell the browser what kind of action to perform.</p>
                <p>Keywords are reserved words in JavaScript you cannot use them as variable names because they have a special meaning in the language.</p>
                <p>Below are some common JavaScript keywords you'll encounter in this tutorial:</p>

                <div className='mt-4 shadow-md p-4 rounded-md bg-white'>
                    {/* Headings once at the top */}
                    <div className='flex gap-10 mb-4'>
                        <h1 className='font-semibold text-md w-[100px]'>Keyword</h1>
                        <h1 className='font-semibold text-md'>Description</h1>
                    </div>

                    {/* Keywords and Descriptions */}
                    {[
                        { keyword: 'var', description: 'Declares a variable (function-scoped)' },
                        { keyword: 'let', description: 'Declares a block-scoped variable' },
                        { keyword: 'const', description: 'Declares a block-scoped constant' },
                        { keyword: 'if', description: 'Executes a block of code based on a condition' },
                        { keyword: 'switch', description: 'Executes code blocks based on different cases' },
                        { keyword: 'for', description: 'Loops through a block of code multiple times' },
                        { keyword: 'function', description: 'Declares a reusable block of code' },
                        { keyword: 'return', description: 'Exits a function and optionally returns a value' },
                        { keyword: 'try', description: 'Defines a block to test for errors' },
                    ].map((item, index) => (
                        <div key={index} className='flex gap-10 mb-2'>
                            <span className='w-[100px] rounded-md shadow-sm p-2 bg-gray-200 text-center'>
                                {item.keyword}
                            </span>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
