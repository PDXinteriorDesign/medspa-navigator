import { SeoContent, FAQ, PricingItem } from "./serviceTypes";
import { 
  getBotoxContent, 
  getBotoxFaqs, 
  getBotoxPricing 
} from "./serviceContent/botoxContent";
import { 
  getCoolSculptingContent, 
  getCoolSculptingFaqs, 
  getCoolSculptingPricing 
} from "./serviceContent/coolSculptingContent";
import { 
  getLaserHairRemovalContent, 
  getLaserHairRemovalFaqs, 
  getLaserHairRemovalPricing 
} from "./serviceContent/laserHairRemovalContent";
import { 
  getDefaultServiceContent, 
  getDefaultServiceFaqs, 
  getDefaultServicePricing 
} from "./serviceContent/defaultContent";

export * from "./serviceTypes";

export const getServiceSeoContent = (serviceName: string): SeoContent => {
  let contentData;

  switch (serviceName) {
    case "Botox":
      contentData = getBotoxContent();
      break;
    case "CoolSculpting":
      contentData = getCoolSculptingContent();
      break;
    case "Laser Hair Removal":
      contentData = getLaserHairRemovalContent();
      break;
    default:
      contentData = getDefaultServiceContent(serviceName);
  }

  const { content, beforeTreatment, afterTreatment, reviews } = contentData;

  const seoContentObj: SeoContent = {
    introduction: content,
    ...content,
    beforeTreatment,
    afterTreatment,
    reviews,
    map: (callback) => content.map(callback)
  };

  return seoContentObj;
};

export const getServiceFaqs = (serviceName: string): FAQ[] => {
  switch (serviceName) {
    case "Botox":
      return getBotoxFaqs();
    case "CoolSculpting":
      return getCoolSculptingFaqs();
    case "Laser Hair Removal":
      return getLaserHairRemovalFaqs();
    case "MicroBotox":
      return getMicroBotoxFaqs();
    case "Dermal Fillers":
      return getFillersFaqs();
    case "Kybella":
      return getKybellaFaqs();
    case "Platelet Rich Plasma":
      return getPrpFaqs();
    case "Photofacials":
      return getPhotofacialsFaqs();
    case "Hydrofacials":
      return getHydrofacialsFaqs();
    case "Carbon Laser Facial":
      return getCarbonLaserFacialFaqs();
    default:
      return getDefaultServiceFaqs(serviceName);
  }
};

export const getServicePricing = (serviceName: string): PricingItem[] => {
  switch (serviceName) {
    case "Botox":
      return getBotoxPricing();
    case "CoolSculpting":
      return getCoolSculptingPricing();
    case "Laser Hair Removal":
      return getLaserHairRemovalPricing();
    case "MicroBotox":
      return getMicroBotoxPricing();
    case "Dermal Fillers":
      return getFillersPricing();
    case "Kybella":
      return getKybellaPricing();
    case "Platelet Rich Plasma":
      return getPrpPricing();
    case "Photofacials":
      return getPhotofacialsPricing();
    case "Hydrofacials":
      return getHydrofacialsPricing();
    case "Carbon Laser Facial":
      return getCarbonLaserFacialPricing();
    default:
      return getDefaultServicePricing(serviceName);
  }
};

export const getMicroBotoxFaqs = (): FAQ[] => {
  return [
    {
      question: "What is MicroBotox?",
      answer: "A refined technique that delivers tiny amounts of Botox for subtle, natural-looking results."
    },
    {
      question: "How many sessions will I need?",
      answer: "1–3 sessions, depending on desired subtlety."
    },
    {
      question: "Is it painful?",
      answer: "Minimal discomfort (smaller needles used)."
    },
    {
      question: "Downtime?",
      answer: "None."
    }
  ];
};

export const getMicroBotoxPricing = (): PricingItem[] => {
  return [
    {
      type: "Basic Treatment",
      averagePrice: 300,
      minPrice: 200,
      maxPrice: 400
    },
    {
      type: "Standard Treatment",
      averagePrice: 500,
      minPrice: 400,
      maxPrice: 600
    },
    {
      type: "Premium Treatment",
      averagePrice: 700,
      minPrice: 600,
      maxPrice: 800
    },
    {
      type: "Package (3 Sessions)",
      averagePrice: 1200,
      minPrice: 1000,
      maxPrice: 1400
    }
  ];
};

