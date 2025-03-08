
import React from "react";
import { SeoContent } from "@/utils/serviceContent";

interface ServiceAboutProps {
  serviceName: string;
  seoContent: SeoContent;
}

const ServiceAbout = ({ serviceName, seoContent }: ServiceAboutProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-xl font-medium mb-4">About {serviceName}</h2>
      
      <div className="text-gray-700 mb-6 space-y-4">
        {seoContent.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      
      <div className="mt-8 mb-6">
        <h3 className="text-lg font-medium mb-3">Before & After Expectations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-medspa-blue/30 p-4 rounded-lg">
            <h4 className="font-medium text-medspa-teal mb-2">Before Treatment</h4>
            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
              {seoContent.beforeTreatment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-medspa-blue/30 p-4 rounded-lg">
            <h4 className="font-medium text-medspa-teal mb-2">After Treatment</h4>
            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
              {seoContent.afterTreatment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAbout;
