import Navbar from "./components/Navbar";
import HeroSection from "./sections/Hero";
import AboutSection from "./sections/About";
import AboutSection2 from "./sections/About2";
import ProductsSection from "./sections/Products";
import NewsSection from "./sections/News";
import DirectorsSection from "./sections/Directors";
import FAQSection from "./sections/FAQ";
import Footer from "./components/Footer";
import FeaturesCardSection from "./sections/FeaturesCards";
import FeaturesSection from "./sections/Features";
import DownloadAppSection from "./sections/DownloadApp";
import ContactForm from "./sections/ContactForm";
import BannerCard from "./sections/BannerCard";
import MainHeroSection from "./sections/MainHero";
import RationaleSection from "./sections/Rationale";
import MissionVisionSection from "./sections/MissionVision";

function App() {
  return (
    <div className="dark:bg-[#111920]">
      <header>
        <Navbar />
      </header>
      <MainHeroSection />
      <HeroSection />
      <AboutSection />
      <AboutSection2 />
      {/* <RationaleSection /> */}
      <FeaturesCardSection />
      <FeaturesSection />
      {/* <ProductsSection /> */}
      {/* <NewsSection /> */}
      {/* <DirectorsSection /> */}
      <MissionVisionSection />
      <DownloadAppSection />
      {/* <FAQSection />
      <ContactForm /> */}
      <BannerCard />
      <Footer />
    </div>
  );
}

export default App;
