import GamesFilter from "../components/gamesPageComponents/GamesFilter";
import GamesGrid from "../components/gamesPageComponents/GamesGrid";
import GamesHero from "../components/gamesPageComponents/GamesHero";

function GamesPage() {
   return (
      <div className="min-h-screen bg-gray-900">
         <GamesHero />
         <GamesFilter />
         <GamesGrid />
      </div>
   );
}

export default GamesPage;
