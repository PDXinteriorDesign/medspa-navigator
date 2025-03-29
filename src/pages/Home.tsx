
import { medSpas } from "@/lib/medspas";
import HeroSection from "@/components/home/HeroSection";
import MainContent from "@/components/home/MainContent";
import PopularTreatments from "@/components/home/PopularTreatments";
import LocationDirectory from "@/components/home/LocationDirectory";
import ReviewsSection from "@/components/home/ReviewsSection";
import FaqSection from "@/components/home/FaqSection";

const Home = () => {
  // Get top-rated MedSpas for the featured section
  const featuredMedSpas = medSpas.filter(spa => spa.featured || spa.rating >= 4.8).slice(0, 3);
  
  return (
    <div>
      <HeroSection />
      <MainContent />
      <PopularTreatments />
      <LocationDirectory featuredMedSpas={featuredMedSpas} />
      <ReviewsSection />
      <FaqSection />
    </div>
  );
};

export default Home;
