
import React from "react";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const generalFaqs = [
    {
      question: "What is a Med Spa?",
      answer: "A Medical Spa (Med Spa) combines a traditional day spa experience with medical procedures performed by trained medical professionals. Med Spas in NYC offer treatments ranging from Botox and dermal fillers to laser treatments and non-surgical body contouring, all under medical supervision for safety and optimal results."
    },
    {
      question: "How do I choose the right NYC Med Spa?",
      answer: "When selecting a Med Spa in New York City, verify the credentials of the medical professionals, check for board certifications, read verified reviews, examine before-and-after photos, schedule a consultation to assess the facility's cleanliness and staff professionalism, and ensure they offer FDA-approved treatments with transparent pricing."
    },
    {
      question: "Are Med Spa treatments safe?",
      answer: "Med Spa treatments are generally safe when performed by qualified medical professionals using FDA-approved products and devices. NYC's top Med Spas maintain strict safety protocols, perform thorough consultations to determine treatment suitability, and employ licensed physicians, nurse practitioners, or physician assistants to oversee all medical procedures."
    },
    {
      question: "How much do Med Spa treatments cost in NYC?",
      answer: "Med Spa treatment costs in NYC vary widely: Botox ranges from $12-20 per unit (typically 20-50 units needed), dermal fillers average $700-1,200 per syringe, laser hair removal packages range from $300-1,500 depending on treatment area, and non-surgical body contouring treatments like CoolSculpting range from $600-4,000 depending on treatment areas and sessions needed."
    }
  ];

  const botoxFillersFaqs = [
    {
      question: "How long does Botox last?",
      answer: "Botox results typically last 3-4 months for most NYC patients. First-time Botox users might experience shorter duration (2-3 months), while those who maintain regular treatment schedules may gradually extend their results to 4-6 months. Factors affecting longevity include metabolism, treatment area, dosage, and injection technique."
    },
    {
      question: "What's the difference between Botox, Dysport, and Xeomin?",
      answer: "Botox, Dysport, and Xeomin are all FDA-approved neuromodulators that work by blocking nerve signals to muscles, temporarily reducing wrinkles. The main differences lie in molecular structure (Xeomin lacks protein additives), onset time (Dysport typically works faster), diffusion rate (Dysport spreads more), and longevity. NYC Med Spas often recommend specific products based on treatment areas and individual patient factors."
    },
    {
      question: "How do I know which filler is right for me?",
      answer: "The right filler depends on your treatment area and desired outcome. Hyaluronic acid fillers like Juvederm and Restylane are versatile for lips and facial lines, lasting 6-12 months. Radiesse (calcium hydroxylapatite) provides structure for deeper wrinkles and jawline definition, lasting 12-18 months. Sculptra (poly-L-lactic acid) stimulates collagen for gradual volume restoration lasting up to 2 years. NYC's premier Med Spas offer personalized consultations to determine the optimal filler type for your specific concerns."
    },
    {
      question: "Is there downtime after filler injections?",
      answer: "Most NYC patients experience minimal downtime after filler injections. Common temporary side effects include swelling (24-72 hours), bruising (3-7 days), and tenderness at injection sites. For special events, schedule treatments 2 weeks in advance. Premium NYC Med Spas use techniques like cannulas and provide detailed aftercare instructions to minimize recovery time."
    }
  ];

  const laserTreatmentsFaqs = [
    {
      question: "How many laser hair removal sessions will I need?",
      answer: "Most NYC clients require 6-8 laser hair removal sessions spaced 4-6 weeks apart for optimal results. This timing aligns with hair growth cycles, as the laser only affects follicles in the active growth phase. Factors affecting the number of treatments include hair color, thickness, treatment area, and hormone levels. After completing the initial series, annual maintenance sessions may be recommended to manage any regrowth."
    },
    {
      question: "What's the difference between ablative and non-ablative laser resurfacing?",
      answer: "Ablative laser resurfacing removes outer skin layers for more dramatic results with 1-2 weeks of downtime, making it ideal for deeper wrinkles and significant sun damage. Non-ablative lasers work beneath the skin without removing layers, stimulating collagen with minimal downtime (1-3 days of redness). NYC Med Spas often offer fractional versions of both technologies, treating only a portion of the skin to reduce recovery time while maintaining effectiveness."
    },
    {
      question: "Are laser treatments safe for darker skin tones?",
      answer: "Yes, but proper technology selection is crucial. NYC's top Med Spas use advanced lasers like Nd:YAG and certain diode lasers specifically designed for darker skin tones (Fitzpatrick types IV-VI). These wavelengths bypass melanin in the epidermis to target the treatment area while minimizing hyperpigmentation risk. Always choose a provider with specific experience treating diverse skin tones and technology appropriate for your skin type."
    },
    {
      question: "How do I prepare for a laser treatment?",
      answer: "For optimal results and safety with laser treatments in NYC, avoid sun exposure for 2-4 weeks before treatment (using SPF 30+ daily), discontinue retinoids and exfoliants 5-7 days pre-treatment, avoid blood thinners (with doctor approval) to minimize bruising, shave the treatment area 24 hours before (for laser hair removal), and arrive with clean skin free of makeup, lotion, or deodorant in the treatment area."
    }
  ];

  const bodyContouringFaqs = [
    {
      question: "What's the difference between CoolSculpting and Emsculpt?",
      answer: "CoolSculpting uses cryolipolysis to freeze and eliminate fat cells (20-25% reduction in treated areas) without affecting muscles, ideal for stubborn fat pockets. Emsculpt uses HIFEM technology to induce supramaximal muscle contractions (equivalent to 20,000 sit-ups in 30 minutes), simultaneously building muscle and reducing fat. Many NYC Med Spas recommend combination approaches for optimal body sculpting results, using CoolSculpting for fat-dominant areas and Emsculpt for muscle definition."
    },
    {
      question: "How long before I see results from non-surgical body contouring?",
      answer: "Initial results from non-surgical body contouring treatments in NYC typically become visible within 3-4 weeks as your body processes affected cells. CoolSculpting results develop over 2-3 months as fat cells are eliminated. Emsculpt results can be felt immediately (muscle soreness) with visible changes after 2-4 weeks and optimal results after completing a full treatment series (typically 4-6 sessions). For treatments like Morpheus8, improvements continue for up to 6 months as collagen regeneration progresses."
    },
    {
      question: "Is non-surgical body contouring a weight loss solution?",
      answer: "Non-surgical body contouring is not a weight loss solution but rather a body sculpting approach for those at or near their ideal weight with localized fat deposits or areas requiring definition. These treatments typically yield minimal change on the scale (1-3 pounds maximum) while significantly improving body proportions and clothing fit. NYC's leading Med Spas recommend maintaining a stable weight through healthy diet and exercise to optimize and preserve body contouring results."
    },
    {
      question: "How permanent are body contouring results?",
      answer: "Fat reduction treatments like CoolSculpting and Kybella permanently eliminate treated fat cells, which don't regenerate. However, remaining fat cells can expand with weight gain. Muscle-building treatments like Emsculpt require maintenance sessions every 3-6 months to sustain results. Skin tightening treatments typically last 12-18 months before refresher sessions are recommended. NYC Med Spas often create customized maintenance plans to help clients preserve their body contouring investments."
    }
  ];

  const skinTreatmentsFaqs = [
    {
      question: "What's the difference between microneedling and RF microneedling?",
      answer: "Traditional microneedling creates micro-channels in the skin to stimulate collagen production, ideal for improving texture and mild scarring. RF (radiofrequency) microneedling adds thermal energy that penetrates deeper into the skin, enhancing collagen production and providing additional skin tightening benefits. RF microneedling typically produces more dramatic results for skin laxity, acne scarring, and deeper wrinkles, which is why it commands premium pricing at NYC Med Spas."
    },
    {
      question: "How often should I get HydraFacials?",
      answer: "For optimal skin health, most NYC dermatologists recommend monthly HydraFacial treatments to align with your skin's natural 28-day regeneration cycle. This frequency maintains clear pores, consistent hydration, and enhanced product absorption. Clients with specific concerns like acne or hyperpigmentation may benefit from bi-weekly treatments initially (4-6 sessions), then transition to monthly maintenance. Many NYC Med Spas offer membership packages to make regular treatments more affordable."
    },
    {
      question: "Can chemical peels help with acne scars?",
      answer: "Yes, chemical peels can significantly improve acne scarring through controlled exfoliation that removes damaged skin cells and stimulates collagen production. For mild scarring, superficial peels (glycolic, lactic acid) provide gradual improvement with minimal downtime. Medium-depth peels (TCA) offer more dramatic results for moderate scarring. Deep phenol peels, available at specialized NYC Med Spas, can address severe scarring but require longer recovery. Most patients need a series of 3-6 treatments for optimal results."
    },
    {
      question: "What's the best anti-aging treatment for someone in their 30s?",
      answer: "For patients in their 30s, NYC dermatologists typically recommend a preventative and restorative approach combining: neuromodulators (Botox/Dysport) to prevent dynamic wrinkles from becoming permanent; light hyaluronic acid fillers to address early volume loss; medical-grade skincare featuring retinoids, antioxidants, and SPF; and collagen-stimulating treatments like microneedling or Clear + Brilliant laser. This multi-modal approach prevents further aging while addressing early signs, creating a foundation for graceful aging."
    }
  ];

  const nycSpecificFaqs = [
    {
      question: "Are Med Spa treatments more expensive in Manhattan compared to Brooklyn or Queens?",
      answer: "Manhattan Med Spas generally charge 15-30% more than those in Brooklyn or Queens due to higher operational costs. However, price variations exist within each borough based on provider expertise, product brands, and facility amenities. Many high-end Brooklyn Med Spas, especially in Williamsburg and Park Slope, now match Manhattan pricing. Some NYC residents find value in traveling between boroughs for specific treatments, balancing cost with provider expertise and convenience."
    },
    {
      question: "What Med Spa treatments are most popular among NYC professionals?",
      answer: "NYC professionals particularly favor 'lunchtime treatments' that deliver results with minimal downtime: Botox/Dysport for forehead lines and crow's feet (30-minute sessions, no visible marks); 'Baby Botox' and 'Skin Boosters' for subtle enhancement; HydraFacials for immediate glow (45 minutes); and Clear + Brilliant laser for skin refinement with just 24 hours of mild redness. Many Manhattan Med Spas offer early morning, evening, and weekend appointments to accommodate demanding schedules."
    },
    {
      question: "How do I find the best Med Spa deals in NYC?",
      answer: "To find the best Med Spa deals in NYC, look for seasonal promotions (particularly post-summer and pre-holiday), new location openings offering introductory pricing, loyalty programs at established Med Spas, bundled treatment packages (typically 15-25% savings over à la carte pricing), and membership programs for monthly treatments. Many premium NYC Med Spas also offer special pricing for first-time clients and referral benefits for existing customers."
    },
    {
      question: "What should I expect during my first Med Spa consultation in NYC?",
      answer: "During your first NYC Med Spa consultation, expect a thorough assessment including medical history review, detailed discussion of your aesthetic concerns and goals, physical examination of treatment areas, photo documentation for baseline comparison, treatment options presentation with expected outcomes and limitations, transparent pricing discussion, and a customized treatment plan. Premium NYC Med Spas often offer complimentary consultations, and you should never feel pressured to proceed with treatments immediately."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Frequently Asked Questions About NYC Med Spas | MedSpasNYC</title>
        <meta 
          name="description" 
          content="Get answers to your questions about Botox, fillers, laser treatments, and more at NYC's top medical spas. Expert information on prices, procedures, and finding the best Med Spa in New York." 
        />
        <meta
          name="keywords"
          content="NYC Med Spa FAQ, Botox questions, filler information, laser treatment cost NYC, CoolSculpting results, best Med Spa Manhattan, Med Spa treatment prices, non-surgical procedures NYC, aesthetic treatments New York, Med Spa safety"
        />
        {/* FAQ Schema Markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              ...generalFaqs,
              ...botoxFillersFaqs,
              ...laserTreatmentsFaqs,
              ...bodyContouringFaqs,
              ...skinTreatmentsFaqs,
              ...nycSpecificFaqs
            ].map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Get expert answers to your questions about NYC's top medical spa treatments, pricing, and how to choose the right provider for your aesthetic needs.
        </p>
      </div>

      <div className="grid gap-10 mb-16">
        <section>
          <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">General Med Spa Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {generalFaqs.map((faq, index) => (
              <AccordionItem key={`general-${index}`} value={`general-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">Botox & Fillers</h2>
          <Accordion type="single" collapsible className="w-full">
            {botoxFillersFaqs.map((faq, index) => (
              <AccordionItem key={`botox-${index}`} value={`botox-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">Laser Treatments</h2>
          <Accordion type="single" collapsible className="w-full">
            {laserTreatmentsFaqs.map((faq, index) => (
              <AccordionItem key={`laser-${index}`} value={`laser-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">Body Contouring</h2>
          <Accordion type="single" collapsible className="w-full">
            {bodyContouringFaqs.map((faq, index) => (
              <AccordionItem key={`body-${index}`} value={`body-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">Skin Treatments</h2>
          <Accordion type="single" collapsible className="w-full">
            {skinTreatmentsFaqs.map((faq, index) => (
              <AccordionItem key={`skin-${index}`} value={`skin-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">NYC-Specific Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {nycSpecificFaqs.map((faq, index) => (
              <AccordionItem key={`nyc-${index}`} value={`nyc-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>

      <div className="bg-medspa-blue/30 p-8 rounded-lg">
        <h2 className="text-2xl font-serif font-medium text-gray-900 mb-4">Still Have Questions?</h2>
        <p className="text-gray-600 mb-6">
          Our team of aesthetic experts is here to help you find the perfect Med Spa treatment for your needs. Contact us for personalized recommendations or to schedule a consultation at one of NYC's premier Med Spas.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/contact" 
            className="bg-medspa-teal hover:bg-medspa-teal/90 text-white px-6 py-2 rounded-md transition-colors"
          >
            Contact Us
          </a>
          <a 
            href="/treatments" 
            className="bg-white border border-medspa-teal text-medspa-teal hover:bg-medspa-teal/10 px-6 py-2 rounded-md transition-colors"
          >
            Explore Treatments
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