export const getFillersFaqs = (): FAQ[] => {
  return [
    {
      question: "What do fillers treat?",
      answer: "Volume loss, deep wrinkles, and facial contouring."
    },
    {
      question: "How long do results last?",
      answer: "6–18 months, depending on product."
    },
    {
      question: "Pain level?",
      answer: "Most fillers contain lidocaine for comfort."
    },
    {
      question: "Downtime?",
      answer: "Mild swelling/bruising for 2–3 days."
    }
  ];
};

export const getFillersPricing = (): PricingItem[] => {
  return [
    {
      type: "Lip Augmentation",
      averagePrice: 800,
      minPrice: 600,
      maxPrice: 1200
    },
    {
      type: "Nasolabial Folds",
      averagePrice: 900,
      minPrice: 700,
      maxPrice: 1300
    },
    {
      type: "Cheek Volume",
      averagePrice: 1200,
      minPrice: 1000,
      maxPrice: 1800
    }
  ];
};

export const getKybellaFaqs = (): FAQ[] => {
  return [
    {
      question: "What is Kybella?",
      answer: "FDA-approved injectable to reduce submental fat (double chin)."
    },
    {
      question: "Sessions needed?",
      answer: "2–4 sessions, spaced 1 month apart."
    },
    {
      question: "Pain level?",
      answer: "Moderate burning sensation during injection."
    },
    {
      question: "Results permanent?",
      answer: "Yes, destroyed fat cells do not return."
    }
  ];
};

export const getKybellaPricing = (): PricingItem[] => {
  return [
    {
      type: "Single Session",
      averagePrice: 1200,
      minPrice: 1000,
      maxPrice: 1600
    },
    {
      type: "Package (2 Sessions)",
      averagePrice: 2000,
      minPrice: 1800,
      maxPrice: 2500
    }
  ];
};

export const getPrpFaqs = (): FAQ[] => {
  return [
    {
      question: "How does PRP work?",
      answer: "Your blood is spun to isolate growth factors for collagen stimulation."
    },
    {
      question: "Sessions needed?",
      answer: "3–6 sessions, spaced 4–6 weeks apart."
    },
    {
      question: "Downtime?",
      answer: "24–48 hours of redness."
    }
  ];
};

export const getPrpPricing = (): PricingItem[] => {
  return [
    {
      type: "Facial Rejuvenation",
      averagePrice: 600,
      minPrice: 500,
      maxPrice: 900
    },
    {
      type: "PRP + Microneedling",
      averagePrice: 800,
      minPrice: 650,
      maxPrice: 1100
    }
  ];
};

export const getPhotofacialsFaqs = (): FAQ[] => {
  return [
    {
      question: "What do photofacials treat?",
      answer: "Sunspots, rosacea, and uneven texture."
    },
    {
      question: "Pain level?",
      answer: "Feels like a rubber band snap."
    },
    {
      question: "How many sessions are needed?",
      answer: "Most clients require 3-5 sessions for optimal results, spaced 4 weeks apart."
    },
    {
      question: "Is there downtime?",
      answer: "Minimal. You may experience some redness for a few hours after treatment."
    }
  ];
};

export const getPhotofacialsPricing = (): PricingItem[] => {
  return [
    {
      type: "Full Face",
      averagePrice: 400,
      minPrice: 300,
      maxPrice: 600
    },
    {
      type: "Neck/Decolletage",
      averagePrice: 300,
      minPrice: 200,
      maxPrice: 500
    }
  ];
};

export const getHydrofacialsFaqs = (): FAQ[] => {
  return [
    {
      question: "What is a hydrofacial?",
      answer: "Hydrating treatment for immediate glow that combines cleansing, exfoliation, extraction, and hydration."
    },
    {
      question: "What skin concerns does a Hydrofacial address?",
      answer: "Hydrofacials help with fine lines, wrinkles, congested pores, oiliness, and dullness."
    },
    {
      question: "How often should I get a Hydrofacial?",
      answer: "Monthly treatments are recommended for maintaining optimal skin health and appearance."
    },
    {
      question: "Is there any downtime?",
      answer: "No downtime - you can return to normal activities immediately with a refreshed appearance."
    }
  ];
};

