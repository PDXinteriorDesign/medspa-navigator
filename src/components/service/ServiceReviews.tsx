
import React from "react";
import { StarIcon } from "lucide-react";
import { Review } from "@/utils/serviceContent";
import { Helmet } from "react-helmet";

interface ServiceReviewsProps {
  serviceName: string;
  reviews: Review[];
}

const ServiceReviews = ({ serviceName, reviews }: ServiceReviewsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
      <Helmet>
        {/* Product ReviewCollection schema that complies with Google guidelines */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": `${serviceName} Service`,
            "review": reviews.map(review => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating,
                "bestRating": 5
              },
              "author": {
                "@type": "Person",
                "name": review.author
              },
              "datePublished": review.date,
              "reviewBody": review.text
            }))
          })}
        </script>
      </Helmet>

      <h3 className="text-lg font-medium mb-4">{serviceName} Reviews in NYC</h3>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {Array(5).fill(0).map((_, i) => (
                  <StarIcon key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="ml-2 text-xs text-gray-500">{review.date}</span>
            </div>
            <p className="text-sm text-gray-700">{review.text}</p>
            <p className="text-xs text-gray-500 mt-1">- {review.author}, {review.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceReviews;
