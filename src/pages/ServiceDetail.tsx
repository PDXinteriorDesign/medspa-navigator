
import { useParams, Helmet } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LocationFilter from "@/components/LocationFilter";
import MedSpaCard from "@/components/MedSpaCard";
import { getServiceBySlug, getMedSpasByService } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StarIcon } from "lucide-react";

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  // Fetch service and medspas that offer this service
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const medSpasWithService = serviceSlug ? getMedSpasByService(serviceSlug) : [];
  
  if (!service) {
    return (
      <div className="medspa-container py-12">
        <h1 className="page-heading">Service Not Found</h1>
        <p>The service you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  // Generate service-specific SEO content based on the service
  const seoContent = getServiceSeoContent(service.name);
  const faqs = getServiceFaqs(service.name);
  const pricingInfo = getServicePricing(service.name);
  
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>{service.name} | Top NYC MedSpas for {service.name} | MedSpasNYC</title>
        <meta name="description" content={`Find top-rated MedSpas offering ${service.name} in NYC. Compare prices, read reviews, and book appointments with the best ${service.name} providers.`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": service.name,
            "description": service.description,
            "procedureType": "https://schema.org/CosmeticProcedure",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "MedSpasNYC",
              "url": "https://medspasnyc.com"
            },
            "areaServed": {
              "@type": "City",
              "name": "New York City"
            }
          })}
        </script>
      </Helmet>
    
      <div className="medspa-container py-12">
        <BreadcrumbNav 
          items={[
            { label: "Services", href: "/services" },
            { label: service.name, href: `/services/${service.slug}`, current: true }
          ]} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
              <img 
                src={service.imageUrl} 
                alt={service.name} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">{service.name}</h1>
                  <p className="text-white/90">{medSpasWithService.length} MedSpas offering this service in NYC</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium mb-4">About {service.name}</h2>
              
              <div className="text-gray-700 mb-6 space-y-4">
                {seoContent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              {/* Before & After Expectations */}
              <div className="mt-8 mb-6">
                <h3 className="text-lg font-medium mb-3">Before & After Expectations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-medspa-blue/30 p-4 rounded-lg">
                    <h4 className="font-medium text-medspa-teal mb-2">Before Treatment</h4>
                    <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                      {seoContent.beforeTreatment.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-medspa-blue/30 p-4 rounded-lg">
                    <h4 className="font-medium text-medspa-teal mb-2">After Treatment</h4>
                    <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                      {seoContent.afterTreatment.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Pricing Information */}
              <div className="mt-8 mb-6">
                <h3 className="text-lg font-medium mb-3">{service.name} Pricing in NYC</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-medspa-teal text-white">
                      <tr>
                        <th className="py-3 px-4 text-left text-sm">Treatment Type</th>
                        <th className="py-3 px-4 text-left text-sm">Average Price</th>
                        <th className="py-3 px-4 text-left text-sm">Price Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {pricingInfo.map((item, index) => (
                        <tr key={index} className="text-gray-700">
                          <td className="py-3 px-4 text-sm">{item.type}</td>
                          <td className="py-3 px-4 text-sm">${item.averagePrice}</td>
                          <td className="py-3 px-4 text-sm">${item.minPrice} - ${item.maxPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  *Prices are approximate and may vary by provider and location. Contact MedSpas directly for exact pricing.
                </p>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium mb-4">Frequently Asked Questions About {service.name}</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <h2 className="section-heading mt-8">Top-Rated MedSpas for {service.name} in NYC</h2>
            
            <div className="grid grid-cols-1 gap-6">
              {medSpasWithService.slice(0, 3).map(medSpa => (
                <div key={medSpa.id} className="relative">
                  {medSpa.featured && (
                    <div className="absolute top-4 right-4 bg-medspa-gold text-white text-xs font-medium px-2 py-1 rounded-full z-10 flex items-center">
                      <StarIcon size={12} className="mr-1" />
                      Featured
                    </div>
                  )}
                  <MedSpaCard medSpa={medSpa} />
                </div>
              ))}
              
              {medSpasWithService.length > 3 && (
                <div className="text-center">
                  <Button asChild className="bg-medspa-teal hover:bg-medspa-teal/90">
                    <a href="/medspas">View All MedSpas</a>
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-8 md:mt-0">
            <LocationFilter serviceSlug={service.slug} />
            
            <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
              <h3 className="text-lg font-medium mb-4">Looking for {service.name} providers?</h3>
              <p className="text-gray-700 text-sm mb-4">
                Find the top-rated medical spas offering {service.name} in your area of NYC.
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full bg-medspa-teal hover:bg-medspa-teal/90">
                  <a href={`tel:+1234567890`}>Call to Book Now</a>
                </Button>
                <Button variant="outline" className="w-full border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10">
                  Get Price Quote
                </Button>
              </div>
            </div>
            
            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
              <h3 className="text-lg font-medium mb-4">{service.name} Reviews in NYC</h3>
              <div className="space-y-4">
                {seoContent.reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {Array(5).fill(0).map((_, i) => (
                          <StarIcon key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} />
                        ))}
                      </div>
                      <span className="ml-2 text-xs text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-sm text-gray-700">{review.text}</p>
                    <p className="text-xs text-gray-500 mt-1">- {review.author}, {review.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Helper functions to generate SEO content based on service type
const getServiceSeoContent = (serviceName) => {
  let content = [];
  let beforeTreatment = [];
  let afterTreatment = [];
  let reviews = [];

  switch (serviceName) {
    case "Botox":
      content = [
        "Botox is one of the most popular cosmetic treatments in NYC, known for its ability to temporarily reduce the appearance of facial wrinkles and fine lines. This non-surgical procedure uses a purified form of botulinum toxin to relax the muscles responsible for wrinkles, giving the skin a smoother, more youthful appearance.",
        "In New York City, Botox is commonly used to treat forehead lines, crow's feet (lines around the eyes), and glabellar lines (frown lines between the eyebrows). The treatment typically takes just 10-15 minutes, making it a convenient 'lunchtime procedure' for busy New Yorkers.",
        "The effects of Botox generally last 3-4 months, though results can vary based on individual factors such as muscle strength, metabolism, and the specific area being treated. Many NYC residents incorporate Botox into their regular beauty regimen, scheduling treatments 3-4 times per year to maintain results."
      ];
      beforeTreatment = [
        "Avoid blood thinners, aspirin, and anti-inflammatory medications for 1 week",
        "Discontinue vitamin E and fish oil supplements 2 days before",
        "Avoid alcohol consumption 24 hours before treatment",
        "Come to appointment with clean skin free of makeup"
      ];
      afterTreatment = [
        "Remain upright for 4 hours after injection",
        "Avoid touching or rubbing the treated area for 24 hours",
        "Refrain from strenuous exercise for 24 hours",
        "Results typically appear within 3-7 days",
        "Full effects visible within 2 weeks"
      ];
      reviews = [
        {
          rating: 5,
          text: "I've been getting Botox at Glow MedSpa for over a year now. The results are always natural looking—exactly what I wanted.",
          author: "Jennifer K.",
          location: "Manhattan",
          date: "May 2023"
        },
        {
          rating: 4,
          text: "Elite Aesthetic Center has the best Botox technicians. Minimal bruising and the results last me a full 4 months.",
          author: "Michael T.",
          location: "Brooklyn",
          date: "June 2023"
        }
      ];
      break;
    case "CoolSculpting":
      content = [
        "CoolSculpting is an innovative non-invasive fat reduction procedure that has gained immense popularity in New York City. This FDA-approved treatment uses controlled cooling technology to freeze and eliminate stubborn fat cells without surgery or downtime.",
        "The science behind CoolSculpting, known as cryolipolysis, selectively targets fat cells while leaving surrounding tissues unharmed. Once frozen, these fat cells die and are naturally processed and eliminated by the body over the following weeks and months.",
        "Popular treatment areas among NYC clients include the abdomen, flanks (love handles), thighs, back fat, double chin, and upper arms. Most patients see noticeable results after just one session, though optimal results typically require 2-3 treatments spaced several weeks apart."
      ];
      beforeTreatment = [
        "Avoid anti-inflammatory medications before treatment",
        "Wear comfortable clothing to your appointment",
        "Maintain a healthy weight; CoolSculpting is not a weight loss solution",
        "Inform your provider about any medical conditions"
      ];
      afterTreatment = [
        "Temporary redness, swelling, and numbness in the treated area",
        "No downtime; most patients return to normal activities immediately",
        "Initial results visible in 3 weeks",
        "Maximum results typically appear after 2-3 months",
        "Maintain results with healthy diet and exercise"
      ];
      reviews = [
        {
          rating: 5,
          text: "After three sessions of CoolSculpting at Elite Aesthetic Center, my stubborn love handles are finally gone. Worth every penny!",
          author: "David L.",
          location: "Manhattan",
          date: "April 2023"
        },
        {
          rating: 4,
          text: "Glow MedSpa did an amazing job with my CoolSculpting treatments. The staff was informative and made me feel comfortable throughout.",
          author: "Sarah J.",
          location: "Queens",
          date: "July 2023"
        }
      ];
      break;
    case "Laser Hair Removal":
      content = [
        "Laser hair removal is one of the most sought-after aesthetic treatments in New York City, offering a long-term solution to unwanted hair. This advanced procedure uses concentrated beams of light to target and destroy hair follicles, inhibiting future hair growth.",
        "NYC MedSpas typically use state-of-the-art laser technologies suitable for various skin types and hair colors. Most high-end facilities offer the latest in laser technology, including Alexandrite, Nd:YAG, and Diode lasers, each optimized for different skin and hair combinations.",
        "Popular treatment areas include the legs, underarms, bikini area, face, back, and chest. While laser hair removal is effective across all these areas, the number of sessions required varies depending on the treatment area, hair density, and hair color. Most clients require 6-8 sessions spaced 4-6 weeks apart to achieve optimal results."
      ];
      beforeTreatment = [
        "Avoid sun exposure for at least 2 weeks before treatment",
        "Shave the treatment area 24 hours before your appointment",
        "Do not wax, pluck, or use depilatory creams for 2 weeks prior",
        "Avoid self-tanners and tanning beds"
      ];
      afterTreatment = [
        "Temporary redness and swelling is normal",
        "Apply cold compresses to reduce discomfort if needed",
        "Avoid sun exposure and use SPF 30+ on treated areas",
        "No hot baths, saunas, or intense exercise for 24-48 hours",
        "Hair shedding occurs within 7-14 days after treatment"
      ];
      reviews = [
        {
          rating: 5,
          text: "Queens Laser Spa completely changed my life! After years of painful waxing, I finally have smooth, hair-free skin year-round.",
          author: "Olivia R.",
          location: "Queens",
          date: "March 2023"
        },
        {
          rating: 4,
          text: "Brooklyn Beauty Clinic offers the best laser hair removal in NYC. Worth the commute from Manhattan for their expertise and results.",
          author: "James B.",
          location: "Manhattan",
          date: "June 2023"
        }
      ];
      break;
    default:
      content = [
        `${serviceName} is a popular cosmetic treatment available at many premium MedSpas throughout New York City. This procedure helps clients achieve their aesthetic goals with minimal downtime and noticeable results.`,
        `When choosing a MedSpa for your ${serviceName} treatment in NYC, it's important to consider factors such as the provider's experience, the technology they use, and reviews from previous clients. Our directory helps you find the most reputable providers in your neighborhood.`,
        `${serviceName} treatments in NYC typically range in price depending on the specific provider, their location, and the extent of treatment needed. Many MedSpas offer package deals for multiple sessions, which can provide better value for ongoing treatments.`
      ];
      beforeTreatment = [
        "Consult with your provider about preparation steps",
        "Follow all pre-treatment instructions carefully",
        "Disclose all medications and supplements you're taking",
        "Ask questions about what to expect during and after treatment"
      ];
      afterTreatment = [
        "Follow all post-treatment care instructions",
        "Attend all recommended follow-up appointments",
        "Report any unusual side effects to your provider",
        "Maintain results with recommended at-home care regimen"
      ];
      reviews = [
        {
          rating: 5,
          text: `The ${serviceName} treatment I received was excellent. The staff was professional and the results exceeded my expectations.`,
          author: "Patient",
          location: "NYC",
          date: "Recent"
        },
        {
          rating: 4,
          text: `I'm very satisfied with my ${serviceName} results. The MedSpa was clean, modern, and the practitioner was highly skilled.`,
          author: "Client",
          location: "New York",
          date: "Recent"
        }
      ];
  }

  return {
    0: content[0],
    1: content[1],
    2: content[2],
    beforeTreatment,
    afterTreatment,
    reviews,
    map: (callback) => content.map(callback)
  };
};

const getServiceFaqs = (serviceName) => {
  switch (serviceName) {
    case "Botox":
      return [
        {
          question: "How long does Botox last?",
          answer: "Botox typically lasts 3-4 months, though this can vary based on factors such as the area treated, dosage used, and individual metabolism. Some patients, especially those who regularly receive Botox treatments, may find their results last longer over time."
        },
        {
          question: "Is Botox painful?",
          answer: "Most patients report minimal discomfort during Botox injections. The procedure involves using very fine needles, and many NYC MedSpas apply a topical numbing cream before treatment to enhance comfort. Some describe the sensation as a slight pinch that lasts only seconds."
        },
        {
          question: "What's the difference between Botox and fillers?",
          answer: "Botox relaxes muscles to reduce dynamic wrinkles (wrinkles caused by movement), while fillers add volume to static wrinkles and areas of lost volume. Botox is ideal for forehead lines, crow's feet, and frown lines, while fillers work best for nasolabial folds, marionette lines, and lip enhancement."
        },
        {
          question: "At what age should I start getting Botox?",
          answer: "There's no specific age to start Botox, as it depends on your individual concerns and goals. Many NYC residents begin preventative Botox in their late 20s or early 30s, while others wait until lines become more noticeable. A consultation with a qualified provider is the best way to determine if Botox is right for you."
        },
        {
          question: "Can I exercise after getting Botox?",
          answer: "It's recommended to avoid strenuous exercise for 24 hours after Botox treatment. Physical activity increases blood flow, which could potentially spread the Botox to unintended areas or reduce its effectiveness at the injection site."
        }
      ];
    case "CoolSculpting":
      return [
        {
          question: "How many CoolSculpting sessions will I need?",
          answer: "Most patients need 1-3 CoolSculpting sessions per treatment area to achieve optimal results. Factors affecting this include the size of the area, the amount of fat being targeted, and your individual body's response to the treatment. During your consultation at an NYC MedSpa, your provider will create a personalized treatment plan."
        },
        {
          question: "Is CoolSculpting painful?",
          answer: "CoolSculpting isn't typically described as painful, though you may experience intense cold, pulling, tugging, and mild pinching sensations during the first few minutes of treatment. As the area numbs, these sensations generally subside. Most NYC clients read, work on laptops, or even nap during their sessions."
        },
        {
          question: "How is CoolSculpting different from liposuction?",
          answer: "CoolSculpting is a non-invasive procedure with no downtime, while liposuction is a surgical procedure requiring anesthesia and recovery time. CoolSculpting reduces fat by about 20-25% in the treated area, while liposuction can remove more fat. CoolSculpting is ideal for targeting specific pockets of fat rather than comprehensive body contouring."
        },
        {
          question: "Will I lose weight with CoolSculpting?",
          answer: "CoolSculpting is not a weight loss solution, but rather a body contouring treatment. While you likely won't see significant changes on the scale, you will notice improved body shape and fit of clothing. The procedure is designed for those at or near their ideal weight who have stubborn fat deposits resistant to diet and exercise."
        },
        {
          question: "Are CoolSculpting results permanent?",
          answer: "CoolSculpting permanently eliminates treated fat cells, which do not regenerate. However, remaining fat cells can expand with weight gain. To maintain optimal results, NYC providers recommend maintaining a stable weight through healthy diet and regular exercise."
        }
      ];
    case "Laser Hair Removal":
      return [
        {
          question: "How many laser hair removal sessions will I need?",
          answer: "Most people require 6-8 sessions spaced 4-6 weeks apart for optimal results. This is because hair grows in cycles, and the laser only affects follicles in the active growth phase. Factors affecting the number of treatments include hair color, thickness, the area being treated, and your hormonal balance."
        },
        {
          question: "Is laser hair removal permanent?",
          answer: "Laser hair removal is considered a permanent hair reduction method, not complete removal. After a full treatment series, most NYC clients experience 80-90% reduction in hair growth. Occasional maintenance sessions (once or twice a year) may be needed to manage any regrowth, which is typically finer and lighter in color."
        },
        {
          question: "Does laser hair removal hurt?",
          answer: "Most people describe laser hair removal as feeling like a rubber band snap against the skin. Discomfort varies based on the treatment area, with more sensitive areas like the bikini line or upper lip being more uncomfortable. Many NYC MedSpas use cooling systems and topical numbing creams to enhance comfort during treatment."
        },
        {
          question: "Is laser hair removal safe for dark skin?",
          answer: "Yes, but it requires the right laser technology. New York City's top MedSpas offer advanced lasers like Nd:YAG that are specifically designed to safely treat darker skin tones. When performed by a skilled professional using appropriate technology, laser hair removal can be safe and effective for all skin types."
        },
        {
          question: "Can I get laser hair removal while pregnant?",
          answer: "Most medical professionals and NYC MedSpas advise against laser hair removal during pregnancy. While there's no evidence suggesting it's harmful to the baby, hormonal changes during pregnancy can affect results and may increase the risk of skin discoloration. It's recommended to wait until after pregnancy and breastfeeding to pursue treatment."
        }
      ];
    default:
      return [
        {
          question: `What is ${serviceName} and how does it work?`,
          answer: `${serviceName} is a popular aesthetic treatment that works by [treatment mechanism]. The procedure is designed to [treatment goal] without extensive downtime or recovery.`
        },
        {
          question: `How many ${serviceName} sessions will I need?`,
          answer: `The number of ${serviceName} sessions varies by individual, but most clients require [number range] treatments spaced [timeframe] apart for optimal results. Your provider will create a personalized treatment plan during your consultation.`
        },
        {
          question: `Is ${serviceName} painful?`,
          answer: `Most clients report minimal to moderate discomfort during ${serviceName} treatments. Many NYC MedSpas use techniques to minimize discomfort, such as topical numbing creams or advanced technology designed to enhance comfort.`
        },
        {
          question: `How long do ${serviceName} results last?`,
          answer: `Results from ${serviceName} typically last [timeframe], though this varies based on individual factors and the specific area treated. Many clients schedule maintenance treatments to preserve their results.`
        },
        {
          question: `Is there any downtime after ${serviceName}?`,
          answer: `${serviceName} typically involves [downtime description]. Many NYC clients are able to return to their normal activities [timeframe] after treatment, making it convenient for busy lifestyles.`
        }
      ];
  }
};

const getServicePricing = (serviceName) => {
  switch (serviceName) {
    case "Botox":
      return [
        { type: "Forehead Lines", averagePrice: 350, minPrice: 250, maxPrice: 450 },
        { type: "Crow's Feet (Both Sides)", averagePrice: 350, minPrice: 250, maxPrice: 450 },
        { type: "Glabellar Lines (11 Lines)", averagePrice: 350, minPrice: 250, maxPrice: 450 },
        { type: "Full Face (All Three Areas)", averagePrice: 850, minPrice: 700, maxPrice: 1000 },
        { type: "Bunny Lines", averagePrice: 250, minPrice: 200, maxPrice: 350 },
        { type: "Masseter (Jaw Reduction)", averagePrice: 650, minPrice: 500, maxPrice: 800 }
      ];
    case "CoolSculpting":
      return [
        { type: "Abdomen (Lower)", averagePrice: 1500, minPrice: 1200, maxPrice: 1800 },
        { type: "Abdomen (Upper)", averagePrice: 1500, minPrice: 1200, maxPrice: 1800 },
        { type: "Flanks (Love Handles) - Both Sides", averagePrice: 1600, minPrice: 1300, maxPrice: 1900 },
        { type: "Inner Thighs - Both", averagePrice: 1500, minPrice: 1200, maxPrice: 1800 },
        { type: "Outer Thighs - Both", averagePrice: 1600, minPrice: 1300, maxPrice: 1900 },
        { type: "Double Chin", averagePrice: 1000, minPrice: 800, maxPrice: 1200 }
      ];
    case "Laser Hair Removal":
      return [
        { type: "Upper Lip", averagePrice: 150, minPrice: 100, maxPrice: 200 },
        { type: "Underarms", averagePrice: 200, minPrice: 150, maxPrice: 250 },
        { type: "Bikini", averagePrice: 250, minPrice: 200, maxPrice: 300 },
        { type: "Brazilian", averagePrice: 350, minPrice: 300, maxPrice: 400 },
        { type: "Full Legs", averagePrice: 600, minPrice: 500, maxPrice: 700 },
        { type: "Chest (Men)", averagePrice: 400, minPrice: 350, maxPrice: 450 }
      ];
    default:
      return [
        { type: "Basic Treatment", averagePrice: 300, minPrice: 200, maxPrice: 400 },
        { type: "Standard Treatment", averagePrice: 500, minPrice: 400, maxPrice: 600 },
        { type: "Premium Treatment", averagePrice: 700, minPrice: 600, maxPrice: 800 },
        { type: "Package (3 Sessions)", averagePrice: 1200, minPrice: 1000, maxPrice: 1400 },
        { type: "Package (6 Sessions)", averagePrice: 2000, minPrice: 1800, maxPrice: 2200 }
      ];
  }
};

export default ServiceDetail;
