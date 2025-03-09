
import React from "react";
import { Helmet } from "react-helmet";

interface LocationSchemaProps {
  name: string;
  description: string;
}

const LocationSchema = ({ name, description }: LocationSchemaProps) => {
  return (
    <Helmet>
      <title>{name} MedSpas | Best Medical Spas in {name} | MedSpasNYC</title>
      <meta 
        name="description" 
        content={`Find top-rated MedSpas in ${name}. Compare prices, read reviews, and book appointments with the best aesthetic providers in ${name}.`} 
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          "name": `${name}`,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": name,
            "addressRegion": "NY",
            "addressCountry": "US"
          }
        })}
      </script>
    </Helmet>
  );
};

export default LocationSchema;
