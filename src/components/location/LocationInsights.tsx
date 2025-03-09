
import React from "react";

interface LocationInsight {
  title: string;
  description: string;
}

interface LocationInsightsProps {
  locationName: string;
  insights: LocationInsight[];
}

const LocationInsights = ({ locationName, insights }: LocationInsightsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
      <h3 className="text-lg font-medium mb-4">{locationName} MedSpa Insights</h3>
      
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

export default LocationInsights;
