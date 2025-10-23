import React from 'react'
import HeroSection from "../components/Courses/HeroSection"
import CoursesProvide from "../components/Courses/CoursesProvide"
import CoursesCards from '../components/Courses/CoursesCards'
import FeatureSection from "../components/Courses/FeatureSection"

const CoursesMusic = () => {
  return (
    <div>
      <HeroSection/>
      <CoursesProvide/>
      <CoursesCards/>
      <FeatureSection/>
    </div>
  )
}

export default CoursesMusic
