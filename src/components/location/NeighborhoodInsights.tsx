
import React from "react";

interface NeighborhoodInsightsProps {
  neighborhoodName: string;
  locationName: string;
}

const NeighborhoodInsights = ({ neighborhoodName, locationName }: NeighborhoodInsightsProps) => {
  // Generate insights based on the neighborhood
  const insights = [
    {
      title: `MedSpa Specialties`,
      description: `${neighborhoodName} medspas are particularly known for their expertise in anti-aging treatments and personalized skincare regimens.`
    },
    {
      title: `Pricing Trends`,
      description: `${neighborhoodName} aesthetic services are ${getNeighborhoodPricing(neighborhoodName)} compared to other areas of ${locationName}.`
    },
    {
      title: `Best Times to Book`,
      description: `For the best availability at ${neighborhoodName} medspas, consider booking mid-week appointments or early morning sessions.`
    },
    {
      title: `Client Experience`,
      description: `${neighborhoodName} medspas prioritize ${getNeighborhoodExperience(neighborhoodName)} for their clientele.`
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
      <h3 className="text-lg font-medium mb-4">{neighborhoodName} MedSpa Insights</h3>
      
      <ul className="space-y-4">
        {insights.map((insight, index) => (
          <li key={index} className="flex items-start">
            <div className="bg-medspa-teal/10 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
              <div className="w-3 h-3 bg-medspa-teal rounded-full"></div>
            </div>
            <div>
              <p className="font-medium text-sm">{insight.title}</p>
              <p className="text-sm text-gray-700">{insight.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Helper functions to customize content based on neighborhood
const getNeighborhoodPricing = (neighborhood: string): string => {
  const upscaleNeighborhoods = ["Upper East Side", "Tribeca", "SoHo", "East Hampton", "Southampton"];
  const midRangeNeighborhoods = ["Upper West Side", "Chelsea", "Midtown", "Bridgehampton", "Sag Harbor"];
  
  if (upscaleNeighborhoods.includes(neighborhood)) {
    return "typically 15-20% higher";
  } else if (midRangeNeighborhoods.includes(neighborhood)) {
    return "comparable to average";
  } else {
    return "often more affordable";
  }
};

const getNeighborhoodExperience = (neighborhood: string): string => {
  const luxuryFocused = ["Upper East Side", "Tribeca", "East Hampton"];
  const wellnessFocused = ["Upper West Side", "Chelsea", "Montauk"];
  const efficiencyFocused = ["Midtown", "SoHo"];
  
  if (luxuryFocused.includes(neighborhood)) {
    return "luxury amenities and personalized attention";
  } else if (wellnessFocused.includes(neighborhood)) {
    return "holistic wellness approaches and natural results";
  } else if (efficiencyFocused.includes(neighborhood)) {
    return "efficiency and minimal downtime";
  } else {
    return "personalized care and thorough consultations";
  }
};

export default NeighborhoodInsights;
