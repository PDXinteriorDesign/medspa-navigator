
import React from "react";
import { Helmet } from "react-helmet";

interface NeighborhoodSchemaProps {
  neighborhoodName: string;
  locationName: string;
  description: string;
}

const NeighborhoodSchema = ({ neighborhoodName, locationName, description }: NeighborhoodSchemaProps) => {
  return (
    <Helmet>
      <title>{neighborhoodName} MedSpas | Best Medical Spas in {neighborhoodName} | MedSpasNYC</title>
      <meta 
        name="description" 
        content={`Find top-rated MedSpas in ${neighborhoodName}, ${locationName}. Compare prices, read reviews, and book appointments with the best aesthetic providers.`} 
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          "name": `${neighborhoodName}`,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": neighborhoodName,
            "addressRegion": "NY",
            "addressCountry": "US"
          },
          "containedInPlace": {
            "@type": "Place",
            "name": locationName
          }
        })}
      </script>
    </Helmet>
  );
};

export default NeighborhoodSchema;
