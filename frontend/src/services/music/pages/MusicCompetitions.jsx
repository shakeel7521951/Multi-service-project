import React from 'react'
import HeroSection from "../components/Competitions/HeroSection"
import ComingCompetitions from "../components/Competitions/ComingCompetitions"
import PastCompetitions from "../components/Competitions/PastCompetitions"

const MusicCompetitions = () => {
  return (
    <div>
      <HeroSection/>
      <ComingCompetitions/>
      <PastCompetitions/>
    </div>
  )
}

export default MusicCompetitions
