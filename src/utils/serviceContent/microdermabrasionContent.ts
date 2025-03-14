
import { FAQ, PricingItem } from "../serviceTypes";

export const getMicrodermabrasionFaqs = (): FAQ[] => {
  return [
    {
      question: "How does microdermabrasion differ from chemical peels?",
      answer: "Microdermabrasion is a mechanical exfoliation method that physically removes dead skin cells using either crystals or a diamond-tipped wand, while chemical peels use acids to dissolve the connections between skin cells. Microdermabrasion is generally gentler with less downtime, making it ideal for regular maintenance or before special events. It's also more suitable for sensitive skin. Chemical peels can penetrate deeper layers and address more significant concerns like deeper wrinkles or more pronounced hyperpigmentation, but typically require more recovery time. Many NYC clients incorporate both treatments into their skincare regimen, alternating between them to address different skin concerns."
    },
    {
      question: "How many microdermabrasion treatments will I need?",
      answer: "For optimal results, most NYC dermatologists recommend a series of 4-6 microdermabrasion treatments spaced 2-4 weeks apart. This allows for progressive improvement while respecting your skin's natural regeneration cycle. Single treatments provide an immediate glow and temporary improvement in texture, making them perfect before special events. For specific concerns like mild acne scarring or sun damage, you might need 6-8 treatments. After achieving your desired results, maintenance treatments every 4-6 weeks help sustain the improvements. During your consultation at an NYC medical spa, your provider will create a customized treatment plan based on your skin condition and goals."
    },
    {
      question: "Is microdermabrasion painful?",
      answer: "Microdermabrasion is generally well-tolerated with minimal discomfort. Most clients describe the sensation as a mild scratching feeling or gentle vacuum suction against their skin. Some areas with thinner skin, like around the eyes or on the nose, may feel more sensitive. Premium NYC providers often use techniques to minimize discomfort, including proper stretching of the skin during treatment and adjustable suction levels. The procedure doesn't typically require numbing creams, making it a truly 'lunch-time' treatment with no preparation needed. Any mild redness or sensitivity post-treatment usually resolves within a few hours."
    },
    {
      question: "Can microdermabrasion help with acne and acne scars?",
      answer: "Microdermabrasion can be beneficial for certain types of acne and acne scarring. For active acne, it helps remove excess oil and dead skin cells that can clog pores, potentially reducing breakouts when performed regularly. It's most effective for comedonal acne (blackheads and whiteheads) rather than inflammatory or cystic acne. For acne scars, microdermabrasion works best on superficial scars by gradually improving skin texture and promoting cell turnover. It's particularly effective for post-inflammatory hyperpigmentation (the dark spots left after acne heals). NYC dermatologists often combine microdermabrasion with other treatments like chemical peels or microneedling for deeper acne scars. Your provider should customize the approach based on your specific acne condition."
    },
    {
      question: "Should I choose crystal or diamond-tip microdermabrasion?",
      answer: "Both crystal and diamond-tip microdermabrasion can deliver excellent results, but they have subtle differences that may make one more suitable for your specific needs. Crystal microdermabrasion uses aluminum oxide or sodium bicarbonate crystals sprayed onto the skin and then vacuumed away along with dead skin cells. This method is highly effective but may cause more redness and isn't recommended for use around the eyes. Diamond-tip microdermabrasion uses a wand with a diamond-encrusted tip to exfoliate while simultaneously vacuuming debris. This offers more precision for delicate areas and produces less irritation, making it better for sensitive skin. Many top NYC providers offer both options and will recommend the most appropriate one during your consultation based on your skin type and concerns."
    },
    {
      question: "What's the difference between spa microdermabrasion and medical-grade treatments?",
      answer: "Medical-grade microdermabrasion available at NYC medical spas typically offers more significant results than spa versions due to several key differences. Medical-grade devices use stronger suction and more aggressive exfoliation, allowing for deeper treatment and more noticeable improvements in skin texture and appearance. These treatments are performed or supervised by medical professionals who can customize the intensity based on your skin's needs and tolerance. Additionally, medical spas can combine microdermabrasion with clinical-grade products and complementary treatments not available at regular spas. While day spa microdermabrasion provides a nice refreshing treatment, those seeking more transformative results or addressing specific skin concerns should opt for medical-grade options available at reputable NYC medical spas."
    }
  ];
};

export const getMicrodermabrasionPricing = (): PricingItem[] => {
  return [
    { 
      type: "Single Session - Face Only", 
      averagePrice: 175, 
      minPrice: 125, 
      maxPrice: 250 
    },
    { 
      type: "Package of 3 Sessions - Face", 
      averagePrice: 450, 
      minPrice: 325, 
      maxPrice: 600 
    },
    { 
      type: "Package of 6 Sessions - Face", 
      averagePrice: 800, 
      minPrice: 600, 
      maxPrice: 1000 
    },
    { 
      type: "Face & Neck Treatment", 
      averagePrice: 225, 
      minPrice: 175, 
      maxPrice: 300 
    },
    { 
      type: "Face, Neck & Décolletage", 
      averagePrice: 275, 
      minPrice: 225, 
      maxPrice: 375 
    },
    { 
      type: "Microdermabrasion with LED Therapy", 
      averagePrice: 250, 
      minPrice: 200, 
      maxPrice: 325 
    }
  ];
};
