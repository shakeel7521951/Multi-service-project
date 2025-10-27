import React from "react";
import HeroSection from "../components/gamesHomePageComponents/HeroSection";
import FeaturedGames from "../components/gamesHomePageComponents/FeaturedGames";
import GameCategories from "../components/gamesHomePageComponents/GameCategories";
import NewReleases from "../components/gamesHomePageComponents/NewReleases";
import Tournaments from "../components/gamesHomePageComponents/Tournaments";
import StatsSection from "../components/gamesHomePageComponents/StatsSection";
import Testimonials from "../components/gamesHomePageComponents/Testimonials";
import Newsletter from "../components/gamesHomePageComponents/Newsletters";

function GamingHome() {
   return (
      <div className="bg-gray-900">
         <HeroSection />
         <FeaturedGames />
         <GameCategories />
         <NewReleases />
         <Tournaments />
         <StatsSection />
         <Testimonials />
         <Newsletter />
      </div>
   );
}

export default GamingHome;
