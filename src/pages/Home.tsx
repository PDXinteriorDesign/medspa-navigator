
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Search, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import MedSpaCard from "@/components/MedSpaCard";
import { services, medSpas } from "@/lib/data";

const Home = () => {
  // Only display featured MedSpas on the homepage
  const featuredMedSpas = medSpas.filter(spa => spa.featured);
  
  return (
    <div className="bg-white">
      {/* Hero section */}
      <section className="relative bg-medspa-blue py-16 md:py-20">
        <div className="medspa-container">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-medspa-dark mb-4">
              Find the Best Med Spas in NYC – Botox, Fillers & Laser Treatments
            </h1>
            <h2 className="text-xl md:text-2xl text-medspa-dark/90 mb-5 font-medium">
              Compare NYC's Top-Rated Med Spas by Treatment & Location
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Looking for the best med spa in NYC? Whether you want Botox in Manhattan, 
              laser hair removal in Brooklyn, or microneedling on the Upper East Side, 
              our directory makes it easy to find board-certified med spas in New York City.
            </p>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 mb-6">
              <h3 className="font-medium text-medspa-dark mb-3">
                We connect you with verified providers offering FDA-approved aesthetic treatments, including:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckSquare size={18} className="text-medspa-teal mr-2 mt-1 flex-shrink-0" />
                  <span>Neuromodulators (Botox, Dysport, Xeomin) for wrinkle reduction</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare size={18} className="text-medspa-teal mr-2 mt-1 flex-shrink-0" />
                  <span>Non-surgical body contouring like CoolSculpting & Emsculpt</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare size={18} className="text-medspa-teal mr-2 mt-1 flex-shrink-0" />
                  <span>Collagen-boosting treatments like RF Microneedling & PRP Facials</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare size={18} className="text-medspa-teal mr-2 mt-1 flex-shrink-0" />
                  <span>Laser skin resurfacing & IPL photofacials for hyperpigmentation</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare size={18} className="text-medspa-teal mr-2 mt-1 flex-shrink-0" />
                  <span>Diode and Alexandrite laser hair removal for all skin types</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center mb-6 gap-4 flex-wrap">
              <div className="flex items-center">
                <Shield size={18} className="text-medspa-gold mr-1" />
                <span className="text-sm font-medium">Licensed Providers</span>
              </div>
              <div className="flex items-center">
                <Star size={18} className="text-medspa-gold mr-1" />
                <span className="text-sm font-medium">Trusted Reviews</span>
              </div>
              <div className="flex items-center">
                <Search size={18} className="text-medspa-gold mr-1" />
                <span className="text-sm font-medium">Instant Booking</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-medspa-teal hover:bg-medspa-teal/90 text-white">
                <Link to="/medspas">
                  Browse NYC Med Spas Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div 
          className="absolute bottom-0 right-0 w-1/3 h-full hidden md:block" 
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
      
      {/* Why Choose Our Directory section */}
      <section className="py-12 bg-medspa-cream/50">
        <div className="medspa-container">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-8 text-center">
            Why Choose Our NYC MedSpa Directory?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <CheckSquare size={24} className="text-medspa-teal mb-3" />
              <h3 className="font-medium mb-2">Exclusive Listings</h3>
              <p className="text-gray-600 text-sm">Only top-tier NYC med spas are featured.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <CheckSquare size={24} className="text-medspa-teal mb-3" />
              <h3 className="font-medium mb-2">Compare Top-Rated Clinics</h3>
              <p className="text-gray-600 text-sm">Read verified patient reviews & real before-and-afters.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <CheckSquare size={24} className="text-medspa-teal mb-3" />
              <h3 className="font-medium mb-2">Certified Aesthetic Experts</h3>
              <p className="text-gray-600 text-sm">Every provider is licensed, insured & board-certified.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <CheckSquare size={24} className="text-medspa-teal mb-3" />
              <h3 className="font-medium mb-2">Exclusive Deals</h3>
              <p className="text-gray-600 text-sm">Access discounted packages & first-time patient specials.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" className="border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
              <Link to="/medspas">
                Search Med Spas Near You
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Popular Treatments section */}
      <section className="py-16">
        <div className="medspa-container">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-8 text-center">
            Most Popular Med Spa Treatments in New York City
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-medspa-dark mb-4">
                Botox & Wrinkle Relaxers – The NYC Standard
              </h3>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">•</span>
                  <span>Botox, Dysport & Xeomin – Relax fine lines & prevent wrinkles.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">•</span>
                  <span>Sculptra & Radiesse – Non-surgical volume restoration.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">•</span>
                  <span>Jawline Contouring & Chin Augmentation – Define & lift the face.</span>
                </li>
              </ul>
              <Link to="/services/botox" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
                Find Botox Providers in NYC
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-medspa-dark mb-4">
                Skin Rejuvenation & Anti-Aging Treatments
              </h3>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">•</span>
                  <span>Microneedling with PRP – Stimulates collagen for youthful skin.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">•</span>
                  <span>HydraFacial & Chemical Peels – Exfoliate, hydrate & brighten.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">•</span>
                  <span>Laser Skin Resurfacing & IPL Photofacials – Reduce wrinkles & sunspots.</span>
                </li>
              </ul>
              <Link to="/services" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
                Explore Skin Treatments in NYC
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-medspa-dark mb-4">
                Non-Surgical Body Contouring & Fat Reduction
              </h3>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">•</span>
                  <span>CoolSculpting & Kybella – Fat freezing & chin sculpting.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">•</span>
                  <span>Emsculpt & TruFlex – Muscle-building & body toning.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">•</span>
                  <span>RF Skin Tightening & Morpheus8 – Non-surgical lifting.</span>
                </li>
              </ul>
              <Link to="/services/coolsculpting" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
                Find Body Contouring Experts in NYC
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-medspa-dark mb-4">
                Laser Hair Removal & Skin Tightening
              </h3>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">•</span>
                  <span>Diode & Alexandrite Laser Hair Removal – Permanent hair reduction.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">•</span>
                  <span>Ultherapy & Sofwave – Non-invasive skin lifting & collagen boost.</span>
                </li>
              </ul>
              <Link to="/services/laser-hair-removal" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
                Compare Laser Hair Removal Clinics in NYC
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured MedSpas by location section */}
      <section className="py-16 bg-medspa-cream">
        <div className="medspa-container">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-8 text-center">
            Find a Med Spa by Location in NYC
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-medspa-dark mb-4">
                Best Med Spas in Manhattan
              </h3>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">📍</span>
                  <span>Glow Aesthetics NYC – Botox, Fillers & Anti-Aging Experts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">📍</span>
                  <span>Manhattan Beauty Clinic – Laser Skin Resurfacing & Injectable Specialists.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">📍</span>
                  <span>Fifth Avenue MedSpa – Luxury Facials & Non-Surgical Lifts.</span>
                </li>
              </ul>
              <Link to="/locations/manhattan" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
                See All Manhattan Med Spas
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-medspa-dark mb-4">
                Top Med Spas in Brooklyn
              </h3>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">📍</span>
                  <span>Brooklyn MedSpa Lounge – Laser Skin Treatments & Hair Removal.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">📍</span>
                  <span>Williamsburg Aesthetics – CoolSculpting, Emsculpt & Body Sculpting.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">📍</span>
                  <span>Borough Park Beauty Hub – Hydrafacials & PRP Microneedling.</span>
                </li>
              </ul>
              <Link to="/locations/brooklyn" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
                Find Med Spas in Brooklyn
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-medspa-dark mb-4">
                Highly Rated Med Spas in the Upper East Side
              </h3>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">📍</span>
                  <span>Park Avenue Skin Clinic – VIP Botox & Skin Tightening.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">📍</span>
                  <span>Luxury Aesthetics UES – Microneedling, PRP & Facials.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-medspa-teal mr-2 font-medium">📍</span>
                  <span>Skin Perfection NYC – Laser Skin Rejuvenation & RF Treatments.</span>
                </li>
              </ul>
              <Link to="/locations/upper-east-side" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
                Search Med Spas in Upper East Side
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-medspa-dark mb-4">
                NYC Med Spa Reviews – What Real Patients Say
              </h3>
              <div className="space-y-4 mb-5">
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Star size={16} className="text-medspa-gold" />
                  </div>
                  <div>
                    <p className="italic text-gray-700">"Best Botox in NYC! My forehead lines disappeared instantly."</p>
                    <p className="text-sm text-gray-500">– Michelle R.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Star size={16} className="text-medspa-gold" />
                  </div>
                  <div>
                    <p className="italic text-gray-700">"CoolSculpting actually worked! Lost inches without surgery."</p>
                    <p className="text-sm text-gray-500">– Jason W.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Star size={16} className="text-medspa-gold" />
                  </div>
                  <div>
                    <p className="italic text-gray-700">"I found the perfect laser hair removal clinic through this directory!"</p>
                    <p className="text-sm text-gray-500">– Lisa D.</p>
                  </div>
                </div>
              </div>
              <Link to="/medspas" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
                Read More Reviews
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-medspa-dark mb-4">
                FAQs – NYC Med Spas Explained
              </h3>
              <div className="space-y-4 mb-5">
                <div>
                  <h4 className="font-medium text-medspa-dark">What is the Best Med Spa in NYC?</h4>
                  <p className="text-gray-700">The best med spa in NYC depends on your goals. For Botox, top-rated clinics include Glow Aesthetics NYC and Park Avenue Skin Clinic. For laser skin treatments, visit Tribeca Skin Rejuvenation or Upper East Side Aesthetics.</p>
                </div>
                <div>
                  <h4 className="font-medium text-medspa-dark">How Much Does Botox Cost in NYC?</h4>
                  <p className="text-gray-700">Prices range from $12 – $20 per unit, with an average treatment requiring 20-50 units.</p>
                </div>
                <div>
                  <h4 className="font-medium text-medspa-dark">What Are the Best Non-Surgical Anti-Aging Treatments in NYC?</h4>
                  <p className="text-gray-700">Botox, dermal fillers, Sofwave skin tightening, RF Microneedling, and PRP facial rejuvenation.</p>
                </div>
              </div>
              <Link to="/about" className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
                See More FAQs
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured MedSpas section */}
      <section className="py-16 bg-white">
        <div className="medspa-container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark">
              Featured MedSpas
            </h2>
            <Link to="/medspas" className="flex items-center text-medspa-teal hover:text-medspa-teal/80 font-medium">
              View All
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredMedSpas.map(medSpa => (
              <MedSpaCard key={medSpa.id} medSpa={medSpa} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Services section */}
      <section className="py-16 bg-medspa-cream/50">
        <div className="medspa-container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark">
              Popular Services
            </h2>
            <Link to="/services" className="flex items-center text-medspa-teal hover:text-medspa-teal/80 font-medium">
              View All
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Searches section */}
      <section className="py-16 bg-white">
        <div className="medspa-container">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-medspa-dark mb-8">
            Popular Searches
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/services/botox-in-manhattan" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-medium">Botox in Manhattan</h3>
              <p className="text-sm text-gray-500">12 MedSpas</p>
            </Link>
            <Link to="/services/laser-hair-removal-in-brooklyn" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-medium">Laser Hair Removal in Brooklyn</h3>
              <p className="text-sm text-gray-500">8 MedSpas</p>
            </Link>
            <Link to="/services/coolsculpting-in-manhattan" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-medium">CoolSculpting in Manhattan</h3>
              <p className="text-sm text-gray-500">10 MedSpas</p>
            </Link>
            <Link to="/services/botox-in-queens" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-medium">Botox in Queens</h3>
              <p className="text-sm text-gray-500">6 MedSpas</p>
            </Link>
            <Link to="/services/laser-hair-removal-in-manhattan" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-medium">Laser Hair Removal in Manhattan</h3>
              <p className="text-sm text-gray-500">15 MedSpas</p>
            </Link>
            <Link to="/services/coolsculpting-in-brooklyn" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <h3 className="font-medium">CoolSculpting in Brooklyn</h3>
              <p className="text-sm text-gray-500">5 MedSpas</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
