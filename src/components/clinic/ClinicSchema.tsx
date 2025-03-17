
import React from "react";
import { Helmet } from "react-helmet";
import { MedSpa } from "@/lib/data";

interface ClinicSchemaProps {
  clinic: MedSpa;
}

const ClinicSchema = ({ clinic }: ClinicSchemaProps) => {
  return (
    <Helmet>
      <title>{clinic.name} | Medical Spa in {clinic.location} NYC | MedSpasNYC</title>
      <meta 
        name="description" 
        content={`Visit ${clinic.name} in ${clinic.location}, NYC. ${clinic.description} Book treatments and read reviews.`} 
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": clinic.name,
          "description": clinic.description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": clinic.address.split(",")[0],
            "addressLocality": clinic.location,
            "addressRegion": "NY",
            "addressCountry": "US"
          },
          "telephone": `212-555-${Math.floor(1000 + Math.random() * 9000)}`,
          "image": clinic.imageUrl,
          "url": `https://medspasnyc.com/${clinic.location.toLowerCase()}/${clinic.id}`,
          "priceRange": "$$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": clinic.rating,
            "reviewCount": clinic.reviewCount
          },
          "medicalSpecialty": clinic.services?.map(service => 
            service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
          ) || ["Medical Spa Treatments"]
        })}
      </script>
    </Helmet>
  );
};

export default ClinicSchema;
