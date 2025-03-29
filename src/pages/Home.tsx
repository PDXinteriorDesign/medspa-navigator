
import { medSpas } from "@/lib/medspas";
import HeroSection from "@/components/home/HeroSection";
import MainContent from "@/components/home/MainContent";
import PopularTreatments from "@/components/home/PopularTreatments";
import LocationDirectory from "@/components/home/LocationDirectory";
import ReviewsSection from "@/components/home/ReviewsSection";
import FaqSection from "@/components/home/FaqSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MainContent />
      <PopularTreatments />
      <LocationDirectory />
      <ReviewsSection />
      <FaqSection />
    </div>
  );
};

export default Home;
