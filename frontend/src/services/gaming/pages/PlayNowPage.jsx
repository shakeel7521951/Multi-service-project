import GameLoadingScreen from "../components/playNowComponents/GameLoadingScreen";
import LiveTournaments from "../components/playNowComponents/LiveTournaments";
import PlayNowHero from "../components/playNowComponents/PlayNowHero";
import QuickPlayGames from "../components/playNowComponents/QuickPlayGames";

function PlayNowPage() {
   return (
      <div className="min-h-screen bg-gray-900 pt-20">
         <PlayNowHero />
         <QuickPlayGames />
         <LiveTournaments />
         <GameLoadingScreen />
      </div>
   );
}

export default PlayNowPage;
