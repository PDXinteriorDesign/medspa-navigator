
import { medSpas } from "@/lib/medspas";
import HeroSection from "@/components/home/HeroSection";
import MainContent from "@/components/home/MainContent";
import PopularTreatments from "@/components/home/PopularTreatments";
import LocationDirectory from "@/components/home/LocationDirectory";
import ReviewsSection from "@/components/home/ReviewsSection";
import FaqSection from "@/components/home/FaqSection";
import Sitemap from "@/components/home/Sitemap";
import FeaturedClinics from "@/components/home/FeaturedClinics";

const Home = () => {
  // Get top-rated MedSpas for the featured section
  const featuredMedSpas = medSpas.filter(spa => spa.featured || spa.rating >= 4.8).slice(0, 3);
  
  return (
    <div>
      <HeroSection />
      <MainContent />
      <PopularTreatments />
      <FeaturedClinics medSpas={featuredMedSpas} />
      <LocationDirectory featuredMedSpas={featuredMedSpas} />
      <ReviewsSection />
      <FaqSection />
      <Sitemap />
    </div>
  );
};

export default Home;
