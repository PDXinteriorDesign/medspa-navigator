
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  MapPin, 
  Search, 
  Star, 
  ArrowRight, 
  Syringe, 
  Droplet, 
  Zap, 
  Award,
  ThumbsUp,
  Clock,
  Calendar,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { services, medSpas, locations } from "@/lib/data";
import { locationDetails } from "@/lib/locationData";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  // Featured MedSpas (top 4 by rating)
  const featuredMedSpas = [...medSpas]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
  
  // Popular services (top 6)
  const popularServices = services.slice(0, 6);
  
  // States for search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Handle clicks outside of search dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchFocus(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Handle search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Search initiated",
        description: `Searching for "${searchQuery}" across our listings`,
      });
      // In a real app, this would redirect to search results
      setSearchQuery("");
    }
  };
  
  // Testimonials carousel
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Upper East Side",
      text: "The MedSpasNYC directory helped me find the perfect clinic for my Botox treatment. The reviews were spot on!",
      rating: 5
    },
    {
      name: "Michael R.",
      location: "Tribeca",
      text: "I was looking for a high-end medspa in my neighborhood, and this directory made it incredibly simple to compare options.",
      rating: 5
    },
    {
      name: "Jennifer L.",
      location: "Brooklyn Heights",
      text: "The detailed profiles and verified reviews helped me choose a clinic I could trust for my first cosmetic procedure.",
      rating: 4
    }
  ];
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  return (
    <>
      <Helmet>
        <title>NYC MedSpas Directory | Find Luxury Medical Spas in New York City</title>
        <meta 
          name="description" 
          content="Discover the top luxury medical spas in NYC offering premium treatments including Botox, dermal fillers, laser hair removal, and advanced skincare. Compare, book, and experience the best aesthetic services in Manhattan, Brooklyn, and beyond." 
        />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        
        <div className="relative medspa-container py-24 md:py-36">
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
              Discover the Best MedSpas in NYC
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Find top-rated luxury aesthetic clinics in your neighborhood for Botox, fillers, laser treatments, and more.
            </p>
            
            {/* Search Bar */}
            <div ref={searchRef} className="relative max-w-2xl">
              <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-2">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Search by treatment, location, or medspa name..."
                    className="pl-10 py-6 w-full border-none ring-1 ring-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:ring-2 focus:ring-medspa-teal rounded-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocus(true)}
                  />
                  
                  {/* Search Dropdown */}
                  {searchFocus && (
                    <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-xl overflow-hidden">
                      <div className="p-2 border-b border-gray-100">
                        <p className="text-xs font-medium text-gray-500 uppercase">Popular Searches</p>
                        <div className="mt-1 space-y-1">
                          <button 
                            className="block w-full text-left px-3 py-1.5 rounded hover:bg-gray-100 text-sm"
                            onClick={() => setSearchQuery("Botox in Manhattan")}
                          >
                            Botox in Manhattan
                          </button>
                          <button 
                            className="block w-full text-left px-3 py-1.5 rounded hover:bg-gray-100 text-sm"
                            onClick={() => setSearchQuery("Laser hair removal")}
                          >
                            Laser hair removal
                          </button>
                          <button 
                            className="block w-full text-left px-3 py-1.5 rounded hover:bg-gray-100 text-sm"
                            onClick={() => setSearchQuery("Best facial treatments")}
                          >
                            Best facial treatments
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="py-6 px-8 rounded-lg bg-medspa-gold hover:bg-medspa-gold/90 text-black font-medium"
                >
                  Search
                </Button>
              </form>
              
              {/* Quick Filters */}
              <div className="flex flex-wrap gap-3 mt-4">
                <Link 
                  to="/locations/manhattan" 
                  className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white/90 text-sm transition-colors"
                >
                  <MapPin size={14} className="mr-1" />
                  Manhattan
                </Link>
                <Link 
                  to="/services/botox" 
                  className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white/90 text-sm transition-colors"
                >
                  <Syringe size={14} className="mr-1" />
                  Botox
                </Link>
                <Link 
                  to="/services/laser-hair-removal" 
                  className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white/90 text-sm transition-colors"
                >
                  <Zap size={14} className="mr-1" />
                  Laser
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Services Section */}
      <section className="py-16 bg-white">
        <div className="medspa-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-medspa-dark mb-4">
              Top MedSpa Treatments in NYC
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the most sought-after aesthetic services offered by our curated selection of luxury MedSpas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {popularServices.map(service => (
              <Link 
                key={service.id}
                to={`/services/${service.slug}`}
                className="group bg-medspa-cream/50 rounded-xl p-6 transition-all hover:shadow-md hover:bg-medspa-cream/80"
              >
                <div className="w-12 h-12 rounded-full bg-medspa-teal/10 flex items-center justify-center mb-4">
                  {service.slug.includes('botox') ? (
                    <Syringe className="text-medspa-teal" size={20} />
                  ) : service.slug.includes('filler') ? (
                    <Droplet className="text-medspa-teal" size={20} />
                  ) : (
                    <Zap className="text-medspa-teal" size={20} />
                  )}
                </div>
                <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-medspa-teal transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {service.description}
                </p>
                <div className="flex items-center text-sm text-medspa-teal font-medium">
                  Learn more <ArrowRight size={14} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
              <Link to="/services">
                View All Treatments
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* MedSpas by Location Section */}
      <section className="py-16 bg-gradient-to-b from-white to-medspa-cream/30">
        <div className="medspa-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-medspa-dark mb-4">
              Find MedSpas in Your Neighborhood
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated selection of premier aesthetic clinics in New York's most exclusive neighborhoods
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationDetails.map(location => (
              <Link 
                key={location.id}
                to={`/locations/${location.slug}`}
                className="group relative rounded-xl overflow-hidden h-60 flex items-end"
              >
                <img 
                  src={location.imageUrl} 
                  alt={location.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="relative p-6 w-full">
                  <h3 className="text-xl font-serif font-medium text-white mb-1">
                    {location.name}
                  </h3>
                  <div className="flex items-center text-white/90 mb-3">
                    <MapPin size={14} className="mr-1" />
                    <span className="text-sm">{location.medspaCount} MedSpas</span>
                  </div>
                  <div className="flex items-center text-sm text-white font-medium group-hover:text-medspa-teal/90 transition-colors">
                    Explore MedSpas <ArrowRight size={14} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
              <Link to="/locations">
                View All Locations
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured MedSpas Section */}
      <section className="py-16 bg-white">
        <div className="medspa-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-medspa-dark mb-4">
              Featured MedSpas in NYC
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of New York's most exclusive aesthetic clinics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredMedSpas.map(medSpa => (
              <div key={medSpa.id} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 h-48 md:h-auto relative">
                    <img 
                      src={medSpa.imageUrl} 
                      alt={medSpa.name} 
                      className="w-full h-full object-cover" 
                    />
                    {medSpa.featured && (
                      <div className="absolute top-3 right-3 bg-medspa-gold text-white text-xs px-2 py-1 rounded">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="md:w-3/5 p-6 flex flex-col h-full">
                    <Link to={`/medspas/${medSpa.slug}`}>
                      <h3 className="text-xl font-serif font-medium mb-2 hover:text-medspa-teal transition-colors">
                        {medSpa.name}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex text-medspa-gold">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            fill={i < medSpa.rating ? "currentColor" : "none"} 
                            className={i < medSpa.rating ? "text-medspa-gold" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({medSpa.reviewCount} reviews)</span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-1">{medSpa.address}</p>
                    
                    <div className="flex flex-wrap gap-2 my-3">
                      {medSpa.services.slice(0, 3).map((service, idx) => (
                        <span key={idx} className="text-xs bg-medspa-blue/20 text-medspa-dark px-2 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-sm text-gray-700 line-clamp-2 mb-4">
                      {medSpa.description}
                    </p>
                    
                    <div className="flex mt-auto gap-3">
                      <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90 flex-grow">
                        <Link to={`/medspas/${medSpa.slug}`}>
                          Book Now
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
                        <Link to={`/medspas/${medSpa.slug}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
              <Link to="/medspas">
                View All MedSpas
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-16 bg-medspa-cream/30">
        <div className="medspa-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-medspa-dark mb-4">
              Explore Our Guides & Tips
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert insights and advice on aesthetic treatments and wellness trends
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Ultimate Guide to Botox in NYC",
                excerpt: "Learn everything you need to know about Botox treatments, from top providers to pricing in Manhattan.",
                image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                slug: "botox-guide"
              },
              {
                title: "5 Luxury MedSpas in the Hamptons Worth the Trip",
                excerpt: "Discover exclusive aesthetic clinics and wellness retreats offering premium treatments in the Hamptons.",
                image: "https://images.unsplash.com/photo-1540555700478-4be289fbecf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                slug: "hamptons-medspas"
              },
              {
                title: "The Best Skin Rejuvenation Treatments for Every Age",
                excerpt: "Expert dermatologists share the most effective treatments for your 30s, 40s, 50s, and beyond.",
                image: "https://images.unsplash.com/photo-1571646034647-67c9d82e5f9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                slug: "skin-rejuvenation"
              }
            ].map((blog, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {blog.excerpt}
                  </p>
                  <Link to={`/blog/${blog.slug}`} className="text-medspa-teal hover:text-medspa-teal/80 font-medium flex items-center">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
              <Link to="/blog">
                View All Articles
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="medspa-container">
          <div className="text-center mb-12">
            <div className="inline-block bg-medspa-gold/10 px-3 py-1 rounded-full text-xs font-medium text-medspa-gold mb-4">
              Client Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-medspa-dark mb-4">
              Why People Trust Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our community about their experiences with our curated MedSpas
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-medspa-cream/50 rounded-xl p-8 md:p-12">
              <div className="text-medspa-gold flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill={i < testimonials[currentTestimonial].rating ? "currentColor" : "none"} 
                    className={i < testimonials[currentTestimonial].rating ? "text-medspa-gold" : "text-gray-300"}
                  />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-serif text-gray-700 italic mb-6">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-medspa-teal/20 flex items-center justify-center">
                  <span className="text-medspa-teal font-serif font-bold text-lg">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div className="ml-3">
                  <p className="font-medium">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:text-medspa-teal transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:text-medspa-teal transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2.5 h-2.5 rounded-full ${idx === currentTestimonial ? 'bg-medspa-teal' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 rounded-lg p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-medspa-blue/20 flex items-center justify-center mb-4">
                <ThumbsUp className="text-medspa-teal" size={20} />
              </div>
              <h3 className="text-lg font-medium mb-2">Verified Reviews</h3>
              <p className="text-gray-600 text-sm">
                All reviews are from verified clients who have experienced treatments at our listed MedSpas.
              </p>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-lg p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-medspa-blue/20 flex items-center justify-center mb-4">
                <Award className="text-medspa-teal" size={20} />
              </div>
              <h3 className="text-lg font-medium mb-2">Curated Selection</h3>
              <p className="text-gray-600 text-sm">
                We personally vet each MedSpa to ensure they meet our strict standards for quality and service.
              </p>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-lg p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-medspa-blue/20 flex items-center justify-center mb-4">
                <Clock className="text-medspa-teal" size={20} />
              </div>
              <h3 className="text-lg font-medium mb-2">Expert Guidance</h3>
              <p className="text-gray-600 text-sm">
                Our team of beauty experts is available to help you find the perfect treatment for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-medspa-blue py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[url('https://images.unsplash.com/photo-1560750588-73207b1ef5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="medspa-container relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-medspa-dark mb-4">
              Ready to Find Your Perfect MedSpa?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Start your journey to radiant beauty and wellness with top aesthetic professionals in NYC.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-medspa-gold hover:bg-medspa-gold/90 text-black py-6 px-8">
                <Link to="/medspas">
                  Browse NYC MedSpas
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10 py-6 px-8">
                <Link to="/contact">
                  Get Personalized Recommendations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
