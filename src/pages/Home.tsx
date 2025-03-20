
import { medSpas } from "@/lib/data";
import HeroSection from "@/components/home/HeroSection";
import MainContent from "@/components/home/MainContent";
import PopularTreatments from "@/components/home/PopularTreatments";
import LocationDirectory from "@/components/home/LocationDirectory";
import ReviewsSection from "@/components/home/ReviewsSection";
import FaqSection from "@/components/home/FaqSection";

const Home = () => {
  // Filter for featured MedSpas (even if there are none)
  const featuredMedSpas = medSpas.filter(spa => spa.featured);
  
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
