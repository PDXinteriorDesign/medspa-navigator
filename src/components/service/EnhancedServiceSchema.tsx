
import React from "react";
import { Helmet } from "react-helmet";

interface EnhancedServiceSchemaProps {
  serviceName: string;
  description: string;
  keywords?: string[];
  cityName?: string;
}

const EnhancedServiceSchema = ({ 
  serviceName, 
  description,
  keywords = [],
  cityName = "NYC"
}: EnhancedServiceSchemaProps) => {
  // Generate title with keywords
  const title = `${serviceName} in ${cityName} | Best ${cityName} ${serviceName} Providers | MedSpasNYC`;
  
  // Generate meta description with keywords
  const metaDescription = `Find the best ${serviceName} providers in ${cityName}. Compare prices, read reviews, and book ${cityName} ${serviceName} treatments at top medical spas. Discover premium ${serviceName.toLowerCase()} clinics near you.`;
  
  // Generate keyword string
  const keywordString = [
    `${serviceName} ${cityName}`,
    `Best ${serviceName} in ${cityName}`,
    `${serviceName} medical spa ${cityName}`,
    `${serviceName} clinic near me`,
    `Luxury ${serviceName} ${cityName}`,
    `${serviceName} treatment Manhattan`,
    `${serviceName} Brooklyn`,
    `${serviceName} Upper East Side`,
    `${serviceName} SoHo`,
    `${serviceName} specialist ${cityName}`,
    ...keywords
  ].join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywordString} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://medspasnyc.com/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content="https://medspasnyc.com/og-image.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://medspasnyc.com/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content="https://medspasnyc.com/og-image.png" />
      
      {/* Schema.org markup as Product type which is Google-approved for reviews */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": `${serviceName} in ${cityName}`,
          "description": description,
          "category": "Medical Spa Services",
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "brand": {
            "@type": "Brand",
            "name": "MedSpasNYC"
          },
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.9",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "MedSpasNYC Review Team"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default EnhancedServiceSchema;
