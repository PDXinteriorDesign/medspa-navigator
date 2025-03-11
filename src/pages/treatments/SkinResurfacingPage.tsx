import React from "react";
import TreatmentPageTemplate from "@/components/service/TreatmentPageTemplate";

const SkinResurfacingPage = () => {
  const treatmentName = "Skin Resurfacing";
  const serviceSlug = "skin-resurfacing";
  const customHeroImage = "https://images.pexels.com/photos/12556701/pexels-photo-12556701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  
  const enhancedContent = {
    introduction: [
      `Skin Resurfacing is one of NYC's premier aesthetic treatments, designed to rejuvenate and transform your skin's appearance by addressing issues such as fine lines, wrinkles, acne scars, and uneven texture. This advanced treatment uses cutting-edge laser technology to precisely remove damaged skin layers, promoting collagen production and revealing fresher, younger-looking skin beneath.`,
      `Manhattan and Brooklyn's elite dermatology clinics offer various skin resurfacing methods, from gentle microdermabrasion to more intensive CO2 fractional laser treatments. Each approach is customized to address specific skin concerns while minimizing downtime, making these procedures increasingly popular among busy New Yorkers seeking effective skincare solutions.`,
      `At MedSpasNYC, we've carefully vetted the city's top skin resurfacing providers, focusing on those offering the most advanced FDA-approved technologies combined with expert application techniques that deliver consistent, impressive results for all skin types and concerns.`
    ],
    benefits: [
      `Dramatic improvement in skin texture and tone — many NYC clients report visible reduction in fine lines and wrinkles`,
      `Significant reduction in acne scars, sun damage, and hyperpigmentation`,
      `Stimulation of collagen production for ongoing skin improvement long after treatment`,
      `Customizable treatment intensity to address mild to severe skin concerns`,
      `Versatile application for face, neck, hands, and other areas showing signs of aging or damage`,
      `Long-lasting results with proper skincare maintenance`
    ],
    process: [
      `Your skin resurfacing journey begins with a comprehensive consultation at one of our vetted NYC dermatology clinics. During this initial assessment, your provider will evaluate your skin condition, discuss your aesthetic goals, and recommend the most appropriate resurfacing method for your unique needs.`,
      `Leading NYC clinics offer a spectrum of resurfacing options including chemical peels, microdermabrasion, laser resurfacing (ablative and non-ablative), radiofrequency microneedling, and plasma skin regeneration. Each technique varies in intensity, downtime, and results.`,
      `Before your procedure, your skin will be thoroughly cleansed and prepared. For more intensive treatments like deep laser resurfacing, topical anesthetics or mild sedation may be applied to ensure your comfort throughout the procedure.`,
      `During the treatment, your provider will precisely apply the chosen resurfacing method to the targeted areas. Treatment times vary from 30 minutes for superficial procedures to over an hour for more comprehensive treatments.`,
      `Many NYC clinics now offer combination approaches, utilizing multiple resurfacing techniques in sequence to maximize results while minimizing recovery time — a popular option for Manhattan professionals seeking efficient yet effective treatments.`
    ],
    recovery: [
      `Recovery from skin resurfacing varies significantly based on the treatment intensity. Milder procedures may cause temporary redness for 1-2 days, while more intensive treatments might require 7-14 days of healing time.`,
      `Immediately following treatment, your skin will appear red and may feel sensitive, similar to a sunburn. Premium NYC clinics provide comprehensive aftercare kits and detailed instructions to optimize healing and comfort.`,
      `During recovery, it's essential to protect your skin from sun exposure and adhere strictly to your provider's skincare regimen. This typically includes gentle cleansers, medical-grade moisturizers, and broad-spectrum SPF products.`,
      `For deeper treatments, your skin will likely go through a flaking or peeling phase as damaged cells are shed and new skin emerges. This is a normal part of the healing process and should not be forced or accelerated.`
    ],
    results: [
      `Initial improvements are often visible within days after milder treatments, while more intensive procedures continue to show progressive enhancement over 3-6 months as collagen regeneration occurs.`,
      `Most patients require a series of treatments for optimal results, typically 3-5 sessions spaced several weeks apart. Your NYC provider will create a customized treatment schedule based on your specific skin concerns and desired outcomes.`,
      `Clinical studies show that properly performed skin resurfacing can produce improvements lasting 1-5 years, depending on the technique used, your skin type, and how diligently you maintain results with proper skincare and sun protection.`,
      `Many New York clients report not just visual improvements but also increased confidence and satisfaction with their appearance, making skin resurfacing one of the most psychologically rewarding aesthetic treatments available.`
    ],
    considerations: [
      `Skin resurfacing costs in NYC vary widely based on treatment type, provider expertise, and clinic location. Expect to invest between $300-$500 for milder treatments and $2,000-$5,000 for advanced laser procedures at premier Manhattan and Brooklyn locations.`,
      `When selecting a provider in NYC, prioritize board-certified dermatologists or plastic surgeons with specific training and extensive experience in skin resurfacing techniques. Ask to see before-and-after photos of previous patients with similar skin concerns.`,
      `For darker skin tones, specialized expertise is crucial as some resurfacing methods carry higher risks of hyperpigmentation. Several NYC clinics specialize in treatments for diverse skin types and can provide safe, effective options.`,
      `While generally safe when performed by qualified professionals, potential side effects include temporary or permanent changes in skin color, scarring, infection, and persistent redness. These risks emphasize the importance of choosing an experienced provider in New York's competitive aesthetic market.`
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

export default SkinResurfacingPage;
