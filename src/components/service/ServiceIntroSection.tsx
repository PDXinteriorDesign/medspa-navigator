
import React, { ReactNode } from "react";

interface ServiceIntroSectionProps {
  children: ReactNode;
}

const ServiceIntroSection = ({ children }: ServiceIntroSectionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 md:p-10 mb-8 border border-gray-100/80">
      {children}
    </div>
  );
};

export default ServiceIntroSection;
