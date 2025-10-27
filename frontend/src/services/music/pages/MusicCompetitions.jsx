import React from 'react'
import HeroSection from "../components/Competitions/HeroSection"
import ComingCompetitions from "../components/Competitions/ComingCompetitions"
import PastCompetitions from "../components/Competitions/PastCompetitions"
import FeaturedCompetitions from "../components/Competitions/FeaturedCompetitions"

const MusicCompetitions = () => {
  return (
    <div>
      <HeroSection/>
      <ComingCompetitions/>
      <PastCompetitions/>
      <FeaturedCompetitions/>
    </div>
  )
}

export default MusicCompetitions
