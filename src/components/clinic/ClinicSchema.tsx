
import React from "react";
import { Helmet } from "react-helmet";
import { MedSpa } from "@/lib/types";
import { getLocationSlug } from "@/utils/locationUtils";

interface ClinicSchemaProps {
  clinic: MedSpa;
}

const ClinicSchema = ({ clinic }: ClinicSchemaProps) => {
  // Extract the location for the URL path
  const locationSlug = getLocationSlug(clinic.address, clinic.location);
  const urlSlug = clinic.slug || clinic.id;
  
  // Format services for schema
  const formattedServices = clinic.services?.map(service => 
    service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  ) || ["Medical Spa Treatments"];

  return (
    <Helmet>
      <title>{clinic.name} | Medical Spa in {clinic.location} NYC | MedSpasNYC</title>
      <meta 
        name="description" 
        content={`Visit ${clinic.name} in ${clinic.location}, NYC. ${clinic.description} View services, location, and contact information.`} 
      />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`https://medspasnyc.com/${locationSlug}/${urlSlug}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={`${clinic.name} | Medical Spa in ${clinic.location}`} />
      <meta property="og:description" content={clinic.description} />
      <meta property="og:url" content={`https://medspasnyc.com/${locationSlug}/${urlSlug}`} />
      <meta property="og:image" content={clinic.imageUrl} />
      <meta property="business:contact_data:street_address" content={clinic.address} />
      <meta property="business:contact_data:locality" content={clinic.location} />
      <meta property="business:contact_data:region" content="NY" />
      <meta property="business:contact_data:country_name" content="USA" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${clinic.name} | Medical Spa in ${clinic.location}`} />
      <meta name="twitter:description" content={clinic.description} />
      <meta name="twitter:image" content={clinic.imageUrl} />
      
      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": clinic.name,
          "description": clinic.description,
          "url": `https://medspasnyc.com/${locationSlug}/${urlSlug}`,
          "image": clinic.imageUrl,
          "logo": clinic.imageUrl,
          "telephone": `212-555-${Math.floor(1000 + Math.random() * 9000)}`,
          "email": `info@${clinic.name.toLowerCase().replace(/\s+/g, "")}.com`,
          "priceRange": "$$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": clinic.address.split(",")[0],
            "addressLocality": clinic.location,
            "addressRegion": "NY",
            "postalCode": "10001",
            "addressCountry": "US"
          },
          "geo": clinic.coordinates ? {
            "@type": "GeoCoordinates",
            "latitude": clinic.coordinates.lat,
            "longitude": clinic.coordinates.lng
          } : undefined,
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "19:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "10:00",
              "closes": "18:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": clinic.rating,
            "reviewCount": clinic.reviewCount
          },
          "medicalSpecialty": formattedServices,
          "availableService": formattedServices.map(service => ({
            "@type": "MedicalProcedure",
            "name": service,
            "procedureType": "https://schema.org/CosmeticProcedure"
          }))
        })}
      </script>
    </Helmet>
  );
};

export default ClinicSchema;
