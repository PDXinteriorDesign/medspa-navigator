
import React from "react";
import { Sparkle, Award, CheckCircle, Clock } from "lucide-react";

interface EnhancedServiceContentProps {
  serviceName: string;
  locationName?: string;
  content: {
    introduction: string[];
    benefits: string[];
    process: string[];
    recovery: string[];
    results: string[];
    considerations: string[];
  };
}

const EnhancedServiceContent = ({
  serviceName,
  locationName = "NYC",
  content
}: EnhancedServiceContentProps) => {
  const fullServiceName = locationName ? `${serviceName} in ${locationName}` : serviceName;
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 md:p-10 mb-8 border border-gray-100/80">
      <div className="mb-2">
        <div className="inline-block bg-medspa-teal/10 px-3 py-1 rounded-full text-xs font-medium text-medspa-teal mb-4">
          Expert Guide
        </div>
      </div>
      
      <h2 className="text-2xl font-serif font-medium mb-6 tracking-tight">
        The Complete Guide to {fullServiceName}
      </h2>
      
      {/* Introduction Section */}
      <section className="mb-8">
        <div className="text-gray-700 space-y-4">
          {content.introduction.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="mb-8">
        <h3 className="text-xl font-serif font-medium mb-4 flex items-center">
          <Sparkle className="mr-2 h-5 w-5 text-medspa-gold" />
          Key Benefits of {serviceName}
        </h3>
        <ul className="space-y-3 text-gray-700">
          {content.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-medspa-teal mr-2 flex-shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </section>
      
      {/* Process Section */}
      <section className="mb-8">
        <h3 className="text-xl font-serif font-medium mb-4">
          What to Expect During Your {serviceName} Treatment
        </h3>
        <div className="space-y-4 text-gray-700">
          {content.process.map((step, index) => (
            <p key={index}>{step}</p>
          ))}
        </div>
      </section>
      
      {/* Recovery Section */}
      <section className="mb-8">
        <h3 className="text-xl font-serif font-medium mb-4 flex items-center">
          <Clock className="mr-2 h-5 w-5 text-medspa-teal" />
          Recovery & Downtime
        </h3>
        <div className="space-y-4 text-gray-700">
          {content.recovery.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
      
      {/* Results Section */}
      <section className="mb-8">
        <h3 className="text-xl font-serif font-medium mb-4 flex items-center">
          <Award className="mr-2 h-5 w-5 text-medspa-gold" />
          Expected Results
        </h3>
        <div className="space-y-4 text-gray-700">
          {content.results.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
      
      {/* Considerations Section */}
      <section>
        <h3 className="text-xl font-serif font-medium mb-4">
          Important Considerations for {serviceName}
        </h3>
        <div className="space-y-4 text-gray-700">
          {content.considerations.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EnhancedServiceContent;
