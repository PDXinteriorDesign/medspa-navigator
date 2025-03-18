
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Sparkle, Award, ThumbsUp, ShieldCheck, Heart } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import MedSpaListingBanner from "@/components/location/MedSpaListingBanner";

const Locations = () => {
  const allLocations = [
    { id: "manhattan", slug: "manhattan", name: "Manhattan", medspaCount: 142 },
    { id: "soho", slug: "soho", name: "SoHo", medspaCount: 38 },
    { id: "upper-east-side", slug: "upper-east-side", name: "Upper East Side", medspaCount: 45 },
    { id: "tribeca", slug: "tribeca", name: "Tribeca", medspaCount: 28 },
    { id: "midtown", slug: "midtown", name: "Midtown", medspaCount: 34 },
    { id: "brooklyn", slug: "brooklyn", name: "Brooklyn", medspaCount: 78 },
    { id: "williamsburg", slug: "williamsburg", name: "Williamsburg", medspaCount: 29 },
    { id: "the-hamptons", slug: "the-hamptons", name: "The Hamptons", medspaCount: 34 }
  ];
  
  return (
    <>
      <Helmet>
        <title>Elite MedSpa Locations | Manhattan, Brooklyn, The Hamptons | MedSpasNYC</title>
        <meta 
          name="description" 
          content="Discover top MedSpas in NYC's most exclusive locations including Manhattan, SoHo, Upper East Side, and more. Find luxury treatments in your area." 
        />
      </Helmet>
      
      <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-12">
        <BreadcrumbNav 
          items={[
            { label: "Locations", href: "/locations", current: true }
          ]} 
        />
        
        <div className="mx-auto">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg mb-12">
            <img 
              src="https://images.unsplash.com/photo-1541531455306-a1008c85edd9?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Luxury MedSpa in NYC" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-sm"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-4 drop-shadow-md">
                The best NYC medspas, thoughtfully curated for you.
              </h1>
              <div className="w-20 h-1 bg-medspa-gold/80 mx-auto"></div>
            </div>
          </div>
          
          <div className="mb-12 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl md:text-3xl font-serif text-center mb-6">Find a MedSpa in New York</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Discover the top-rated MedSpas across New York with our carefully curated directory. Our goal is to make it effortless for you to find a premier medical spa that aligns with your beauty, wellness, and skincare needs. Whether you're looking for expert Botox treatments, state-of-the-art laser procedures, or luxurious facials, we connect you with the finest providers in the city.
              </p>
              <p>
                With an extensive list of only the highest-rated MedSpas and continually updated profiles, we ensure you have access to trusted professionals offering cutting-edge treatments. No matter your location in NYC, there's a MedSpa ready to help you achieve your aesthetic goals.
              </p>
              <p>
                Use our directory to find a MedSpa based on location, services offered, and specialization—helping you book the perfect experience with confidence. Start exploring today and take the next step toward looking and feeling your best.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {allLocations.map((location) => (
              <Link
                key={location.id}
                to={`/${location.slug}`}
                className="block bg-medspa-cream/60 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 group subtle-hover border border-black/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-medspa-teal" size={20} />
                    <h2 className="text-xl font-serif group-hover:text-medspa-teal transition-colors">
                      {location.name}
                    </h2>
                  </div>
                  <span className="text-gray-600">
                    {location.medspaCount} MedSpas
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-4">
              <Sparkle className="text-medspa-gold mr-2" size={20} />
              <h2 className="text-2xl font-serif">The Elite MedSpa Experience</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                The goal of our curated luxury MedSpas is to provide an exceptional environment where cutting-edge aesthetic treatments meet unparalleled comfort and personalized care. These exclusive sanctuaries offer more than just beauty enhancements—they deliver transformative experiences tailored to discerning clients who expect nothing less than excellence.
              </p>
              
              <p>
                Unlike conventional beauty services, our MedSpas combine medical-grade technology with spa-like ambiance, creating spaces where science and luxury coexist. Each location is carefully selected based on its commitment to outstanding results, premium facilities, and exceptional client care. The value of experiencing these treatments in such meticulously designed environments cannot be overstated.
              </p>
              
              <p>
                Many seeking aesthetic improvements struggle to find providers they can truly trust with their appearance and wellbeing. At our featured MedSpas, every treatment is administered by highly qualified professionals with specialized training and expertise in their field. This level of specialized care, coupled with state-of-the-art equipment and techniques, ensures safe, effective, and natural-looking results.
              </p>
              
              <p className="italic border-l-3 border-medspa-gold/60 pl-4 py-1">
                "The distinction between an ordinary aesthetic procedure and a truly exceptional MedSpa experience lies in the artistry of the providers, the quality of the environment, and the personalized attention given to each client's unique needs and desires."
              </p>
            </div>
          </div>
          
          <div className="mt-12 mb-8">
            <h3 className="text-2xl font-serif text-center mb-8">Why NYC's Elite MedSpas Matter</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-gray-100/60 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="text-medspa-gold" size={22} />
                    <h4 className="font-serif text-lg">Manhattan's Premier Expertise</h4>
                  </div>
                  <p className="text-gray-700">
                    Too often, clients compromise on quality due to limited options. In Manhattan, from the Upper East Side to SoHo, our directory showcases only the most prestigious medspas with board-certified physicians and master aestheticians. These exclusive Manhattan providers offer specialized treatments using cutting-edge technology that delivers transformative results for even the most discerning New York clientele.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-100/60 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="text-medspa-gold" size={22} />
                    <h4 className="font-serif text-lg">Personalized Luxury Experience</h4>
                  </div>
                  <p className="text-gray-700">
                    Aesthetic treatments are deeply personal. When New Yorkers commit to enhancing their appearance, they're often navigating busy Manhattan lifestyles and high social expectations. Our featured medspas in Tribeca, Midtown, and Brooklyn provide bespoke treatment plans addressing individual concerns while incorporating wellness approaches native to NYC's luxury aesthetic scene—combining clinical excellence with the sophisticated atmosphere expected by New York professionals.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-100/60 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ThumbsUp className="text-medspa-gold" size={22} />
                    <h4 className="font-serif text-lg">Diverse Treatment Options</h4>
                  </div>
                  <p className="text-gray-700">
                    NYC offers unparalleled treatment diversity. From Williamsburg's innovative boutique aesthetic studios to Park Slope's wellness-focused medspas, each neighborhood brings distinct specialties. Some flagship Manhattan locations provide comprehensive day-long rejuvenation experiences, while others in Brooklyn excel in targeted express treatments for busy professionals. Whether seeking the exclusivity of Upper East Side providers or the creative edge of SoHo's aesthetic scene, our curated directory represents NYC's finest.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-100/60 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="text-medspa-gold" size={22} />
                    <h4 className="font-serif text-lg">Uncompromising Quality</h4>
                  </div>
                  <p className="text-gray-700">
                    Quality remains paramount at New York's premier aesthetic destinations. When making the investment in your appearance—whether at a renowned Manhattan clinic or a luxury Hamptons retreat—you deserve nothing less than excellence. Our featured medspas maintain the highest medical standards while providing the attentive service expected in New York's luxury market. Each location undergoes rigorous vetting to ensure they maintain the clinical excellence and refined experience that defines New York's elite aesthetic community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-16 mb-8">
            <MedSpaListingBanner />
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
