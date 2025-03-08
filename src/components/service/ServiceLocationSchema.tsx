
import React from "react";
import { Helmet } from "react-helmet";

interface ServiceLocationSchemaProps {
  serviceName: string;
  locationName: string;
  description: string;
}

const ServiceLocationSchema = ({ serviceName, locationName, description }: ServiceLocationSchemaProps) => {
  return (
    <Helmet>
      <title>{serviceName} in {locationName} | Best {locationName} {serviceName} Providers | MedSpasNYC</title>
      <meta 
        name="description" 
        content={`Find the best ${serviceName} providers in ${locationName}, NYC. Compare prices, read reviews, and book appointments with top ${locationName} medical spas.`} 
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalProcedure",
          "name": `${serviceName} in ${locationName}`,
          "description": `${serviceName} treatments available in ${locationName}, NYC.`,
          "procedureType": "https://schema.org/CosmeticProcedure",
          "provider": {
            "@type": "MedicalBusiness",
            "name": "MedSpasNYC",
            "url": "https://medspasnyc.com"
          },
          "areaServed": {
            "@type": "Place",
            "name": locationName,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": locationName,
              "addressRegion": "NY",
              "addressCountry": "US"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default ServiceLocationSchema;
