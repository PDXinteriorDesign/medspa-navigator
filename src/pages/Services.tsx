
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Droplet, Zap, Dumbbell, Sparkles, Star, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  // Injectable treatments
  const injectableTreatments = [
    { id: "botox", name: "Botox", slug: "botox", description: "Reduce fine lines and wrinkles with this popular injectable neurotoxin treatment." },
    { id: "micro-botox", name: "MicroBotox", slug: "micro-botox", description: "A refined technique that delivers tiny amounts of Botox for subtle, natural-looking results." },
    { id: "fillers", name: "Fillers", slug: "fillers", description: "Restore volume and smooth away deeper lines with premium dermal fillers." },
    { id: "kybella", name: "Kybella", slug: "kybella", description: "The only FDA-approved injectable treatment to reduce submental fullness (double chin)." },
    { id: "prp", name: "Platelet Rich Plasma", slug: "prp", description: "Harness your body's natural healing abilities to rejuvenate skin and stimulate hair growth." }
  ];
  
  // Laser treatments
  const laserTreatments = [
    { id: "photofacials", name: "Photofacials", slug: "photofacials", description: "Intense pulsed light treatments to address sun damage, rosacea, and uneven skin tone." },
    { id: "tattoo-removal", name: "Tattoo Removal", slug: "tattoo-removal", description: "Advanced laser technology to safely fade unwanted tattoos with minimal side effects." },
    { id: "skin-resurfacing", name: "Skin Resurfacing", slug: "skin-resurfacing", description: "Reduce fine lines, scars, and sun damage by removing damaged skin cells." },
    { id: "carbon-laser-facial", name: "Carbon Laser Facial", slug: "carbon-laser-facial", description: "Also known as the 'Hollywood Peel', this treatment gives skin an immediate glow." },
    { id: "vaginal-rejuvenation", name: "Vaginal Rejuvenation", slug: "vaginal-rejuvenation", description: "Non-surgical treatment to address vaginal laxity and improve tissue quality." },
    { id: "laser-hair-removal", name: "Laser Hair Removal", slug: "laser-hair-removal", description: "Long-lasting solution for unwanted hair on any part of the body." }
  ];
  
  // Skin lift & fat reduction treatments
  const skinLiftTreatments = [
    { id: "coolsculpting", name: "CoolSculpting", slug: "coolsculpting", description: "Non-invasive fat-freezing procedure to eliminate stubborn fat without surgery." },
    { id: "weight-management", name: "Weight Management Programs", slug: "weight-management", description: "Personalized plans combining medical supervision with nutritional guidance." },
    { id: "radio-ultrasound-therapy", name: "Radio & Ultrasound Therapy", slug: "radio-ultrasound-therapy", description: "Non-invasive treatments using sound waves to tighten skin and reduce fat." }
  ];
  
  // Facial treatments
  const facialTreatments = [
    { id: "chemical-peels", name: "Chemical Peels", slug: "chemical-peels", description: "Remove damaged outer layers of skin to reveal a smoother, more refined complexion." },
    { id: "microdermabrasion", name: "Microdermabrasion", slug: "microdermabrasion", description: "Gentle exfoliation to improve texture and tone for a fresh glow." },
    { id: "microneedling", name: "Microneedling", slug: "microneedling", description: "Create micro-injuries to stimulate collagen production and skin renewal." },
    { id: "hydrofacials", name: "Hydrofacials", slug: "hydrofacials", description: "Multi-step treatment to cleanse, extract, and hydrate skin for immediate results." },
    { id: "oxygen-facials", name: "Oxygen Facials", slug: "oxygen-facials", description: "Infuse skin with oxygen and specialized serums for instant luminosity." },
    { id: "placenta-facials", name: "Placenta Facials", slug: "placenta-facials", description: "Harness growth factors for deep skin rejuvenation and repair." },
    { id: "cryogenic-skin-tag-removal", name: "Cryogenic Skin Tag Removal", slug: "cryogenic-skin-tag-removal", description: "Quick, effective removal of skin tags using precise freezing technology." }
  ];
  
  const renderTreatmentCard = (treatment: any) => (
    <Card key={treatment.id} className="luxury-card flex flex-col border border-black/10 hover:shadow-md transition-all duration-300 bg-medspa-cream/60">
      <Link to={`/services/${treatment.slug}`} className="group h-full">
        <div className="p-6 flex-1">
          <h3 className="text-xl font-serif mb-2 group-hover:text-medspa-teal transition-colors">{treatment.name}</h3>
          <p className="text-gray-700 text-sm mb-4">{treatment.description}</p>
          <div className="flex items-center text-medspa-teal text-sm mt-auto">
            <MapPin size={16} className="mr-1.5 flex-shrink-0" /> 
            <span>Available in all NYC locations</span>
          </div>
        </div>
      </Link>
    </Card>
  );
  
  return (
    <>
      <Helmet>
        <title>Luxury MedSpa Treatments & Services | NYC's Finest Aesthetic Procedures</title>
        <meta 
          name="description" 
          content="Explore the complete range of premium aesthetic treatments and services offered by NYC's elite medspas - from Botox and fillers to laser treatments and specialized facials." 
        />
      </Helmet>
      
      <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-12">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/services", current: true }
          ]} 
        />
        
        <div className="mx-auto">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg mb-12">
            <img 
              src="https://images.unsplash.com/photo-1713085085470-fba013d67e65?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Luxury MedSpa Treatments" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-sm"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-4 drop-shadow-md">
                The Most Popular MedSpa Treatments in NYC | Expertly Curated
              </h1>
              <div className="w-20 h-1 bg-medspa-gold/80 mx-auto"></div>
            </div>
          </div>
          
          <div className="mb-12 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl md:text-3xl font-serif text-center mb-6">NYC's Premium Aesthetic Treatments</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Discover our carefully curated selection of premier aesthetic treatments available at New York City's most exclusive medspas. Our directory features only the highest quality procedures performed by board-certified physicians and master aestheticians using state-of-the-art technology and premium products.
              </p>
              <p>
                From revitalizing injectables to transformative laser treatments, body contouring solutions, and rejuvenating facials, we connect you with the finest providers offering exceptional results. Each treatment in our collection has been selected for its effectiveness, safety profile, and popularity among NYC's discerning clientele.
              </p>
              <p>
                Explore our comprehensive guide to find the perfect treatment for your aesthetic goals, whether you're seeking preventative care or more dramatic transformations. With detailed information on each procedure, you can make informed decisions about your beauty and wellness journey.
              </p>
            </div>
          </div>
          
          {/* Injectables Section */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <Droplet className="text-medspa-teal mr-2" size={24} />
              <h2 className="text-2xl font-serif">Injectables</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {injectableTreatments.map(treatment => renderTreatmentCard(treatment))}
            </div>
          </section>
          
          {/* Laser Services Section */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <Zap className="text-medspa-teal mr-2" size={24} />
              <h2 className="text-2xl font-serif">Laser Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {laserTreatments.map(treatment => renderTreatmentCard(treatment))}
            </div>
          </section>
          
          {/* Skin Lift & Fat Reduction Section */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <Dumbbell className="text-medspa-teal mr-2" size={24} />
              <h2 className="text-2xl font-serif">Skin Lift & Fat Reduction</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {skinLiftTreatments.map(treatment => renderTreatmentCard(treatment))}
            </div>
          </section>
          
          {/* Facials Section */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <Sparkles className="text-medspa-teal mr-2" size={24} />
              <h2 className="text-2xl font-serif">Facials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {facialTreatments.map(treatment => renderTreatmentCard(treatment))}
            </div>
          </section>
          
          {/* New Section: Treatment Excellence */}
          <section className="mb-16 bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <Star className="text-medspa-teal mr-2" size={24} />
              <h2 className="text-2xl font-serif">NYC's Excellence in Aesthetic Innovation</h2>
            </div>
            <div className="text-gray-700">
              <p className="mb-4">
                Experience why New York City remains at the forefront of aesthetic innovation with our directory's most sought-after medspa treatments. From precision-driven Botox and Microbotox for wrinkle reduction to luxe hydrafacials and LED therapy for glowing skin, our partnered providers specialize in the procedures dominating NYC's beauty scene. Whether you're targeting non-surgical body sculpting, laser hair removal, or medical-grade peels, trust our vetted experts to deliver safe, natural-looking results aligned with the latest advancements. Ready to elevate your aesthetic journey? Explore our directory today to book personalized consultations at NYC's top-rated medspas—where cutting-edge science meets artistry for transformative outcomes.
              </p>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="mb-8 bg-medspa-teal/10 rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-serif mb-4">Ready to Book? Explore Providers Offering These Treatments</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Find the best medical spas in NYC offering premium aesthetic treatments. Compare providers, read reviews, and book your appointment today.
            </p>
            <Button asChild size="lg" className="bg-medspa-teal hover:bg-medspa-teal/90">
              <Link to="/medspas" className="inline-flex items-center">
                <Search size={18} className="mr-2" />
                Browse Our MedSpa Directory
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
