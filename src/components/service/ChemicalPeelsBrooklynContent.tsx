
import React from "react";
import { Link } from "react-router-dom";
import { getServicesByLocation } from "@/lib/filters";
import ServiceMedSpaListing from "@/components/service/ServiceMedSpaListing";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle, MapPin } from "lucide-react";

const ChemicalPeelsBrooklynContent = () => {
  // Get the medical spas in Brooklyn that offer chemical peels
  const chemicalPeelsMedSpasInBrooklyn = getServicesByLocation("chemical-peels", "brooklyn");
  
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-serif font-medium mb-5 tracking-tight">
        Chemical Peels in Brooklyn: Expert Treatments for Skin Rejuvenation
      </h2>
      
      {/* Display medical spas listing */}
      <div className="my-8">
        <ServiceMedSpaListing 
          medSpasInLocation={chemicalPeelsMedSpasInBrooklyn}
          serviceName="Chemical Peels"
          serviceSlug="chemical-peels"
          locationName="Brooklyn"
        />
      </div>
      
      {/* Featured Clinics Section - New! */}
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4 text-medspa-teal flex items-center">
          <Award className="mr-2 text-medspa-gold" size={22} />
          Top Brooklyn Clinics for Chemical Peels
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-medspa-teal/20 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h4 className="text-lg font-medium mb-2">La Vita MedSpa</h4>
              <div className="flex items-start mb-2">
                <MapPin size={16} className="text-medspa-teal mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-600 text-sm">5906 7th Avenue, Brooklyn, NY 11220</p>
              </div>
              <p className="text-gray-700 text-sm">
                Offering customized chemical peels that address multiple skin concerns including hyperpigmentation, acne scarring, and signs of aging.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-medspa-teal/20 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h4 className="text-lg font-medium mb-2">Skin Glow Aesthetics</h4>
              <div className="flex items-start mb-2">
                <MapPin size={16} className="text-medspa-teal mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-600 text-sm">70-20 Austin St, Forest Hills, NY 11375</p>
              </div>
              <p className="text-gray-700 text-sm">
                Specializing in advanced chemical peels, microdermabrasion, and LED light therapy for comprehensive skin rejuvenation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-medspa-teal/20 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h4 className="text-lg font-medium mb-2">LIC Med Spa</h4>
              <div className="flex items-start mb-2">
                <MapPin size={16} className="text-medspa-teal mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-600 text-sm">10-20 47th Rd, Long Island City, NY 11101</p>
              </div>
              <p className="text-gray-700 text-sm">
                Offers innovative chemical peel formulations combined with advanced skin rejuvenation treatments for optimal results.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-medspa-teal/20 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h4 className="text-lg font-medium mb-2">Skin & Body Med Spa</h4>
              <div className="flex items-start mb-2">
                <MapPin size={16} className="text-medspa-teal mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-600 text-sm">213-02 42nd Ave, Bayside, NY 11361</p>
              </div>
              <p className="text-gray-700 text-sm">
                Provides comprehensive skin treatments including customized chemical peels for various skin concerns and conditions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Introduction Section */}
      <Card className="mb-6 bg-white border-medspa-teal/20">
        <CardContent className="pt-6">
          <p className="text-gray-700">
            Brooklyn has emerged as a premier destination for <strong>Chemical Peels</strong> treatments, with specialized clinics offering innovative approaches to skin rejuvenation. From boutique aesthetic studios in Williamsburg to established medical spas in Park Slope, <strong>Brooklyn Chemical Peels</strong> providers blend technical expertise with the borough's distinctive artistic sensibility.
          </p>
        </CardContent>
      </Card>
      
      {/* Why Choose Brooklyn Section */}
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4 text-medspa-teal">
          Why Choose Brooklyn for Your Chemical Peel Treatment?
        </h3>
        
        <Card className="mb-4">
          <CardContent className="pt-6">
            <p className="text-gray-700">
              <strong>Chemical Peels in Brooklyn</strong> represent the perfect fusion of advanced dermatological science and personalized care. Brooklyn's top aestheticians and dermatologists are known for their methodical approach, carefully selecting peel formulations based on individual skin needs rather than applying one-size-fits-all treatments.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Whether you're seeking solutions for acne scarring, hyperpigmentation, or early signs of aging, <strong>Brooklyn Chemical Peel specialists</strong> offer customized treatments that deliver noticeable results with minimal downtime – ideal for maintaining your skin's appearance amid Brooklyn's dynamic urban environment.
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Benefits of Chemical Peels - New! */}
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4 text-medspa-teal">
          Benefits of Chemical Peels in Brooklyn
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start">
                <CheckCircle className="text-medspa-teal mt-1 mr-3" size={18} />
                <div>
                  <h4 className="text-lg font-medium mb-1">Improved Skin Texture</h4>
                  <p className="text-gray-700 text-sm">
                    Chemical peels exfoliate dead skin cells, revealing smoother, softer skin underneath. Brooklyn specialists excel at customizing treatment depths to achieve optimal textural improvements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start">
                <CheckCircle className="text-medspa-teal mt-1 mr-3" size={18} />
                <div>
                  <h4 className="text-lg font-medium mb-1">Reduction in Hyperpigmentation</h4>
                  <p className="text-gray-700 text-sm">
                    Brooklyn's diverse clientele has led local providers to develop specialized expertise in treating various forms of hyperpigmentation across all skin types and tones.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start">
                <CheckCircle className="text-medspa-teal mt-1 mr-3" size={18} />
                <div>
                  <h4 className="text-lg font-medium mb-1">Anti-Aging Effects</h4>
                  <p className="text-gray-700 text-sm">
                    Regular chemical peels can stimulate collagen production and diminish fine lines. Brooklyn's top clinics often combine peels with complementary treatments for enhanced anti-aging results.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start">
                <CheckCircle className="text-medspa-teal mt-1 mr-3" size={18} />
                <div>
                  <h4 className="text-lg font-medium mb-1">Acne Management</h4>
                  <p className="text-gray-700 text-sm">
                    Chemical peels can help control acne by removing pore-clogging debris and reducing inflammation. Many Brooklyn providers specialize in acne-focused chemical peel protocols.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Neighborhoods Section */}
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4 text-medspa-teal">
          Best Brooklyn Neighborhoods for Chemical Peel Treatments
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-medium mb-2">Williamsburg</h4>
              <p className="text-gray-700">
                <strong>Williamsburg Chemical Peels</strong> are known for their innovative approaches, with many providers incorporating organic and natural elements alongside traditional peel formulations. <Link to="/treatments/chemical-peels/williamsburg" className="text-medspa-blue hover:underline">Williamsburg clinics</Link> excel at creating comfortable, stylish environments where skincare expertise meets Brooklyn's creative energy.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-medium mb-2">Park Slope</h4>
              <p className="text-gray-700">
                <strong>Park Slope Chemical Peels</strong> tend to focus on comprehensive skincare approaches, with providers often combining chemical exfoliation with complementary treatments for holistic skin improvement. The neighborhood's family-oriented character translates to medical spas that emphasize education and long-term skincare relationships.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Types Section */}
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4 text-medspa-teal">
          Types of Chemical Peels Available in Brooklyn
        </h3>
        
        <Card className="mb-4">
          <CardContent className="pt-6">
            <p className="text-gray-700">
              Brooklyn's premier aesthetics providers offer a full spectrum of <strong>Chemical Peel treatments</strong>, from gentle lactic acid peels ideal for sensitive skin to more intensive TCA formulations for significant texture concerns. Many Brooklyn clinics specialize in combination approaches, creating custom peel protocols that address multiple skin concerns simultaneously.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              The borough's diverse population has also inspired many providers to develop expertise in <strong>Chemical Peels for all skin tones</strong>, with specialized protocols that effectively address hyperpigmentation and textural concerns without risking post-inflammatory discoloration in deeper complexions.
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Finding the Best Section */}
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4 text-medspa-teal">
          Finding the Best Chemical Peel in Brooklyn
        </h3>
        
        <Card className="mb-4">
          <CardContent className="pt-6">
            <p className="text-gray-700">
              When selecting a provider for your <strong>Brooklyn Chemical Peel treatment</strong>, prioritize clinics that offer comprehensive consultations and customized treatment plans. The best Brooklyn aestheticians thoroughly evaluate your skin condition, sensitivity level, and treatment goals before recommending specific peel formulations and strengths.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-700">
              MedSpasNYC has carefully vetted Brooklyn's top Chemical Peel providers, ensuring each featured clinic maintains the highest standards for safety, efficacy, and client satisfaction. Browse our curated selection of <strong>Brooklyn Chemical Peel specialists</strong> to find your ideal treatment provider.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChemicalPeelsBrooklynContent;
