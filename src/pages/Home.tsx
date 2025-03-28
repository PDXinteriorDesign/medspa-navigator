
import { medSpas } from "@/lib/medspas";
import HeroSection from "@/components/home/HeroSection";
import MainContent from "@/components/home/MainContent";
import PopularTreatments from "@/components/home/PopularTreatments";
import LocationDirectory from "@/components/home/LocationDirectory";
import ReviewsSection from "@/components/home/ReviewsSection";
import FaqSection from "@/components/home/FaqSection";
import FeaturedClinics from "@/components/home/FeaturedClinics";

const Home = () => {
  // Filter for featured MedSpas (even if there are none)
  const featuredMedSpas = medSpas.filter(spa => spa.featured || spa.rating >= 4.9).slice(0, 6);
  
  return (
    <div>
      <HeroSection />
      <MainContent />
      <PopularTreatments />
      <LocationDirectory featuredMedSpas={featuredMedSpas} />
      <FeaturedClinics medSpas={featuredMedSpas} />
      <ReviewsSection />
      <FaqSection />
    </div>
  );
};

export default Home;
