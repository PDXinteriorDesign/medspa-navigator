
import { Location } from "@/lib/data";

export interface LocationProvider {
  name: string;
  address: string;
  rating: number;
  reviewCount: number;
}

export interface LocationTiming {
  bestTimes: string;
  peakHours: string;
  tip: string;
}

export interface Neighborhood {
  name: string;
  slug: string;
}

export interface LocationContent {
  paragraphs: string[];
  popularProviders: LocationProvider[];
  timing: LocationTiming;
  insights: string[];
  nearbyNeighborhoods: Neighborhood[];
}

export interface LocationFaq {
  question: string;
  answer: string;
}

export const getLocationContent = (serviceName: string, locationName: string): LocationContent => {
  const content: LocationContent = {
    paragraphs: [
      `Looking for the best ${serviceName} providers in ${locationName}? You've come to the right place. ${locationName} is home to some of NYC's premier medical spas and aesthetic clinics specializing in ${serviceName} treatments.`,
      `${locationName} offers a unique blend of luxury and clinical expertise in the ${serviceName} space. With its concentration of board-certified practitioners and state-of-the-art facilities, it's no wonder that clients from across the city travel to ${locationName} for their ${serviceName} treatments.`
    ],
    popularProviders: [],
    timing: {
      bestTimes: `The best time to book your ${serviceName} appointment in ${locationName} is typically mid-week (Tuesday through Thursday), when MedSpas are less crowded.`,
      peakHours: `Most ${locationName} aesthetic clinics experience their busiest hours between 12-2pm and after 5pm on weekdays.`,
      tip: `Pro tip: Book your ${serviceName} appointment 2-3 weeks in advance to secure your preferred time slot with top providers in ${locationName}.`
    },
    insights: [
      `${locationName} MedSpas offering ${serviceName} typically charge 10-15% more than other NYC neighborhoods, but often provide enhanced amenities and services.`,
      `${serviceName} providers in ${locationName} frequently offer package deals and membership options for repeat clients.`,
      `Many ${locationName} aesthetic clinics participate in seasonal promotions, typically in January and September.`,
      `First-time ${serviceName} clients in ${locationName} can often request a brief consultation before committing to treatment.`
    ],
    nearbyNeighborhoods: []
  };

  // Customize content based on location
  switch (locationName) {
    case "Manhattan":
      content.paragraphs.push(`Manhattan's ${serviceName} providers are known for their cutting-edge techniques and celebrity clientele. From luxury MedSpas in the Upper East Side to trendy aesthetic studios in SoHo, you'll find a wide range of options for your ${serviceName} needs.`);
      content.popularProviders = [
        { name: "Glow MedSpa", address: "123 5th Avenue, Midtown", rating: 4.8, reviewCount: 124 },
        { name: "Elite Aesthetic Center", address: "456 Madison Avenue, Upper East Side", rating: 4.7, reviewCount: 98 }
      ];
      content.nearbyNeighborhoods = [
        { name: "Brooklyn", slug: "brooklyn" },
        { name: "Queens", slug: "queens" }
      ];
      break;
    case "Brooklyn":
      content.paragraphs.push(`Brooklyn has emerged as a hotspot for boutique ${serviceName} providers offering personalized experiences at competitive prices. Williamsburg and Park Slope in particular host several highly-rated MedSpas specializing in ${serviceName}.`);
      content.popularProviders = [
        { name: "Brooklyn Beauty Clinic", address: "789 Bedford Ave, Williamsburg", rating: 4.5, reviewCount: 75 }
      ];
      content.nearbyNeighborhoods = [
        { name: "Manhattan", slug: "manhattan" },
        { name: "Queens", slug: "queens" }
      ];
      break;
    case "Queens":
      content.paragraphs.push(`Queens offers some of the most diverse ${serviceName} providers in NYC, with practitioners trained in techniques from around the world. Many clients appreciate the attentive service and competitive pricing found at Queens MedSpas.`);
      content.popularProviders = [
        { name: "Queens Laser Spa", address: "101 Queens Blvd, Forest Hills", rating: 4.3, reviewCount: 62 }
      ];
      content.nearbyNeighborhoods = [
        { name: "Brooklyn", slug: "brooklyn" },
        { name: "Manhattan", slug: "manhattan" }
      ];
      break;
    case "Bronx":
      content.paragraphs.push(`The Bronx is home to a growing number of ${serviceName} providers offering quality treatments at accessible prices. The area's MedSpas are known for their welcoming atmosphere and skilled practitioners.`);
      content.popularProviders = [
        { name: "Bronx Aesthetic Studio", address: "222 Fordham Rd, Fordham", rating: 4.2, reviewCount: 45 }
      ];
      content.nearbyNeighborhoods = [
        { name: "Manhattan", slug: "manhattan" },
        { name: "Queens", slug: "queens" }
      ];
      break;
    case "Staten Island":
      content.paragraphs.push(`Staten Island's ${serviceName} providers offer the perfect blend of personal attention and professional expertise. Many locals prefer staying on the island for their treatments rather than traveling to Manhattan.`);
      content.popularProviders = [
        { name: "Staten Island Beauty Center", address: "333 Richmond Ave, New Dorp", rating: 4.4, reviewCount: 38 }
      ];
      content.nearbyNeighborhoods = [
        { name: "Brooklyn", slug: "brooklyn" },
        { name: "Manhattan", slug: "manhattan" }
      ];
      break;
    default:
      content.paragraphs.push(`NYC offers world-class ${serviceName} providers across all five boroughs. Whether you're looking for luxury experiences or affordable options, you'll find the perfect match for your ${serviceName} needs.`);
      content.popularProviders = [
        { name: "NYC Beauty Clinic", address: "100 Main St, NYC", rating: 4.5, reviewCount: 50 }
      ];
      content.nearbyNeighborhoods = [
        { name: "Manhattan", slug: "manhattan" },
        { name: "Brooklyn", slug: "brooklyn" }
      ];
  }

  return content;
};