export const getHydrofacialsPricing = (): PricingItem[] => {
  return [
    {
      type: "Basic Hydrofacial",
      averagePrice: 200,
      minPrice: 150,
      maxPrice: 300
    },
    {
      type: "Premium (with Boosters)",
      averagePrice: 350,
      minPrice: 275,
      maxPrice: 450
    },
    {
      type: "Package (3 Sessions)",
      averagePrice: 500,
      minPrice: 400,
      maxPrice: 700
    }
  ];
};

export const getCarbonLaserFacialFaqs = (): FAQ[] => {
  return [
    {
      question: "What is a Carbon Laser Facial?",
      answer: "A non-invasive treatment that combines liquid carbon and laser technology to cleanse pores, exfoliate skin, and improve texture and appearance. Also known as the 'Hollywood Peel' or 'China Doll Peel'."
    },
    {
      question: "How many sessions will I need?",
      answer: "Most clients see results after one session, but a series of 4-6 treatments spaced 2-4 weeks apart is recommended for optimal results, especially for concerns like acne or hyperpigmentation."
    },
    {
      question: "Is it painful?",
      answer: "Most clients describe the sensation as a mild warming or tingling with slight rubber band-like snaps. The treatment is generally comfortable with no anesthesia required."
    },
    {
      question: "Is there any downtime?",
      answer: "No. One of the most appealing aspects of this treatment is that there's zero downtime, making it perfect for pre-event preparation."
    },
    {
      question: "How long do results last?",
      answer: "The immediate glow typically lasts 1-2 weeks. For lasting improvements in skin texture and tone, monthly maintenance treatments are recommended."
    },
    {
      question: "Is it safe for all skin types?",
      answer: "Yes, it's generally safe for all skin types, including darker skin tones. However, those with certain skin conditions should consult with a provider first."
    }
  ];
};

export const getCarbonLaserFacialPricing = (): PricingItem[] => {
  return [
    {
      type: "Single Session",
      averagePrice: 300,
      minPrice: 200,
      maxPrice: 500
    },
    {
      type: "Package (3 Sessions)",
      averagePrice: 750,
      minPrice: 550,
      maxPrice: 1200
    },
    {
      type: "Premium Treatment (with LED)",
      averagePrice: 450,
      minPrice: 350,
      maxPrice: 650
    },
    {
      type: "Maintenance Session",
      averagePrice: 250,
      minPrice: 180,
      maxPrice: 400
    }
  ];
};

export const getVaginalRejuvenationFaqs = (): FAQ[] => {
  return [
    {
      question: "What technologies are used for vaginal rejuvenation?",
      answer: "Common non-surgical technologies include radiofrequency, CO2 fractional laser, Er:YAG laser, and combined-energy approaches."
    },
    {
      question: "Is vaginal rejuvenation painful?",
      answer: "Most patients report minimal discomfort—typically a warming sensation. Topical numbing may be used for comfort."
    },
    {
      question: "How many treatments will I need?",
      answer: "Usually 3-4 sessions spaced 4-6 weeks apart, with annual maintenance recommended."
    },
    {
      question: "Are there any side effects?",
      answer: "Minor temporary effects may include slight swelling, redness, or altered sensation, typically resolving within 48 hours."
    },
    {
      question: "Who is a good candidate?",
      answer: "Women experiencing vaginal laxity, dryness, mild incontinence, or reduced sensation. Not suitable during pregnancy or with certain medical conditions."
    },
    {
      question: "How soon can I resume intimate activities?",
      answer: "Most providers recommend waiting 48-72 hours after treatment."
    }
  ];
};

export const getVaginalRejuvenationPricing = (): PricingItem[] => {
  return [
    {
      type: "Single Session",
      averagePrice: 1200,
      minPrice: 900,
      maxPrice: 2000
    },
    {
      type: "Package (3 Sessions)",
      averagePrice: 3000,
      minPrice: 2400,
      maxPrice: 4500
    },
    {
      type: "Package with PRP Enhancement",
      averagePrice: 4000,
      minPrice: 3200,
      maxPrice: 5500
    },
    {
      type: "Annual Maintenance",
      averagePrice: 900,
      minPrice: 700,
      maxPrice: 1600
    }
  ];
};
