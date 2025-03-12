
import { FAQ, PricingItem } from "../serviceTypes";

export const getLaserResurfacingFaqs = (): FAQ[] => {
  return [
    {
      question: "What is the difference between ablative and non-ablative laser resurfacing?",
      answer: "Ablative laser resurfacing removes the outer layers of skin completely, providing more dramatic results for deeper wrinkles and scars but requiring more significant downtime (typically 1-2 weeks). Non-ablative lasers work beneath the skin surface without removing layers, stimulating collagen production with minimal downtime (1-3 days of redness). Many NYC providers offer fractional versions of both technologies, which treat only a fraction of the skin at a time, reducing recovery time while maintaining effectiveness."
    },
    {
      question: "How many laser resurfacing treatments will I need?",
      answer: "The number of treatments depends on the laser type and your specific concerns. Non-ablative lasers typically require a series of 3-6 treatments spaced 3-4 weeks apart for optimal results. Fractional ablative lasers often deliver significant improvement in 1-2 sessions spaced several months apart. Fully ablative lasers may achieve dramatic results in a single session. During your consultation at an NYC medical spa, your provider will create a personalized treatment plan based on your skin condition and goals."
    },
    {
      question: "Is laser resurfacing painful?",
      answer: "Comfort levels vary based on the laser type and treatment intensity. Non-ablative treatments are generally well-tolerated with topical numbing cream. Fractional and fully ablative treatments may cause more discomfort, so NYC providers typically use stronger numbing methods, including topical anesthetics, cooling devices, and sometimes oral medication or nerve blocks for more intensive treatments. Most clients describe the sensation as a series of hot pinpricks or rubber band snaps during treatment, followed by a sunburn-like feeling afterward."
    },
    {
      question: "How long do results from laser resurfacing last?",
      answer: "Results from laser resurfacing can last for years, especially with proper skincare and sun protection. The treatment stimulates your body's natural collagen production, which continues for several months after your session. However, the skin continues to age naturally. Many NYC clients maintain their results with annual maintenance treatments and medical-grade skincare regimens. Lifestyle factors like sun exposure, smoking, and skincare habits significantly impact how long results last."
    },
    {
      question: "Can laser resurfacing be combined with other treatments?",
      answer: "Yes, laser resurfacing is often combined with other treatments for comprehensive rejuvenation. In NYC medical spas, common combinations include laser resurfacing with injectables (Botox and fillers), PRP (platelet-rich plasma) to enhance healing, or radiofrequency treatments for additional skin tightening. These combinations address multiple aspects of aging simultaneously. However, treatments are typically scheduled separately with appropriate healing time between them. Your provider will create a strategic treatment plan based on your specific concerns and recovery timeline."
    },
    {
      question: "Is laser resurfacing safe for darker skin tones?",
      answer: "Laser resurfacing requires careful consideration for darker skin tones due to the risk of post-inflammatory hyperpigmentation. However, advances in technology have made certain lasers safer for all skin types. Many NYC providers specialize in treating diverse skin tones using specific wavelengths and settings. Non-ablative lasers like Clear + Brilliant and certain Nd:YAG lasers are often safer options. It's crucial to choose an experienced provider who regularly treats patients with your skin tone and has the appropriate technology. During your consultation, they should discuss specific precautions for your skin type."
    }
  ];
};

export const getLaserResurfacingPricing = (): PricingItem[] => {
  return [
    { 
      type: "Non-Ablative Laser - Full Face", 
      averagePrice: 750, 
      minPrice: 500, 
      maxPrice: 1000 
    },
    { 
      type: "Non-Ablative Laser - Package (3 Sessions)", 
      averagePrice: 1800, 
      minPrice: 1350, 
      maxPrice: 2250 
    },
    { 
      type: "Fractional Ablative Laser - Full Face", 
      averagePrice: 1500, 
      minPrice: 1000, 
      maxPrice: 2000 
    },
    { 
      type: "Fractional Ablative Laser - Face & Neck", 
      averagePrice: 2000, 
      minPrice: 1500, 
      maxPrice: 2500 
    },
    { 
      type: "Fully Ablative Laser Treatment", 
      averagePrice: 2800, 
      minPrice: 2000, 
      maxPrice: 3500 
    },
    { 
      type: "Targeted Treatment (Acne Scars/Pigmentation)", 
      averagePrice: 800, 
      minPrice: 500, 
      maxPrice: 1100 
    }
  ];
};
