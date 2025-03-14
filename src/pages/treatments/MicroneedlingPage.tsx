
import React from "react";
import TreatmentPageTemplate from "@/components/service/TreatmentPageTemplate";
import { Wand2 } from "lucide-react";

const MicroneedlingPage = () => {
  const treatmentName = "Microneedling";
  const serviceSlug = "microneedling";
  
  // Enhanced content structure for Microneedling
  const enhancedContent = {
    introduction: [
      "Microneedling is a minimally invasive cosmetic procedure that uses fine needles to create controlled micro-injuries to the skin, triggering the body's natural wound healing process. This results in increased collagen and elastin production, improving skin texture, reducing scars, and promoting overall skin rejuvenation.",
      "At MedSpasNYC, we've selected the best microneedling providers across New York City who use advanced technology and techniques to deliver optimal results with minimal downtime.",
      "Our comprehensive guide covers everything you need to know about microneedling treatments in NYC, from the procedure itself to expected results and recommended providers."
    ],
    benefits: [
      "Stimulates natural collagen and elastin production for firmer, more youthful skin",
      "Minimizes the appearance of fine lines, wrinkles, and acne scars",
      "Improves skin texture and tone for a smoother, more radiant complexion",
      "Enhances the absorption of serums and topical treatments applied during the procedure",
      "Minimal downtime compared to more invasive procedures, perfect for busy New Yorkers"
    ],
    process: [
      "Your microneedling journey begins with a thorough consultation at one of our vetted NYC medical spas. Your provider will assess your skin concerns, discuss your aesthetic goals, and determine if microneedling is the right treatment for you.",
      "Before your procedure, your skin will be cleansed and a topical numbing cream will be applied to ensure your comfort throughout the treatment. While the numbing cream takes effect, your provider will explain the procedure and answer any questions.",
      "During the treatment, a specialized device with fine, sterile needles creates thousands of microscopic channels in the skin. These micro-injuries stimulate the skin's natural healing response. Many providers enhance the procedure by applying specialized serums or PRP (platelet-rich plasma) that penetrate deeper into the skin through these channels.",
      "A typical microneedling session takes between 30-60 minutes, depending on the treatment area and your specific needs."
    ],
    recovery: [
      "Immediately after microneedling, your skin will appear red and slightly swollen, similar to a mild sunburn. This is normal and typically subsides within 24-48 hours.",
      "Your provider will apply a soothing serum or mask to calm the skin and provide specific aftercare instructions, including products to use and avoid during the healing process.",
      "Most patients can return to their normal activities the following day, though you'll need to avoid direct sun exposure and wear SPF daily to protect your skin.",
      "For optimal results, your provider may recommend a series of 3-6 treatments spaced 4-6 weeks apart, depending on your specific skin concerns and goals."
    ],
    results: [
      "You may notice an immediate 'glow' to your skin after the first treatment, but the most significant improvements will develop over time as collagen production increases.",
      "Progressive results become visible within 2-4 weeks after each session, with continued improvement for up to 6 months as the skin rejuvenation process continues.",
      "Microneedling results in smoother, firmer skin with improved texture and tone. Fine lines appear diminished, and acne scars or stretch marks become less noticeable.",
      "To maintain optimal results, most providers recommend maintenance treatments every 6-12 months, along with a consistent skincare routine."
    ],
    considerations: [
      "While microneedling is suitable for most skin types, certain conditions like active acne, eczema, or psoriasis may exclude you as a candidate. Your provider will evaluate your eligibility during the consultation.",
      "The cost of microneedling in NYC varies based on the provider's expertise, location, and whether additional treatments like PRP are included. Premium providers in Manhattan neighborhoods like the Upper East Side may charge more than those in other boroughs.",
      "Many microneedling treatments are now enhanced with radiofrequency energy or LED light therapy for added benefits. Your provider can recommend the most appropriate technique for your specific concerns.",
      "Choosing a qualified provider is essential for both safety and results. All MedSpasNYC featured providers are thoroughly vetted to ensure they meet our stringent standards for training, experience, and patient satisfaction."
    ]
  };
  
  // Custom content component with additional information about RF Microneedling
  const CustomContent = () => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-medium mb-4">RF Microneedling: The Advanced Option</h3>
      <div className="text-gray-700 space-y-4">
        <p>
          Radiofrequency (RF) microneedling combines traditional microneedling with radiofrequency energy for enhanced results. This advanced treatment delivers thermal energy deep into the dermis, amplifying collagen production and skin tightening effects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-medspa-cream/30 p-4 rounded-lg">
            <h4 className="font-medium text-medspa-teal flex items-center mb-2">
              <Wand2 size={16} className="mr-2" /> 
              Key Benefits of RF Microneedling
            </h4>
            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>More significant skin tightening and firming</li>
              <li>Enhanced reduction of deep wrinkles and acne scars</li>
              <li>Improved contouring capabilities, especially for jowls and neck</li>
              <li>Longer-lasting results compared to traditional microneedling</li>
            </ul>
          </div>
          <div className="bg-medspa-cream/30 p-4 rounded-lg">
            <h4 className="font-medium text-medspa-teal flex items-center mb-2">
              <Wand2 size={16} className="mr-2" /> 
              Popular RF Microneedling Devices
            </h4>
            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>Morpheus8 - Deeper penetration for more dramatic results</li>
              <li>Vivace - Combines RF with LED light therapy</li>
              <li>Genius - Precise temperature control for optimal results</li>
              <li>Secret RF - Adjustable needle depths for customized treatment</li>
            </ul>
          </div>
        </div>
        <p>
          While RF microneedling typically costs more than traditional microneedling, many patients find the enhanced and longer-lasting results worth the investment. Your provider can recommend the best option based on your skin concerns, budget, and desired outcomes.
        </p>
      </div>
    </div>
  );
  
  return (
    <TreatmentPageTemplate
      treatmentName={treatmentName}
      serviceSlug={serviceSlug}
      enhancedContent={enhancedContent}
      customContent={<CustomContent />}
      customHeroImage="https://images.unsplash.com/photo-1614859875372-13c11413b896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    />
  );
};

export default MicroneedlingPage;
