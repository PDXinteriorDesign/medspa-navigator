
import React from "react";
import { Helmet } from "react-helmet";

interface ServiceSchemaProps {
  name: string;
  description: string;
}

const ServiceSchema = ({ name, description }: ServiceSchemaProps) => {
  return (
    <Helmet>
      <title>{name} | Top NYC MedSpas for {name} | MedSpasNYC</title>
      <meta 
        name="description" 
        content={`Find top-rated MedSpas offering ${name} in NYC. Compare prices, read reviews, and book appointments with the best ${name} providers.`} 
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": name,
          "description": description,
          "category": "Medical Spa Services",
          "brand": {
            "@type": "Brand",
            "name": "MedSpasNYC"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        })}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