export const getLocationFaqs = (serviceName: string, locationName: string): LocationFaq[] => {
  return [
    {
      question: `How much does ${serviceName} cost in ${locationName}?`,
      answer: `${serviceName} prices in ${locationName} typically range from $X to $Y depending on the provider, their expertise, and the specific treatment details. ${locationName} prices are generally ${locationName === "Manhattan" ? "higher" : "competitive"} compared to other NYC boroughs. Many ${locationName} MedSpas offer new client specials and package discounts.`
    },
    {
      question: `What's the best MedSpa for ${serviceName} in ${locationName}?`,
      answer: `The "best" MedSpa depends on your specific needs and preferences. In ${locationName}, highly-rated providers include ${getTopProviders(locationName)}. We recommend reading reviews, checking before/after photos, and scheduling consultations before making your decision.`
    },
    {
      question: `How far in advance should I book my ${serviceName} appointment in ${locationName}?`,
      answer: `For popular ${locationName} providers, we recommend booking ${serviceName} appointments 2-3 weeks in advance, especially if you want weekend or evening time slots. During busy seasons (pre-summer and pre-holiday), consider booking even earlier.`
    },
    {
      question: `Do ${locationName} MedSpas offer financing options for ${serviceName}?`,
      answer: `Many ${locationName} MedSpas offer financing options through services like CareCredit or in-house payment plans for ${serviceName} treatments. Some also provide membership plans with discounted rates for regular clients. Always ask about available payment options during your consultation.`
    },
    {
      question: `What should I look for in a ${locationName} ${serviceName} provider?`,
      answer: `When choosing a ${serviceName} provider in ${locationName}, verify their credentials and experience, check reviews and before/after photos, ensure they use FDA-approved technology, schedule a consultation to assess your comfort level, and clarify all pricing details before proceeding with treatment.`
    }
  ];
};

const getTopProviders = (locationName: string): string => {
  switch (locationName) {
    case "Manhattan":
      return "Glow MedSpa, Elite Aesthetic Center, and Manhattan Laser Studio";
    case "Brooklyn":
      return "Brooklyn Beauty Clinic, Williamsburg Aesthetic Center, and Park Slope MedSpa";
    case "Queens":
      return "Queens Laser Spa, Astoria Beauty Clinic, and Forest Hills Aesthetics";
    case "Bronx":
      return "Bronx Aesthetic Studio, Riverdale Beauty Center, and Fordham MedSpa";
    case "Staten Island":
      return "Staten Island Beauty Center, South Shore Aesthetics, and New Dorp MedSpa";
    default:
      return "several top-rated clinics that specialize in this treatment";
  }
};
