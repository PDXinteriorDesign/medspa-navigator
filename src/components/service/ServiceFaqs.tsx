
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "@/utils/serviceTypes";
import { Helmet } from "react-helmet";

interface ServiceFaqsProps {
  serviceName: string;
  faqs: FAQ[];
}

const ServiceFaqs = ({ serviceName, faqs }: ServiceFaqsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <Helmet>
        {/* Add FAQ Schema Markup for this specific service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <h2 className="text-xl font-medium mb-4">Frequently Asked Questions About {serviceName}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ServiceFaqs;
