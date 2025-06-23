import React from 'react'
import { Link } from 'react-router-dom';

const TutorialArray=[
  {id:1,topic:"CSS HOME",link:"/"},
  {id:2,topic:"CSS Introduction",link:"/"},
  {id:3,topic:"CSS Syntax",link:"/"},
  {id:4,topic:"CSS HOME",link:"/"},
  {id:5,topic:"CSS HOME",link:"/"},
]
const Css_sidebar = () => {
  return (
    <div className="w-[20vw] p-3 border overflow-y-scroll h-screen pb-20 bg-gray-800 text-white">
      <div>
        <h1 className="font-semibold text-lg">CSS Tutorial</h1>
        <ul className="flex mt-3 flex-col items-center">
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>          
        </ul>
      </div>
      <div>
        <h1 className="my-3 font-semibold text-lg">CSS Advanced</h1>
        <ul className="flex mt-3 flex-col items-center">
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>          
        </ul>
      </div>
      <div>
        <h1 className="my-3 font-semibold text-lg">CSS Advanced</h1>
        <ul className="flex mt-3 flex-col items-center">
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>          
        </ul>
      </div>
      <div>
        <h1 className="my-3 font-semibold text-lg">CSS Advanced</h1>
        <ul className="flex mt-3 flex-col items-center">
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>          
        </ul>
      </div>
      <div>
        <h1 className="my-3 font-semibold text-lg">CSS Grid</h1>
        <ul className="flex mt-3 flex-col items-center">
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>          
        </ul>
      </div>
      <div>
        <h1 className="my-3 font-semibold text-lg">CSS Flexbox</h1>
        <ul className="flex mt-3 flex-col items-center">
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>          
        </ul>
      </div>
      <div>
        <h1 className="my-3 font-semibold text-lg">CSS Refrences</h1>
        <ul className="flex mt-3 flex-col items-center">
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>
          <Link to="/"> CSS HOME </Link>          
        </ul>
      </div>
    </div>
  )
}

export default Css_sidebar;