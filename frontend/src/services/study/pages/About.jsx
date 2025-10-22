import React from "react";
import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import TeamSection from "../components/about/TeamSection";
import ContactCTA from "../components/about/ContactCTA";
import AchievementStats from "../components/about/AchievementSection";
import ValuesSection from "../components/about/ValueSection";

export default function StudyAbout() {
   return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
         <AboutHero />
         <OurStory />
         <MissionVision />
         <AchievementStats />
         <TeamSection />
         <ValuesSection/>
         <ContactCTA />
      </div>
   );
}
