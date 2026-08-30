import Header from "./components/Header";
import Hero from "./components/Hero";
import EncountersIntro from "./components/EncountersIntro";
import WildlifeEncounters from "./components/WildlifeEncounters";
import CulturalEncounters from "./components/CulturalEncounters";
import WildPlaces from "./components/WildPlaces";
import Photography from "./components/Photography";
import OurStory from "./components/OurStory";
import Impact from "./components/Impact";
import PlanTrip from "./components/PlanTrip";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <EncountersIntro />
      <WildlifeEncounters />
      <CulturalEncounters />
      <WildPlaces />
      <Photography />
      <OurStory />
      <Impact />
      <PlanTrip />
      <Footer />
    </main>
  );
}
