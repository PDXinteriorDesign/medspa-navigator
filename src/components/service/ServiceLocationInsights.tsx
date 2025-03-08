
import React from "react";

interface ServiceLocationInsightsProps {
  locationName: string;
  serviceName: string;
  insights: string[];
}

const ServiceLocationInsights = ({ locationName, serviceName, insights }: ServiceLocationInsightsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
      <h3 className="text-lg font-medium mb-4">{locationName} {serviceName} Insights</h3>
      <ul className="space-y-3">
        {insights.map((insight, index) => (
          <li key={index} className="flex items-start">
            <div className="bg-medspa-teal/10 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
              <div className="w-3 h-3 bg-medspa-teal rounded-full"></div>
            </div>
            <p className="text-sm text-gray-700">{insight}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceLocationInsights;
