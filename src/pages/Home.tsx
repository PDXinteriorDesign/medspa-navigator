import { Link } from "react-router-dom";
import { ArrowRight, Check, MapPin, Star, Shield, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import MedSpaCard from "@/components/MedSpaCard";
import { services, medSpas } from "@/lib/data";

const Home = () => {
  // Only display featured MedSpas on the homepage
  const featuredMedSpas = medSpas.filter(spa => spa.featured);
  
  return (
    <div>
      {/* Hero section - kept unchanged as requested */}
      <section className="relative bg-medspa-blue py-20">
        <div className="medspa-container">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-medspa-dark mb-6">
              Find the Best MedSpas in NYC
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Discover top-rated medical spas in New York City offering premium beauty and wellness treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90 text-white">
                <Link to="/medspas">
                  Browse Directory
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div 
          className="absolute bottom-0 right-0 w-1/3 h-full" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1581182815808-b6eb627a8798?q=80&w=3205&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
          }}
        >
          <div className="absolute inset-0 bg-medspa-blue/30 mix-blend-multiply"></div>
        </div>
      </section>
      
      {/* Main SEO-optimized content section */}
      <section className="py-16">
        <div className="medspa-container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-medspa-dark mb-4">
              Find the Best Med Spas in NYC – Botox, Fillers & Laser Treatments
            </h2>
            <p className="text-xl font-medium text-medspa-teal mb-6">
              Compare NYC's Top-Rated Med Spas by Treatment & Location
            </p>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700">
                Looking for the best med spa in NYC? Whether you want Botox in Manhattan, laser hair removal in Brooklyn, or microneedling on the Upper East Side, our directory makes it easy to find board-certified med spas in New York City.
              </p>
              <p className="text-gray-700 mt-4">
                We connect you with verified providers offering FDA-approved aesthetic treatments, including:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 list-none">
                <li className="flex items-start">
                  <Check size={20} className="text-medspa-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Neuromodulators (Botox, Dysport, Xeomin) for wrinkle reduction</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-medspa-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Non-surgical body contouring like CoolSculpting & Emsculpt</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-medspa-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Collagen-boosting treatments like RF Microneedling & PRP Facials</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-medspa-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Laser skin resurfacing & IPL photofacials for hyperpigmentation</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-medspa-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Diode and Alexandrite laser hair removal for all skin types</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row items-center justify-center mt-8 p-4 bg-medspa-cream rounded-lg">
                <div className="flex items-center mr-4 mb-4 sm:mb-0">
                  <Shield size={20} className="text-medspa-teal mr-2" />
                  <span className="font-medium">Licensed Providers</span>
                </div>
                <div className="flex items-center mr-4 mb-4 sm:mb-0">
                  <Star size={20} className="text-medspa-teal mr-2" />
                  <span className="font-medium">Trusted Reviews</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-medspa-teal mr-2" />
                  <span className="font-medium">Instant Booking</span>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-medspa-teal hover:bg-medspa-teal/90 text-white">
                  <Link to="/medspas">
                    Browse NYC Med Spas Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Why Choose Our Directory section */}
          <div className="bg-white shadow-md rounded-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-6">
              Why Choose Our NYC MedSpa Directory?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Check size={20} className="text-medspa-teal mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Exclusive Listings</h3>
                  <p className="text-gray-600">Only top-tier NYC med spas are featured.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-medspa-teal mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Compare Top-Rated Clinics</h3>
                  <p className="text-gray-600">Read verified patient reviews & real before-and-afters.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-medspa-teal mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Certified Aesthetic Experts</h3>
                  <p className="text-gray-600">Every provider is licensed, insured & board-certified.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-medspa-teal mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Treatment Finder</h3>
                  <p className="text-gray-600">Search by Botox, fillers, laser hair removal, body sculpting & more.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-medspa-teal mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Exclusive Deals</h3>
                  <p className="text-gray-600">Access discounted packages & first-time patient specials.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button asChild className="bg-medspa-cream text-medspa-teal border border-medspa-teal hover:bg-medspa-teal/10">
                <Link to="/medspas" className="flex items-center">
                  <Search size={18} className="mr-2" />
                  Search Med Spas Near You
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Treatments Section */}
      <section className="py-16 bg-medspa-cream">
        <div className="medspa-container">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-10">
            Most Popular Med Spa Treatments in New York City
          </h2>
          
          {/* Botox & Wrinkle Relaxers */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-serif font-bold mb-4 text-medspa-dark border-b border-gray-100 pb-2">
              Botox & Wrinkle Relaxers – The NYC Standard
            </h3>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
                <span><span className="font-medium">Botox, Dysport & Xeomin</span> – Relax fine lines & prevent wrinkles.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
                <span><span className="font-medium">Sculptra & Radiesse</span> – Non-surgical volume restoration.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
                <span><span className="font-medium">Jawline Contouring & Chin Augmentation</span> – Define & lift the face.</span>
              </li>
            </ul>
            <Link to="/services/botox" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
              Find Botox Providers in NYC
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Skin Rejuvenation */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-serif font-bold mb-4 text-medspa-dark border-b border-gray-100 pb-2">
              Skin Rejuvenation & Anti-Aging Treatments
            </h3>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
                <span><span className="font-medium">Microneedling with PRP</span> – Stimulates collagen for youthful skin.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
                <span><span className="font-medium">HydraFacial & Chemical Peels</span> – Exfoliate, hydrate & brighten.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
                <span><span className="font-medium">Laser Skin Resurfacing & IPL Photofacials</span> – Reduce wrinkles & sunspots.</span>
              </li>
            </ul>
            <Link to="/services" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
              Explore Skin Treatments in NYC
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Body Contouring */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-serif font-bold mb-4 text-medspa-dark border-b border-gray-100 pb-2">
              Non-Surgical Body Contouring & Fat Reduction
            </h3>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
                <span><span className="font-medium">CoolSculpting & Kybella</span> – Fat freezing & chin sculpting.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
                <span><span className="font-medium">Emsculpt & TruFlex</span> – Muscle-building & body toning.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
                <span><span className="font-medium">RF Skin Tightening & Morpheus8</span> – Non-surgical lifting.</span>
              </li>
            </ul>
            <Link to="/services/coolsculpting" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
              Find Body Contouring Experts in NYC
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {/* Laser Hair Removal */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-serif font-bold mb-4 text-medspa-dark border-b border-gray-100 pb-2">
              Laser Hair Removal & Skin Tightening
            </h3>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
                <span><span className="font-medium">Diode & Alexandrite Laser Hair Removal</span> – Permanent hair reduction.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={16} className="text-medspa-teal mr-2 mt-1" />
                <span><span className="font-medium">Ultherapy & Sofwave</span> – Non-invasive skin lifting & collagen boost.</span>
              </li>
            </ul>
            <Link to="/services/laser-hair-removal" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
              Compare Laser Hair Removal Clinics in NYC
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured MedSpas section - kept original with SEO improvements */}
      <section className="py-16">
        <div className="medspa-container">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-10">
            Find a Med Spa by Location in NYC
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Manhattan Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4">Best Med Spas in Manhattan</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Glow Aesthetics NYC</p>
                    <p className="text-sm text-gray-600">Botox, Fillers & Anti-Aging Experts</p>
                  </div>
                </li>
                <li className="flex">
                  <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Manhattan Beauty Clinic</p>
                    <p className="text-sm text-gray-600">Laser Skin Resurfacing & Injectable Specialists</p>
                  </div>
                </li>
                <li className="flex">
                  <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Fifth Avenue MedSpa</p>
                    <p className="text-sm text-gray-600">Luxury Facials & Non-Surgical Lifts</p>
                  </div>
                </li>
              </ul>
              <Link to="/locations/manhattan" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center mt-4">
                See All Manhattan Med Spas
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Brooklyn Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4">Top Med Spas in Brooklyn</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Brooklyn MedSpa Lounge</p>
                    <p className="text-sm text-gray-600">Laser Skin Treatments & Hair Removal</p>
                  </div>
                </li>
                <li className="flex">
                  <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Williamsburg Aesthetics</p>
                    <p className="text-sm text-gray-600">CoolSculpting, Emsculpt & Body Sculpting</p>
                  </div>
                </li>
                <li className="flex">
                  <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Borough Park Beauty Hub</p>
                    <p className="text-sm text-gray-600">Hydrafacials & PRP Microneedling</p>
                  </div>
                </li>
              </ul>
              <Link to="/locations/brooklyn" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center mt-4">
                Find Med Spas in Brooklyn
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Upper East Side Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4">Highly Rated Med Spas in the Upper East Side</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Park Avenue Skin Clinic</p>
                    <p className="text-sm text-gray-600">VIP Botox & Skin Tightening</p>
                  </div>
                </li>
                <li className="flex">
                  <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Luxury Aesthetics UES</p>
                    <p className="text-sm text-gray-600">Microneedling, PRP & Facials</p>
                  </div>
                </li>
                <li className="flex">
                  <MapPin size={18} className="text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Skin Perfection NYC</p>
                    <p className="text-sm text-gray-600">Laser Skin Rejuvenation & RF Treatments</p>
                  </div>
                </li>
              </ul>
              <Link to="/locations/upper-east-side" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center mt-4">
                Search Med Spas in Upper East Side
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredMedSpas.map(medSpa => (
              <MedSpaCard key={medSpa.id} medSpa={medSpa} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section className="py-16 bg-medspa-cream">
        <div className="medspa-container">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-8">
            NYC Med Spa Reviews – What Real Patients Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-medspa-gold mb-2">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <p className="mb-4 italic text-gray-700">"Best Botox in NYC! My forehead lines disappeared instantly."</p>
              <p className="text-sm font-medium">– Michelle R.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-medspa-gold mb-2">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <p className="mb-4 italic text-gray-700">"CoolSculpting actually worked! Lost inches without surgery."</p>
              <p className="text-sm font-medium">– Jason W.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-medspa-gold mb-2">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <p className="mb-4 italic text-gray-700">"I found the perfect laser hair removal clinic through this directory!"</p>
              <p className="text-sm font-medium">– Lisa D.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90 text-white">
              <Link to="/reviews">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="medspa-container">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-8">
            FAQs – NYC Med Spas Explained
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">What is the Best Med Spa in NYC?</h3>
              <p className="text-gray-700">
                The best med spa in NYC depends on your goals. For Botox, top-rated clinics include Glow Aesthetics NYC and Park Avenue Skin Clinic. For laser skin treatments, visit Tribeca Skin Rejuvenation or Upper East Side Aesthetics.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">How Much Does Botox Cost in NYC?</h3>
              <p className="text-gray-700">
                Prices range from $12 – $20 per unit, with an average treatment requiring 20-50 units.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">What Are the Best Non-Surgical Anti-Aging Treatments in NYC?</h3>
              <p className="text-gray-700">
                Botox, dermal fillers, Sofwave skin tightening, RF Microneedling, and PRP facial rejuvenation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">How Do I Choose the Right NYC Med Spa?</h3>
              <p className="text-gray-700">
                Look for board-certified injectors, verified Google reviews, and high-quality before-and-after photos.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
              <Link to="/faq">See More FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
