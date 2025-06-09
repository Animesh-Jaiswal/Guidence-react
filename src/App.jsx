import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import PurposeSec from "./components/PurposeSec";
import FeatureSec from "./components/FeatureSec";
import ScheduleSec from "./components/ScheduleSec";
import MoniterSec from "./components/MoniterSec";
import PricingSec from "./components/PricingSec";
import ServicesSec from "./components/ServicesSec";
import TestimonialSec from "./components/TestimonialSec";
import NewsLetterSec from "./components/NewsLetterSec";
import FooterSec from "./components/FooterSec";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[600px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <Partners />
        <PurposeSec />
        <FeatureSec />
        <ScheduleSec />
        <MoniterSec />
        <PricingSec />
        <ServicesSec />
        <TestimonialSec />
        <NewsLetterSec />
        <FooterSec />
      </div>
    </main>
  );
}

export default App;
