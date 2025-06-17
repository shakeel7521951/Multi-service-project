import React from 'react'
import Hero from '../../../../components/CSS TUTORIAL/HomeCss/Hero';
import Example from '../../../../components/CSS TUTORIAL/HomeCss/Example';
import Menu from '../../../../components/CSS TUTORIAL/HomeCss/Menu';

const Default = () => {
  return (
    <div className="w-[80vw] px-5 py-5 text-white bg-gray-600 overflow-y-auto h-screen">
      <Hero/>
      <Example/>
      <Menu/>
    </div>
  )
}

export default Default;