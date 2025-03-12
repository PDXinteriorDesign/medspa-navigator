
import React from "react";
import TreatmentPageTemplate from "@/components/service/TreatmentPageTemplate";

const LaserResurfacingPage = () => {
  const treatmentName = "Laser Resurfacing";
  const serviceSlug = "laser-resurfacing";
  const customHeroImage = "https://images.pexels.com/photos/7479817/pexels-photo-7479817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  
  // Enhanced content structure for SEO
  const enhancedContent = {
    introduction: [
      "Laser Resurfacing is an advanced aesthetic procedure that uses concentrated light beams to remove damaged skin layers with precision, stimulating collagen production and revealing fresher, younger-looking skin beneath.",
      "This powerful treatment addresses multiple skin concerns simultaneously—reducing fine lines, wrinkles, acne scars, sun damage, and uneven pigmentation while improving overall skin texture and tone.",
      "NYC's premier medical spas offer various laser resurfacing technologies, from gentle non-ablative treatments with minimal downtime to more intensive ablative procedures for dramatic transformation."
    ],
    benefits: [
      "Dramatic improvement in skin texture, tone, and elasticity",
      "Significant reduction in fine lines, wrinkles, and deeper creases",
      "Diminished appearance of acne scars, surgical scars, and stretch marks",
      "Correction of sun damage, age spots, and hyperpigmentation",
      "Tightened pores and smoother, more radiant complexion",
      "Stimulation of natural collagen production for ongoing improvement",
      "Customizable treatment intensity based on your specific concerns and downtime tolerance"
    ],
    process: [
      "Your journey begins with a comprehensive consultation at one of our vetted NYC medical spas, where your provider will assess your skin condition, discuss your concerns, and recommend the optimal laser technology and treatment intensity.",
      "Before treatment, your skin will be thoroughly cleansed, and depending on the laser type and intensity, a topical anesthetic may be applied to ensure your comfort. For deeper treatments, some Manhattan providers offer oral medication or nerve blocks.",
      "During the procedure, the laser device delivers precisely controlled pulses of energy to targeted skin areas. Treatment time ranges from 30 minutes for focused treatments to 2 hours for full-face procedures.",
      "The sensation varies based on the laser type and intensity—from mild warmth with non-ablative treatments to more significant heat with ablative lasers. NYC's top providers employ advanced cooling systems and comfort measures throughout."
    ],
    recovery: [
      "Recovery varies significantly based on the type and intensity of laser treatment. Non-ablative lasers popular in busy Manhattan clinics typically cause mild redness for 1-3 days with minimal interruption to your NYC lifestyle.",
      "Fractional ablative treatments cause more noticeable redness, swelling, and peeling lasting 5-7 days. Many NYC clients schedule these treatments before weekends or when they can work remotely.",
      "Fully ablative treatments, while less commonly performed, involve more significant downtime of 1-2 weeks and require diligent aftercare. These are typically performed by dermatologists or plastic surgeons in medical settings.",
      "Your NYC provider will supply detailed aftercare instructions including gentle cleansing protocols, appropriate moisturizers and serums, strict sun protection, and products to avoid during the healing phase."
    ],
    results: [
      "Results vary based on the type of laser treatment performed. Non-ablative treatments deliver gradual improvement over a series of sessions, while ablative treatments can provide dramatic results after just one session.",
      "Initial improvements become visible as healing progresses, with redness fading to reveal fresher, smoother skin. More significant results develop over 2-3 months as collagen remodeling occurs.",
      "Most NYC providers recommend a series of treatments—often 3-6 sessions spaced 3-4 weeks apart for non-ablative lasers, or 1-2 treatments spaced 3-6 months apart for more intensive procedures.",
      "Results can last for years with proper skincare and sun protection. Many Manhattan clients maintain their results with annual maintenance treatments combined with a medical-grade skincare regimen."
    ],
    considerations: [
      "Laser resurfacing pricing in New York varies widely based on the technology used and treatment area. Non-ablative treatments typically range from $500-$1,000 per session, while fractional ablative treatments range from $1,000-$3,000.",
      "While advanced technologies have made laser treatments safer for diverse skin types, not all lasers are appropriate for all skin tones. Deeper treatments may carry higher risks of pigmentation changes in darker skin. NYC's top providers carefully assess skin type to recommend appropriate devices.",
      "Timing is important when scheduling laser treatments. Procedures should be avoided if you're planning significant sun exposure, and fall/winter months are often ideal for more intensive treatments. Premium New York providers create year-round treatment plans that adjust laser types seasonally.",
      "Certain medications and conditions may contraindicate laser treatments, including recent Accutane use, certain autoimmune conditions, and pregnancy. Your NYC provider will review your medical history thoroughly during consultation."
    ]
  };
  
  return (
    <TreatmentPageTemplate
      treatmentName={treatmentName}
      serviceSlug={serviceSlug}
      enhancedContent={enhancedContent}
      customHeroImage={customHeroImage}
    />
  );
};

export default LaserResurfacingPage;
