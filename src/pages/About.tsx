
import React from 'react';
import BreadcrumbNav from "@/components/BreadcrumbNav";

const About = () => {
  return (
    <div className="medspa-container py-12">
      <BreadcrumbNav 
        items={[
          { label: "About Us", href: "/about", current: true }
        ]} 
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-medspa-teal mb-8">About MedSpasNYC</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            MedSpasNYC is your premier destination for discovering and connecting with the finest medical spas across New York City. We curate and showcase a selective network of premium medical spas, ensuring you have access to the highest quality aesthetic treatments and services.
          </p>
          
          <p className="text-gray-700 mb-6">
            Our mission is to simplify your journey to achieving your aesthetic goals by providing comprehensive information about treatments, locations, and qualified providers throughout NYC's diverse neighborhoods.
          </p>
          
          <div className="bg-medspa-blue/20 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-serif font-semibold text-medspa-teal mb-4">Our Commitment</h2>
            <p className="text-gray-700">
              We are dedicated to maintaining the highest standards of quality and safety in aesthetic medicine. Every medical spa featured on our platform undergoes a thorough vetting process to ensure they meet our strict criteria for excellence in service, safety, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
